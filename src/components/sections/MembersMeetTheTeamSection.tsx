"use client"
import members from "@/data/members.json";
import { Member } from "@/lib/types/members";
import { MemberCard } from "../ui/MemberCard";
import MembersFilter from "../ui/MembersFilter";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

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
  // Your TeamSection component remains the same
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
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // create a state from the URL parameter 
  const [currentDepartment, setCurrentDepartment] = useState<string>(
    searchParams.get("department") || "All"
  );
  
  const membersData = members as Member[];
  
  useEffect(() => {
    const deptFromURL = searchParams.get("department");
    if (deptFromURL !== currentDepartment && deptFromURL !== null) {
      setCurrentDepartment(deptFromURL);
    }
  }, [searchParams, currentDepartment]);

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
  // ... rest of the teams
];
  
  useEffect(() => {
    const handleFilterButtonClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' && target.textContent) {
        const filterText = target.textContent.trim();
        let newDepartment = "All";

        if (filterText === "Project Manager") {
          newDepartment = "Proj. Man.";
        } else if (departments.includes(filterText)) {
          newDepartment = filterText;
        } else if (filterText === "All") {
          newDepartment = "All";
        }
        
        // Update state
        setCurrentDepartment(newDepartment);
        
        // Update URL
        if (newDepartment === "All") {
          router.push('/members');
        } else {
          router.push(`/members?department=${encodeURIComponent(newDepartment)}`);
        }
      }
    };

    document.addEventListener('click', handleFilterButtonClick);
    
    // Don't reset filter on mount to respect URL params
    // Remove: setActiveFilter("All"); 
    
    return () => {
      document.removeEventListener('click', handleFilterButtonClick);
    };
  }, [router]);

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
  .filter(team => (
    currentDepartment === "All" || 
    currentDepartment.toLowerCase() === team.id.toLowerCase()
  ))
  .filter(team => team.members.length > 0)
  .map(team => (
    <TeamSection 
      key={team.id}
      title={team.title}
      head={team.head}
      members={team.members}
    />
  ))
}
    </section> 
  );
}