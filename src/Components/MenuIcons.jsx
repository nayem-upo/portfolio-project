import React, { useState } from 'react';
import { FaBriefcase, FaTrello, FaUser } from 'react-icons/fa';
import { BiMessageDetail } from "react-icons/bi";
import { Link } from 'react-scroll';

const MenuIcons = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleSetActive = (to) => {
        setActiveLink(to);
    };

    return (
        <div className="fixed md:bottom-10 bottom-6 md:top-auto md:left-0 w-full flex md:items-center left-20 md:justify-center z-40">
            <div className="">
                <ul className="menu lg:menu-horizontal menu-horizontal items-center rounded-roll backdrop-blur bg-[#571f5f58] dark:bg-[#22356153] p-0">
                    <li className='duration-200 text-white dark:text-[#38D9A9] hover:text-[#DC0DFE]'>
                        <Link to="home"
                            activeClass='active'
                            spy={true}
                            offset={-70}
                            duration={500}
                            onSetActive={handleSetActive}
                            className={activeLink === 'home' ? 'active' : ''}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        </Link>
                    </li>
                    <li className='duration-200 text-white dark:text-[#38D9A9]'>
                        <Link to="about"
                            activeClass='active'
                            spy={true}
                            offset={-70}
                            duration={500}
                            onSetActive={handleSetActive}
                            className={activeLink === 'about' ? 'active' : ''}>
                            <FaUser className='text-lg h-8' />
                        </Link>
                    </li>
                    <li className='duration-200 text-white dark:text-[#38D9A9]'>
                        <Link to="service"
                            activeClass='active'
                            spy={true}
                            offset={-70}
                            duration={500}
                            onSetActive={handleSetActive}
                            className={activeLink === 'service' ? 'active' : ''}>
                            <FaTrello className='text-l h-8 w-5' />
                        </Link>
                    </li>
                    <li className='duration-200 text-white dark:text-[#38D9A9]'>
                        <Link to="works"
                            activeClass='active'
                            spy={true}
                            offset={-70}
                            duration={500}
                            onSetActive={handleSetActive}
                            className={activeLink === 'works' ? 'active' : ''}>
                            <FaBriefcase className='text-xl h-8 w-6' />
                        </Link>
                    </li>
                    <li className='duration-200 text-white dark:text-[#38D9A9]'>
                        <Link to="contact"
                            activeClass='active'
                            spy={true}
                            offset={-70}
                            duration={500}
                            onSetActive={handleSetActive}
                            className={activeLink === 'contact' ? 'active' : ''}>
                            <BiMessageDetail className='text-xl h-8 w-6' />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default MenuIcons;