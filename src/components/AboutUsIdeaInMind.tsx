"use client";

import { useRouter } from "next/navigation";

import Button from "./ui/Button";

export default function AboutUsIdea() {
  const router = useRouter();

  return (
      <div className="w-full lg:gap-3 flex flex-col items-center py-24 text-blue3 text-lg md:text-3xl lg:text-4xl font-instrument-sans">
        <div className="font-semibold md:font-normal">Have a project or idea in mind? </div>
        <div className="font-bold md:font-semibold">
          Let’s build it together
        </div>
        <div className="flex items-center h-14 mt-2 md:mt-3.5">
          <Button className="font-bold w-64 md:w-80 lg:w-md " onClick={() => router.push("/")}>
            Get in Touch
          </Button>
        </div>
      </div>
  );
}
