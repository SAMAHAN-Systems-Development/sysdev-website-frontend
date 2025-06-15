'use client';

import Link from "next/link";
import { GetMembers } from '@/lib/features/members/service/GetMembers.api';
import { Member } from "@/lib/features/members/types/members";
import Button from "../ui/Button";
import { OfficerCard } from "../ui/OfficerCard";
import { useEffect, useMemo, useState } from "react";

export default function AboutUsMeetTheTeamSection() {
  const [members, setMembers] = useState<Member[]>([]);
  const [officers, setOfficers] = useState<Member[]>([]);

  useEffect(() => {
  async function fetchData() {
    const res = await GetMembers();
    if (Array.isArray(res)) {
        setMembers(res.flat());
        console.log("Members fetched:", res.flat());
      }
    }
    fetchData();
}, []);

  const officerRoles = useMemo(
  () => [
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
  ],
  []
);

    useEffect(() => {
    const filteredOfficers = members.filter(member =>
      member.roles.some(role => officerRoles.includes(role))
    );
    setOfficers(filteredOfficers);
  }, [members, officerRoles]);


  return (
    <section id="Officers" className="font-inter w-full flex flex-col items-center px-7 pt-7 pb-4 md:p-14 xl:p-24 mt-10">
      <div className="flex flex-col items-center text-blue3 text-center gap-2.5">
        <h1 className="font-bold text-3xl md:text-4xl">Meet the Team</h1>
        <p className="text-sm md:text-xl">
          The minds behind SYSDEV &#8212; building solution for a better AdDU.
        </p>
      </div>
      <div className="flex flex-col items-center mt-14 md:mt-20 gap-y-4">
        <h2 className="text-2xl text-black font-bold">Officers</h2>
        <ul className="grid grid-cols-2 justify-items-center md:gap-x-10 xl:gap-x-6 gap-y-4 md:grid-cols-2 xl:grid-cols-4">
          {officers.map((member, idx) => {
            if (member.roles.includes(officerRoles[0])) {
              return (
                <li key={idx} className="order-1 col-span-2 xl:col-span-4">
                  <OfficerCard
                    member={{ ...member }}
                  />
                </li>
              );
            } else if (member.roles.includes(officerRoles[1])) {
              return (
                <li key={idx} className="order-2 col-span-2 xl:col-span-4">
                  <OfficerCard
                    member={{ ...member }}
                  />
                </li>
              );
            } else if (member.roles.includes(officerRoles[2])) {
              return (
                <li key={idx} className="order-3">
                  <OfficerCard
                    member={{ ...member }}
                  />
                </li>
              );
            } else if (member.roles.includes(officerRoles[3])) {
              return (
                <li key={idx} className="order-4">
                  <OfficerCard
                    member={{ ...member }}
                  />
                </li>
              );
            } else if (member.roles.includes(officerRoles[4])) {
              return (
                <li key={idx} className="order-5">
                  <OfficerCard
                    member={{ ...member }}
                  />
                </li>
              );
            } else if (member.roles.includes(officerRoles[5])) {
              return (
                <li key={idx} className="order-6">
                  <OfficerCard
                    member={{ ...member }}
                  />
                </li>
              );
            } else if (member.roles.includes(officerRoles[6])) {
              return (
                <li key={idx} className="order-7">
                  <OfficerCard
                    member={{ ...member }}
                  />
                </li>
              );
            } else if (member.roles.includes(officerRoles[7])) {
              return (
                <li key={idx} className="order-8">
                  <OfficerCard
                    member={{ ...member }}
                  />
                </li>
              );
            } else if (member.roles.includes(officerRoles[8])) {
              return (
                <li key={idx} className="order-9">
                  <OfficerCard
                    member={{ ...member }}
                  />
                </li>
              );
            } else if (member.roles.includes(officerRoles[9])) {
              return (
                <li key={idx} className="order-10">
                  <OfficerCard
                    member={{ ...member }}
                  />
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className="mt-14 lg:mt-20 flex h-13 w-full items-center justify-center">
        <Link
          className="w-full max-w-[230px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
          href="/members?department=Full-Stack"
        >
          <Button className="w-full font-bold" variant={"pink"} size={"big"}>
            Meet the Team
          </Button>
        </Link>
      </div>
    </section>
  );
}



