"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";

const ProjectsHeroBanner = () => {
  const navigator = useRouter();
  return (
    <section className="">
      <div className="relative w-full min-w-[100vw] min-h-[100vh]">
        <Image
          src="/images/AboutUsHeroBannerBackground.png"
          alt="Banner"
          fill
          className="object-cover"
        ></Image>
        <div className="absolute inset-0 bg-black/30 flex justify-center items-center">
          <div className="flex flex-col gap-12 items-center">
            <h1 className="text-[60px] font-bold">Projects</h1>
            <p className="text-[32px] text-center">
              Works throughout the years done by SYSDEV with<br></br>{" "}
              collaboration, teamwork and hardwork.
            </p>
            <Button className="mt-6" onClick={() => navigator.push("/")}>
              Let&apos;s{" "}
              <i>
                <strong>Collaborate</strong>
              </i>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHeroBanner;
