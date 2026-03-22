import Image from "next/image";
import BaseNavbar from "./components/basenavbar"
import Hero from "./components/hero";
import Navbar from "./components/navbar"
import ExamSection from "./cards/page";
import Exams from "./exams/page";

export default function Home() {
  return (
    <>
    <BaseNavbar/>

    
    <Hero/>
    <Navbar/>
    <ExamSection/>
    <Navbar/>
    <Exams/>

    
    </>
    
    
  );
}
