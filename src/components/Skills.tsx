'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../lib/data';
import SectionHeading from './SectionHeading';
import SectionParagraph from './SectionParagraph';
import { useSectionInView } from '../lib/hooks';

const Skills = () => {
  const { ref } = useSectionInView('Skills', 0.8);

  return (
    <div
      ref={ref}
      id='skills'
      className='scroll-m-16 relative text-white px-3 sm:px-16 w-full h-full mt-20'
    >
      <SectionHeading>My Skills</SectionHeading>
      <SectionParagraph>
        The Skills, tools and technologies that I frequently use while building projects.
      </SectionParagraph>
      <div className='flex items-center justify-center gap-3 flex-wrap mt-4'>
        {skills.map((item, index) => (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.08 * index,
            }}
            viewport={{
              once: true,
            }}
            onContextMenu={(e) => e.preventDefault()}
            key={item.id}
            className='w-28 xs:w-40 h-14 flex items-center justify-center gap-2 bg-white p-1 rounded-md shadow-lg'
          >
            <img src={item.icon} alt='SVG' className='w-8 xs:w-10 sm:w-11' />
            <p className='text-black font-roboto font-normal'>{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
