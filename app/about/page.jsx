"use client"

import React from "react";
import { useState, useEffect } from "react";

const About = () => {


  const EncryptionText = ({ text, speed = 100, duration = 2000 }) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    const [displayedText, setDisplayedText] = useState(text);
    const [running, setRunning] = useState(true);
  
    useEffect(() => {
      let interval;
      let timeout;
  
      if (running) {
        let iterations = 0;
        interval = setInterval(() => {
          setDisplayedText((prev) =>
            prev
              .split("")
              .map((char, i) =>
                Math.random() > 0.5 ? chars[Math.floor(Math.random() * chars.length)] : text[i]
              )
              .join("")
          );
          iterations++;
  
          // Stop after a set duration
          if (iterations > duration / speed) {
            clearInterval(interval);
            setDisplayedText(text);
            setRunning(false);
          }
        }, speed);
      }
  
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }, [running, text, speed, duration]);
    return <span>{displayedText}</span>;
  };

  return (
    <div className="flex flex-grow flex-row justify-between items-center p-10 space-y-6">
      <div className="">
        <h1 className="text-4xl font-bold text-[#61afef] pb-5">
        <EncryptionText text="About" speed={100} duration={2000} />
        </h1>
        <p className="max-w-[600px] text-lg text-[#abb2bf]">
          Hello, my name is Samitha Sandaruwan. I am a Software Engineer with a
          passion for building high-quality applications.I specialize in Web
          Development, with experience in frontend and backend technologies,
          including React, Next.js, Node.js, and MongoDB. Additionally, I have
          worked on UI/UX design, requirement engineering, and software
          testing.My goal is to create highly performant applications that solve
          real-world problems and provide users with an exceptional experience.
        </p>
        <div className="p-5">
          <h3>Tech Stack💻</h3>
          <div className="flex flex-row flex-wrap gap-2">
          <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" />
          <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
          <img src="https://img.shields.io/badge/python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white" />
          <img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" />{" "}
          <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />{" "}
          <img src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white" />{" "}
          <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />{" "}
          <img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white" />{" "}
          <img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB" />
          <img src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/>
          <img src="https://img.shields.io/badge/mysql-%2300f.svg?&style=for-the-badge&logo=mysql&logoColor=white" />{" "}
          <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white" />
          <img src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white" />{" "}
          <img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white" />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default About;
