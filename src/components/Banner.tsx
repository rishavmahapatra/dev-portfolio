'use client';

import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiOutlineDownload } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import TypeTextAnimation from './TypeTextAnimation';
import { useSectionInView } from '../lib/hooks';

const Banner = () => {
  const { ref } = useSectionInView('Home');
  const router = useRouter();

  return (
    <div className=' h-screen' ref={ref} id='home'>
      <motion.div
        initial={{ y: 100, x: '-50%', opacity: 0 }}
        animate={{ y: '-50%', x: '-50%', opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.7,
          type: 'spring',
          stiffness: 50,
        }}
        className=' absolute top-1/2 left-1/2 w-full text-center text-white px-3'
      >
        <h1 className='text-3xl sm:text-4xl md:text-5xl mb-2 font-roboto font-semibold'>
          Hi, I&apos;m <br className='sm:hidden' />
          Rishav Mahapatra
        </h1>

        <TypeTextAnimation />

        {/* social links */}
        <div className='flex items-center justify-center gap-3 md:gap-4 mt-4'>
          <Link
            href={'https://www.linkedin.com/in/rishav-mahapatra'}
            target='_blank'
          >
            <BsLinkedin className='text-[34px] cursor-pointer text-[#3CCF91]' />
          </Link>
          <Link href={'https://github.com/rishavmahapatra'} target='_blank'>
            <BsGithub className='text-[34px] cursor-pointer text-[#3CCF91]' />
          </Link>
        </div>

        <div className='flex justify-center items-center gap-3 mt-5'>
          <Link
            href={
              'https://drive.google.com/file/d/1Wa8D83iIKlTFYoSq2dZDwQHIk8vKCOS7/view?usp=sharing'
            }
            target='_blank'
            className='flex items-center justify-evenly w-32 xs:w-36 text-md border-2 border-[#3CCF91] rounded-3xl p-1 cursor-pointer hover:bg-[#3CCF91] hover:scale-105 transition-all'
          >
            <button className='text-lg font-fira font-normal'>Resume</button>
            <AiOutlineDownload className='text-lg' />
          </Link>

          <Link
            href={'#contact'}
            className='flex items-center justify-evenly w-32 xs:w-36 text-md border-2 border-[#3CCF91] rounded-3xl p-1 cursor-pointer hover:bg-[#3CCF91] hover:scale-105 transition-all'
          >
            <button className='text-lg font-fira font-normal'>Contact</button>
            <IoMdCall className='text-lg' />
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0, rotate: 90 }}
        animate={{ x: 0, opacity: 1, rotate: 90 }}
        transition={{
          delay: 0.2,
          duration: 0.7,
          type: 'spring',
          stiffness: 50,
        }}
        className='hidden fixed bottom-44 -right-32 rotate-90 text-white sm:flex items-center gap-4'
      >
        <p
          className='text-lg font-roboto font-semibold cursor-pointer'
          onClick={() => router.push('/email')}
        >
          rishavmahapatra24@gmail.com
        </p>
        <div className='w-20 h-[2px] bg-[#3CCF91]' />
      </motion.div>
    </div>
  );
};

export default Banner;
