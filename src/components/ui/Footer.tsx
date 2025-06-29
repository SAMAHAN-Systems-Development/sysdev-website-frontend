import Link from "next/link"
import Image from "next/image"
import { FaFacebook, FaLinkedinIn } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
import { TbCircleArrowRightFilled } from "react-icons/tb";
import allLinksData from '@/data/navLinks.json';
import { withBasePath } from "@/lib/utils";

interface NavLink {
    href: string;
    label: string;
    subLinks?: NavLink[];
}

interface SimpleLinkItem {
    label: string;
    href: string;
}

interface SocialLinkData {
    type: string;
    href: string;
    label: string;
}

interface AllLinks {
    mainNavigation: NavLink[];
    footerExplore: SimpleLinkItem[];
    socialMedia: SocialLinkData[];
}

interface FooterProps {
    className?: string
}

const getSocialIcon = (type: string) => {
    switch (type.toLowerCase()) {
        case 'email':
            return IoIosMail;
        case 'linkedin':
            return FaLinkedinIn;
        case 'facebook':
            return FaFacebook;
        default:
            return null;
    }
};

export default function Footer({ className = "" }: FooterProps) {
    const {
        mainNavigation: navigationLinks,
        socialMedia: socialMediaData
    } = allLinksData as AllLinks;

    const socialLinks = socialMediaData.map(social => {
        const IconComponent = getSocialIcon(social.type);
        return {
            ...social,
            icon: IconComponent,
        };
    }).filter(social => social.icon);

    const renderLinkList = (links: SimpleLinkItem[], title: string) => (
        <div className="space-y-3">
            <h3 className="text-white font-semibold text-base md:text-base lg:text-lg">{title}</h3>
            <nav className="space-y-2">
                {links && links.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className="block text-gray-400 hover:text-yellow2 transition-colors text-sm md:text-xs lg:text-sm"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </div>
    );

    return (
        <footer className={`bg-blue3 text-white py-16 px-4 sm:px-6 md:px-17 ${className}`}>
            <div className="container mx-auto max-w-7xl">

                <div className="block md:hidden space-y-10">
                    <div className="flex justify-center gap-x-6">
                        {socialLinks.map((social) => {
                            const SocialIcon = social.icon;
                            if (!SocialIcon) return null;
                            return (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-yellow2 transition-colors"
                                    aria-label={social.label}
                                >
                                    <SocialIcon className="w-6 h-6" />
                                </Link>
                            );
                        })}
                    </div>

                    <div className="flex flex-col items-center text-center space-y-4">
                        <Image
                            src={withBasePath("/images/SysDevLogo.svg")}
                            alt="SAMAHAN Systems Development Logo"
                            width={140}
                            height={35}
                            className="h-auto"
                        />
                        <div>
                            <p className="text-white text-sm font-inter mb-2 mt-5 md:mt-0 max-w-40">Meet the developers behind the website.</p>
                            <Link href={"/meet-the-developers"} className="inline-block">
                                <TbCircleArrowRightFilled className="text-white hover:text-yellow2 transition-colors w-6 h-6" />
                            </Link>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="grid gap-x-25 text-sm">
                            <div className="text-center">
                                {renderLinkList(navigationLinks, "Navigation")}
                            </div>
                            {/* <div className="text-left">
                                {renderLinkList(exploreLinks, "Explore")}
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="hidden md:grid md:grid-cols-7 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
                    <div className="md:col-span-2 lg:col-span-3">
                        <Image
                            src={withBasePath("/images/SysDevLogo.svg")}
                            alt="SAMAHAN Systems Development Logo"
                            width={200}
                            height={50}
                            className="w-full h-auto max-w-[120px] md:max-w-[140px] lg:max-w-[200px]"
                        />
                    </div>

                    <div className="md:col-span-3 lg:col-span-4 lg:col-start-5 space-y-2">
                        <p className="text-white md:text-sm lg:text-lg max-w-xs font-inter mb-2">Meet the developers behind the website.</p>
                        <Link href={"/meet-the-developers"}>
                            <TbCircleArrowRightFilled className="text-white hover:text-yellow2 transition-colors md:w-5 md:h-5 lg:w-6 lg:h-6" />
                        </Link>
                        <div className="flex gap-2 mt-8 md:mt-8 lg:mt-10">
                            {socialLinks.map((social) => {
                                const SocialIcon = social.icon;
                                if (!SocialIcon) return null;
                                return (
                                    <Link
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 rounded flex items-center justify-center transition-colors"
                                        aria-label={social.label}
                                    >
                                        <SocialIcon className="md:w-4 md:h-4 lg:w-5 lg:h-5 hover:text-yellow2" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className="md:col-span-1 lg:col-span-4 lg:col-start-10 space-y-4">
                        {renderLinkList(navigationLinks, "Navigation")}
                    </div>
                    {/* <div className="md:col-span-1 lg:col-span-2 lg:col-start-11 space-y-4">
                        {renderLinkList(exploreLinks, "Explore")}
                    </div> */}
                </div>
            </div >
        </footer >
    )
}