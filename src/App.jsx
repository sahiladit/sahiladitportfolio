import React from 'react';
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
import vehicledetectcnt from "./components/assets/vehicledetection.jpg"
import medikeepsimg from "./components/assets/medikeepsimg.png";
import sha from "./components/assets/sha.png";
import sustautmodel from "./components/assets/sustautmodel.png";
import db from "./components/assets/db.png";
import Terminal from './components/termninal';


const App = () => {

  const projects = [
    {
      name: 'HaHaTab (Chrome Ext.)',
      image: hahatabimg,
      link: 'https://github.com/sahiladit/HaHaTab'
    },
    {
      name: 'Email Composer',
      image: emailcompimg,
      link: 'https://github.com/sahiladit/Email-Composer-Bot'
    },
    {
      name: 'Vehicle Detection count',
      image: vehicledetectcnt,
      link: 'https://github.com/sahiladit/Vehicle-Detection-count'
    },
    {
      name: 'MediKeeps',
      image: medikeepsimg,
      link: 'https://github.com/sahiladit/MediKeeps'
    },
    {
      name: 'Sustainable Home Auto.',
      image: sha,
      link: 'https://github.com/sahiladit/sustainable-automation'
    },
    {
      name: 'AI Agent',
      image: sustautmodel,
      link: 'https://github.com/sahiladit/sustainable-automation-ai-agent'
    },
    {
      name: 'Database Management',
      image: db,
      link: 'https://github.com/sahiladit/database-management-in-c-'
    }
  ];
  

  return (
    <div>
      <Analytics/>
      <Cursor />
      <Grain />
      <Loader />
      <Header app={true} />

      <div id="page1" className="h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center text-center px-6 md:px-16">
        <div id='myimage' className="flex justify-center md:w-1/2 left-32">
          <motion.img
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
            src={myImage}
            alt="Profile"
            className="h-56 relative md:left-20 w-56 md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-full"
          />
        </div>

        <div id="info" className="text-white relative text-2xl md:w-1/2 -top-16 md:right-24 md:top-0 md:mb-0">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
            Welcome To My <br /> Portfolio Site
          </motion.h2>
        </div>
      </div>

      <div id="page2" className="h-screen w-screen flex flex-col md:flex-col items-center justify-center text-center px-6 md:px-16">
      <motion.h2 initial={{opacity:0}} whileInView={{opacity:100}} transition={{duration:1}} className='text-2xl text-white mt-10'>Skills</motion.h2>
        <Terminal></Terminal>
      </div>

      <div id='page3' className='relative flex  justify-center  items-center min-h-screen w-screen bg-gray-600  py-12 px-8 overflow-y-auto'>
        <motion.h2 initial={{opacity:0}} whileInView={{opacity:100}} transition={{duration:1}} className='absolute -top-1 text-2xl text-white mt-10'>Project Gallery</motion.h2>
        <div className='flex justify-center items-center flex-col md:flex-row flex-wrap sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-0 md:gap-12 p-8 max-w-6xl w-screen mx-auto z-10 opacity-65'>
          {projects.map((project, index) => (
            <motion.a 
              key={index} 
              href={project.link} 
              target='_blank' 
              rel='noopener noreferrer' 
              className='group'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.25 }}
            >
              <div className='proj flex flex-col  justify-center items-center bg-gray-800  rounded-2xl shadow-lg p-6 w-60 h-72 transition-transform transform group-hover:scale-105 group-hover:shadow-2xl duration-300'>
                <img src={project.image} alt={project.name} className='w-48 relative h-48 object-cover rounded-lg mb-4 border-2 border-gray-700'/>
                <p className= 'projName text-white  z-10 text-lg font-semibold text-center  group-hover:text-blue-400 transition-colors duration-300'>{project.name}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <footer className='h-16 w-screen flex items-center m-10 justify-center bg-gray-800 text-white opacity-75 rounded-b-4xl'>
        <p className='text-center'>This site is 99.9% bug-free. The remaining 0.1% is a feature</p>
      </footer>
    </div>
  );
}

export default App;