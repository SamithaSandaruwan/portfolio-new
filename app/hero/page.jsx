"use client";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import myImage from "@/public/Hero.png"; 


const Hero = () => {
  return (
    <section className="relative flex justify-between items-center p-10 bg-[#1e1e1e] text-white">
      
      <div className="w-2/3 space-y-6 z-10">
        <h1 className="text-4xl font-bold text-[#61afef]">
          Hi there,<br />
          My name is <span className="text-[#98c379]">Samitha Sandaruwan</span>
        </h1>
        <h2 className="text-3xl font-medium text-[#abb2bf]">
          I am <span className="text-[#c678dd]">
            <Typewriter
              words={["a Full-Stack Developer", "a Front-End Developer", "a UI/UX Designer"]}
              loop={0}  
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50} 
              delaySpeed={1000} 
            />
          </span>
        </h2>
        <div>
          <p className="text-lg text-[#abb2bf]">
            I specialize in creating web applications using modern technologies like React, Node.js, and more.
          </p>
        </div>

        <div className="space-x-4">
          <button className="bg-[#6dc36e] text-white py-2 px-6 rounded-md hover:bg-[#75b351]">
            Get In Touch
          </button>
          <button className="bg-[#e06c75] text-white py-2 px-6 rounded-md hover:bg-[#d55c67]">
            Download Resume
          </button>
        </div>
      </div>

      <div className="w-1/3">
        <Image
          src={myImage}
          alt="Samitha Sandaruwan"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
};

export default Hero;
