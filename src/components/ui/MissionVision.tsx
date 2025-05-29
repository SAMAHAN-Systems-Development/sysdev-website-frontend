"use client"
import Image from "next/image";

export default function MissionVision() {
  const mission =  "/images/SysDevLogo.png";
  const vision = "/images/favicon-32x32.png";

    return (
    <section className="w-full py-16 bg-white mt-14">
      <div className="container mx-auto max-w-7xl px-48">
        {/* mission section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
          <div className="md:w-1/2 flex justify-left">
            <div className="relative w-[400px] h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={mission}
                alt="SysDev Mission"
                fill
                sizes="400px"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
          
          <div className="md:w-1/2 max-w-md">
            <h2 className="font-instrument-sans text-5xl font-bold text-blue3 mb-4 text-center md:text-center">
              Mission
            </h2>
            <p className="font-instrument-sans text-[20px] text-black leading-snug text-justify">
              We develop modern digital systems that create accessible spaces for 
              students, fostering engagement, connectivity, and convenience 
              throughout the academic year.
            </p>
          </div>
        </div>
        
        {/* vision section */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8">
          <div className="md:w-1/2 flex justify-start">
            <div className="relative w-[400px] h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={vision}
                alt="SysDev Vision"
                fill
                sizes="400px"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
          
          <div className="md:w-1/2 max-w-md">
            <h2 className="font-instrument-sans text-5xl font-bold text-blue3 mb-4 text-center md:text-center">
              Vision
            </h2>
            <p className="font-instrument-sans text-lg text-black leading-snug text-justify">
              To be the leading provider of innovative digital solutions that 
              empower students and enhance their university experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}