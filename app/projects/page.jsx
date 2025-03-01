"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Project 1",
    description: "This is a project about ...",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    image: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    github: "https://github.com/yourproject1",
  },
  {
    name: "Project 2",
    description: "This project focuses on ...",
    technologies: ["Node.js", "MongoDB", "Express"],
    image: "https://via.placeholder.com/500x300",
    github: "https://github.com/yourproject2",
  },
  {
    name: "Project 3",
    description: "A web application for ...",
    technologies: ["JavaScript", "Firebase", "Redux"],
    image: "https://via.placeholder.com/500x300",
    github: "https://github.com/yourproject3",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const EncryptionText = ({ text, speed = 100, duration = 2000 }) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    const [displayedText, setDisplayedText] = useState(text);
    const [running, setRunning] = useState(true);

    useEffect(() => {
      let interval;

      if (running) {
        let iterations = 0;
        interval = setInterval(() => {
          setDisplayedText((prev) =>
            prev
              .split("")
              .map((char, i) =>
                Math.random() > 0.5
                  ? chars[Math.floor(Math.random() * chars.length)]
                  : text[i]
              )
              .join("")
          );
          iterations++;

          if (iterations > duration / speed) {
            clearInterval(interval);
            setDisplayedText(text);
            setRunning(false);
          }
        }, speed);
      }

      return () => clearInterval(interval);
    }, [running, text, speed, duration]);

    return <span>{displayedText}</span>;
  };

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-bold text-[#61afef] pb-5" data-aos="fade-up">
        <EncryptionText text=">_ My Projects" speed={100} duration={2000} />
      </h1>
      <div className="flex flex-col space-y-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-500 rounded-lg p-6 flex flex-col md:flex-row items-center shadow-md hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
          >
            {/* Left Side: Text Content */}
            <div className="md:w-3/4 w-full p-4 flex flex-col">
              <h2 className="text-2xl font-semibold text-white">
                {project.name}
              </h2>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="mt-3">
                <h3 className="font-medium text-[#61afef]">Technologies:</h3>
                <p className="text-gray-400">{project.technologies.join(", ")}</p>
              </div>
              <div className="mt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaGithub size={30} />
                </a>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="md:w-1/4 w-full flex justify-center md:justify-end">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg shadow-md w-[500px] h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
