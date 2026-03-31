import { withBasePath } from "@/lib/utils";
import Image from "next/image";

const ServiceHeroBanner = () => {
  return (
    <section>
      <div className=" w-full h-min overflow-hidden">
        {/* Placeholder for blue gradient bg */}

        <div className=" flex flex-col justify-between text-center">
          <div className="relative flex-1 flex flex-col items-center justify-center px-4 p-8  md:py-12 lg:py-16 xl:py-20 bg-blue3">
            <div className="absolute bg-gradient-to-b from-black/50 z-10 inset-0"></div>
            <div className="z-10">
              <h1 className="font-instrument-sans font-bold text-2xl  md:text-4xl lg:text-6xl xl:text-7xl  leading-tight">
                Services
              </h1>
              <p className=" mt-1 md:mt-3 lg:mt-4 text-sm md:text-xl lg:text-2xl max-w-[220px] md:max-w-md lg:max-w-lg xl:max-w-3xl leading-relaxed">
                See how{" "}
                <span className="font-instrument-sans text-yellow4 underline">
                  SYSDEV
                </span>{" "}
                empowers the community through technology.
              </p>
            </div>
          </div>

          <div className="flex justify-center text-center pt-2">
            <div className="relative w-[500px] h-[150px] md:w-[800px] md:h-[350px] lg:w-[1050px] lg:h-[450px] xl:w-[1200px] xl:h-[600px]">
              <Image
                src={withBasePath("/images/SysDevMascot_cropped.png")}
                alt="SysDev Mascot"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroBanner;
