'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypeTextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        'Front End Developer',
        1000,
        'React.JS Developer',
        1000,
        'Next.JS Developer',
        1000,
        'Software Engineer',
        1000,
        'Web Developer',
        1000,
        'UI/UX Developer',
        1000,
      ]}
      repeat={Infinity}
      cursor={true}
      wrapper='span'
      className='text-xl sm:text-3xl font-fira font-normal'
    />
  );
};

export default TypeTextAnimation;
