"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const ProjectsHeroBanner = () => {
  return (
    <section>
      <div className="relative w-[100vw] h-[100vh] -mt-4">
        <Image
          src="/images/AboutUsHeroBannerBackground.png"
          alt="Banner"
          fill
          className="object-cover"
        ></Image>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E2558]/100 to-[#0E255838] flex justify-center items-center">
          <div className="flex flex-col items-center mb-24">
            <h1 className="text-[#FFDF36] text-[40px] lg:text-[50px] font-bold">
              Projects
            </h1>
            <p className="text-[17px] md:text-[20px] leading-tight lg:text-[24px] text-center mt-7 mx-10 font-normal max-w-md md:max-w-lg">
              Works throughout the years done by SYSDEV with collaboration, teamwork and hardwork.
            </p>
            <div className="mt-10 md:mt-20 flex items-center h-17">
              <Button size={"big"}>
                <Link href={"/contact-us"}>
                  <p className="px-6 lg:px-8">
                  Let&apos;s{" "}
                  <i>
                    <strong>Collaborate</strong>
                  </i>
                </p>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHeroBanner;

