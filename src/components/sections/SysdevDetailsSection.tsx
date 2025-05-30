import React from 'react'
import Image from 'next/image'
import Button from '../ui/Button'

function SysdevDetailsSection() {
  return (
    <div className='flex flex-col items-center justify-center w-full gap-y-13 text-black mt-15'>
        <div className='flex flex-col items-center w-full'>
            <div className="relative h-36 w-80 overflow-hidden"> 
                <Image src={"/images/SysDevMascot_cropped.png"} alt={"SysDev Mascot"} fill className="object-cover" />
            </div>
            <div className='h-5 w-4/5 bg-yellow2'></div>
        </div>
        <div className='w-3/5 flex flex-col items-center'>
            <div className='text-justify text-lg leading-snug mb-5'>
                This division is responsible for creating digital technologies and software to increase SAMAHAN&apos;s efficiency through technology. A committed group called SAMAHAN Systems Development creates and produces digital technology and software to improve Samahan&apos;s productivity. We want to utilize technology for a favorable effect on the community. 
            </div>
            <div className='text-justify text-lg leading-snug mb-8'>
                Joining our team entails putting your skills to use and obtaining real-world experience. IT abilities in practical settings. We invite you to join us in building systems that are advantageous to all. us on this adventure. Get to know the welcoming and helpful SYSDEV team, who are excited to assist you in developing your abilities and laying the groundwork for your future profession. 
            </div>
            <div className='flex justify-center gap-0.5 mb-8'>
                <div className="relative h-10 w-10 overflow-hidden"> 
                    <Image src={"/images/department-icons/FrontEndLogo.svg"} alt={"SysDev Mascot"} fill className="object-cover" />
                </div>
                <div className="relative h-10 w-10 overflow-hidden"> 
                    <Image src={"/images/department-icons/BackEndLogo.svg"} alt={"SysDev Mascot"} fill className="object-cover" />
                </div>
                <div className="relative h-10 w-10 overflow-hidden"> 
                    <Image src={"/images/department-icons/DevOpsLogo.svg"} alt={"SysDev Mascot"} fill className="object-cover" />
                </div>
                <div className="relative h-10 w-10 overflow-hidden"> 
                    <Image src={"/images/department-icons/UIUXLogo.svg"} alt={"SysDev Mascot"} fill className="object-cover" />
                </div>
                <div className="relative h-10 w-10 overflow-hidden"> 
                    <Image src={"/images/department-icons/ProjectManagerLogo.svg"} alt={"SysDev Mascot"} fill className="object-cover" />
                </div>
                <div className="relative h-10 w-10 overflow-hidden"> 
                    <Image src={"/images/department-icons/GraphicDesignerLogo.svg"} alt={"SysDev Mascot"} fill className="object-cover" />
                </div>
                <div className="relative h-10 w-10 overflow-hidden"> 
                    <Image src={"/images/department-icons/CoreLogo.svg"} alt={"SysDev Mascot"} fill className="object-cover" />
                </div>
                <div className="relative h-10 w-10 overflow-hidden"> 
                    <Image src={"/images/department-icons/FullstackLogo.svg"} alt={"SysDev Mascot"} fill className="object-cover" />
                </div>
                <div className="relative h-10 w-10 overflow-hidden"> 
                    <Image src={"/images/department-icons/QALogo.svg"} alt={"SysDev Mascot"} fill className="object-cover" />
                </div>
            </div>
            <div className='text-justify text-lg font-bold leading-snug mb-20'>
                Together, let&apos;s create, code, and go on an exciting journey in software development! Founded in 2021, SYSDEV operates under SAMAHAN to create tools that simplify campus life. SAMAHAN Systems Development is in-charge of designing and developing software and digital systems.
            </div>
            <div className='flex items-center justify-center h-13 w-full mt-15'>
                <Button variant={"green"} size={"big"} className='w-11/12 font-bold'>Download Primer</Button>
            </div>
            </div>
    </div>
  )
}

export default SysdevDetailsSection