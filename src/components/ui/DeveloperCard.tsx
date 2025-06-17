import { instrument_sans } from "@/styles/font";
import Image from "next/image";
import React from "react";

export interface DeveloperCardProps {
  photoUrl: string;
  name: string;
  role: string;
}
export function DeveloperCard({
  photoUrl,
  name,
  role
}: DeveloperCardProps) {


  const getResponsiveText = (text: string) => {
    switch (text) {
      case "External Affairs Head":
        return (
          <span>
            <span className="inline md:hidden">Ext. Affairs Head</span>
            <span className="hidden md:inline">External Affairs Head</span>
          </span>
        );
      default:
        return text;
    }
  };
  
  return (
    <div className={`
    flex  items-center rounded-3xl  
    flex-col
      w-[200px] md:w-[250px] 
      h-fit
      flex-shrink-0 
      p-3 sm:p-4 md:p-5`}>

      <div className="relative 
        w-40 h-40
        rounded-full overflow-hidden bg-gray-300 
        mb-3
        mx-auto
        flex-shrink-0">
        <Image
          src={photoUrl}
          alt={`${name}'s profile`}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="flex flex-col justify-center w-full min-w-0">
        <div className="flex flex-col justify-center items-center">
          <h3 className={`${instrument_sans.className} 
            text-base md:text-[17px]
            font-bold text-black
            mb-2
            text-center w-full
            line-clamp-2 overflow-hidden text-ellipsis
            flex items-center justify-center`}>  
            {name}
          </h3>
        </div>

          <div className="flex justify-center w-full">
            <div className={`
              ${instrument_sans.className} 
              rounded-full font-medium bg-blue3 text-yellow3
              min-w-[160px]
              mx-auto
              text-xs md:text-[13px]
              py-1 px-2 sm:px-3 md:px-4
              whitespace-nowrap
              text-center
            `}>
              {getResponsiveText(role)}
            </div>
          </div>

      </div>
    </div>
  );
}
