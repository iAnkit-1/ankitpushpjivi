import React from 'react';
import { motion } from 'framer-motion';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import node from '../assets/node.jpg';
import express from '../assets/express.png';
import mongodb from '../assets/mongodb.jpg';
import github from '../assets/github.jpg';
import vite from '../assets/vite.jpg';

const skills = [
  { src: html, alt: "HTML", name: "HTML" },
  { src: css, alt: "CSS", name: "CSS" },
  { src: javascript, alt: "JavaScript", name: "JavaScript" },
  { src: tailwind, alt: "Tailwind", name: "Tailwind" },
  { src: react, alt: "React", name: "React" },
  { src: vite, alt: "Vite", name: "Vite" },
  { src: node, alt: "Node.js", name: "Node.js" },
  { src: express, alt: "Express.js", name: "Express.js" },
  { src: mongodb, alt: "MongoDB", name: "MongoDB" },
  { src: github, alt: "GitHub", name: "GitHub" },
];

const Skills = () => {
  const row1 = skills.slice(0, 5);
  const row2 = skills.slice(5, 10);

  return (
    <div className="border-none bg-black text-gray-400 md:h-[300px] max-w-[1200px] mx-auto overflow-hidden" id="skills">
      <div className="grid grid-rows-2 gap-4">
        <motion.div
          className="flex"
          animate={{ x: [0, -1200, 0] }} // Adjust -1200 based on the width of your content
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        >
          {row1.map((skill, index) => (
            <div key={index} className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
              <img src={skill.src} alt={skill.alt} width={100} height={100} />
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
          {row1.map((skill, index) => (
            <div key={index + row1.length} className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
              <img src={skill.src} alt={skill.alt} width={100} height={100} />
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex"
          animate={{ x: [0, 1200, 0] }} // Adjust 1200 based on the width of your content
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        >
          {row2.map((skill, index) => (
            <div key={index} className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
              <img src={skill.src} alt={skill.alt} width={100} height={100} />
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
          {row2.map((skill, index) => (
            <div key={index + row2.length} className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
              <img src={skill.src} alt={skill.alt} width={100} height={100} />
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;