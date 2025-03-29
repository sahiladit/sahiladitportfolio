import React, { useState } from 'react';
import './headerstyle.css';
import { motion } from "framer-motion";

const Header = (App) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const skillClick = () => {
        window.scrollTo({
            top: document.getElementById('page2').offsetTop - 50,
            behavior: 'smooth'
        });
        closeMenu();
    };
    const homeClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        closeMenu();
    };
    const prjClick = () => {
        window.scrollTo({
            top: document.getElementById('page3').offsetTop - 50,
            behavior: 'smooth'
        });
        closeMenu();
    };

    return (
        <div>
            {/* Blurred Background Overlay */}
            {menuOpen && (
                <div 
                    className="fixed inset-0 bg-opacity-50 backdrop-blur-md z-20"
                    onClick={closeMenu} // Clicking outside menu closes it
                ></div>
            )}

            <div id="header"  className='h-10 w-screen flex justify-around items-center fixed z-30 top-0 left-0'>
                <div><a href='https://sahiladitportfolio.vercel.app/'><h2 id="name">SahilAdit.exe</h2></a></div>
                <div id='navRight' className='h-full md:flex static justify-between w-1/3 mr-32 gap-7 items-center hidden md:left-56'>
                    <button onClick={homeClick}><h3>Home</h3></button>
                    <button onClick={skillClick}><motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Skills</motion.h3></button>
                    <button onClick={prjClick}><h3>Projects</h3></button>
                </div>
                <div className='md:hidden block relative text-white text-2xl left-5 p-5' onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>

            {menuOpen && (
                <motion.div 
                    initial={{ x: "100%" }} 
                    animate={{ x: 0 }} 
                    exit={{ x: "100%" }} 
                    transition={{ duration: 0.3 }}
                    className='fixed top-0 right-0 w-2/3 h-screen bg-[#484848] rounded-l-2xl text-white p-5 shadow-lg z-30 flex flex-col gap-5'
                >
                    <button className='text-3xl self-end relative right-5 top-2' onClick={closeMenu}><i className="fa-solid fa-xmark"></i></button>
                    <button onClick={homeClick}><h3>Home</h3></button>
                    <button onClick={skillClick}><h3>Skills</h3></button>
                    <button onClick={prjClick}><h3>Projects</h3></button>
                </motion.div>
            )}
        </div>
    );
}

export default Header;