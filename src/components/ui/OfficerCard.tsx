import { instrument_sans } from "@/styles/font";
import Image from "next/image";
import React from "react";
import type { Member } from "@/lib/features/members/types/members";

export interface OfficerCardProps {
  member: Member;
}
export function OfficerCard({
  member,
}: OfficerCardProps) {
  const {
    name,
    email,
    roles,
    photo,
  } = member;

  const officerRoles = [
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
  ];

  const getResponsiveText = (text: string) => {
    switch (text) {
      case "External Affairs Head":
        return (
          <span>
            <span className="inline md:hidden">Ext. Affairs Head</span>
            <span className="hidden md:inline">External Affairs Head</span>
          </span>
        );
      case "Front-End Head":
        return (
          <span>
            <span className="inline md:hidden">Front-End Head</span>
            <span className="hidden md:inline">Front-End Head</span>
          </span>
        );
      case "Back-End Head":
        return (
          <span>
            <span className="inline md:hidden">Back-End Head</span>
            <span className="hidden md:inline">Back-End Head</span>
          </span>
        );
      case "Full-Stack Head":
        return (
          <span>
            <span className="inline md:hidden">Full-Stack Head</span>
            <span className="hidden md:inline">Full-Stack Head</span>
          </span>
        );
      case "Secretary-General":
        return (
          <span>
            <span className="inline md:hidden">Secretary-General</span>
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

  let photoSrc: string;

    const isFile = (value: unknown): value is File =>
    typeof File !== "undefined" && value instanceof File;

  if (typeof photo === "string") {
    photoSrc = photo;
  } else if (isFile(photo)) {
    photoSrc = URL.createObjectURL(photo);
  } else {
    photoSrc = "/placeholder-profile.png";
  }

  // Find first matching officer role
  const primaryOfficerRole = roles.find(role => officerRoles.includes(role));

  return (
    <div className={`
    flex  items-center rounded-3xl  
    flex-col
      w-[150px] sm:w-[180px] md:w-[250px] 
      h-fit
      flex-shrink-0 
      p-3 sm:p-4 md:p-5`}>

      <div className="relative 
        w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40
        rounded-full overflow-hidden bg-gray-300 
        mb-1
        mx-auto
        flex-shrink-0">
        <Image
          src={photoSrc}
          alt={`${name}'s profile`}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="flex flex-col justify-center w-full min-w-0">
        <div className="flex flex-col justify-center items-center">
          <h3 className={`${instrument_sans.className} 
            text-[14px] sm:text-[15px] md:text-[17px]
            font-bold text-black
            mb-0
            text-center w-full
            line-clamp-2 overflow-hidden text-ellipsis`}>  
            {name}
          </h3>
        </div>

        <p className={`${instrument_sans.className} 
          text-[10px] sm:text-xs md:text-sm
          text-black opacity-80
          mb-1 md:mb-2
          text-center w-full
          truncate`}>
          {email}
        </p>

        {primaryOfficerRole && (
          <div className="flex justify-center w-full">
            <div className={`
              ${instrument_sans.className} 
              rounded-full font-medium bg-blue3 text-yellow3
              min-w-[110px] sm:min-w-[130px] md:min-w-[160px]
              mx-auto
              text-[10px] sm:text-[11px] md:text-[13px]
              py-1 px-2 sm:px-3 md:px-4
              whitespace-nowrap
              text-center
            `}>
              {getResponsiveText(primaryOfficerRole)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
