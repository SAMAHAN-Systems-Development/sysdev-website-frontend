"use client";
import React, { useState, useRef } from 'react';
import Button from './Button';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import importedNavLinksData from '@/data/navLinks.json';
import importedCompactNavLinksData from '@/data/compactNavLinks.json';
import { withBasePath } from '@/lib/utils';

interface SubLink {
  href: string;
  label: string;
}

interface NavLink {
  href: string;
  label: string;
  subLinks?: SubLink[];
}

interface AllLinks {
  mainNavigation: NavLink[];
}

interface CompactNavLinks {
  tabletCompactMenuLinks: NavLink[];
  mobileCompactMenuLinks: NavLink[];
}

const navLinks: NavLink[] = (importedNavLinksData as AllLinks).mainNavigation || [];
const { tabletCompactMenuLinks, mobileCompactMenuLinks } = importedCompactNavLinksData as CompactNavLinks;

const NavigationBar = () => {
  const [openDropdownLabel, setOpenDropdownLabel] = useState<string | null>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [compactMenuOpen, setCompactMenuOpen] = useState(false);

  const router = useRouter();

  const handleDesktopDropdownToggleClick = (event: React.MouseEvent, label: string, href: string, hasSubLinks?: boolean) => {
    if (hasSubLinks) {
      event.preventDefault();
      setOpenDropdownLabel(prevLabel => (prevLabel === label ? null : label));
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }
    } else {
      setOpenDropdownLabel(null);
    }
  };

  const closeAllDropdownsAndNavigate = (href: string) => {
    setOpenDropdownLabel(null);
    setCompactMenuOpen(false);
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    router.push(href);
  };

  const toggleCompactMenu = () => {
    setCompactMenuOpen(!compactMenuOpen);
    setOpenDropdownLabel(null);
  };

  const displayNavLinks = navLinks.filter(link => link.label.toLowerCase() !== 'projects');

  return (
    <div className='bg-blue3 text-white p-4 md:px-12 xl:px-20 flex items-center justify-between relative'>
      <Link href="/" onClick={() => { setCompactMenuOpen(false); setOpenDropdownLabel(null); }}>
        <Image src={withBasePath("/images/SysDevLogo.svg")} alt="SysDev Logo" width={50} height={50} className='h-12 logo-hide-navbar' />
      </Link>

      <div className='hidden lg:flex items-center gap-8'>
        <div className='flex gap-7 xl:gap-10'>
          {displayNavLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
            >
              <Link
                href={link.href}
                className='hover:text-yellow4 transition-colors duration-200 flex items-center cursor-pointer'
                onClick={(e) => {
                  if (link.subLinks) {
                    handleDesktopDropdownToggleClick(e, link.label, link.href, !!link.subLinks);
                  } else {
                    closeAllDropdownsAndNavigate(link.href);
                  }
                }}
              >
                {link.label}
                {link.subLinks && (
                  <FaChevronDown
                    className={`w-3 h-3 ml-2 transition-transform duration-300 ${openDropdownLabel === link.label ? 'rotate-180' : ''
                      }`}
                  />
                )}
              </Link>
              {link.subLinks && openDropdownLabel === link.label && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-10 w-max bg-blue3 rounded-lg shadow-lg z-50 overflow-hidden"
                >
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.href}
                      href={subLink.href}
                      className="block px-4 py-2 text-sm text-white hover:bg-blue2 hover:text-yellow4 transition-colors duration-200"
                      onClick={() => closeAllDropdownsAndNavigate(subLink.href)}
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='flex items-center h-7' >
          <Button size={"tight"} className='w-[90px]' onClick={() => closeAllDropdownsAndNavigate('/projects')}> Projects </Button>
        </div>
      </div>

      <div className="hidden md:flex lg:hidden items-center gap-3 ">
        {/* <Button size={"tight"} className='w-auto px-4' onClick={() => closeAllDropdownsAndNavigate('/projects')}> Projects </Button> */}
        <button
          onClick={toggleCompactMenu}
          className="text-white p-2 focus:outline-none hover:text-yellow4 transition-colors duration-200 cursor-pointer"
          aria-label="Toggle menu"
        >
          {compactMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div className="flex md:hidden items-center">
        <button
          onClick={toggleCompactMenu}
          className="text-white p-2 focus:outline-none hover:text-yellow4 transition-colors duration-200 cursor-pointer"
          aria-label="Toggle menu"
        >
          {compactMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {compactMenuOpen && (
        <div className="absolute top-full right-4 md:right-14 mt-2 w-max max-w-[220px] bg-blue3 rounded-lg shadow-lg z-50 overflow-hidden">
          <div className="hidden md:block lg:hidden">
            {tabletCompactMenuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-sm text-white hover:bg-blue2 hover:text-yellow4 transition-colors duration-200"
                onClick={() => closeAllDropdownsAndNavigate(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="block md:hidden">
            {mobileCompactMenuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-sm text-white hover:bg-blue2 hover:text-yellow4 transition-colors duration-200"
                onClick={() => closeAllDropdownsAndNavigate(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;