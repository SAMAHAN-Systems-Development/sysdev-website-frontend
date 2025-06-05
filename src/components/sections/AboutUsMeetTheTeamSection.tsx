import Link from "next/link";


import members from "@/data/members.json";
import { Member } from "@/lib/features/members/types/members";
import Button from "../ui/Button";
import { OfficerCard } from "../ui/OfficerCard";

export default function AboutUsMeetTheTeamSection() {
  const membersData = members as Member[];

  return (
    <section className="font-inter w-full flex flex-col items-center px-7 pt-7 pb-4 md:p-14 xl:p-24 mt-10">
      <div className="flex flex-col items-center text-blue3 text-center gap-2.5">
        <h1 className="font-bold text-4xl">Meet the Team</h1>
        <p className="text-xl">
          The minds behind SYSDEV &#8212; building solution for a better AdDU.
        </p>
      </div>
      <div className="flex flex-col items-center mt-20 gap-y-4">
        <h2 className="text-2xl text-black font-bold">Officers</h2>
        <ul className="grid grid-cols-1 justify-items-center gap-x-10 md:grid-cols-2 xl:grid-cols-4">
          {membersData.map((member, idx) => {
            if (member.position.toLowerCase() === "director") {
              return (
                <li key={idx} className="order-1 md:col-span-2 xl:col-span-4">
                  <OfficerCard
                    member={{ ...member }}
                  />
                </li>
              );
            } else if (member.position.toLowerCase() === "deputy director") {
              return (
                <li key={idx} className="order-2 md:col-span-2 xl:col-span-4">
                  <OfficerCard
                    member={{ ...member }}
                  />
                </li>
              );
            } else if (member.position.toLowerCase() === "secretary-general") {
              return (
                <li key={idx} className="order-3">
                  <OfficerCard
                    member={{ ...member }}
                  />
                </li>
              );
            } else if (member.position.toLowerCase() === "treasurer") {
              return (
                <li key={idx} className="order-4">
                  <OfficerCard
                    member={{ ...member }}
                  />
                </li>
              );
            } else if (member.position.toLowerCase() === "auditor") {
              return (
                <li key={idx} className="order-5">
                  <OfficerCard
                    member={{ ...member }}
                  />
                </li>
              );
            } else if (member.position.toLowerCase() === "external affairs head") {
              return (
                <li key={idx} className="order-6">
                  <OfficerCard
                    member={{ ...member }}
                  />
                </li>
              );
            } else if (member.position.toLowerCase() === "front-end head") {
              return (
                <li key={idx} className="order-7">
                  <OfficerCard
                    member={{ ...member }}
                  />
                </li>
              );
            } else if (member.position.toLowerCase() === "back-end head") {
              return (
                <li key={idx} className="order-8">
                  <OfficerCard
                    member={{ ...member }}
                  />
                </li>
              );
            } else if (member.position.toLowerCase() === "ui/ux head") {
              return (
                <li key={idx} className="order-9">
                  <OfficerCard
                    member={{ ...member }}
                  />
                </li>
              );
            } else if (member.position.toLowerCase() === "creatives head") {
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
      <div className="w-fit flex items-center justify-center h-13 mt-28">
        <Link href="/">
          <Button variant={"pink"} size={"big"} className="font-bold w-[600px]">
            Meet the Team
          </Button>
        </Link>
      </div>
    </section>
  );
}
