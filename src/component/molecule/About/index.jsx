import Image from 'next/image';
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FiBriefcase } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { AiOutlineFileText } from "react-icons/ai";
import Profile from "@/images/22.jpeg"

export default function About() {
    return (
        <div className="w-[80%] mx-auto flex flex-col gap-16 items-center justify-center font-sans h-screen" id='about'>
            <div className="text-center flex flex-col gap-4">
                <h2 className="text-5xl font-semibold">About Me</h2>
                <p className="text-xl ">My Introduction</p>
            </div>
            <div className="flex justify-between ">
                <div className="w-[400px]">
                    <div className=" w-full  rounded-3xl ">
                        <Image 
                            src={Profile}
                            alt="Profile" 
                            className="object-contain rounded-2xl"
                        />
                    </div>
                </div>
                <div className="w-[60%] flex flex-col gap-10">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="rounded-lg overflow-hidden shadow-md p-4 text-center cursor-pointer hover:shadow-lg">
                            <HiOutlineAcademicCap className="text-2xl font-bold mx-auto" />
                            <p className="font-bold">Academic</p>
                            <p>B.E - 8.1</p>
                        </div>
                        <div className=" rounded-lg overflow-hidden shadow-md p-4 text-center cursor-pointer hover:shadow-lg">
                            <FiBriefcase className="text-2xl font-bold mx-auto" />
                            <p className="font-bold">Completed</p>
                            <p>6+ Projects</p>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-md p-4 text-center cursor-pointer hover:shadow-lg">
                            <BiSupport className="text-2xl font-bold mx-auto" />
                            <p className="font-bold">Support</p>
                            <p>Online 24/7</p>
                        </div>
                    </div>
                    <div className="">
                        <p className="text-xl w-[80%] text-gray-500">
                            Frontend Developer, I create web pages with UI / UX user interface using React.js.
                            I have completed several projects during by B.E Journey.
                        </p>
                    </div>
                    <div>
                        <a href="/Maaz_Resume_final_1.pdf" download="Maaz Resume final 1" className="no-underline">
                            <div className="flex max-w-max items-center justify-center rounded-lg bg-gray-800 text-white text-center py-5 px-5 cursor-pointer text-base gap-2 hover:bg-black">
                                Download CV<AiOutlineFileText />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}