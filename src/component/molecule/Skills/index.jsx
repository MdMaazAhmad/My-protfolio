'use client'

import React from 'react';
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
            ],
            itemsPerRow: 5
        },
        {
            title: "Backend & Database",
            skills: [
                { name: "Node.js", level: Node },
                { name: "Express.js", level: Express },
                { name: "MySQL", level: MySQL },
                { name: "MongoDB", level: MongoDB },
            ],
            itemsPerRow: 4
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
            ],
            itemsPerRow: 5
        }
    ];

    const SkillItem = ({ skill }) => {
        if (!skill) return <div></div>; // Empty div for alignment when no skill
        
        return (
            <div className='flex flex-col justify-center items-center rounded-lg overflow-hidden gap-5 shadow-md p-4'>
                <img src={skill.level.src} alt={skill.name} title={skill.name} className='min-w-[150px] max-w-[250px] h-[125px] rounded-2xl' />
                <p className="text-gray-900 font-semibold">{skill.name}</p>
            </div>
        );
    };

    // Function to split skills into rows based on category configuration
    const renderSkillsInRows = (skills, itemsPerRow) => {
        // Use the category-specific itemsPerRow or default to 5
        const rowSize = itemsPerRow || 5;
        
        // Split skills into chunks based on the specified row size
        const rows = [];
        for (let i = 0; i < skills.length; i += rowSize) {
            rows.push(skills.slice(i, i + rowSize));
        }

        return (
            <div className="flex flex-col items-center gap-6">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex justify-center gap-6">
                        {row.map((skill, skillIndex) => (
                            <SkillItem key={skillIndex} skill={skill} />
                        ))}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="w-[80%] mx-auto font-sans min-h-screen py-16" id='skills'>
            <div className="flex flex-col gap-4 text-center">
                <h1 className="text-5xl font-semibold">Skills</h1>
                <p className="text-xl">My Technical Level</p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 mt-16">
                {skillCategories.map((category, categoryIndex) => (
                    <div 
                        key={categoryIndex} 
                        className="flex flex-col gap-5 p-4"
                    >
                        <div className="text-center p-5">
                            <h2 className="text-2xl font-bold">{category.title}</h2>
                        </div>
                        <div className="flex justify-center w-full">
                            {renderSkillsInRows(category.skills, category.itemsPerRow)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}