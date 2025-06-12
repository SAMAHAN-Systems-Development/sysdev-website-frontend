"use client"
import { Member } from "@/lib/features/members/types/members";
import { MemberCard } from "../ui/MemberCard";
import MembersFilter from "../ui/MembersFilter";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { GetMembers } from '@/lib/features/members/service/GetMembers.api';

// // helper component for team sections
// const TeamSection = ({ 
//   members 
// }: { 
//   members: Member[];
// }) => (
//   // Your TeamSection component remains the same
//   <div className="flex flex-col items-center mt-8 sm:mt-16 gap-y-3 sm:gap-y-6 md:gap-y-9 lg:gap-y-10">
//     <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-6 md:gap-9 lg:gap-10 w-full max-w-6xl">
//       {members.map((member, idx) => (
//         <li key={idx} className="flex justify-center">
//           <MemberCard member={member} />
//         </li>
//       ))}
//     </ul>
//   </div>
// );

export interface MembersMeetTheTeamSectionProps {
  currentDepartment: string;
  setCurrentDepartment: React.Dispatch<React.SetStateAction<string>>;
}

export const MembersMeetTheTeamSection: React.FC<MembersMeetTheTeamSectionProps> = ({
  currentDepartment,
  setCurrentDepartment,
}) => {
  const router = useRouter();
  const [members, setMembers] = React.useState<Member[]>([]);

  useEffect(() => {
    async function fetchData() {
      let res;
      switch (currentDepartment) {
        case "Full-Stack":
          res = await GetMembers(18);
          break;
        case "Front-End":
          res = await GetMembers(19);
          break;
        case "Back-End":
          res = await GetMembers(20);
          break;
        case "QA":
          res = await GetMembers(21);
          break;
        case "DevOps":
          res = await GetMembers(22);
          break;
        case "Project Manager":
          res = await GetMembers(23);
          break;
        case "UI/UX":
          res = await GetMembers(24);
          break;
        case "Creatives":
          res = await GetMembers(25);
          break;
        default:
          res = await GetMembers();
      }
      if (Array.isArray(res)) {
        setMembers(res.flat());
        console.log("Members fetched:", res.flat());
      }
    }
    fetchData();
  }, [currentDepartment]);

  const officerRoles = [
    "Director",
    "Deputy Director",
    "Secretary-General",
    "Treasurer",
    "Auditor",
    "External Affairs Head",
    "Front-End Head",
    "Back-End Head",
    "UI/UX Head",
    "Creatives Head"
  ];
  
  useEffect(() => {
    router.push(`/members?department=${encodeURIComponent(currentDepartment)}`);
  }, [currentDepartment, router]);

  return (
    <section className="font-inter w-full flex flex-col items-center px-4 sm:px-7 pt-4 sm:pt-7 pb-4 sm:pb-4 md:p-14 xl:p-24 mt-5 sm:mt-10">
      <div className="flex flex-col items-center text-black text-center gap-2.5">
        <h1 className="font-bold text-3xl sm:text-4xl">Meet the Team</h1>
        <p className="text-base sm:text-xl">
          The minds behind SYSDEV &#8212; building solution for a better AdDU.
        </p>
      </div>

      <div className="mt-10 w-full">
        <MembersFilter 
          currentDepartment={currentDepartment}
          setCurrentDepartment={setCurrentDepartment}
        />
      </div>

      <div className="flex flex-col items-center mt-8 sm:mt-16 gap-y-3 sm:gap-y-6 md:gap-y-9 lg:gap-y-10 w-full md:w-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-6 md:gap-9 lg:gap-10 w-full max-w-6xl">
          {members
            .filter(member => !member.roles.some(role => officerRoles.includes(role)))
            .map((member, idx) => (
              <li key={idx} className="flex justify-center"> {/* center the card in the grid cell */}
                <MemberCard member={member} />
              </li>
          ))}
        </ul>
      </div>
    </section> 
  );
}