"use client"
import members from "@/data/members.json";
import { Member } from "@/lib/features/members/types/members";
import { MemberCard } from "../ui/MemberCard";
import MembersFilter from "../ui/MembersFilter";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

// helper component for team sections
const TeamSection = ({ 
  head, 
  members 
}: { 
  head?: Member; 
  members: Member[];
}) => (
  // Your TeamSection component remains the same
  <div className="flex flex-col items-center mt-8 sm:mt-16 gap-y-3 sm:gap-y-6 md:gap-y-9 lg:gap-y-10">
    {head && (
      <div className="flex justify-center w-full max-w-xs mx-auto">
        <MemberCard member={head} />
      </div>
    )}
    <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-6 md:gap-9 lg:gap-10 w-full max-w-6xl">
      {members.map((member, idx) => (
        <li key={idx} className="flex justify-center">
          <MemberCard member={member} />
        </li>
      ))}
    </ul>
  </div>
);

export interface MembersMeetTheTeamSectionProps {
  currentDepartment: string;
  setCurrentDepartment: React.Dispatch<React.SetStateAction<string>>;
}

export const MembersMeetTheTeamSection: React.FC<MembersMeetTheTeamSectionProps> = ({
  currentDepartment,
  setCurrentDepartment,
}) => {
  const router = useRouter();
  
  const membersData = members as Member[];


  const memberHasPosition = (member: Member, position: string): boolean => {
    return member.roles.includes(position);
  };

  const findHead = (headPosition: string): Member | undefined => {
    return membersData.find(member => memberHasPosition(member, headPosition));
  };

  const filterMembersByPosition = (position: string): Member[] => {
    return membersData.filter(member => memberHasPosition(member, position));
  };

  // team data structure remains the same
  const teams = [
  {
    id: "Full-Stack",
    title: "Full-Stack",
    head: findHead("Full-Stack Head"),
    members: filterMembersByPosition("Full-Stack")
  },
  {
    id: "Front-End",
    title: "Front-End",
    head: findHead("Front-End Head"),
    members: filterMembersByPosition("Front-End")
  },
  {
    id: "Back-End",
    title: "Back-End",
    head: findHead("Back-End Head"),
    members: filterMembersByPosition("Back-End")
  },
  {
    id: "UI/UX",
    title: "UI/UX",
    head: findHead("UI/UX Head"),
    // Update these filters to handle variations
    members: membersData.filter(member => 
      member.roles.some(role => 
        role.toLowerCase().includes('ui') || 
        role.toLowerCase().includes('ux')
      )
    )
  },
  {
    id: "Creatives",
    title: "Creatives",
    head: findHead("Creatives Head"),
    // Update these filters to handle variations
    members: membersData.filter(member => 
      member.roles.some(role => 
        role.toLowerCase().includes('creative')
      )
    )
  },
  {
      id: "Project Manager",
      title: "Project Managers",
      members: filterMembersByPosition("Project Manager")
    },
    {
      id: "DevOps",
      title: "DevOps",
      members: filterMembersByPosition("DevOps")
    },
    {
      id: "QA",
      title: "QA",
      members: filterMembersByPosition("QA")
    }
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

      {(() => {
        const filteredTeams = teams
          .filter(team => currentDepartment.toLowerCase() === team.id.toLowerCase());

        // If no team matches or the only matching team has no members
        if (
          filteredTeams.length === 0 ||
          filteredTeams.every(team => team.members.length === 0)
        ) {
          return (
            <div className="w-full text-center text-blue3 py-15 font-bold">
              No members found for this department.
            </div>
          );
        }

        // Otherwise, render the teams with members
        return filteredTeams
          .filter(team => team.members.length > 0)
          .map(team => (
            <TeamSection
              key={team.id}
              head={team.head}
              members={team.members}
            />
          ));
      })()}
    </section> 
  );
}