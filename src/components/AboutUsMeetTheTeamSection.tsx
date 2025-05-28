import Link from "next/link";
import Button from "./ui/Button";
import { MemberCard } from "./ui/MemberCard";
import members from "@/data/members.json";

export default function AboutUsMeetTheTeamSection() {
  return (
    <section className="font-inter w-full flex flex-col items-center p-7 md:p-14 xl:p-24">
      <div className="flex flex-col items-center text-blue3 text-center gap-2.5">
        <h1 className="font-bold text-4xl">Meet the Team</h1>
        <p className="text-xl">
          The minds behind SYSDEV &#8212; building solution for a better AdDU.
        </p>
      </div>
      <div className="flex flex-col items-center mt-20 gap-y-4">
        <h2 className="text-2xl text-black font-bold">Officers</h2>
        <ul className="grid grid-cols-1 justify-items-center gap-x-10 md:grid-cols-2 xl:grid-cols-4">
          {members.map((member, idx) => (
            <li
              key={idx}
              className="md:first:col-span-2 md:nth-[2]:col-span-2 xl:first:col-span-4 xl:nth-[2]:col-span-4"
            >
              <MemberCard
                backgroundColor="transparent"
                positionColor="officer"
                member={{
                  name: member.name,
                  email: member.email,
                  position: member.position,
                  imageUrl: member.imageUrl,
                }}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="w-fit flex items-center justify-center h-13 mt-28">
        <Link href="/">
          <Button variant={"pink"} className="font-bold w-96">
            Meet the Team
          </Button>
        </Link>
      </div>
    </section>
  );
}
