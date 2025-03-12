import Image from "next/image";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FiBriefcase } from "react-icons/fi";
import { GoProjectRoadmap } from "react-icons/go";
import { AiOutlineFileText } from "react-icons/ai";
import Profile from "@/images/22.jpeg";

export default function About() {
  return (
    <div
      className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto flex flex-col gap-8 md:gap-12 lg:gap-16 items-center justify-center font-sans py-20 md:py-24 lg:min-h-screen"
      id="about"
    >
      {/* Section Header */}
      <div className="text-center flex flex-col gap-2 md:gap-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          About Me
        </h2>
        <p className="text-lg md:text-xl">My Introduction</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-12 lg:justify-between">
        {/* Profile Image */}
        <div className="w-full max-w-[280px] md:max-w-[320px] lg:max-w-[400px]">
          <div className="w-full rounded-3xl overflow-hidden">
            <Image
              src={Profile}
              alt="Profile"
              className="object-contain rounded-2xl"
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 400px"
            />
          </div>
        </div>

        {/* About Content */}
        <div className="w-full lg:w-[60%] flex flex-col gap-6 md:gap-8 lg:gap-10">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-lg overflow-hidden shadow-md p-4 text-center cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <HiOutlineAcademicCap className="text-2xl font-bold mx-auto" />
              <p className="font-bold mt-2">Academic</p>
              <p className="text-sm mt-2">B.Tech in CSE - 8.2 CGPA</p>
              <p className="text-sm mt-1">HKBK College of Engineering</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md p-4 text-center cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <FiBriefcase className="text-2xl font-bold mx-auto" />
              <p className="font-bold mt-2">Experience</p>
              <p className="text-sm mt-2">2+ Years</p>
              <p className="text-sm mt-1">Professional Development</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md p-4 text-center cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <GoProjectRoadmap className="text-2xl font-bold mx-auto" />
              <p className="font-bold mt-2">Projects</p>
              <p className="text-sm mt-2">6+ Completed Projects</p>
              <p className="text-sm mt-1">Including FleetOs & Dexhub</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-base md:text-lg lg:text-xl w-full lg:w-[80%] text-gray-500">
              I'm a Frontend Developer with 2 years of experience in React and
              Next.js ecosystems. Currently working at Ramailo Technologies, I
              specialize in creating responsive web applications that deliver
              exceptional user experiences.
            </p>
          </div>

          {/* Download Button */}
          <div>
            <a
              href="https://drive.google.com/file/d/1OK115g6jmHMHbI7BEzxxpA0AAa1Fn2hC/view?usp=drive_link"
              target="blank"
              download="Maaz Resume"
              className="no-underline"
            >
              <div className="flex max-w-max items-center justify-center rounded-lg bg-gray-800 text-white text-center py-3 md:py-4 lg:py-5 px-4 md:px-5 cursor-pointer text-sm md:text-base gap-2 hover:bg-black transition-colors duration-200">
                Download Resume
                <AiOutlineFileText />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
