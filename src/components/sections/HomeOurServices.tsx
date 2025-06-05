import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

interface Services {
  title: string;
  description: string;
}

export default function HomeOurServices() {
  const servicesList: Services[] = [
    {
      title: "Internal Dev Support",
      description:
        "Technical development and long-term support for SAMAHAN-recognized orgs.",
    },
    {
      title: "Partnerships & Cross-Org Collabs",
      description:
        "Co-developing platforms with other orgs across the university.",
    },
    {
      title: "Potential Future Public Collaborations",
      description: "Exploring expansion to serve the broader AdDU community.",
    },
  ];

  const departmentIcons = [
    { src: "/images/department-icons/FrontEndLogo.svg", alt: "FrontEnd" },
    { src: "/images/department-icons/BackEndLogo.svg", alt: "BackEnd" },
    { src: "/images/department-icons/DevOpsLogo.svg", alt: "DevOps" },
    { src: "/images/department-icons/UIUXLogo.svg", alt: "UIUX" },
    {
      src: "/images/department-icons/ProjectManagerLogo.svg",
      alt: "Project Manager",
    },
    {
      src: "/images/department-icons/GraphicDesignerLogo.svg",
      alt: "Graphics Designer",
    },
    { src: "/images/department-icons/CoreLogo.svg", alt: "Core" },
    { src: "/images/department-icons/FullstackLogo.svg", alt: "Fullstack" },
    { src: "/images/department-icons/QALogo.svg", alt: "QA" },
  ];

  return (
    <section className="font-inter mx-auto flex w-full max-w-[320px] flex-col px-2 py-18 text-black md:max-w-[768px] md:px-14 lg:max-w-[1024px] lg:px-20">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-xl font-bold italic md:text-3xl lg:text-4xl">
          Our Services
        </h1>
        <p className="px-2 text-xs md:text-lg lg:text-xl">
          See how SYSDEV empowers the community through technology&#46;
        </p>
      </div>
      <ul className="mt-6 flex flex-col gap-2 md:gap-4">
        {servicesList.map((service, idx) => (
          <li
            key={idx}
            className="nth-[1]:border-green2 nth-[2]:border-pink2 nth-[3]:border-yellow2 flex h-[79px] flex-col justify-center gap-1 rounded-2xl border-2 px-4 md:h-[130px] md:rounded-4xl md:px-8 lg:h-[100px] lg:rounded-3xl"
          >
            <p className="text-sm font-bold md:text-xl">{service.title}</p>
            <p className="line-clamp-2 text-xs md:text-lg">
              {service.description}
            </p>
          </li>
        ))}
      </ul>
      <div className="my-10 flex justify-center gap-0.5">
        {departmentIcons.map((icon) => (
          <div
            key={icon.alt}
            className="relative size-6 overflow-hidden md:size-10"
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col text-center">
        <p className="text-sm md:text-xl lg:text-2xl">
          Have a project or idea in mind?
        </p>
        <p className="text-2xl font-bold italic md:text-4xl lg:text-5xl">
          Let&#39;s build it together&#46;
        </p>
        <div className="mt-2 flex h-12 w-full items-center justify-center md:mt-6">
          <Link
            className="w-full max-w-[200px] md:max-w-[300px] lg:max-w-[350px]"
            href="/contact-us"
          >
            <Button
              className="w-full text-xs font-bold"
              variant={"green"}
              size={"big"}
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
