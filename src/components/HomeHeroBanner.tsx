import Image from "next/image";
import AboutUsHeroBannerBackground from "../../public/images/AboutUsHeroBannerBackground.png";
import SysDevMascot from "../../public/images/SysDevMascot_cropped.png";
import Link from "next/link";

export default function HomeHeroBanner() {
  return (
    <section className="relative w-full min-h-dvh flex flex-col items-center justify-center">
      <Image
        className="absolute -z-10 w-full h-full object-cover object-center"
        src={AboutUsHeroBannerBackground}
        alt="Home hero background"
      />
      <div className="absolute -z-10 w-full h-full bg-blue3/70" />
      <div className="w-full max-w-[320px] flex flex-col items-center justify-center p-8 text-center font-inter text-white gap-2.5 grow md:max-w-[768px] lg:max-w-[1024px] lg:gap-7 md:mt-20 lg:mt-40">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          SAMAHAN <span className="text-yellow2 text-4xl lg:text-5xl">Systems and Development</span>
        </h1>
        <p className="text-sm md:text-2xl md:px-20 lg:px-32">
          The official Systems Development Department of the Samahan Website.
        </p>
        <div className="mt-10 flex items-center justify-center h-9 w-full md:w-[320px] md:h-11">
          <Link
            className="text-white outline-2 outline-white rounded-full w-full py-2 text-xs transition-all duration-100 hover:py-2.5 md:text-base active:bg-white active:text-black"
            href="/about-us"
          >
            Learn More
          </Link>
        </div>
      </div>
      <Image
        className="w-full h-auto max-w-[320px] px-8 md:max-w-[640px] lg:max-w-[800px]"
        src={SysDevMascot}
        alt="SysDev Mascot"
      />
    </section>
  );
}
