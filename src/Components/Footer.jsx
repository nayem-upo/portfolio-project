import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0" className='py-5 z-50 mt-10 rounded-t-3xl md:rounded-t-full bg-gradient-to-r to-[#220D3E]  dark:to-[#202f53] dark:from-[#182340] dark:via-[#2c6779] via-[#3D0646] from-[#4c0457]'>
            <div className='flex gap-5 py-5 justify-center'>
                <Link target='_blank' to="https://github.com/nayem-upo"><FaGithub className='text-2xl hover:scale-125 text-white hover:text-[#1ed2ff] dark:hover:text-[#38D9A9] duration-200 cursor-pointer' /></Link>
                <Link target='_blank' to="https://www.facebook.com/uponayem"><FaFacebook className='text-2xl hover:scale-125 text-white hover:text-[#1ed2ff] dark:hover:text-[#38D9A9] duration-200 cursor-pointer' /></Link>
                <Link target='_blank' to="https://www.linkedin.com/in/naem0/"><FaLinkedin className='text-2xl hover:scale-125 text-white hover:text-[#1ed2ff] dark:hover:text-[#38D9A9] duration-200 cursor-pointer' /></Link>
            </div>
            <h1 className='md:text-2xl text-xl text-white text-center md:mb-10 mb-2'>Designed and Developed by <span className='text-[#1ed2ff]'>Md Naem</span></h1>
            <p className='text-white text-center'>Copyright Ⓒ 2023. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;