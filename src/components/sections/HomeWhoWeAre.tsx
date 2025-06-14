"use client";
import React from "react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const HomeWhoWeAre = () => {
  const router = useRouter();
  return (
    <section className="flex items-center justify-center overflow-hidden my-9 md:my-14">
      <div className="flex flex-col justify-center items-center p-6 md:p-10 lg:p-12 max-w-lg md:max-w-3xl lg:max-w-[1000px]">
        <h5 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold italic mb-3 md:mb-5 lg:mb-8">
          Who we are
        </h5>
        <p className="text-black text-sm md:text-lg lg:text-xl font-bold text-center italic mb-6 md:mb-13 lg:mb-17">
          SYSDEV develops tech solutions for SAMAHAN and the AdDU
          <br className="hidden lg:block"></br> community, driven by student
          collaboration and innovation.
        </p>
        <div className="grid grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          <div className="flex flex-col gap-1 md:gap-4 items-center">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#0E2558]">
              Mission
            </h1>
            <p className="text-[#040E24]  text-xs md:text-base lg:text-lg text-justify ">
              We develop modern digital systems that create accessible spaces
              for students, fostering engagement, connectivity, and convenience
              throughout the academic year.
            </p>
          </div>
          <div className="flex flex-col gap-1 md:gap-4 items-center">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#0E2558]">
              Vision
            </h1>
            <p className="text-[#040E24] text-xs md:text-base lg:text-lg text-justify">
              To be the leading provider of innovative digital solutions that
              empower students and enhance their university experience.
            </p>
          </div>
        </div>
        <div className="h-17 flex flex-col items-center justify-center mt-7 md:mt-12 lg:mt-15">
          <Button
            variant="green"
            size="big"
            className="w-60 md:w-80 lg:w-100 font-bold "
            onClick={() => router.push("/about-us")}
          >
            Read Full Story
          </Button>
        </div>
        
      </div>
    </section>
  );
};

export default HomeWhoWeAre;
