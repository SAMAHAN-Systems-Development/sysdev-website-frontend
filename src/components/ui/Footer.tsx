import Link from "next/link"
import Image from "next/image"
import { FaFacebook, FaLinkedinIn } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
import { TbCircleArrowRightFilled } from "react-icons/tb";
import allLinksData from '@/data/navLinks.json';

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
        footerExplore: exploreLinks,
        socialMedia: socialMediaData
    } = allLinksData as AllLinks;

    const socialLinks = socialMediaData.map(social => {
        const IconComponent = getSocialIcon(social.type);
        return {
            ...social,
            icon: IconComponent,
        };
    }).filter(social => social.icon);

    return (
        <footer className={`bg-blue3 text-white py-16 px-8 ${className}`}>
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
                    <div className="lg:col-span-2">
                        <Image src="/images/SysDevLogo.svg" alt="SAMAHAN Systems Development Logo" width={200} height={50} />
                    </div>

                    {/* Meet the developers section */}
                    <div className="lg:col-span-4 lg:col-start-4 space-y-2">
                        <p className="text-white text-base max-w-md">Meet the developers behind the website.</p>

                        <Link href={"/"}> {/* needs to be updated to meet the devs page */}
                            <TbCircleArrowRightFilled className="text-white w-6 h-6" />
                        </Link>

                        <div className="flex gap-2 mt-4 md:mt-20 lg:mt-42">
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
                                        <SocialIcon className="w-5 h-5" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:col-start-9 space-y-4">
                        <h3 className="text-white font-semibold text-lg">Navigation</h3>
                        <nav className="space-y-3">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="lg:col-span-2 lg:col-start-11 space-y-4">
                        <h3 className="text-white font-semibold text-lg">Explore</h3>
                        <nav className="space-y-3">
                            {exploreLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div >
        </footer >
    )
}