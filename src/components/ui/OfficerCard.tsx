import { cva } from "class-variance-authority";
import { instrument_sans } from "@/styles/font";
import Image from "next/image";
import React from "react";
import type { Member } from "@/lib/types/members";
import membersData from "@/data/members.json";

const cardVariants = cva(
  "flex flex-col items-center p-6 rounded-3xl",
  {
    variants: {
      backgroundColor: {
        blue3: "bg-blue3",
        transparent: "bg-transparent",
      },
    },
    defaultVariants: {
      backgroundColor: "transparent",
    },
  }
);

const positionVariants = cva(
  "py-1 px-5 rounded-full text-[10px] md:text-sm font-medium w-full text-center",
  {
    variants: {
      positionColor: {
        officer: "bg-blue3 text-yellow3", 
      },
    },
    defaultVariants: {
      positionColor: "officer",
    },
  }
);

export interface OfficerCardProps {
  member: Member;
  backgroundColor?: "blue3" | "transparent";
}
export function OfficerCard({
  member,
  backgroundColor = "transparent",
}: OfficerCardProps) {
  const {
    name,
    email,
    position,
    imageUrl = "/placeholder-profile.png",
  } = member;

  const getResponsiveText = (text: string) => {
  switch(text) {
    case "External Affairs Head":
      return (
        <span>
          <span className="inline md:hidden">Ext. Affairs</span>
          <span className="hidden md:inline">External Affairs Head</span>
        </span>
      );
      case "Front-End Head":
      return (
        <span>
          <span className="inline md:hidden">FE Head</span>
          <span className="hidden md:inline">Front-End Head</span>
        </span>
      );
        case "Back-End Head":
      return (
        <span>
          <span className="inline md:hidden">BE Head</span>
          <span className="hidden md:inline">Back-End Head</span>
        </span>
      );
      case "Full-Stack Head":
      return (
        <span>
          <span className="inline md:hidden">FS Head</span>
          <span className="hidden md:inline">Full-Stack Head</span>
        </span>
      );
      case "Secretary-General":
      return (
        <span>
          <span className="inline md:hidden">Sec-Gen</span>
          <span className="hidden md:inline">Secretary-General</span>
        </span>
      );
    case "UI/UX Head":
    case "Creatives Head":
      return text;
    default:
      return text;
  }
};
  const nameTextColor = "text-black";

  return (
    <div className={`${cardVariants({ backgroundColor })} 
      flex-col
      w-full max-w-[150px] sm:max-w-[180px] md:max-w-[250px] 
      h-auto min-h-[220px] sm:min-h-[260px] md:min-h-[350px]
      flex-shrink-0 
      p-3 sm:p-4 md:p-5`}>
      
      <div className="relative 
        w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40
        rounded-full overflow-hidden bg-gray-300 
        mb-3 sm:mb-4 md:mb-5
        mx-auto
        flex-shrink-0">
        <Image
          src={imageUrl}
          alt={`${name}'s profile`}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

     <div className="flex flex-col justify-center w-full min-w-0">
 
  <div className="h-[48px] sm:h-[48px] md:h-[56px] flex flex-col justify-center items-center">
    <h3 className={`${instrument_sans.className} 
      text-[14px] sm:text-[15px] md:text-[17px]
      font-bold ${nameTextColor} 
      mb-0
      text-center w-full
      line-clamp-2 overflow-hidden text-ellipsis`}>  
      {name}
    </h3>
  </div>

  
  <p className={`${instrument_sans.className} 
    text-[10px] sm:text-xs md:text-sm
    text-black opacity-80
    mb-2 sm:mb-3
    text-center w-full
    truncate`}>
    {email}
  </p>
  

  <div className="flex justify-center w-full">
  <div className={`
    ${instrument_sans.className} 
    ${positionVariants({ positionColor: "officer" })}
    min-w-[110px] sm:min-w-[130px] md:min-w-[140px]
    mx-auto
    text-[8px] sm:text-[9px] md:text-xs
    py-1 px-2 sm:px-3 md:px-4
    whitespace-nowrap
    text-center
  `}>
    {getResponsiveText(position)}
  </div>
</div>
</div>
    </div>
  );
}
// officerCardList component
export function OfficerCardList() {
  const officers = (membersData as Member[]).filter(member => 
    member.position === "Treasurer" ||
    member.position === "Director" ||
    member.position === "Deputy Director" ||
    member.position === "Secretary-General" ||
    member.position === "Auditor" ||
    member.position === "External Affairs Head" ||
    member.position === "Front-End Head" ||
    member.position === "Back-End Head" ||
    member.position === "UI/UX Head" ||
    member.position === "Creatives Head"
  );

  const director = officers.find(member => member.position === "Director");

  const otherOfficers = officers.filter(member => 
    member.position !== "Director" 
  );

  return (
    <div className="w-full">
      <h2 className="text-center text-2xl text-blue3 font-bold mb-8">Officers</h2>
      
      
      <div className="flex flex-col items-center gap-6 p-4 max-w-screen-2xl mx-auto">
        
        {/* director - full width on mobile */}
        {director && (
          <div className="w-full flex justify-center">
            <OfficerCard
              member={director}
              backgroundColor="transparent"
            />
          </div>
        )}
        
        {/* other officers - two per row on mobile, more on larger screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full">
          {otherOfficers.map((member, idx) => (
            <div key={idx} className="flex justify-center">
              <OfficerCard
                member={member}
                backgroundColor="transparent"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}