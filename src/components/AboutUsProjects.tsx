import Image from "next/image";
import Button from "./ui/Button";
import AboutUsProjectsBackground from "../../public/images/AboutUsProjectsBackground.png";
import Link from "next/link";

export default function AboutUsProjects() {
  return (
    <section className="relative flex flex-col items-center w-full">
      <Image
        className="absolute -z-10 w-full h-full object-cover object-center"
        src={AboutUsProjectsBackground}
        alt="About us projects background"
      />
      <div className="absolute w-full h-full -z-10 bg-blue3/70" />
      <div className="text-white flex flex-col gap-3 items-center w-full py-20 md:py-28 px-4 max-w-[320px] md:max-w-[690px] lg:max-w-[1024px]">
        <h1 className="text-4xl font-bold font-instrument-sans md:text-5xl">Projects</h1>
        <p className="text-xs text-center font-instrument-sans md:text-lg">
          A curated collection of works built with modern tools, focused on performance and
          usability.
        </p>
        <div className="flex items-center justify-center w-full h-14 mt-5 max-w-3xs md:max-w-md">
          <Link className="w-full" href="/projects">
            <Button
              variant={"green"}
              size={"big"}
              className="font-inter font-bold w-full text-xs md:text-xl"
            >
              See more
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
