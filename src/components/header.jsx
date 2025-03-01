import React from 'react';
import './headerstyle.css';
import { motion } from "motion/react"

const Header = (App) => {

    const skillClick = () => {
        window.scrollTo({
            top: 800, 
            behavior: 'smooth'
        });
    };
    const homeClick = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };
    const prjClick = () => {
        window.scrollTo({
            top: 480, 
            behavior: 'smooth'
        });
    };

    return (
        <div id="header" className='h-10 w-screen flex justify-around items-center fixed z-10 top-0 left-0 '>
            <div><h2 id="name">SahilAdit.exe</h2></div>
            <div id='navRight' className='h-full md:flex static justify-between w-1/3 mr-32 gap-7 items-center hidden md:left-56'>
                <button onClick={homeClick}><h3>Home</h3></button>
                <button onClick={skillClick}><motion.h3 initial={{opacity:0}} animate={{opacity:1}}>Skills</motion.h3></button>
                <button onClick={prjClick}><h3>Projects</h3></button>
            </div>
            <div className='md:hidden block relative text-white text-2xl left-5 p-5'><i class="fa-solid fa-bars"></i></div>
        </div>
    );
}

export default Header;
