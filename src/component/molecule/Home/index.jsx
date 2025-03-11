// pages/index.js or app/page.js (depending on if you're using Pages Router or App Router)
import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import Link from "next/link";

export default function Home() {
  const social = [
    {
      href: "https://www.instagram.com/mohammad_maaz_ahmad/",
      icon: <FaInstagram className="text-2xl" />,
    },
    {
      href: "https://www.linkedin.com/in/md-maaz-ahmad-144858206/",
      icon: <FaLinkedin className="text-2xl" />,
    },
    {
      href: "https://github.com/MdMaazAhmad078/",
      icon: <FaGithub className="text-2xl" />,
    },
  ];

  return (
    <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto font-sans min-h-screen pt-24 md:pt-32 lg:pt-0 lg:h-[90vh] flex items-center">
      <div className="flex flex-col-reverse lg:flex-row-reverse justify-between w-full gap-8 md:gap-10 lg:gap-6">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-6 md:gap-10 lg:gap-16 order-2 lg:order-1">
          {/* Social icons - shown horizontally on mobile, vertically on desktop */}
          <div className="flex flex-row lg:flex-col md:justify-center gap-6 md:gap-8 lg:gap-6">
            {social.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
              >
                {link.icon}
              </Link>
            ))}
          </div>
          
          {/* Main content */}
          <div className="flex flex-col justify-center items-start">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold flex items-center flex-wrap">
                Md Maaz Ahmad
                <MdVerified className="text-xl md:text-2xl text-blue-400 ml-2" />
              </h1>
              
              <div className="flex items-center mt-2">
                <hr className="w-12 md:w-16 lg:w-20 border-gray-400" />
                <div className="mx-2 overflow-hidden">
                  <marquee className="whitespace-nowrap">
                    Frontend Developer
                  </marquee>
                </div>
                <div className="hidden md:block md:w-1/3 lg:w-1/2"></div>
              </div>
              
              <div className="mt-4 md:mt-6 w-full md:w-3/4 lg:w-1/2 text-sm md:text-base">
                I'm creative designer based in India, and I'm very passinate and
                dedicates to my work.
              </div>
            </div>
            
            <div className="mt-8 md:mt-12">
              <Link href="#contact">
                <div className="w-32 md:w-36 rounded-lg bg-gray-900 text-white py-4 md:py-5 px-3 md:px-4 cursor-pointer flex items-center justify-center gap-2 hover:bg-black transition-colors duration-200">
                  Say Hello!! <FiSend />
                </div>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="flex items-center mr-16">
          <div className="image" />
        </div>
      </div>
    </div>
  );
}