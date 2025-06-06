"use client"
import members from "@/data/members.json";
import { Member } from "@/lib/types/members";
import { MemberCard } from "../ui/MemberCard";
import MembersFilter from "../ui/MembersFilter";
import React, { useState, useEffect } from "react";

// helper component for team sections
const TeamSection = ({ 
  title, 
  head, 
  members 
}: { 
  title: string; 
  head?: Member; 
  members: Member[];
}) => (
  <div className="flex flex-col items-center mt-8 sm:mt-16 gap-y-4 sm:gap-y-8">
  <h2 className="text-xl sm:text-2xl text-blue3 font-bold text-center">{title}</h2>
  {head && (
    <div className="mb-4 sm:mb-8 flex justify-center w-full max-w-xs mx-auto">
      <MemberCard member={head} />
    </div>
  )}
    <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-full max-w-6xl">
  {members.map((member, idx) => (
    <li key={idx} className="flex justify-center">
      <MemberCard member={member} />
    </li>
  ))}
</ul>
  </div>
);

export default function MembersMeetTheTeamSection() {
  const membersData = members as Member[];
  const [activeFilter, setActiveFilter] = useState<string>("All");
  
  // team data structure
  const teams = [
  {
    id: "Full-Stack",
    title: "Full-Stack",
    head: membersData.find(member => member.position === "Full-Stack Head"),
    members: membersData.filter(member => 
      member.position === "Full-Stack" || 
      member.position2 === "Full-Stack"
    )
  },
  {
    id: "Front-End",
    title: "Front-End",
    head: membersData.find(member => member.position === "Front-End Head"),
    members: membersData.filter(member => 
      member.position === "Front-End" || 
      member.position2 === "Front-End"
    )
  },
  {
    id: "Back-End",
    title: "Back-End",
    head: membersData.find(member => member.position === "Back-End Head"),
    members: membersData.filter(member => 
      member.position === "Back-End" || 
      member.position2 === "Back-End"
    )
  },
  {
    id: "UI/UX",
    title: "UI/UX",
    head: membersData.find(member => member.position === "UI/UX Head"),
    members: membersData.filter(member => 
      member.position === "UI/UX" || 
      member.position2 === "UI/UX"
    )
  },
  {
    id: "Creatives",
    title: "Creatives",
    head: membersData.find(member => member.position === "Creatives Head"),
    members: membersData.filter(member => 
      member.position === "Creatives" || 
      member.position2 === "Creatives"
    )
  },
    {
      id: "Proj. Man.",
      title: "Project Managers",
      members: membersData.filter(member => 
        member.position === "Proj. Man." || 
        member.position2 === "Proj. Man."
      )
    },
    {
      id: "DevOps",
      title: "DevOps",
      members: membersData.filter(member => 
        member.position === "DevOps" || 
        member.position2 === "DevOps"
      )
    },
    {
      id: "QA",
      title: "QA",
      members: membersData.filter(member => 
        member.position === "QA" || 
        member.position2 === "QA"
      )
    }
  ];
  
  useEffect(() => {
    const handleFilterButtonClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' && target.textContent) {
        const filterText = target.textContent.trim();

        if (filterText === "Project Manager") {
          setActiveFilter("Proj. Man.");
        } else if (departments.includes(filterText)) {
          setActiveFilter(filterText);
        } else if (filterText === "All") {
          setActiveFilter("All");
        }
      }
    };

    document.addEventListener('click', handleFilterButtonClick);
    setActiveFilter("All"); 
    
    return () => {
      document.removeEventListener('click', handleFilterButtonClick);
    };
  }, []);

  const departments = [
    'All',
    'Full-Stack',
    'Front-End',
    'Back-End',
    'QA',
    'DevOps',
    'Project Manager', 
    'UI/UX',
    'Creatives',
  ];

  return (
    <section className="font-inter w-full flex flex-col items-center px-4 sm:px-7 pt-4 sm:pt-7 pb-4 sm:pb-4 md:p-14 xl:p-24 mt-5 sm:mt-10">
      <div className="flex flex-col items-center text-blue3 text-center gap-2.5">
        <h1 className="font-bold text-4xl">Meet the Team</h1>
        <p className="text-xl">
          The minds behind SYSDEV &#8212; building solution for a better AdDU.
        </p>
      </div>

      <div className="mt-10 w-full max-w-2xl">
        <MembersFilter />
      </div>

      {teams
        .filter(team => (activeFilter === "All" || activeFilter === team.id))
        .filter(team => team.members.length > 0)
        .map(team => (
          <TeamSection 
            key={team.id}
            title={team.title}
            head={team.head}
            members={team.members}
          />
        ))}
    </section> 
  );
}