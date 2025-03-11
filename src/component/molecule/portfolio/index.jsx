import React, { useState } from 'react';
import Image from 'next/image';
import { RightOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import HMS from './HMS';
import BRMS from './BRMS';
import CMC from './CMC';
import WW from './WW';
import EBS from './EBS';
import TBT from './TBT';

export default function Portfolio() {
  const [showHMS, setShowHMS] = useState(false);
  const [showBRMS, setShowBRMS] = useState(false);
  const [showCMC, setShowCMC] = useState(false);
  const [showWW, setShowWW] = useState(false);
  const [showEBS, setShowEBS] = useState(false);
  const [showTBT, setShowTBT] = useState(false);

  const closeHMS = () => setShowHMS(false);
  const closeBRMS = () => setShowBRMS(false);
  const closeCMC = () => setShowCMC(false);
  const closeWW = () => setShowWW(false);
  const closeEBS = () => setShowEBS(false);
  const closeTBT = () => setShowTBT(false);

  const projects = [
    {
      id: 1,
      title: "Hotel Management System",
      image: "/images/5.jfif",
      onClick: () => setShowHMS(true),
      categories: ["all", "web"]
    },
    {
      id: 2,
      title: "Bike Rental Management System",
      image: "/images/4.jfif",
      onClick: () => setShowBRMS(true),
      categories: ["all", "web"]
    },
    {
      id: 3,
      title: "Car EMI Calculator",
      image: "/images/6.jfif",
      onClick: () => setShowCMC(true),
      categories: ["all", "app"]
    },
    {
      id: 4,
      title: "Working Windmill",
      image: "/images/7.jfif",
      onClick: () => setShowWW(true),
      categories: ["all", "app"]
    },
    {
      id: 5,
      title: "Event Booking System",
      image: "/images/2.jfif",
      onClick: () => setShowEBS(true),
      categories: ["all", "web"]
    },
    {
      id: 6,
      title: "Placement Management, Prediction & Recommendation System",
      image: "/images/1.webp",
      onClick: null,
      categories: ["all", "web"]
    },
    {
      id: 7,
      title: "ToolBox Talk",
      image: "/images/2.jfif",
      onClick: () => setShowTBT(true),
      categories: ["all", "web"]
    }
  ];

  // Ant Design Tabs items
  const items = [
    {
      key: '1',
      label: 'All',
      children: <ProjectGrid projects={projects.filter(project => project.categories.includes("all"))} />
    },
    {
      key: '2',
      label: 'Web',
      children: <ProjectGrid projects={projects.filter(project => project.categories.includes("web"))} />
    },
    {
      key: '3',
      label: 'App',
      children: <ProjectGrid projects={projects.filter(project => project.categories.includes("app"))} />
    }
  ];

  return (
    <div className="py-8 px-10 md:px-40 font-sans min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-0">Portfolio</h1>
        <p className="mt-2">Most recent work</p>
      </div>

      <div className="portfolio-content">
        <Tabs 
          defaultActiveKey="1" 
          items={items}
          centered
          className="mb-8"
        />
        
        {/* Project modals */}
        {showHMS && <HMS closeHMS={closeHMS} />}
        {showBRMS && <BRMS closeBRMS={closeBRMS} />}
        {showCMC && <CMC closeCMC={closeCMC} />}
        {showWW && <WW closeWW={closeWW} />}
        {showEBS && <EBS closeEBS={closeEBS} />}
        {showTBT && <TBT closeTBT={closeTBT} />}
      </div>
    </div>
  );
}

function ProjectGrid({ projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          image={project.image}
          onClick={project.onClick}
        />
      ))}
    </div>
  );
}

function ProjectCard({ title, image, onClick }) {
  return (
    <div 
      className="rounded-lg overflow-hidden shadow-lg p-6 cursor-pointer transform transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden shadow-md">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p className="flex items-center hover:mr-2 cursor-pointer group">
          Read More
          <RightOutlined className="ml-2 group-hover:ml-3 transition-all" />
        </p>
      </div>
    </div>
  );
}