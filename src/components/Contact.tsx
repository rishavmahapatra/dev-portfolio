'use client';

import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoMdCall } from 'react-icons/io';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import SectionParagraph from './SectionParagraph';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      id='contact'
      className='relative text-white px-3 sm:px-16 w-full h-fit mt-20'
    >
      <SectionHeading>Keep In Touch</SectionHeading>
      <SectionParagraph>
      I&apos;m always open to discussing exciting opportunities in front-end development, whether it&apos;s <br className='hidden sm:block' /> collaborating on innovative projects or joining a team to tackle new challenges.
         <br className='hidden sm:block' />  Let&apos;s connect and explore how I can help bring your next idea to life.
      </SectionParagraph>
      <div className='flex items-center justify-center flex-wrap gap-3 mb-16 md:gap-4 mt-8'>
        <Link
          href={'https://www.linkedin.com/in/rishav-mahapatra'}
          target='_blank'
        >
          <div className='bg-white hover:bg-blue-100  flex items-center gap-2 py-1 px-4 rounded-md'>
            <BsLinkedin className='text-md cursor-pointer text-[#0a66c2]' />
            <p className='text-black font-fira font-normal'>Linkedin</p>
          </div>
        </Link>
        <Link href={'https://github.com/rishavmahapatra'} target='_blank'>
          <div className='bg-white hover:bg-[#b5b5b5] flex items-center gap-2 py-1 px-4 rounded-md'>
            <BsGithub className='text-lg cursor-pointer text-black' />
            <p className='text-black font-fira font-normal'>Github</p>
          </div>
        </Link>
        <Link href={'mailto:rishavmahapatra24@gmail.com'} target='_blank'>
          <div className='bg-white hover:bg-green-100 flex items-center gap-2 py-1 px-4 rounded-md'>
            <AiOutlineMail className='text-lg cursor-pointer text-red-600' />
            <p className='text-black font-fira font-normal'>Email</p>
          </div>
        </Link>
        <div className='bg-white hover:bg-red-100 flex items-center gap-2 py-1 px-4 rounded-md'>
            <IoMdCall className='text-lg cursor-pointer text-green-600' />
            <p className='text-black font-fira font-normal'>+91 8839705767</p>
          </div>
      </div>
      
      {/* <div className='mt-16 mb-4 text-center text-lg sm:text-xl font-roboto font-normal'>
        Designed and Developed by{' '}
        <span className='text-[#3CCF91]'>Mohammad Shahnawaz</span>. <br /> Built
        with <span className='text-[#3CCF91]'>Next.js 13</span> &{' '}
        <span className='text-[#3CCF91]'>Tailwind Css</span>.
      </div> */}
    </motion.div>
  );
};

export default Contact;
