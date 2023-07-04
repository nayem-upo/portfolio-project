import React from 'react';

const Skills = () => {
    return (
        <div className='my-20'>
            <div data-aos="fade-up" data-aos-duration="1000">
                <h1 className='uppercase text-[#DC0DFE] dark:text-[#38D9A9] text-center text-3xl md:text-4xl font-semibold'>Technical level</h1>
                <p className='text-xl text-white py-2 text-center mb-10'>Some of my skills</p>
            </div>
            <div className='text-white md:flex justify-evenly'>
                <div className=' card rounded border-2 mb-7 md:py-10 md:mb-0 py-6 px-5 md:px-14 md:h-[288px] md:w-[440px] w-[95%] mx-auto backdrop-filter backdrop-blur-md' data-aos="zoom-in-right" data-aos-duration="1000">
                    <h1 className='text-2xl text-[#DC0DFE] dark:text-[#38D9A9] mb-5 text-center'>Frontend</h1>
                    <ul className="flex md:gap-20 gap-14 justify-center">
                        <ol className='flex flex-col gap-2 '>
                            <li>▶ HTML5</li>
                            <li>▶ CSS3</li>
                            <li>▶ Tailwind</li>
                            <li>▶ Bootstrap5</li>
                            <li>▶ JavaScript</li>
                        </ol>
                        <ol className='flex flex-col gap-2'>
                            <li>▶ React JS</li>
                            <li>▶ Firebase</li>
                            <li>▶ Framer Motion</li>
                            <li>▶ AOS</li>
                            <li>▶ Rechart</li>
                        </ol>
                    </ul>
                </div>
                <div className=' card rounded md:py-10 md:mb-0 py-6 px-5 md:px-14 md:h-[288px] md:w-[440px] w-[95%] mx-auto backdrop-filter backdrop-blur-md' data-aos="zoom-in-left" data-aos-duration="1000">
                    <h1 className='text-2xl text-[#DC0DFE] dark:text-[#38D9A9] mb-5 text-center'>Backend</h1>
                    <ul className="flex md:gap-20 gap-20 justify-center">
                        <ol className='flex flex-col gap-2'>
                            <li>▶ Javascript</li>
                            <li>▶ Node Js</li>
                            <li>▶ Express Js</li>
                            <li>▶ MongoDB</li>
                            <li>▶ Stripe Js</li>
                        </ol>
                        <ol className='flex flex-col gap-2'>
                            <li>▶ Rest API</li>
                            <li>▶ Cors</li>
                        </ol>
                    </ul>
                </div>
            </div>
            {/* <div className='rounded border-2 border-[#DC0DFE] py-10 px-14 text-white w-[930px] mt-10 mx-auto'>
                <h1 className='text-2xl text-[#DC0DFE] mb-5 text-center'>Packages & Technologies</h1>
                <ul className="flex gap-20 justify-between">
                    <ol className='flex flex-col gap-2'>
                        <li>▶ </li>
                        <li>▶ </li>
                        <li>▶ </li>
                    </ol>
                    <ol className='flex flex-col gap-2'>
                        <li>▶ </li>
                        <li>▶ </li>
                        <li>▶ </li>
                    </ol>
                    <ol className='flex flex-col gap-2'>
                        <li>▶ </li>
                        <li>▶ </li>
                        <li>▶ </li>
                    </ol>
                </ul>
            </div> */}
        </div>
    );
};

export default Skills;