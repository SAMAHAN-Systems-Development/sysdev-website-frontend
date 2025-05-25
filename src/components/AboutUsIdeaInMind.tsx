"use client";

import { useRouter } from "next/navigation";

import Button from "./ui/Button";

export default function AboutUsProjects() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
      <div className="w-full gap-3 flex flex-col items-center py-24 text-blue3">
        <div className="text-6xl  font-instrument-sans">Have a project or idea in mind? </div>
        <div className="text-6xl font-semibold font-instrument-sans">
          Let’s build it together
        </div>
        <div className="flex items-center h-14 mt-5">
          <Button className="font-bold w-[700px] " onClick={handleClick}>
            Get in Touch
          </Button>
        </div>
      </div>
  );
}
