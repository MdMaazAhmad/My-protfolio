'use client'

import React, { useState, useEffect } from 'react';
import { MdVerified } from "react-icons/md";
import Angular from "@/images/Skills/Angular.png";
import Antd from "@/images/Skills/antd.jpeg"
import Bootstrap from "@/images/Skills/Bootstarp.png"
import CSS3Image from "@/images/Skills/CSS3.png"
import Cursor from "@/images/Skills/Cursor.jpeg"
import Express from "@/images/Skills/express.jpeg"
import Framer from "@/images/Skills/FramerMotion.png"
import Git from "@/images/Skills/Git.png"
import HTML5Image from "@/images/Skills/HTML5.png"
import Javascript from "@/images/Skills/Javascript.png"
import Jest from "@/images/Skills/jest.png"
import MantineUI from "@/images/Skills/mantine-ui.png"
import MaterialUI from "@/images/Skills/Material-ui.png"
import MongoDB from "@/images/Skills/MongoDB.png"
import MySQL from "@/images/Skills/mysql.png"
import Next from "@/images/Skills/Next.png"
import Node from "@/images/Skills/node.png"
import Npm from "@/images/Skills/npm.png"
import Pnpm from "@/images/Skills/pnpm.png"
import ReactImage from "@/images/Skills/React.png"
import Redux from "@/images/Skills/Redux.png"
import Tailwind from "@/images/Skills/Tailwind.jpeg"
import Typescript from "@/images/Skills/Typescript.png"
import VScode from "@/images/Skills/VScode.jpeg"
import Vue from "@/images/Skills/Vue.png"
import Yarn from "@/images/Skills/yarn.png"

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: [
                { name: "React.js", level: ReactImage },
                { name: "Next.js", level: Next },
                { name: "Redux Toolkit", level: Redux },
                { name: "TypeScript", level: Typescript },
                { name: "JavaScript", level: Javascript },
                { name: "Angular.js", level: Angular },
                { name: "Vue.js", level: Vue },
                { name: "Tailwind CSS", level: Tailwind },
                { name: "Material-UI", level: MaterialUI },
                { name: "Ant Design", level: Antd },
                { name: "Bootstrap", level: Bootstrap},
                { name: "Mantine UI", level: MantineUI},
                { name: "Framer Motion", level: Framer},
            ]
        },
        {
            title: "Backend & Database",
            skills: [
                { name: "Node.js", level: Node },
                { name: "Express.js", level: Express },
                { name: "MySQL", level: MySQL },
                { name: "MongoDB", level: MongoDB },
            ]
        },
        {
            title: "Tools, Testing & Others",
            skills: [
                { name: "Git", level: Git },
                { name: "Jest", level: Jest },
                { name: "Visual Studio", level: VScode },
                { name: "Cursor", level: Cursor },
                { name: "NPM", level: Npm },
                { name: "Yarn", level: Yarn },
                { name: "PNPM", level: Pnpm },
            ]
        }
    ];

    const SkillItem = ({ skill }) => {
        if (!skill) return null;
        
        return (
            <div className='flex flex-col justify-center items-center rounded-lg overflow-hidden gap-3 shadow-md p-3 transition-transform hover:scale-105'>
                <div className="w-full flex justify-center items-center h-24 sm:h-28 md:h-32">
                    <img 
                        src={skill.level.src} 
                        alt={skill.name} 
                        title={skill.name} 
                        className='max-w-full max-h-full object-contain rounded-lg' 
                    />
                </div>
                <p className="text-gray-900 font-semibold text-center text-sm sm:text-base">{skill.name}</p>
            </div>
        );
    };

    // Responsive grid instead of fixed rows
    const renderSkillsGrid = (skills) => {
        return (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4">
                {skills.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                ))}
            </div>
        );
    };

    return (
        <div className="w-full px-4 sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto font-sans min-h-screen py-8 md:py-16" id='skills'>
            <div className="flex flex-col gap-4 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Skills</h1>
                <p className="text-lg md:text-xl">My Technical Level</p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 justify-center items-center w-full">
                {skillCategories.map((category, categoryIndex) => (
                    <div 
                        key={categoryIndex} 
                        className="flex flex-col gap-5 p-4"
                    >
                        <div className="text-center p-3 md:p-5">
                            <h2 className="text-xl md:text-2xl font-bold">{category.title}</h2>
                        </div>
                        <div className="w-full">
                            {renderSkillsGrid(category.skills)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}