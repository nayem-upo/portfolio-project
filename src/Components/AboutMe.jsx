import React from 'react';
import { Link } from 'react-scroll';
const AboutMe = () => {
    return (
        <div className='md:mt-32'>
            <div className='md:flex items-center justify-between md:py-10' id='about'>
                <div className="relative mx-10" data-aos="zoom-in-right" data-aos-duration="1000">
                    <img className="md:h-[500px] md:w-[430px] w-[300px] h-[300px] object-cover rounded-3xl" src="https://i.ibb.co/7SsMKhV/replicate-prediction-3lh4ysjbksayxaxfmm3ma2ztaa.png" alt="" />
                    <div className="md:absolute inset-0 bg-gradient-to-b from-transparent"></div>
                    <div className="md:absolute inset-0 bg-gradient-to-t dark:from-[#0E1B33] from-[#250c3fb6] to-transparent"></div>
                    <div className="md:absolute inset-0 bg-gradient-to-l dark:from-[#15213C] from-[#3B0745] to-transparent"></div>
                </div>
                <div data-aos="zoom-in-left" className='md:w-[520px] md:mx-0 mx-3' data-aos-duration="1000">
                    <h1 className='text-[#DC0DFE] dark:text-[#38D9A9] md:text-4xl text-3xl md:pt-0 pt-10 font-semibold'>ABOUT ME</h1>
                    <h2 className='text-white text-2xl py-2'>I'm a proficient MERN stack developer specializing in frontend development.</h2>
                    <p className='text-white py-2'>Passionate about creating elegant and user-friendly interfaces, I combine my strong background in front-end technologies with creative skills to deliver visually stunning and intuitive web applications.</p>
                    <div className='grid grid-cols-3 md:py-5 py-7 justify-between gap-5'>
                        <div data-aos="fade-up">
                            <h1 className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br via-[#00ffd5]  from-[#c800ff] to-[#bf2eec]'>1</h1>
                            <p className='text-xl text-white'>Years of Experience</p>
                        </div>
                        <div>
                            <h1 className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br via-[#00ffd5]  from-[#c800ff] to-[#bf2eec]'>50+</h1>
                            <p className='text-xl text-white'>Projects Completed</p>
                        </div>
                        <div data-aos="fade-down">
                            <h1 className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br via-[#00ffd5]  from-[#c800ff] to-[#bf2eec]'>10</h1>
                            <p className='text-xl text-white'>Satisfied <br /> Clients</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-7' data-aos="zoom-in" data-aos-duration="1000">
                        <Link to="contact" spy={true} offset={-70} duration={500}>
                            <button type="button" className="styled-button md:py-2 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out">Contact me</button>
                        </Link>
                        <Link to="works" spy={true} offset={-70} duration={500}>
                            <h1 className='cursor-pointer font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#ee00ff] to-[#00ffc3] via-[#bf2eec] hover:via-[#00ffd5] dark:via-[#00ffd5] hover:from-[#c800ff] hover:to-[#bf2eec]'>My Portfolio</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;