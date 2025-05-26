"use client";
import React, { useState, useRef } from 'react';
import Button from './Button';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import navLinksData from '@/data/navLinks.json';


interface SubLink {
  href: string;
  label: string;
}

interface NavLink {
  href: string;
  label: string;
  subLinks?: SubLink[];
}

const navLinks: NavLink[] = navLinksData;

const NavigationBar = () => {
  const [membersDropdownOpen, setMembersDropdownOpen] = useState(false);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

  const handleMouseEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    setMembersDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setMembersDropdownOpen(false);
    }, 200);
  };

  const handleMembersLinkClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setMembersDropdownOpen(prev => !prev);
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveMobileSubmenu(null);
  };

  const handleMobileSubmenuToggle = (label: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === label ? null : label);
  };

  const router = useRouter();

  return (
    <div className='bg-blue3 text-white p-4 md:px-12 xl:px-20 flex items-center justify-between relative'>
      <Link href="/">
        <Image src="/images/SysDevLogo.svg" alt="SysDev Logo" width={50} height={50} className='h-12 logo-hide-navbar' />
      </Link>

      {/* Desktop Navigation */}
      <div className='hidden md:flex items-center gap-5'>
        <div className='flex gap-7 xl:gap-10'>
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={link.subLinks ? handleMouseEnter : undefined}
              onMouseLeave={link.subLinks ? handleMouseLeave : undefined}
            >
              <Link
                href={link.href}
                className='hover:text-yellow4 transition-colors duration-200 flex items-center cursor-pointer'
                onClick={link.subLinks ? handleMembersLinkClick : undefined}
              >
                {link.label}
                {link.subLinks && (
                  <FaChevronDown
                    className={`w-3 h-3 ml-2 transition-transform duration-300 ${membersDropdownOpen ? 'rotate-180' : ''
                      }`}
                  />
                )}
              </Link>
              {link.subLinks && membersDropdownOpen && (
                <div className="absolute top-full left-0 mt-11 w-max bg-blue3 rounded-lg shadow-lg z-10 overflow-hidden">
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.href}
                      href={subLink.href}
                      className="block px-4 py-2 text-sm text-white hover:bg-blue2 hover:text-yellow4 transition-colors duration-200"
                      onClick={() => {
                        setMembersDropdownOpen(false);
                        if (leaveTimeoutRef.current) {
                          clearTimeout(leaveTimeoutRef.current);
                        }
                      }}
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
          <Button size={"tight"} className='w-[86px]' onClick={() => router.push('/')}> Projects </Button>
        </div>
      </div>

      {/* hamburger icon */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-white p-2 focus:outline-none hover:text-yellow4 transition-colors duration-200 cursor-pointer"
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-blue3 shadow-xl z-20">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <div key={link.label} className="w-full">
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
                      className={`bg-blue3 overflow-hidden transition-all duration-300 ease-in-out ${activeMobileSubmenu === link.label ? 'max-h-screen' : 'max-h-0'
                        }`}
                    >
                      <div className="py-1">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            className="block py-2 pr-6 pl-12 text-sm hover:text-yellow4 transition-colors duration-200"
                            onClick={toggleMobileMenu}
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
                    onClick={toggleMobileMenu}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-4 pt-7 pb-10 flex items-center h-13">
              <Button className="w-full" onClick={() => router.push('/')}> Projects </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;