import React from "react";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";
import { withBasePath } from "@/lib/utils";

const ServiceProjectsIdeaInMind = () => {
	return (
		<div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-7xl px-8 md:px-12 lg:px-20 py-4 mx-auto h-40 sm:h-56 md:h-72 lg:h-[420px] flex items-center my-12 md:my-20">
			<div className="relative rounded-2xl overflow-hidden shadow-lg flex w-full h-full px-4 pt-7 pb-5 sm:px-6 md:px-13 lg:px-20">
				<Image
					className="absolute inset-0 -z-10 w-full h-full object-cover object-right transform scale-105"
					src={withBasePath("/images/SERVICES-idea-in-mind.jpg")}
					alt="Get in Touch"
					width={1000}
					height={500}
				/>
				{/* Text Content - Responsive width */}
				<div className="w-3/5 sm:w-1/3 lg:w-2/5 flex flex-col justify-center z-10">
					<h2 className="text-sm sm:text-lg md:text-xl lg:text-3xl text-white md:mb-3 lg:mb-4 leading-tight max-w-[220px]">
						<div>Have a project or idea in mind?</div>
						<div>Let&apos;s build it together</div>
					</h2>
					<div className="items-center min-h-8 md:min-h-11 lg:min-h-12 flex md:hidden">
						<Button size={"tight"} className="font-bold w-24 md:w-36 lg:w-44">
							<Link href={"/contact-us"}>Get In Touch</Link>
						</Button>
					</div>
					<div className="items-center min-h-8 md:min-h-11 lg:min-h-12 hidden md:flex">
						<Button size={"normal"} className="font-bold w-24 md:w-36 lg:w-44">
							<Link href={"/contact-us"}>Get In Touch</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceProjectsIdeaInMind;
