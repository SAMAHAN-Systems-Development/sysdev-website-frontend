"use client"
import Image from "next/image";

export default function MissionVision() {
  const mission =  "/images/AboutUsProjectsBackground.png";
  const vision = "/images/AboutUsProjectsBackground.png";

   const Card = ({ 
    image, 
    title, 
    text, 

  }: { 
    image: string; 
    title: string; 
    text: string; 

  }) => (
   <div className="flex flex-col items-center mb-8">
      {/* Fixed-width container for consistent mobile cards */}
      <div className="w-[280px] overflow-hidden">
        {/* Image container with fixed height */}
        <div className="relative w-full h-[180px] rounded-t-3xl overflow-hidden">
          <Image
            src={image}
            alt={`SysDev ${title}`}
            fill
            sizes="280px"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        {/* Text content with fixed height to ensure equal card heights */}
       <div className="p-4 bg-yellow2 rounded-b-3xl h-[190px] flex flex-col justify-center">
        <h2 className="font-instrument-sans text-2xl font-bold text-[32px] text-blue3 mt-[-20px] mb-2 text-center pt-1">
          {title}
        </h2>
        <p className="font-instrument-sans text-[12px] text-blue3 leading-snug text-justify">
          {text}
        </p>
      </div>
      </div>
    </div>
  );

  // Desktop version (hidden on mobile)
  const DesktopLayout = () => (
    <div className="hidden md:block">
      <div className="flex items-center justify-center gap-8 lg:gap-12 mb-16">
        <div className="w-1/2 flex justify-center">
          <div className="relative w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] rounded-3xl overflow-hidden">
            <Image src={mission} alt="SysDev Mission" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
        <div className="w-1/2 max-w-md py-2">
          <h2 className="font-instrument-sans text-4xl lg:text-5xl font-bold text-blue3 mb-5 text-center">Mission</h2>
          <p className="font-instrument-sans text-lg lg:text-xl text-blue3 leading-snug text-justify">
            We develop modern digital systems that create accessible spaces for students, fostering engagement, connectivity, and convenience throughout the academic year.
          </p>
        </div>
      </div>
      
      <div className="flex flex-row-reverse items-center justify-center gap-8 lg:gap-12">
        <div className="w-1/2 flex justify-center">
          <div className="relative w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] rounded-3xl overflow-hidden">
            <Image src={vision} alt="SysDev Vision" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
        <div className="w-1/2 max-w-md py-2">
          <h2 className="font-instrument-sans text-4xl lg:text-5xl font-bold text-blue3 mb-5 text-center">Vision</h2>
          <p className="font-instrument-sans text-lg lg:text-xl text-blue3 leading-snug text-justify">
            To be the leading provider of innovative digital solutions that empower students and enhance their university experience.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        {/* Mobile-only view */}
        <div className="md:hidden space-y-8">
          <Card 
            image={mission}
            title="Mission"
            text="We develop modern digital systems that create accessible spaces for students, fostering engagement, connectivity, and convenience throughout the academic year."
          />
          
          <Card 
            image={vision}
            title="Vision"
            text="To be the leading provider of innovative digital solutions that empower students and enhance their university experience."
          />
        </div>
        
        {/* Desktop view */}
        <DesktopLayout />
      </div>
    </section>
  );
}