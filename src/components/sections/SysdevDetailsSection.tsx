"use client";
import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { withBasePath } from "@/lib/utils";

const departmentIcons = [
	{
		src: withBasePath("/images/department-icons/FrontEndLogo.svg"),
		alt: "FrontEnd",
	},
	{
		src: withBasePath("/images/department-icons/BackEndLogo.svg"),
		alt: "BackEnd",
	},
	{
		src: withBasePath("/images/department-icons/DevOpsLogo.svg"),
		alt: "DevOps",
	},
	{ src: withBasePath("/images/department-icons/UIUXLogo.svg"), alt: "UIUX" },
	{
		src: withBasePath("/images/department-icons/ProjectManagerLogo.svg"),
		alt: "Project Manager",
	},
	{
		src: withBasePath("/images/department-icons/GraphicDesignerLogo.svg"),
		alt: "Graphics Designer",
	},
	{ src: withBasePath("/images/department-icons/CoreLogo.svg"), alt: "Core" },
	{
		src: withBasePath("/images/department-icons/FullstackLogo.svg"),
		alt: "Fullstack",
	},
	{ src: withBasePath("/images/department-icons/QALogo.svg"), alt: "QA" },
];

function SysdevDetailsSection() {
	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = "https://samahan.addu.edu.ph/sysdev/images/2nd%20Sem%20AY%2024-25%20Org%20Primer.pdf"; // relative to public/
		link.download = "SysDevPrimer.pdf"; // optional: set filename
		link.click();
	};
	return (
		<div className="flex flex-col items-center justify-center w-full gap-y-13 text-black mt-15 md:mt-18 md:mb-14">
			<div className="w-7/9 lg:w-4/5 max-w-4xl lg:max-w-5xl">
				<div className="flex flex-col items-center">
					<div className="relative h-24 w-56 md:h-32 md:w-72 lg:h-36 lg:w-80 overflow-hidden">
						<Image
							src={withBasePath("/images/SysDevMascot_cropped.png")}
							alt={"SysDev Mascot"}
							fill
							className="object-cover"
						/>
					</div>
					<div className="h-3.5 lg:h-5 w-full bg-yellow2"></div>
				</div>
				<div className="w-full flex flex-col items-center text-sm md:text-base lg:text-lg mt-8">
					<div className="text-sm text-justify leading-snug mb-5">
						This division is responsible for creating digital technologies and
						software to increase SAMAHAN&apos;s efficiency through technology. A
						committed group called SAMAHAN Systems Development creates and
						produces digital technology and software to improve Samahan&apos;s
						productivity. We want to utilize technology for a favorable effect
						on the community.
					</div>
					<div className="text-sm text-justify leading-snug mb-8">
						Joining our team entails putting your skills to use and obtaining
						real-world experience. IT abilities in practical settings. We invite
						you to join us in building systems that are advantageous to all. us
						on this adventure. Get to know the welcoming and helpful SYSDEV
						team, who are excited to assist you in developing your abilities and
						laying the groundwork for your future profession.
					</div>
					<div className="flex justify-center gap-0.5 mb-8">
						{departmentIcons.map((icon) => (
							<div
								key={icon.alt}
								className="relative h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 overflow-hidden">
								<Image
									src={icon.src}
									alt={icon.alt}
									fill
									className="object-cover"
								/>
							</div>
						))}
					</div>
					<div className="text-justify font-bold leading-snug">
						Together, let&apos;s create, code, and go on an exciting journey in
						software development! Founded in 2021, SYSDEV operates under SAMAHAN
						to create tools that simplify campus life. SAMAHAN Systems
						Development is in-charge of designing and developing software and
						digital systems.
					</div>
					<div className="flex items-center justify-center h-13 w-full mt-8 md:mt-12 lg:mt-16">
						<Button
							variant={"green"}
							size={"big"}
							className="w-full font-bold"
							onClick={handleDownload}>
							Download Primer
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SysdevDetailsSection;
