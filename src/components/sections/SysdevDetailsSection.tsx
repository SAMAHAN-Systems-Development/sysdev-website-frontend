import React from 'react'
import Image from 'next/image'
import Button from '../ui/Button'

const departmentIcons = [
  { src: "/images/department-icons/FrontEndLogo.svg", alt: "FrontEnd" },
  { src: "/images/department-icons/BackEndLogo.svg", alt: "BackEnd" },
  { src: "/images/department-icons/DevOpsLogo.svg", alt: "DevOps" },
  { src: "/images/department-icons/UIUXLogo.svg", alt: "UIUX" },
  { src: "/images/department-icons/ProjectManagerLogo.svg", alt: "Project Manager" },
  { src: "/images/department-icons/GraphicDesignerLogo.svg", alt: "Graphics Designer" },
  { src: "/images/department-icons/CoreLogo.svg", alt: "Core" },
  { src: "/images/department-icons/FullstackLogo.svg", alt: "Fullstack" },
  { src: "/images/department-icons/QALogo.svg", alt: "QA" },
];

function SysdevDetailsSection() {
  return (
    <div className='flex flex-col items-center justify-center w-full gap-y-13 text-black mt-15 md:mt-18 md:mb-14'>
        <div className='w-7/9 lg:w-4/5'>
            <div className='flex flex-col items-center'>
        <div className="relative h-24 w-56 md:h-32 md:w-72 lg:h-36 lg:w-80 overflow-hidden"> 
          <Image src={"/images/SysDevMascot_cropped.png"} alt={"SysDev Mascot"} fill className="object-cover" />
        </div>
        <div className='h-3.5 lg:h-5 w-full bg-yellow2'></div>
      </div>
      <div className='w-full flex flex-col items-center text-sm md:text-base lg:text-lg mt-8'>
        <div className='text-justify leading-snug mb-5'>
          This division is responsible for creating digital technologies and software to increase SAMAHAN&apos;s efficiency through technology. A committed group called SAMAHAN Systems Development creates and produces digital technology and software to improve Samahan&apos;s productivity. We want to utilize technology for a favorable effect on the community. 
        </div>
        <div className='text-justify leading-snug mb-8'>
          Joining our team entails putting your skills to use and obtaining real-world experience. IT abilities in practical settings. We invite you to join us in building systems that are advantageous to all. us on this adventure. Get to know the welcoming and helpful SYSDEV team, who are excited to assist you in developing your abilities and laying the groundwork for your future profession. 
        </div>
        <div className='flex justify-center gap-0.5 mb-8'>
          {departmentIcons.map((icon) => (
            <div key={icon.alt} className="relative h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 overflow-hidden">
              <Image src={icon.src} alt={icon.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className='text-justify font-bold leading-snug'>
          Together, let&apos;s create, code, and go on an exciting journey in software development! Founded in 2021, SYSDEV operates under SAMAHAN to create tools that simplify campus life. SAMAHAN Systems Development is in-charge of designing and developing software and digital systems.
        </div>
        <div className='flex items-center justify-center h-13 w-full mt-8 md:mt-12 lg:mt-16'>
          <Button variant={"green"} size={"big"} className='w-full font-bold'>Download Primer</Button>
        </div>
      </div>
        </div>
      
    </div>
  )
}

export default SysdevDetailsSection