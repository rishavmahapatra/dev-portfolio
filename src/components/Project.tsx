'use client';

import React from 'react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import { projectDetails } from '../lib/data';
import SectionHeading from './SectionHeading';
import SectionParagraph from './SectionParagraph';

import { useSectionInView } from '../lib/hooks';

const Project = () => {
  const { ref } = useSectionInView('Projects', 0.8);

  return (
    <div
      ref={ref}
      id='projects'
      className='scroll-m-16 relative text-white px-3 sm:px-16 w-full h-fit mt-20'
    >
      <SectionHeading>Projects</SectionHeading>
      <SectionParagraph>
        {' '}
        I love building projects and practice my engineering skills. Here are some of my project that I&apos;ve worked on. You can check all of
        my projects by visiting My{' '}
        <Link className=' hover:text-blue-400' href={'https://github.com/rishavmahapatra'}>Github Profile</Link>.
      </SectionParagraph>

      <div className='grid sm:grid-cols-2 gap-5 md:gap-7 mt-4'>
        {projectDetails.map((info, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...info} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Project;
