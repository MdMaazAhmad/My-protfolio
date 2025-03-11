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

  // Timeline item component
  const TimelineItem = ({ item }) => (
    <div
      className={`flex ${
        item.position === "left" ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={` ${item.position === "right" ? "text-right" : "text-left"}`}
      >
        <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
        <span className="text-sm text-gray-600 block mb-1">
          {item.institution}
        </span>
        <div className={`flex items-center text-gray-500 text-sm`}>
          <AiOutlineCalendar className="mr-1" />
          <span>{item.period}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-sans flex flex-col justify-center items-center min-h-screen" id="qualification">
      <div className="text-center  mb-12">
        <h1 className="text-4xl font-bold mb-2">Qualification</h1>
        <p className="text-gray-600 text-lg">
          {activeTab === 1 ? "My Personal Journey" : "Professional Projects"}
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div
          className={`flex items-center mr-8 cursor-pointer transition-colors duration-300 ${
            activeTab === 1
              ? "text-gray-900 font-bold"
              : "text-gray-500 hover:text-gray-700 font-medium hover:font-bold"
          }`}
          onClick={() => toggleTab(1)}
        >
          <HiOutlineAcademicCap className="text-3xl mr-2" />
          <h3 className="text-xl ">Education</h3>
        </div>
        <div
          className={`flex items-center cursor-pointer transition-colors duration-300 ${
            activeTab === 2
              ? "text-gray-900 font-bold"
              : "text-gray-500 hover:text-gray-700 font-medium hover:font-bold"
          }`}
          onClick={() => toggleTab(2)}
        >
          <BiBriefcaseAlt2 className="text-3xl mr-2" />
          <h3 className="text-xl ">Work</h3>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
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
    </div>
  );
}
