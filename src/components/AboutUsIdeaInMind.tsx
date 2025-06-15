"use client";
import Link from "next/link";
import Button from "./ui/Button";

export default function AboutUsIdea() {

  return (
      <div className="w-full lg:gap-3 flex flex-col items-center py-9 md:py-16 lg:py-20 text-blue3 text-lg md:text-3xl lg:text-4xl font-instrument-sans">
        <div className="font-semibold md:font-normal">Have a project or idea in mind? </div>
        <div className="font-bold md:font-semibold">
          Let’s build it together
        </div>
        <div className="flex items-center h-14 mt-2 md:mt-3.5">
          <Button className="font-bold w-64 md:w-80 lg:w-md ">
            <Link href={"/contact-us"}>
              Get in Touch
            </Link>
          </Button>
        </div>
      </div>
  );
}
