import Image from "next/image";
import Header from "@/component/molecule/Header";
import HomeSection from "@/component/molecule/Home";
import About from "@/component/molecule/About";
import Skills from "@/component/molecule/Skills";
import Qualification from "@/component/molecule/Qualification";
import Contact from "@/component/molecule/Contact";

export default function Home() {
  return (
    <div >
      <Header/>
      <HomeSection/>
      <About/>
      <Skills/>
      <Qualification/>
      <Contact/>
    </div>
  );
}
