import Image from "next/image";
import AboutUsHeroBannerBackground from "../../public/images/ABOUT-hero.jpg";

export default function AboutUsHeroBanner() {
  return (
    <section className="relative w-full min-h-[calc(100dvh-80px)] flex flex-col items-center">
      <div className="absolute bg-gradient-to-b from-blue3/20 z-10 inset-0"></div>
      <Image
        className="absolute -z-10 w-full h-full object-cover object-center"
        src={AboutUsHeroBannerBackground}
        alt="About Us hero background"
      />
      <div className="absolute -z-10 w-full h-full" />
      <div className="flex flex-col gap-5 py-10 px-10 w-full max-w-[320px] justify-center min-h-full md:px-28 xl:px-56 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mt-50">
        <h1 className="font-instrument-sans font-bold text-yellow2 text-4xl md:text-7xl">
          About Us
        </h1>
        <p className="font-instrument-sans  text-justify text-sm md:text-xl lg:max-w-[500px]">
          SYSDEV develops tech solutions for SAMAHAN and the AdDU community&#44;
          driven by student collaboration and innovation&#46;
        </p>
      </div>
    </section>
  );
}
