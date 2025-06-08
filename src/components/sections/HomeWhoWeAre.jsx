"use client";
import React from "react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const HomeWhoWeAre = () => {
  const router = useRouter();
  return (
    <section className="min-h-[80vh]  flex items-center justify-center overflow-hidden">
      <div className="flex flex-col justify-center items-center p-6 md:p-8 lg:p-12 gap-6 md:gap-12 max-w-[1200px]">
        <h5 className="text-black text-2xl md:text-4xl lg:text-5xl font-bold italic">
          Who we are
        </h5>
        <p className="text-black text-sm md:text-xl lg:text-3xl font-bold text-center">
          SYSDEV develops tech solutions for SAMAHAN and the AdDU
          <br className="hidden lg:block"></br> community, driven by student
          collaboration and innovation.
        </p>
        <div className="flex gap-12 lg:gap-24">
          <div className="flex flex-col gap-1 md:gap-4 items-center">
            <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-[#0E2558]">
              Mission
            </h1>
            <p className="text-[#040E24]  text-xs md:text-xl lg:text-2xl text-justify">
              We develop modern digital systems that create accessible spaces
              for students, fostering engagement, connectivity, and convenience
              throughout the academic year.
            </p>
          </div>
          <div className="flex flex-col gap-1 md:gap-4 items-center">
            <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-[#0E2558]">
              Vision
            </h1>
            <p className="text-[#040E24] text-xs md:text-xl lg:text-2xl text-justify">
              To be the leading provider of innovative digital solutions that
              empower students and enhance their university experience.
            </p>
          </div>
        </div>
        <Button
          variant="green"
          size="big"
          className="w-60 lg:w-100 font-bold mt-4 md:mt-12"
          onClick={() => router.push("/about-us")}
        >
          Read Full Story
        </Button>
      </div>
    </section>
  );
};

export default HomeWhoWeAre;
