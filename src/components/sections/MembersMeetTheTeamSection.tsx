"use client";
import { RawMember } from "@/lib/features/members/types/members";
import { MemberCard } from "../ui/MemberCard";
import MembersFilter from "../ui/MembersFilter";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { GetMembers } from "@/lib/features/members/service/GetMembers.api";
import { departmentCards, DepartmentCard } from "../ui/DepartmentCard";

export interface MembersMeetTheTeamSectionProps {
  currentDepartment: string;
  setCurrentDepartment: React.Dispatch<React.SetStateAction<string>>;
}

export const MembersMeetTheTeamSection: React.FC<
  MembersMeetTheTeamSectionProps
> = ({ currentDepartment, setCurrentDepartment }) => {
  const router = useRouter();
  const [members, setMembers] = React.useState<RawMember[]>([]);

  // const officerRoles = [
  //   "Director",
  //   "Deputy Director",
  //   "Secretary General",
  //   "Treasurer",
  //   "Auditor",
  //   "External Affairs Head",
  //   "Frontend Head",
  //   "Backend Head",
  //   "UI/UX Head",
  //   "Creatives Head",
  //   "Public Relations Officer",
  // ];

  function extractMembers(res: unknown): RawMember[] {
    if (
      res &&
      typeof res === "object" &&
      "data" in res &&
      Array.isArray((res as { data?: unknown }).data)
    ) {
      return (res as { data: RawMember[] }).data;
    }
    if (Array.isArray(res)) {
      return res as RawMember[];
    }
    return [];
  }

  useEffect(() => {
    window.history.replaceState(
      null,
      "",
      `/members?department=${encodeURIComponent(currentDepartment)}`,
    );
  }, [currentDepartment]);

  useEffect(() => {
    async function fetchData() {
      let res;
      switch (currentDepartment) {
        case "Full-Stack":
          res = await GetMembers(2);
          break;
        case "Front-End":
          res = await GetMembers(5);
          break;
        case "Back-End":
          res = await GetMembers(7);
          break;
        case "QA":
          res = await GetMembers(9);
          break;
        case "DevOps":
          res = await GetMembers(1);
          break;
        case "Project Manager":
          res = await GetMembers(4);
          break;
        case "UI/UX":
          res = await GetMembers(3);
          break;
        case "Creatives":
          res = await GetMembers(6);
          break;
        default:
          res = await GetMembers();
      }

      const membersArray: RawMember[] = extractMembers(res);

      // ✅ Filter out officers
      // const filteredMembers = membersArray.filter(
      //   (member) =>
      //     !member.roles.some((r) => officerRoles.includes(r.roles.name)),
      // );

      setMembers(membersArray);
    }

    fetchData();
  }, [currentDepartment]);

  useEffect(() => {
    router.push(`/members?department=${encodeURIComponent(currentDepartment)}`);
  }, [currentDepartment, router]);

  return (
    <section className=" font-inter w-full flex flex-col items-center pb-4 sm:pb-7">
      <div className="relative flex flex-col items-center text-whtie text-center gap-2.5 w-full pt-20 pb-16 bg-blue3">
        <div className="absolute bg-gradient-to-b from-black/50 z-10 inset-0"></div>
        <div className="z-10">
          <h1 className="font-bold text-3xl sm:text-4xl">Members</h1>
          <p className="text-sm md:text-lg mt-1 mb-2 text-yellow4">
            (A.Y. &apos;25 - &apos;26)
          </p>
          <p className="text-base sm:text-lg">
            The minds behind SYSDEV &#8212; building solution for a better AdDU.
          </p>
        </div>
      </div>

      <div className="mt-10 w-full">
        <MembersFilter
          currentDepartment={currentDepartment}
          setCurrentDepartment={setCurrentDepartment}
        />
      </div>

      {/* Department Card */}
      {departmentCards[currentDepartment as keyof typeof departmentCards] && (
        <DepartmentCard
          {...departmentCards[
            currentDepartment as keyof typeof departmentCards
          ]}
        />
      )}

      <div className="flex flex-col items-center mt-12 sm:mt-16 gap-y-3 sm:gap-y-9 lg:gap-y-10 w-full sm:w-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 sm:gap-10 w-full max-w-6xl">
          {members.map((member, idx) => (
            <li key={idx} className="flex justify-center">
              <MemberCard member={member} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
