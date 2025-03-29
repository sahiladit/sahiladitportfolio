import React, { useEffect } from 'react';
import Header from './components/header';
import Loader from './components/loader';
import Grain from './components/grainy';
import { motion } from "framer-motion";
import myImage from './components/assets/myImage.jpeg';
import Cursor from './components/Cursor';
import Card from './components/Card';
import './App.css';
import { Analytics } from "@vercel/analytics/react";
import hahatabimg from "./components/assets/hahatab.png";
import emailcompimg from "./components/assets/emailcomposer.png";
import vehicledetectcnt from "./components/assets/vehicledetection.jpg";
import medikeepsimg from "./components/assets/medikeepsimg.png";
import sha from "./components/assets/sha.png";
import sustautmodel from "./components/assets/sustautmodel.png";
import db from "./components/assets/db.png";
import Terminal from './components/termninal';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const projects = [
    { name: 'HaHaTab (Chrome Ext.)', image: hahatabimg, link: 'https://github.com/sahiladit/HaHaTab' },
    { name: 'Email Composer', image: emailcompimg, link: 'https://github.com/sahiladit/Email-Composer-Bot' },
    { name: 'Vehicle Detection count', image: vehicledetectcnt, link: 'https://github.com/sahiladit/Vehicle-Detection-count' },
    { name: 'MediKeeps', image: medikeepsimg, link: 'https://github.com/sahiladit/MediKeeps' },
    { name: 'Sustainable Home Auto.', image: sha, link: 'https://github.com/sahiladit/sustainable-automation' },
    { name: 'AI Agent', image: sustautmodel, link: 'https://github.com/sahiladit/sustainable-automation-ai-agent' },
    { name: 'Database Management', image: db, link: 'https://github.com/sahiladit/database-management-in-c-' }
  ];

  return (
    <div>
      <Analytics />
      <Cursor />
      <Grain />
      <Loader />
      <Header app={true} />

      <div id="page1" className="overflow-x-hidden h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center text-center px-6 md:px-16">
        <div id='myimage' className="flex justify-center md:w-1/2 left-32">
          <motion.img initial={{ y: -20 }} whileInView={{ y: 0 }} transition={{ duration: 1 }}
            src={myImage} alt="Profile" className="h-56 relative md:left-20 w-56 md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-full" />
        </div>

        <div id="info" className="text-white relative text-2xl md:w-1/2 -top-16 md:right-24 md:top-0 md:mb-0">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          Hello, World!<br></br> Welcome to My Digital Space
          </motion.h2>
        </div>
      </div>

      <div id="page2" className="h-screen w-screen flex flex-col md:flex-col items-center justify-center text-center px-6 md:px-16">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className='text-2xl text-white top-175 md:top-200 absolute'>Skills</motion.h2>
        <Terminal />
        <div className='links flex md:scale-100 scale-150 items-center z-10  md:items-center justify-around relative p-5 md:p-0 md:text-4xl text-2xl h-12 w-1/2 rounded-4xl -top-1/4 bg-[#ffffffbd] md:-top-1/4 md:w-1/3'>
          <p id="linkscross" className='md:text-3xl text-xl'>>>></p>
          <a href="https://www.linkedin.com/in/sahiladit/" className='z-10 md:top-0 -top-1 relative' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://www.instagram.com/thesahiladit" className='z-10 relative md:top-0 -top-1' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-instagram"></i></a>
          <a href='https://github.com/sahiladit' className='z-10 relative md:top-0 -top-1' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-github"></i></a>
        </div>
      </div>

      <div id='page3' className='relative flex justify-center items-center min-h-screen w-screen bg-gray-600 py-12 px-8 overflow-y-auto'>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className='absolute -top-1 text-2xl text-white mt-10'>Project Gallery</motion.h2>
        <div className='proj flex flex-wrap justify-center gap-8 p-8 max-w-3/4 md:max-w-screen w-screen mx-auto z-10 opacity-65'>
          {projects.map((project, index) => (
            <motion.div key={index} className='group relative w-full mt-10 md:w-1/2 lg:w-1/3 xl:w-1/3 p-4'
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.25 }}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.name} className='w-full h-auto object-cover rounded-lg scale-100 aspect-video' />
                <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white text-lg font-semibold text-center md:hidden group-hover:block'>{project.name}</div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <footer className='h-16 w-screen relative md:mt-10 flex items-center m-10 justify-center bg-gray-800 text-white opacity-75 rounded-b-4xl'>
        <p className='text-center'>This site is 99.9% bug-free. The remaining 0.1% is a feature</p>
      </footer>
    </div>
  );
};

export default App;