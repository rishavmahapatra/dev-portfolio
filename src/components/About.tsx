"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About", 0.8);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      // animate={{opacity: 1}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      // viewport={{ once: true }}
      id="about"
      className="sm:mt-1 scroll-m-32 relative text-white px-3 sm:px-16 w-full h-fit flex justify-center"
    >
      <div className="bg-[#2a4942] rounded-md p-6 md:p-8  shadow-xl w-full lg:w-3/4">
        <h2 className="text-3xl text-[#3CCF91] mb-2 font-fira font-medium">
          About Me
        </h2>
        <p className=" text-[white] text-[17px] sm:text-xl font-roboto font-normal">
          Hi, This is Rishav Mahapatra. As a Front-End Developer with over 3.6
          years of experience, I specialize in building dynamic, responsive, and
          user-centric web applications using modern front-end technologies. My
          expertise centers around React.js and related tools, creating seamless
          digital experiences that focus on both functionality and aesthetics.
          <br/> <br/>
          My passion lies in crafting efficient, maintainable code that powers
          fast, scalable applications, helping businesses deliver exceptional
          user experiences.
          <br /> <br />
          I am currently working at Tata Consultancy Services (TCS). I thrive in cross-functional teams, contributing to collaborative
          problem-solving in Agile environments. I actively
          keep up with the latest web technologies and frameworks, staying ahead
          of industry trends and best practices. <br />  <br /> 🎓 Educational
          Background- <br /><br />I hold a Bachelor of Technology (B. Tech) degree in
          Information Technology from SRM University-Chennai, where I cultivated
          a strong foundation in computer science, problem-solving, and software
          development methodologies.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
