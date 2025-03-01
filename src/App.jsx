import React from 'react';
import Header from './components/header';
import Loader from './components/loader';
import Grain from './components/grainy';
import { motion } from "framer-motion";
import myImage from './components/assets/myImage.jpeg';
import Cursor from './components/Cursor';
import Card from './components/Card';
import './App.css';

const App = () => {


  return (
    <div>
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

      <div id="page2" className="h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center text-center px-6 md:px-16">\
        
      </div>

      <div id='page3' className='relative flex justify-center items-center h-screen w-screen top-0 left-0'>
        <h2 className='absolute top-13 text-2xl text-yellow-300'>Projects</h2>
        <Card name='test'></Card>
      </div>
    </div>
  );
}

export default App;

