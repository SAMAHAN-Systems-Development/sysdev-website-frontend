import { cva, type VariantProps } from "class-variance-authority";
import { inter, instrument_sans } from "@/styles/font";
import Image from "next/image";
import React from 'react';

const cardVariants = cva(
  "flex flex-col items-center p-6 rounded-3xl",
  {
    variants: {
      backgroundColor: {
        blue3: "bg-blue3", // members
        transparent: "bg-transparent", // for officers, idk a better aproach T_T

        
      },
    },
    defaultVariants: {
      backgroundColor: "blue3",
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
      positionColor: "fullstack",
    },
  }
);

export interface MemberCardProps extends VariantProps<typeof cardVariants>, VariantProps<typeof positionVariants> {
  name: string;
  email: string;
  position: string;
  position2: string; // optional, can be empty, followed lang from figma :3
  position3: string;
  position4: string;
  imageUrl?: string;
}
export function MemberCard({
  name,
  email,
  position,
  position2,
  position3,
  position4,
  imageUrl = '/placeholder-profile.png',
  backgroundColor,
  positionColor,
}: MemberCardProps) {

  const isOfficer = positionColor === 'officer';
  const cardBg = isOfficer && backgroundColor === undefined ? 'transparent' : backgroundColor;
  const nameTextColor = isOfficer ? 'text-black' : 'text-white'; // changes name text color to black for officers

  return (
     <div className={`${cardVariants({ backgroundColor: cardBg })} w-70 h-102`}>
      <div className="relative w-52 h-52 rounded-full overflow-hidden bg-gray-300 mb-6">
        <Image
          src={imageUrl}
          alt={`${name}'s profile`}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <h3 className={`${instrument_sans.className} text-xl font-bold ${nameTextColor} mb-2`}>
        {name}
      </h3>
      
      <p className={`${inter.className} text-sm ${isOfficer ? 'text-gray-800' : 'text-gray-300'} mb-4`}>
        {email}
      </p>
      
      <div className="w-full">
        <div className={`${instrument_sans.className} ${positionVariants({ positionColor })}`}>
          {position}
        </div>
      </div>
      
      {/* additional positions */}
      {position2 && (
        <div className="w-full mt-3">
          <div className={`${instrument_sans.className} ${positionVariants({ positionColor })}`}>
            {position2}
          </div>
        </div>
      )}
      
      {position3 && (
        <div className="w-full mt-3">
          <div className={`${instrument_sans.className} ${positionVariants({ positionColor })}`}>
            {position3}
          </div>
        </div>
      )}
      
      {position4 && (
        <div className="w-full mt-3">
          <div className={`${instrument_sans.className} ${positionVariants({ positionColor })}`}>
            {position4}
          </div>
        </div>
      )}
    </div>
  );
}