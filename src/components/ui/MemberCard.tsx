import { cva } from "class-variance-authority";
import { instrument_sans } from "@/styles/font";
import Image from "next/image";
import React from "react";
import type { Member } from "@/lib/types/members";

const positionVariants = cva(
   "py-1 px-5 rounded-full text-[10px] md:text-sm font-medium w-full text-center",
  {
    variants: {
      positionColor: {
        frontend: "bg-blue4 text-white",
        backend: "bg-pink1 text-black",
        fullstack: "bg-yellow1 text-black",
        devops: "bg-orange text-black",
        uiux: "bg-blue1 text-black",
        creatives: "bg-green2 text-black",
        alumni: "bg-maroon text-white",
        projmngr: "bg-purple text-white",
        qa: "bg-white text-black",
      },
    },
    defaultVariants: {
      positionColor: "frontend",
    },
  }
);

export interface MemberCardProps {
  member: Member;
  positionColor: 
    | "frontend"
    | "backend"
    | "fullstack"
    | "devops"
    | "uiux"
    | "creatives"
    | "alumni"
    | "projmngr"
    | "qa"
}

export function MemberCard({
  member,
  positionColor,
}: MemberCardProps) {
  const {
    name,
    email,
    position,
    position2,
    position3,
    position4,
    imageUrl = "/placeholder-profile.png",
  } = member;

  const nameTextColor = "text-white";

  const positions = [
    { text: position, color: positionColor },
    ...(position2 ? [{ text: position2, color: getPositionColor(position2) }] : []),
    ...(position3 ? [{ text: position3, color: getPositionColor(position3) }] : []),
    ...(position4 ? [{ text: position4, color: getPositionColor(position4) }] : []),
  ];

// only replace "Proj. Man." with "PM" when on mobile
  const getResponsiveText = (text: string) => {
  switch(text) {
    case "Proj. Man.":
      return (
        <span>
          <span className="inline md:hidden">PM</span>
          <span className="hidden md:inline">Proj. Man.</span>
        </span>
      );
      return text;
  }
};

  const renderPositions = () => {
  if (positions.length === 3) {
    // for exactly 3 positions: first position on top, other two in a row below
    return (
      <>
        <div className="w-full mb-3">
          <div className={`
            ${instrument_sans.className} 
            ${positionVariants({ positionColor: positions[0].color })}
          `}>
            {getResponsiveText(positions[0].text)}
          </div>
        </div>
        <div className="w-full flex gap-2">
          {positions.slice(1).map((pos, idx) => (
            <div key={idx} className="flex-1">
              <div className={`
                ${instrument_sans.className} 
                ${positionVariants({ positionColor: pos.color })}
              `}>
                {getResponsiveText(pos.text)}
              </div>
            </div>
          ))}
        </div>
      </>
    );
    // for 1-4 positions, display in rows of 2
  } else {
    const rows = [];
    for (let i = 0; i < positions.length; i += 2) {
      rows.push(positions.slice(i, Math.min(i + 2, positions.length)));
    }
    
    return rows.map((row, rowIndex) => (
      <div key={rowIndex} className={`w-full flex gap-2 ${rowIndex > 0 ? "mt-3" : ""}`}>
        {row.map((pos, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`flex-1 ${row.length === 1 ? "min-w-[120px] mx-auto" : ""}`}
          >
            <div className={`
              ${instrument_sans.className} 
              ${positionVariants({ positionColor: pos.color })}
            `}>
              {getResponsiveText(pos.text)}
            </div>
          </div>
        ))}
      </div>
    ));
  }
};
  return (
<div className={`flex items-center rounded-3xl md:rounded-2xl bg-blue3
  flex-row md:flex-col
  w-[250px] sm:w-[348px] md:w-48 
  h-[150px] sm:h-[200px] md:h-[285px]
  flex-shrink-0 
  p-4 sm:px-6 md:p-5`}>
    
  <div className="relative 
    w-20 h-20 sm:w-26 sm:h-26 md:w-32 md:h-32 
    rounded-full overflow-hidden bg-gray-300 
    mb-0 md:mb-3
    ml-0 mr-3 sm:mr-4 md:mx-auto
    flex-shrink-0">
    <Image
      src={imageUrl}
      alt={`${name}'s profile`}
      fill
      style={{ objectFit: "cover" }}
    />
  </div>

  <div className="flex flex-col justify-between w-full min-w-0 h-4/5">
    <div className="">
      <div className="md:h-[44px] md:flex md:flex-col md:justify-center">
      <h3 className={`${instrument_sans.className} 
      text-xs sm:text-base md:text-sm 
      font-bold ${nameTextColor} 
      mb-1.5 sm:mb-2 md:mb-0 
      text-left md:text-center 
      line-clamp-2 overflow-hidden text-ellipsis`}>  
      {name}
      </h3>
      </div>

      <p className={`${instrument_sans.className} 
        text-xs 
        ${nameTextColor} opacity-80
        mb-3 md:mb-4 
        text-left md:text-center 
        truncate`}>
        {email}
      </p>
    </div>
    
    
    <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-2 w-full">
      {renderPositions()}
    </div>
  </div>
</div>
);
}
// Helper to map position to positionColor variant
function getPositionColor(position: string): MemberCardProps["positionColor"] {
  switch (position) {
    case "Front-End":
      return "frontend";
    case "Back-End":
      return "backend";
    case "Full-Stack":
      return "fullstack";
    case "DevOps":
      return "devops";
    case "UI/UX": 
      return "uiux";
    case "Creatives":
      return "creatives";
    case "Alumni":
      return "alumni";
    case "Proj. Man.":
      return "projmngr";
    case "QA":
      return "qa";
    default:
      return "frontend";
  }
}

// // Helper to map position to card background variant
// function getCardBackground(position: string): MemberCardProps["backgroundColor"] {
//   switch (position) {
//     case "Full-Stack":
//     case "Front-End":
//     case "Back-End":
//     case "QA":
//     case "DevOps":
//     case "UI/UX":
//     case "Creatives":
//     case "Alumni":
//     case "Project Manager":
//       return "blue3";
//     default:
//       return "blue3";
//   }
// }

// // MemberCardList component
// export function MemberCardList() {
//   // Type assertion to ensure membersData is Member[]
//   const members = membersData as Member[];

//   return (
//     <div className="flex 
//       flex-col md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap 
//       justify-center 
//       gap-4 md:gap-6 lg:gap-8 
//        
//       max-w-screen-2xl mx-auto">
//       {members.map((member, idx) => (
//         <MemberCard
//           key={idx}
//           member={member}
//           backgroundColor={getCardBackground(member.position)}
//           positionColor={getPositionColor(member.position)}
//         />
//       ))}
//     </div>
//   );
// }
