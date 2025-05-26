"use client";

import { useRouter } from "next/navigation";

import Button from "./ui/Button";

export default function AboutUsIdea() {
  const router = useRouter();

  return (
      <div className="w-full gap-3 flex flex-col items-center py-24 text-blue3">
        <div className="text-5xl  font-instrument-sans">Have a project or idea in mind? </div>
        <div className="text-5xl font-semibold font-instrument-sans">
          Let’s build it together
        </div>
        <div className="flex items-center h-14 mt-3">
          <Button className="font-bold w-[550px] " onClick={() => router.push("/")}>
            Get in Touch
          </Button>
        </div>
      </div>
  );
}
