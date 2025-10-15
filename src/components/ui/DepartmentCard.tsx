import React from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/utils";

export const departmentCards = {
  "Full-Stack": {
    title: "Full-Stack Developer",
    desc: "They possess a broad skill set covering the entire software development stack.",
    img: "ABOUT-carousel-frontend.jpg"
  },
  "Front-End": {
    title: "Front-End Developer",
    desc: "Designs interactive user interfaces.",
    img: "ABOUT-carousel-frontend.jpg"
  },
  "Back-End": {
    title: "Back-End Developer",
    desc: "Manages databases and server logic.",
    img: "ABOUT-carousel-backend.jpg"
  },
  "UI/UX": {
    title: "UI/UX Designer",
    desc: "Crafts intuitive user experiences.",
    img: "ABOUT-carousel-uiux.jpg"
  },
  "Creatives": {
    title: "Creatives",
    desc: "Produces engaging visual and multimedia content such as graphics, layouts, and branding materials.",
    img: "ABOUT-carousel-creatives.png"
  },
  "Project Manager": {
    title: "Project Manager",
    desc: "Oversees timelines and stakeholder communication.",
    img: "ABOUT-carousel-projectmanager.png"
  },
  "QA": {
    title: "Quality Assurance",
    desc: "Tests applications for bugs, errors, and performance issues to maintain software reliability.",
    img: "ABOUT-carousel-qualityassurance.png"
  },
  "DevOps": {
    title: "DevOps Engineer",
    desc: "Automates deployment, monitors infrastructure, and bridges development and operations for efficiency.",
    img: "ABOUT-carousel-devops.png"
  }
};

export interface DepartmentCardProps {
  title: string;
  desc: string;
  img: string;
}

export const DepartmentCard: React.FC<DepartmentCardProps> = ({ title, desc, img }) => (
  <div className="relative w-4/5 md:w-3/4 md:max-w-3xl h-56 md:h-72 lg:h-80 rounded-3xl lg:rounded-4xl overflow-hidden mb-10 mt-10">
    <Image
      src={withBasePath(`/images/${img}`)}
      alt={title}
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-blue-950/50 flex flex-col justify-center items-center z-10 p-3 md:p-6">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow2 mb-2">{title}</h1>
      <p className="text-sm md:text-lg text-white text-center max-w-xl">{desc}</p>
    </div>
  </div>
);