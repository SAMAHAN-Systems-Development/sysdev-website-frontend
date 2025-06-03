"use client"
import Image from "next/image";

export default function MissionVision() {
  const mission =  "/images/AboutUsProjectsBackground.png";
  const vision = "/images/AboutUsProjectsBackground.png";

   const Card = ({ 
    image, 
    title, 
    text, 
<<<<<<< HEAD

=======
>>>>>>> e804dd91ef84a65bcdc610c422be9840fe21c5ca
  }: { 
    image: string; 
    title: string; 
    text: string; 
<<<<<<< HEAD

=======
>>>>>>> e804dd91ef84a65bcdc610c422be9840fe21c5ca
  }) => (
   <div className="flex flex-col items-center mb-8">
      <div className="w-[250px] sm:w-[300px] overflow-hidden">
        <div className="relative w-full h-[170px] sm:h-[190px] rounded-t-[20px] overflow-hidden">
          <Image
            src={image}
            alt={`SysDev ${title}`}
            fill
            sizes="280px"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
       
       <div className="py-2 px-5 bg-yellow2 rounded-b-[20px] h-[180px] sm:h-[200px] flex flex-col justify-center">
        <p className="font-instrument-sans text-3xl font-bold text-blue3 mt-[-20px] mb-2 sm:mb-4 text-center ">
          {title}
        </p>
        <p className="font-instrument-sans text-xs sm:text-sm text-blue3 leading-snug text-justify">
          {text}
        </p>
      </div>
      </div>
    </div>
  );

  // desktop version (hidden on mobile)
  const DesktopLayout = () => (
    <div className="hidden md:flex justify-center">
      <div className="grid grid-cols-2  gap-8 lg:gap-12 mb-16 w-full px-5 max-w-4xl lg:max-w-5xl">
        <div className="flex justify-center items-center">
          <div className="relative w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] rounded-[20px] overflow-hidden">
            <Image src={mission} alt="SysDev Mission" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[350px] lg:w-[400px]">
            <h2 className="font-instrument-sans text-4xl lg:text-5xl font-bold text-blue3 mb-5 text-center w-full">Mission</h2>
            <p className="font-instrument-sans text-lg lg:text-xl text-blue3 leading-snug text-justify w-full">
              We develop modern digital systems that create accessible spaces for students, fostering engagement, connectivity, and convenience throughout the academic year.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[350px] lg:w-[400px]">
            <h2 className="font-instrument-sans text-4xl lg:text-5xl font-bold text-blue3 mb-5 text-center w-full">Vision</h2>
            <p className="font-instrument-sans text-lg lg:text-xl text-blue3 leading-snug text-justify w-full">
              To be the leading provider of innovative digital solutions that empower students and enhance their university experience.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] rounded-[20px] overflow-hidden">
            <Image src={mission} alt="SysDev Mission" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
        
        
      </div>
      
      
      
    </div>
  );

  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        {/* mbile-only view */}
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
        
        {/* desktop view */}
        <DesktopLayout />
      </div>
    </section>
  );
}
