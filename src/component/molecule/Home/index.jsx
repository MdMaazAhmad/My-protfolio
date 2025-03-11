// pages/index.js or app/page.js (depending on if you're using Pages Router or App Router)
import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import Image from "next/image";
import profile from "@/images/22.jpeg";
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
      ]
  return (
    <div className="w-[80%] flex justify-center  mx-auto font-sans h-[90vh]">
      <div className="flex justify-between  gap-6 w-full">
        <div className="flex justify-between gap-16">
          <div className="flex flex-col gap-6  justify-center">
            {social.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 "
              >
                {link.icon}
              </Link>
            ))}
          </div>
          <div className="flex flex-col justify-center items-start">
            <div>
              <h1 className="text-5xl font-bold flex items-center">
                Md Maaz Ahmad
                <MdVerified className="text-2xl text-blue-400 ml-2" />
              </h1>
              <div className="flex items-center">
                <hr className="w-1/6 border-gray-400" />
                <div className="mx-2 w-1/3 overflow-hidden">
                  <marquee className="animate-marquee whitespace-nowrap">
                    Frontend Developer
                  </marquee>
                </div>
                <div className="w-1/2"></div>
              </div>
              <br />
              <div className="w-1/2">
                I'm creative designer based in India, and I'm very passinate and
                dedicates to my work.
              </div>
            </div>
            <br />
            <br />
            <br />
            <Link href="# ">
              <div className="w-36 rounded-lg bg-gray-900 text-white py-5 px-4 cursor-pointer flex items-center gap-2 hover:bg-black">
                Say Hello!! <FiSend />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex items-center mr-16">
          <div className="image" />
        </div>
      </div>
    </div>
  );
}
