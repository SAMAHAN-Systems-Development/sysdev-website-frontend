'use client';

import Link from "next/link";
import { GetMembers } from '@/lib/features/members/service/GetMembers.api';
import { RawMember } from "@/lib/features/members/types/members";
import Button from "../ui/Button";
import { OfficerCard } from "../ui/OfficerCard";
import { useEffect, useMemo, useState } from "react";

export default function AboutUsMeetTheTeamSection() {
  const [members, setMembers] = useState<RawMember[]>([]);
  const [officers, setOfficers] = useState<RawMember[]>([]);

  // Officer roles in correct display order
  const officerRoles = useMemo(
    () => [
      "Director",
      "Deputy Director",
      "Secretary General",
      "Treasurer",
      "Auditor",
      "External Affairs Head",
      "Frontend Head",
      "Backend Head",
      "UI/UX Head",
      "Creatives Head",
      "Public Relations Officer"
    ],
    []
  );

  // Fetch members on mount
  useEffect(() => {
    async function fetchData() {
      const res = await GetMembers();
      if (Array.isArray(res)) {
        const membersArray = res.flat();
        setMembers(membersArray);
        //console.log("Members fetched:", membersArray);
      }
    }
    fetchData();
  }, []);

  // Filter and sort officers
  useEffect(() => {
    const filteredOfficers = members.filter((member) =>
      member.roles.some((r) => officerRoles.includes(r.roles.name))
    );

    const sortedOfficers = filteredOfficers.sort((a, b) => {
      const aIndex = officerRoles.findIndex((role) =>
        a.roles.some((r) => r.roles.name === role)
      );
      const bIndex = officerRoles.findIndex((role) =>
        b.roles.some((r) => r.roles.name === role)
      );
      return aIndex - bIndex;
    });

    setOfficers(sortedOfficers);
  }, [members, officerRoles]);

  // Determine custom grid layout
  const getOfficerClass = (index: number) => {
    // For large screens (xl), we use 4 columns
    switch (index) {
      case 0: return "col-span-2 xl:col-span-4"; // First row single item
      case 1: return "col-span-2 xl:col-span-4"; // Second row single item
      case officers.length - 1: return "col-span-2 xl:col-span-4"; // Last row single item
      default: return "col-span-1"; // All middle items take 1 column each
    }
  };

  return (
    <section
      id="Officers"
      className="font-inter w-full flex flex-col items-center px-7 pt-7 pb-4 md:p-14 xl:p-24 mt-10"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-blue3 text-center gap-2.5">
        <h1 className="font-bold text-3xl md:text-4xl">Meet the Officers</h1>
        <p className="text-sm md:text-lg -mt-2 mb-2">
          (A.Y. &apos;24 - &apos;25)
        </p>
        <p className="text-sm md:text-xl">
          The minds behind SYSDEV &#8212; building solution for a better AdDU.
        </p>
      </div>

      {/* Officers Section */}
      <div className="flex flex-col items-center mt-14 md:mt-20 gap-y-4">
        <ul className="grid grid-cols-2 xl:grid-cols-4 justify-items-center gap-y-4 md:gap-x-10 xl:gap-x-6">
          {officers.map((member, idx) => (
            <li key={member.id} className={getOfficerClass(idx)}>
              <OfficerCard member={member} />
            </li>
          ))}
        </ul>
      </div>

      {/* Meet the Team Button */}
      <div className="mt-14 lg:mt-20 flex h-13 w-full items-center justify-center">
        <Link
          className="w-full max-w-[230px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
          href="/members?department=Full-Stack"
        >
          <Button className="w-full font-bold" variant="pink" size="big">
            Meet the Team
          </Button>
        </Link>
      </div>
    </section>
  );
}
