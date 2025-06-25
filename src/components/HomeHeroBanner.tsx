import Image from "next/image";
import HomeHeroBannerBackground from "../../public/images/HOME-hero.jpg";
import SysDevMascot from "../../public/images/SysDevMascot_cropped.png";
import Link from "next/link";

export default function HomeHeroBanner() {
  return (
    <section className="relative w-full min-h-[calc(100dvh-80px)] flex flex-col items-center justify-center">
      <Image
        className="absolute -z-10 w-full h-full object-cover object-center"
        src={HomeHeroBannerBackground}
        alt="Home hero background"
      />
      <div className="absolute -z-10 w-full h-full" />
      <div className="w-full max-w-[320px] flex flex-col items-center justify-center p-8 text-center font-inter text-white gap-2.5 grow md:max-w-[768px] lg:max-w-[1024px] lg:gap-7 md:mt-20 lg:mt-8">
        <h1 className="text-3xl font-[800] md:text-4xl lg:text-5xl">
          SAMAHAN <span className="text-yellow2">Systems and Development</span>
        </h1>
        <p className="text-sm md:text-xl md:px-20 lg:px-32 max-w-3xl">
          The official Systems Development Department of the Samahan Website.
        </p>
        <div className="mt-9 lg:mt-14 flex items-center justify-center h-9 w-full md:w-[320px] md:h-11">
          <Link
            className="text-white outline-2 outline-white rounded-full w-full py-2 text-xs transition-all duration-200 hover:py-2.5 md:hover:py-3 md:text-base active:bg-white active:text-black"
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
