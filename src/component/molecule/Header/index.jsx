"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { scrollToSection, scrollToTop } from "@/utils";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const links = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About", id: "about" },
    { href: "/#skills", label: "Skills", id: "skills" },
    { href: "/Qualification", label: "Qualification", id: "qualification" },
    { href: "/Contact", label: "Contact" },
  ];

  const handleClick = (e, href, id) => {
    e.preventDefault();

    // Close mobile menu when clicking a link
    setIsMenuOpen(false);

    // If it's the home link, scroll to top
    if (href === "/") {
      scrollToTop();
      router.push("/");
      return;
    }

    // If it's a section on the current page (starts with #)
    if (href.startsWith("/#") && id) {
      scrollToSection(id);
      return;
    }

    // For other pages, navigate normally
    router.push(href);
  };

  return (
    <div className="py-4 md:py-6 lg:py-8 w-full font-sans fixed z-10 bg-white shadow-md">
      <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto flex items-center justify-between text-[#1d1e20]">
        <div className="text-lg font-bold">Maaz</div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex gap-4 lg:gap-6 text-sm lg:text-base font-semibold">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#1d1e20] hover:text-blue-600 transition-colors duration-200 no-underline"
              onClick={(e) => handleClick(e, link.href, link.id)}
            >
              <div>{link.label}</div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Mobile navigation - only shown when menu is open */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in-down">
          <div className="flex flex-col w-[90%] mx-auto space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#1d1e20] text-base font-medium hover:text-blue-600 transition-colors duration-200 no-underline"
                onClick={(e) => handleClick(e, link.href, link.id)}
              >
                <div>{link.label}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}