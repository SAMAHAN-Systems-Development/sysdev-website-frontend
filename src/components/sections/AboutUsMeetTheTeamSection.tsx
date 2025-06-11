import Link from "next/link";

import members from "@/data/members.json";
import { Member } from "@/lib/features/members/types/members";
import Button from "../ui/Button";
import { OfficerCard } from "../ui/OfficerCard";

export default function AboutUsMeetTheTeamSection() {
  const membersData = members as Member[];

  return (
    <section id="Officers" className="font-inter mx-auto flex w-full max-w-[320px] flex-col items-center px-4 py-20 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px]">
      <div className="text-blue3 flex flex-col items-center gap-2.5 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">Meet the Team</h1>
        <p className="text-xs md:text-xl max-w-[260px] sm:max-w-none ">
          The minds behind SYSDEV &#8212; building solution for a better AdDU.
        </p>
      </div>
      <div className="mt-10 flex flex-col items-center gap-y-4">
        <h2 className="text-2xl font-bold text-black">Officers</h2>
        <ul className="grid grid-cols-2 justify-items-center xl:grid-cols-4 gap-y-5 [@media(min-width:360px)]:gap-x-6 [@media(min-width:400px)]:gap-x-12">
          {membersData.map((member, idx) => {
            if (member.roles[0]?.toLowerCase() === "director") {
              return (
                <li key={idx} className="order-1 col-span-2 xl:col-span-4">
                  <OfficerCard member={{ ...member }} />
                </li>
              );
            } else if (member.roles[0]?.toLowerCase() === "deputy director") {
              return (
                <li key={idx} className="order-2 col-span-2 xl:col-span-4">
                  <OfficerCard member={{ ...member }} />
                </li>
              );
            } else if (member.roles[0]?.toLowerCase() === "front-end head") {
              return (
                <li key={idx} className="order-3">
                  <OfficerCard member={{ ...member }} />
                </li>
              );
            } else if (member.roles[0]?.toLowerCase() === "back-end head") {
              return (
                <li key={idx} className="order-4">
                  <OfficerCard member={{ ...member }} />
                </li>
              );
            } else if (member.roles[0]?.toLowerCase() === "ui/ux head") {
              return (
                <li key={idx} className="order-5">
                  <OfficerCard member={{ ...member }} />
                </li>
              );
            } else if (member.roles[0]?.toLowerCase() === "creatives head") {
              return (
                <li key={idx} className="order-6">
                  <OfficerCard member={{ ...member }} />
                </li>
              );
            } else if (member.roles[0]?.toLowerCase() === "secretary-general") {
              return (
                <li key={idx} className="order-7">
                  <OfficerCard member={{ ...member }} />
                </li>
              );
            } else if (member.roles[0]?.toLowerCase() === "treasurer") {
              return (
                <li key={idx} className="order-8">
                  <OfficerCard member={{ ...member }} />
                </li>
              );
            } else if (member.roles[0]?.toLowerCase() === "auditor") {
              return (
                <li key={idx} className="order-9">
                  <OfficerCard member={{ ...member }} />
                </li>
              );
            } else if (
              member.roles[0]?.toLowerCase() === "external affairs head"
            ) {
              return (
                <li key={idx} className="order-10">
                  <OfficerCard member={{ ...member }} />
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className="mt-14 lg:mt-20 flex h-13 w-full items-center justify-center">
        <Link
          className="w-full max-w-[230px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
          href="/"
        >
          <Button className="w-full font-bold" variant={"pink"} size={"big"}>
            Meet the Team
          </Button>
        </Link>
      </div>
    </section>
  );
}
