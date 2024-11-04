// 'use client';

// import React from 'react';
// import { useSectionInView } from '../lib/hooks';
// import ProjectCard from './ProjectCard';
// import { experienceDetails } from '../lib/data';
// import SectionHeading from './SectionHeading';
// import SectionParagraph from './SectionParagraph';

// type projectProps = (typeof experienceDetails)[number];
// const Experience = () => {
//   const { ref } = useSectionInView('Experience');

//   return (
//     // <div
//     //   // ref={ref}
//     //   id='experience'
//     //   className='scroll-m-16 relative text-white px-3 sm:px-16 w-full h-fit mt-20'
//     // >
//       <SectionHeading>Experience</SectionHeading>
//       <SectionParagraph>
//         {' '}
//         I love building projects and practice my engineering skills, here&apos;s
//         are some of my project that I&apos;ve worked on and you can check all of
//         my projects by visiting My{' dss'}
//       </SectionParagraph>

//       <div>
//       <div className='grid sm:grid-cols-2 gap-5 md:gap-7 mt-4'>
//         {experienceDetails[1].companyName}
//         {/* {experienceDetails.map((id, index) => (
//           <React.Fragment key={index}>
//             <>{experienceDetails[index].id}</>
//             <ProjectCard {...info} />
//           </React.Fragment>
//         ))} */}
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;
