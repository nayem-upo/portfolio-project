import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { ThemeContext } from '../App';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div id='home'>
            <header className='flex items-center justify-between py-5 px-5 md:px-0' data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
                <h1 className='md:text-4xl text-2xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-br from-[#ee00ff] to-[#00ffc3] via-[#bf2eec] hover:via-[#00ffd5] dark:via-[#00ffd5]  hover:from-[#c800ff] hover:to-[#bf2eec]'>MD. NAEM</h1>
                <div className='flex items-center gap-4'>
                    <a href="https://drive.google.com/uc?export=download&id=1C72-Q-CrZ4uvAklpWa1w4lHYK88jKr0d" download type="button" className="">
                        <span className='styled-button words md:text-base text-xs md:py-2 md:pt-3 pt-2 py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out'>Download CV</span>
                    </a>
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input onClick={toggleTheme} type="checkbox" defaultChecked={theme} />

                        {/* sun icon */}
                        <svg className="swap-off fill-current md:w-10 md:h-10 w-8 h-8 text-[#ee00ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-on fill-current md:w-10 md:h-10 w-8 h-8 text-[#38D9A9]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>
            </header>
            <section className='flex justify-between md:my-20 my-10 items-center flex-col-reverse md:flex-row'>
                <div className='md:w-1/2 mx-10 md:mx-0 py-10 md:py-0' data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
                    <h1 className={`md:text-6xl font-semibold text-white text-3xl`}>NAEM ISLAM</h1>
                    <p className='pt-2 md:text-3xl md:text-[26px] text-[18px] font-semibold text-white'>I AM A 
                        <span className={`${!theme ? "text-[#DC0DFE]" : "text-[#38D9A9]"}`}>
                            <TypeAnimation
                                sequence={[
                                    ' WEB DEVELOPER_',
                                    2000,
                                    ' REACT DEVELOPER_',
                                    2000,
                                    ' MERN DEVELOPER_',
                                    2000,
                                    ' WEB DESIGNER_',
                                    2000,
                                    ' FULL-STACK DEVELOPER',
                                    2000
                                ]}
                                wrapper="span"
                                speed={30}
                                repeat={Infinity}
                                className='custom-type-animation'
                            />
                        </span></p>
                    <p className='text-white my-5'>Highly skilled web developer proficient in frontend development with a strong background in front end technologies.</p>
                    <div className='flex items-center gap-7'>
                        <Link to="contact" spy={true} offset={-70} duration={500}>
                            <button type="button" className="styled-button md:py-2 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out">Contact me</button>
                        </Link>
                        <Link to="works" spy={true} offset={-70} duration={500}>
                            <h1 className='cursor-pointer font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#ee00ff] to-[#00ffc3] via-[#bf2eec] hover:via-[#00ffd5] dark:via-[#00ffd5] hover:from-[#c800ff] hover:to-[#bf2eec]'>My Portfolio</h1>
                        </Link>
                    </div>
                    <div className='flex gap-3 md:gap-5 py-6'>
                        <a target='_blank' href="https://www.facebook.com/uponayem"><FaFacebook className='md:text-2xl text-xl hover:scale-125 text-white hover:text-[#DC0DFE] dark:hover:text-[#38D9A9] duration-200 cursor-pointer' /></a>
                        <a target='_blank' href="https://github.com/nayem-upo"><FaGithub className='md:text-2xl text-xl hover:scale-125 text-white hover:text-[#DC0DFE] dark:hover:text-[#38D9A9] duration-200 cursor-pointer' /></a>
                        <a target='_blank' href="https://www.linkedin.com/in/naem0/"><FaLinkedin className='md:text-2xl text-xl hover:scale-125 text-white hover:text-[#DC0DFE] dark:hover:text-[#38D9A9] duration-200 cursor-pointer' /></a>
                    </div>
                </div>
                <div className="avatar md:w-[350px] w-[250px]" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom">
                    <div className="mask mask-squircle">
                        <img src="https://i.ibb.co/DppprBV/Picsart-23-2.jpg" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;