"use client";
import React, { useState, useRef } from 'react';
import Button from './Button';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import importedNavLinksData from '@/data/navLinks.json';

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

const navLinks: NavLink[] = (importedNavLinksData as AllLinks).mainNavigation || [];

const NavigationBar = () => {
  const [openDropdownLabel, setOpenDropdownLabel] = useState<string | null>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

  const router = useRouter();

  const handleDropdownMouseEnter = (label: string) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    setOpenDropdownLabel(label);
  };

  const handleDropdownMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setOpenDropdownLabel(null);
    }, 200);
  };

  const handleDropdownToggleClick = (event: React.MouseEvent, label: string, href: string, hasSubLinks?: boolean) => {
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

  const closeDropdownAndNavigate = (href: string) => {
    setOpenDropdownLabel(null);
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    if (mobileMenuOpen) {
      toggleMobileMenu();
    }
    router.push(href);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenDropdownLabel(null);
    setActiveMobileSubmenu(null);
  };

  const handleMobileSubmenuToggle = (label: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === label ? null : label);
  };

  const displayNavLinks = navLinks.filter(link => link.label.toLowerCase() !== 'projects');

  return (
    <div className='bg-blue3 text-white p-4 md:px-12 xl:px-20 flex items-center justify-between relative'>
      <Link href="/">
        <Image src="/images/SysDevLogo.svg" alt="SysDev Logo" width={50} height={50} className='h-12 logo-hide-navbar' />
      </Link>

      <div className='hidden md:flex items-center gap-5'>
        <div className='flex gap-7 xl:gap-10'>
          {displayNavLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={link.subLinks ? () => handleDropdownMouseEnter(link.label) : undefined}
              onMouseLeave={link.subLinks ? handleDropdownMouseLeave : undefined}
            >
              <Link
                href={link.href}
                className='hover:text-yellow4 transition-colors duration-200 flex items-center cursor-pointer'
                onClick={(e) => handleDropdownToggleClick(e, link.label, link.href, !!link.subLinks)}
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
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max bg-blue3 rounded-lg shadow-lg z-10 overflow-hidden"
                  onMouseEnter={() => handleDropdownMouseEnter(link.label)}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.href}
                      href={subLink.href}
                      className="block px-4 py-2 text-sm text-white hover:bg-blue2 hover:text-yellow4 transition-colors duration-200"
                      onClick={() => closeDropdownAndNavigate(subLink.href)}
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
          <Button size={"tight"} className='w-[86px]' onClick={() => router.push('/projects')}> Projects </Button>
        </div>
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-white p-2 focus:outline-none hover:text-yellow4 transition-colors duration-200 cursor-pointer"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-blue3 shadow-xl z-20">
          <div className="flex flex-col">
            {displayNavLinks.map((link) => (
              <div key={link.label} className="w-full border-b border-blue2/50 last:border-b-0">
                {link.subLinks ? (
                  <>
                    <div
                      className="flex items-center justify-between py-3 px-4 hover:text-yellow4 transition-colors duration-200 cursor-pointer"
                      onClick={() => handleMobileSubmenuToggle(link.label)}
                    >
                      <span>{link.label}</span>
                      <FaChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${activeMobileSubmenu === link.label ? 'rotate-180' : ''
                          }`}
                      />
                    </div>
                    <div
                      className={`bg-blue2/30 overflow-hidden transition-all duration-300 ease-in-out ${activeMobileSubmenu === link.label ? 'max-h-screen' : 'max-h-0'
                        }`}
                    >
                      <div className="py-1">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            className="block py-2 pr-6 pl-12 text-sm hover:text-yellow4 transition-colors duration-200"
                            onClick={() => closeDropdownAndNavigate(subLink.href)}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-3 px-4 hover:text-yellow4 transition-colors duration-200"
                    onClick={() => closeDropdownAndNavigate(link.href)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-4 pt-7 pb-10 flex items-center h-13">
              <Button className="w-full" onClick={() => { router.push('/projects'); toggleMobileMenu(); }}> Projects </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;