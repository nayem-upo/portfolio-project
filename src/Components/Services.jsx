import React from 'react';

const Services = () => {
    return (
        <div id='service'>
            <h1 className='md:text-4xl text-3xl font-semibold text-white text-center mt-32' data-aos="zoom-in-up">Discover My Potential & Services</h1>
            <h1 className='text-center font-semibold text-[#DC0DFE] dark:text-[#38D9A9] md:text-xl mx-2 md:mx-0' data-aos="zoom-in-up">Providing customized services to meet your specific requirements</h1>
            <div className='grid md:grid-cols-3 gap-5 md:mx-0 mx-8 py-[76px]'>
                <div className='glass border-2 text-white p-3 rounded' data-aos="zoom-in-right" data-aos-duration="1000">
                    <img className='w-[150px] object-cover mask mask-hexagon' src="https://img.freepik.com/free-vector/website-building-web-graphic-interface-design-responsive-website-software-engineering-development-male-programmeer-cartoon-character-vector-isolated-concept-metaphor-illustration_335657-2792.jpg" alt="" />
                    <h1 className='text-xl py-2 font-semibold'>Responsive Web Design</h1>
                    <p>Creating visually appealing and user-friendly interfaces that adapt seamlessly across devices and screen sizes.</p>
                </div>
                <div className='border-[#1ed2ff] glass border-2 text-white p-3 rounded' data-aos="fade-up">
                    <img className='w-[150px] object-cover mask mask-hexagon' src="https://img.freepik.com/free-vector/benchmark-testing-abstract-concept-illustration_335657-3853.jpg?w=740&t=st=1686654804~exp=1686655404~hmac=5b592a075c67fde02be041736b6883201921915fdb1e3ec9304b55e1f65f088c" alt="" />
                    <h1 className='text-xl py-2 font-semibold'>Performance Optimization</h1>
                    <p>Optimizing frontend code and assets to improve website speed and overall performance.</p>
                </div>
                <div className='border-[#1ed2ff] glass border-2 text-white p-3 rounded' data-aos-duration="1000" data-aos="zoom-in-left">
                    <img className='w-[150px] object-cover mask mask-hexagon' src="https://img.freepik.com/free-vector/coding-website-development-technical-support-programming-engineering-coder-web-developer-computer-software-programmer-male-flat-character_335657-206.jpg?w=740&t=st=1686655309~exp=1686655909~hmac=730a9bb70adc08d5d4bb2dcf1559911f4988dd677a70bfade3054095812a503f" alt="" />
                    <h1 className='text-xl py-2 font-semibold'>Frontend Frameworks</h1>
                    <p>Expertise in popular frontend frameworks such as React, Tailwind, and Bootstrap5 to build robust and dynamic web applications.</p>
                </div>
                <div className='border-[#1ed2ff] glass border-2 text-white p-3 rounded' data-aos="zoom-in-right" data-aos-duration="1000">
                    <img className='w-[150px] object-cover mask mask-hexagon' src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=740&t=st=1686655404~exp=1686656004~hmac=57e51b2d04a599edd5a876c58b0dbb6b8d92563b0f3bce27097d95e481d9dd70" alt="" />
                    <h1 className='text-xl py-2 font-semibold'>Full-Stack Web Development</h1>
                    <p>Building end-to-end web applications using the MERN (MongoDB, Express.js, React, Node.js) stack.</p>
                </div>
                <div className='border-[#1ed2ff] glass border-2 text-white p-3 rounded' data-aos="fade-up" data-aos-duration="1000">
                    <img className='w-[150px] object-cover mask mask-hexagon' src="https://img.freepik.com/free-vector/flat-design-website-hosting-illustration_23-2149253482.jpg?w=740&t=st=1686655636~exp=1686656236~hmac=0b2b903405f7395cadea64cdb730f6f37924e5ca577bc5e4790eedc666f3e0d9" alt="" />
                    <h1 className='text-xl py-2 font-semibold'>Deployment and Hosting</h1>
                    <p>Assisting with deploying MERN applications to cloud platforms like Vercel or Heroku, ensuring smooth hosting and scalability.</p>
                </div>
                <div className='border-[#1ed2ff] glass border-2 text-white p-3 rounded' data-aos="zoom-in-left" data-aos-duration="1000">
                    <img className='w-[150px] object-cover mask mask-hexagon' src="https://img.freepik.com/free-vector/debugging-firewall-antivirus-scanning-malware-fixing-virus-attack-trojan-search-bugs-detection-system-protection-threat-diagnostic-crash-tester-vector-isolated-concept-metaphor-illustration_335657-1998.jpg?w=740&t=st=1686655681~exp=1686656281~hmac=9d913a086735dbbfc92f81e5e84ff3e2a07bdf58a4d8d4f7f98274c3fcd47e94" alt="" />
                    <h1 className='text-xl py-2 font-semibold'>Testing and Debugging</h1>
                    <p>Conducting comprehensive testing and debugging to ensure the reliability and functionality of MERN applications.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;