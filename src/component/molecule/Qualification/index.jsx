"use client";

import React, { useState } from "react";
import { Timeline } from "antd";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiBriefcaseAlt2 } from "react-icons/bi";

export default function Qualification() {
  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (index) => {
    setActiveTab(index);
  };

  // Education timeline items
  const educationItems = [
    {
      title: "10th",
      institution: "Elegant Public School",
      period: "2016 - 2017",
      position: "left",
    },
    {
      title: "12th",
      institution: "Gyan Bharti Senior Secondary",
      period: "2017 - 2019",
      position: "right",
    },
    {
      title: "Bachelor Of Engineering",
      institution: "Hkbk College Of Engineering",
      period: "2019 - Present",
      position: "left",
    },
  ];

  // Work timeline items
  const workItems = [
    {
      title: "Dexhub – Teleoperate Robots with Dart",
      institution: "Ramailo technology",
      period: "Jun 2024 - Feb 2025",
      position: "left",
    },
    {
      title: "ML-experts",
      institution: "Ramailo technology",
      period: "Feb 2024 - Jun 2025",
      position: "right",
    },
    {
      title:
        "FleetOs – A Vehicle Tracking and Maintenance Web Application (Client: Alt-Mobility)",
      institution: "Ramailo Technology",
      period: "Jun 2023 - Feb 2024",
      position: "left",
    },
    {
      title: "Event Booking System",
      institution: "Simpana (Internship)",
      period: "Dec 2022 - Feb 2023 ",
      position: "right",
    },
    {
      title: "ToolBox Talk",
      institution: "Simpana (Internship)",
      period: "Jun 2022 - Dec 2022",
      position: "left",
    },
    {
      title: "Car EMI Calculator",
      institution: "Simpana (Internship)",
      period: "Mar 2022 - Apr 2022",
      position: "right",
    },
  ];

  // Timeline item component with responsive styling
  const TimelineItem = ({ item }) => {
    return (
      <div className={`flex ${item.position === "left" ? "justify-start" : "justify-end"} px-2 sm:px-0`}>
        <div
          className={`max-w-full ${
            item.position === "right" ? "text-right" : "text-left"
          }`}
        >
          <h3 className="font-semibold text-base sm:text-lg text-gray-800 break-words">
            {item.title}
          </h3>
          <span className="text-xs sm:text-sm text-gray-600 block mb-1">
            {item.institution}
          </span>
          <div className={`flex items-center text-gray-500 text-xs sm:text-sm ${
            item.position === "right" ? "justify-end" : "justify-start"
          }`}>
            <AiOutlineCalendar className="mr-1" />
            <span>{item.period}</span>
          </div>
        </div>
      </div>
    );
  };

  // Custom responsive timeline for mobile
  const MobileTimeline = ({ items }) => (
    <div className="flex flex-col gap-8 px-4">
      {items.map((item, index) => (
        <div key={index} className="border-l-2 border-gray-300 pl-4 relative">
          <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-[7px] top-1"></div>
          <h3 className="font-semibold text-base text-gray-800 break-words">
            {item.title}
          </h3>
          <span className="text-xs text-gray-600 block mb-1">
            {item.institution}
          </span>
          <div className="flex items-center text-gray-500 text-xs">
            <AiOutlineCalendar className="mr-1" />
            <span>{item.period}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div 
      className="font-sans flex flex-col justify-center items-center min-h-screen w-full px-4 py-12 sm:py-16" 
      id="qualification"
    >
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Qualification</h1>
        <p className="text-gray-600 text-base sm:text-lg">
          {activeTab === 1 ? "My Personal Journey" : "Professional Projects"}
        </p>
      </div>

      <div className="flex justify-center mb-8 sm:mb-12">
        <div
          className={`flex items-center mr-4 sm:mr-8 cursor-pointer transition-colors duration-300 ${
            activeTab === 1
              ? "text-gray-900 font-bold"
              : "text-gray-500 hover:text-gray-700 font-medium hover:font-bold"
          }`}
          onClick={() => toggleTab(1)}
        >
          <HiOutlineAcademicCap className="text-2xl sm:text-3xl mr-1 sm:mr-2" />
          <h3 className="text-lg sm:text-xl">Education</h3>
        </div>
        <div
          className={`flex items-center cursor-pointer transition-colors duration-300 ${
            activeTab === 2
              ? "text-gray-900 font-bold"
              : "text-gray-500 hover:text-gray-700 font-medium hover:font-bold"
          }`}
          onClick={() => toggleTab(2)}
        >
          <BiBriefcaseAlt2 className="text-2xl sm:text-3xl mr-1 sm:mr-2" />
          <h3 className="text-lg sm:text-xl">Work</h3>
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto">
        {/* Desktop/Tablet timeline (hidden on small screens) */}
        <div className="hidden sm:block">
          {activeTab === 1 && (
            <Timeline
              mode="alternate"
              items={educationItems.map((item, index) => ({
                children: <TimelineItem item={item} key={index} />,
              }))}
            />
          )}

          {activeTab === 2 && (
            <Timeline
              mode="alternate"
              items={workItems.map((item, index) => ({
                children: <TimelineItem item={item} key={index} />,
              }))}
            />
          )}
        </div>

        {/* Mobile timeline (visible only on small screens) */}
        <div className="block sm:hidden">
          {activeTab === 1 && <MobileTimeline items={educationItems} />}
          {activeTab === 2 && <MobileTimeline items={workItems} />}
        </div>
      </div>
    </div>
  );
}