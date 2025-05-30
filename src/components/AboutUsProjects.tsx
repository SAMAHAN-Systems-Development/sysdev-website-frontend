"use client";

import { useRouter } from "next/navigation";

import Button from "./ui/Button";

export default function AboutUsProjects() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <section className="w-full bg-[url(../../public/images/AboutUsProjectsBackground.png)] bg-cover bg-center mt-14">
      <div className="gap-3 flex flex-col items-center bg-blue3/70 py-24 text-white">
        <h1 className="text-6xl font-bold font-instrument-sans">Projects</h1>
        <p className="text-xl text-center font-instrument-sans">
          A curated collection of works built with modern tools, focused on performance and
          usability.
        </p>
        <div className="flex items-center h-14 mt-5">
          <Button variant={"green"} size={"big"} className="font-bold w-72" onClick={handleClick}>
            See more
          </Button>
        </div>
      </div>
    </section>
  );
}
