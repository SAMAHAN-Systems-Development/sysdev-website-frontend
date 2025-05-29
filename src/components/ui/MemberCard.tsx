import { cva } from "class-variance-authority";
import { inter, instrument_sans } from "@/styles/font";
import Image from "next/image";
import React from "react";
import membersData from "@/data/members.json";
import type { Member } from "@/lib/types/members";

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
  "py-1 px-5 rounded-full text-sm font-medium w-full text-center",
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
        officer: "bg-blue3 text-yellow1",
      },
    },
    defaultVariants: {
      positionColor: "officer",
    },
  }
);

export interface MemberCardProps {
  member: Member;
  backgroundColor: "blue3" | "transparent";
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
    | "officer";
}

export function MemberCard({
  member,
  backgroundColor,
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

  const nameTextColor = positionColor === "officer" ? "text-black" : "text-white";

  const positions = [
    { text: position, color: positionColor },
    ...(position2 ? [{ text: position2, color: getPositionColor(position2) }] : []),
    ...(position3 ? [{ text: position3, color: getPositionColor(position3) }] : []),
    ...(position4 ? [{ text: position4, color: getPositionColor(position4) }] : []),
  ];

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
              {positions[0].text}
            </div>
          </div>
          <div className="w-full flex gap-2">
            {positions.slice(1).map((pos, idx) => (
              <div key={idx} className="flex-1">
                <div className={`
                  ${instrument_sans.className} 
                  ${positionVariants({ positionColor: pos.color })}
                `}>
                  {pos.text}
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
            <div key={`${rowIndex}-${colIndex}`} className="flex-1">
              <div className={`
                ${instrument_sans.className} 
                ${positionVariants({ positionColor: pos.color })}
              `}>
                {pos.text}
              </div>
            </div>
          ))}
        </div>
      ));
    }
  };

  return (
    <div className={`${cardVariants({ backgroundColor })} w-72 h-104 flex-shrink-0 `}>
      <div className="relative w-52 h-52 rounded-full overflow-hidden bg-gray-300 mb-6">
        <Image
          src={imageUrl}
          alt={`${name}'s profile`}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <h3 className={`${instrument_sans.className} text-[19px] font-bold ${nameTextColor} mb-2`}>
        {name}
      </h3>

      <p className={`${inter.className} text-sm ${positionColor === "officer" ? "text-gray-800" : "text-gray-300"} mb-4`}>
        {email}
      </p>

      <div className="w-full h-17 flex flex-col justify-start">
        {renderPositions()}
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
      return "officer";
  }
}

// Helper to map position to card background variant
function getCardBackground(position: string): MemberCardProps["backgroundColor"] {
  switch (position) {
    case "Full-Stack":
    case "Front-End":
    case "Back-End":
    case "QA":
    case "DevOps":
    case "UI/UX":
    case "Creatives":
    case "Alumni":
    case "Project Manager":
      return "blue3";
    default:
      return "transparent";
  }
}

// MemberCardList component
export function MemberCardList() {
  // Type assertion to ensure membersData is Member[]
  const members = membersData as Member[];

  return (
    <div className="flex flex-wrap gap-8">
      {members.map((member, idx) => (
        <MemberCard
          key={idx}
          member={member}
          backgroundColor={getCardBackground(member.position)}
          positionColor={getPositionColor(member.position)}
        />
      ))}
    </div>
  );
}