import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from 'swiper';

const MyWorks = () => {
    return (
        <div id='works'>
            <div className='grid md:grid-cols-2 gap-7 justify-center justify-items-center md:my-20 my-10' data-aos="fade-up" data-aos-duration="1000">
                <div className='md:h-[220px] md:mx-0 mx-8 md:w-[400px]' data-aos="zoom-in-right" data-aos-duration="1000">
                    <h1 className='uppercase text-[#DC0DFE] dark:text-[#38D9A9] text-3xl md:text-4xl font-semibold'>My Latest Works</h1>
                    <p className='text-xl text-white py-2'>Here is a collection of innovative and creative projects showcasing my skills and action expertise.</p>
                    <a href="#allworks"><button type="button" className="styled-button py-2 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out">View all projects</button></a>
                </div>
                <div className='shadow-lg hover:shadow-none shadow-[#de0dfe53] dark:shadow-[#38d9a962] rounded button buttton border-2 h-[180px] md:h-[200px] md:w-[400px] w-[360px] relative'>
                    <img className='h-full object-cover rounded' src="https://i.ibb.co/wcP9Nyx/Screenshot-2023-06-14-002611.png" alt="" />
                    <div className="overlay flex-col rounded delay-150 ease-in-out absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 flex justify-center items-center text-lg">
                        <span className='words font-extrabold text-2xl pb-2 text-transparent'>TuneYo Music School</span>
                        <div className='flex gap-3 text-white' id='allworks'>
                            <button onClick={() => window.my_modal_1.showModal()} className='glass px-2 w-[80px]'>Details</button>
                            <a href="https://tuneyo-8be99.web.app/" target='_blank'><button className='glass px-2 w-26'>Live View</button></a>
                        </div>
                    </div>
                </div>
                <dialog id="my_modal_1" className="modal" style={{ overflow: "hidden" }}>
                    <form method="dialog" className="modal-box md:w-[800px] bg-[#320339] max-w-5xl">
                        <Swiper slidesPerView={1} spaceBetween={30} pagination={{ clickable: true, }} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Autoplay, Pagination, Navigation]} className="mySwiper rounded-lg">
                            <SwiperSlide><img className='md:md:w-[700px] object-cover md:md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/Wx70hm1/Screenshot-2023-06-14-002611.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:md:w-[700px] object-cover md:md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/87Vv9Lt/Screenshot-2023-06-14-003611.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:md:w-[700px] object-cover md:md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/10xq6SP/Screenshot-2023-06-14-003520.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:md:w-[700px] object-cover md:md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/Qjm4tPY/Screenshot-2023-06-14-004546.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:md:w-[700px] object-cover md:md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/CV5QKSB/Screenshot-2023-06-14-004231.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:md:w-[700px] object-cover md:md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/CMwFy3w/Screenshot-2023-06-14-004633.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:md:w-[700px] object-cover md:md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/dcnn3td/Screenshot-2023-06-14-004738.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:md:w-[700px] object-cover md:md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/y0F1CmK/Screenshot-2023-06-14-003810.png" alt="" /></SwiperSlide>
                        </Swiper>
                        <div className='mx-5'>
                            <h3 className="font-bold text-2xl pt-5">TuneYo- The music school</h3>
                            <h1 className='text-xl py-3 font-semibold'>Some key features and functionalities the project:</h1>
                            <div>
                                <ol>
                                    <li>1. User registration and authentication</li>
                                    <li>2. Class listing and details</li>
                                    <li>3. Class enrollment</li>
                                    <li>4. User dashboard</li>
                                    <li>5. Payment integration</li>
                                    <li>6. Responsive design</li>
                                </ol>
                            </div>
                            <div>
                                <h1 className='text-xl py-3 font-semibold'>Technologies Used:</h1>
                                <p className='text-[#1ed2ff]'>HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, Stripe, Firebase, swiper, React Router, Tailwind, React Router DOM, Framer Motion, Axios, Daisyui, Fontawesome, React-parallax</p>
                                <div className='flex justify-evenly my-5'>
                                    <a target='_blank' href="https://tuneyo-8be99.web.app/"> <button type="button" className="md:py-1 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out hover:scale-110 w-[84px]">Live</button></a>
                                    <a target='_blank' href="https://github.com/nayem-upo/tuneyo-music-client"> <button type="button" className="md:py-1 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out hover:scale-110 w-[84px]">Client</button></a>
                                    <a target='_blank' href="https://github.com/nayem-upo/tuneyo-server"> <button type="button" className="md:py-1 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out hover:scale-110 w-[84px]">Server</button></a>
                                </div>
                            </div>
                            <p className="md:md:pt-10">Click the button below to close</p>
                        </div>
                        <div className="modal-action my-0">
                            {/* if there is a button, it will close the modal */}
                            <button className="py-2 px-3 rounded-md glass border-2">Close</button>
                        </div>
                    </form>
                </dialog>


                <div className=' shadow-lg hover:shadow-none shadow-[#de0dfe53] dark:shadow-[#38d9a962] rounded button buttton border-2 h-[180px] md:h-[200px] md:w-[400px] w-[360px] relative' data-aos="zoom-in-right" data-aos-duration="1000">
                    <img className='h-full object-cover rounded ' src="https://i.ibb.co/4MzdzkF/Screenshot-2023-06-14-003037.png" alt="" />
                    <div className="overlay flex-col rounded delay-150 ease-in-out absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 flex justify-center items-center text-lg">
                        <span className='words font-extrabold text-2xl pb-2 text-transparent'>Robo House The Toy Shop</span>
                        <div className='flex gap-3 text-white'>
                            <button onClick={() => window.my_modal_2.showModal()} className='glass px-2 w-[80px]'>Details</button>
                            <a href="https://robo-house-dc2be.web.app/" target='_blank'><button className='glass px-2 w-26'>Live View</button></a>
                        </div>
                    </div>
                </div>
                <dialog id="my_modal_2" className="modal" style={{ overflow: "hidden" }}>
                    <form method="dialog" className="modal-box md:w-[800px] bg-[#320339] max-w-5xl">
                        <Swiper slidesPerView={1} spaceBetween={30} pagination={{ clickable: true, }} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Autoplay, Pagination, Navigation]} className="mySwiper rounded-lg">
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/gD4WC12/Screenshot-2023-06-14-000700.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/GH7NxfP/Screenshot-2023-06-14-000734.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/315Bgt2/Screenshot-2023-06-14-003221.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/rdHG576/Screenshot-2023-06-14-003201.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/b2D87Hx/Screenshot-2023-06-14-002842.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/28967TM/Screenshot-2023-06-14-002512.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/NKP3XXp/Screenshot-2023-06-14-003037.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/vLxpkwG/Screenshot-2023-06-14-000808.png" alt="" /></SwiperSlide>
                        </Swiper>
                        <div className='mx-5'>
                            <h3 className="font-bold text-2xl pt-5">Robo House - To sell and manage kids toy products</h3>
                            <h1 className='text-xl py-3 font-semibold'>Some key features and functionalities the project:</h1>
                            <div>
                                <ol>
                                    <li>1. User registration and authentication</li>
                                    <li>2. Toy management functionality for logged-in users</li>
                                    <li>3. Navigation routes for Home, All Toys, My Toys, Add A Toy, and Blogs</li>
                                    <li>4. Database integration for storing toy and user information</li>
                                    <li>5. Pagination for displaying a limited number of toys per page</li>
                                    <li>7. My Toys page for users to manage their added toys (view, edit, delete)</li>
                                    <li>8. User authentication and authorization for accessing protected routes</li>
                                    <li>9. Responsive design for seamless usage on different devices</li>
                                    <li>10. Search functionality to search for specific toys</li>
                                </ol>
                            </div>
                            <div>
                                <h1 className='text-xl py-3 font-semibold'>Technologies Used:</h1>
                                <p className='text-[#1ed2ff]'>HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, Firebase, swiper, React Router, Tailwind, React Router DOM, AOS, Daisyui, Fontawesome</p>
                                <div className='flex justify-evenly my-5'>
                                    <a target='_blank' href="https://robo-house-dc2be.web.app/"> <button type="button" className="md:py-1 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out hover:scale-110 w-[84px]">Live</button></a>
                                    <a target='_blank' href="https://github.com/nayem-upo/robo-house-client-main"> <button type="button" className="md:py-1 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out hover:scale-110 w-[84px]">Client</button></a>
                                    <a target='_blank' href="https://github.com/nayem-upo/robo-house-server-main"> <button type="button" className="md:py-1 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out hover:scale-110 w-[84px]">Server</button></a>
                                </div>
                            </div>
                            <p className="md:pt-10">Click the button below to close</p>
                        </div>
                        <div className="modal-action my-0">
                            {/* if there is a button, it will close the modal */}
                            <button className="py-2 px-3 rounded-md glass border-2">Close</button>
                        </div>
                    </form>
                </dialog>
                <div className=' shadow-lg hover:shadow-none shadow-[#de0dfe53] dark:shadow-[#38d9a962] rounded button buttton border-2 h-[180px] md:h-[200px] md:w-[400px] w-[360px] relative' data-aos="zoom-in-left" data-aos-duration="1000">
                    <img className='h-full object-cover rounded ' src="https://i.ibb.co/M9zzSqf/Screenshot-2023-06-13-232656.png" alt="" />
                    <div className="overlay flex-col rounded delay-150 ease-in-out absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 flex justify-center items-center text-lg">
                        <span className='words font-extrabold text-2xl pb-2 text-transparent'>Food & Test Recipe Hunter</span>
                        <div className='flex gap-3 text-white'>
                            <button onClick={() => window.my_modal_3.showModal()} className='glass px-2 w-[80px]'>Details</button>
                            <a href="https://food-and-test.web.app/" target='_blank'><button className='glass px-2 w-26'>Live View</button></a>
                        </div>
                    </div>
                </div>
                <dialog id="my_modal_3" className="modal" style={{ overflow: "hidden" }}>
                    <form method="dialog" className="modal-box md:w-[800px] bg-[#320339] max-w-5xl">
                        <Swiper slidesPerView={1} spaceBetween={30} pagination={{ clickable: true, }} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Autoplay, Pagination, Navigation]} className="mySwiper rounded-lg">
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/ftkBkKv/Screenshot-2023-06-13-232656.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/0CBrPQ0/Screenshot-2023-06-13-233821.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/bbvtjFZ/Screenshot-2023-06-13-234049.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/T2PyMqR/Screenshot-2023-06-13-233514.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/smWKYCY/Screenshot-2023-06-13-234125.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/3m9rWMN/Screenshot-2023-06-13-234206.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/s5nJnWZ/Screenshot-2023-06-13-233603.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/PzqsP7p/Screenshot-2023-06-13-234243.png" alt="" /></SwiperSlide>
                        </Swiper>
                        <div className='mx-5'>
                            <h3 className="font-bold text-2xl pt-5">Food & Text - The Recipe Hunter</h3>
                            <h1 className='text-xl py-3 font-semibold'>Some key features and functionalities the project:</h1>
                            <div>
                                <ol>
                                    <li>1. Chef profiles and recipes</li>
                                    <li>2. Recipe search and learning</li>
                                    <li>3. User profiles and updates</li>
                                    <li>4. Favorite recipe functionality:</li>
                                    <li>5. Authentication options</li>
                                    <li>6. Password reset</li>
                                </ol>
                            </div>
                            <div>
                                <h1 className='text-xl py-3 font-semibold'>Technologies Used:</h1>
                                <p className='text-[#1ed2ff]'>HTML, CSS, JavaScript, React.js, Node.js, Express.js, Firebase, React Router, Tailwind, React Router DOM, Daisyui, Fontawesome</p>
                                <div className='flex justify-evenly my-5'>
                                    <a target='_blank' href="https://food-and-test.web.app/"> <button type="button" className="md:py-1 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out hover:scale-110 w-[84px]">Live</button></a>
                                    <a target='_blank' href="https://github.com/nayem-upo/food-and-test"> <button type="button" className="md:py-1 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out hover:scale-110 w-[84px]">Client</button></a>
                                    <a target='_blank' href="https://github.com/nayem-upo/food-and-test-server"> <button type="button" className="md:py-1 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out hover:scale-110 w-[84px]">Server</button></a>
                                </div>
                            </div>
                            <p className="md:pt-10">Click the button below to close</p>
                        </div>
                        <div className="modal-action my-0">
                            {/* if there is a button, it will close the modal */}
                            <button className="py-2 px-3 rounded-md glass border-2">Close</button>
                        </div>
                    </form>
                </dialog>

                <div className=' shadow-lg hover:shadow-none shadow-[#de0dfe53] dark:shadow-[#38d9a962] rounded button buttton border-2 h-[180px] md:h-[200px] md:w-[400px] w-[360px] relative' data-aos="zoom-in-right" data-aos-duration="1000">
                    <img className='h-full object-cover rounded ' src="https://i.ibb.co/xX4vSck/Screenshot-2023-06-13-232625.png" alt="" />
                    <div className="overlay flex-col rounded delay-150 ease-in-out absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 flex justify-center items-center text-lg">
                        <span className='words font-extrabold text-2xl pb-2 text-transparent'>Post Job Free</span>
                        <div className='flex gap-3 text-white'>
                            <button onClick={() => window.my_modal_4.showModal()} className='glass px-2 w-[80px]'>Details</button>
                            <a href="https://cheery-twilight-9d0897.netlify.app/" target='_blank'><button className='glass px-2 w-26'>Live View</button></a>
                        </div>
                    </div>
                </div>
                <dialog id="my_modal_4" className="modal" style={{ overflow: "hidden" }}>
                    <form method="dialog" className="modal-box md:w-[800px] bg-[#320339] max-w-5xl">
                        <Swiper slidesPerView={1} spaceBetween={30} pagination={{ clickable: true, }} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Autoplay, Pagination, Navigation]} className="mySwiper rounded-lg">
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/gmhTJy1/Screenshot-2023-06-13-232625.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/YLjSw4L/Screenshot-2023-06-13-232656.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/ctxMwPy/Screenshot-2023-06-13-232745.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/BzwjmYB/Screenshot-2023-06-13-232922.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/ZBP3rDp/Screenshot-2023-06-13-233117.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/3Bhy58C/Screenshot-2023-06-13-233241.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/548sNwD/Screenshot-2023-06-13-233354.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/x7R06jm/Screenshot-2023-06-13-232833.png" alt="" /></SwiperSlide>
                        </Swiper>
                        <div className='mx-5'>
                            <h3 className="font-bold text-2xl pt-5">Post Job Free - Job Hunting Platform</h3>
                            <h1 className='text-xl py-3 font-semibold'>Some key features and functionalities the project:</h1>
                            <div>
                                <ol>
                                    <li>1. Job listing and search functionality</li>
                                    <li>2. Detailed job view and application process</li>
                                    <li>3. Applied job tracking and history</li>
                                    <li>4. Location-based filtering for applied jobs</li>
                                    <li>5. Statistical insights with area chart</li>
                                </ol>
                            </div>
                            <div>
                                <h1 className='text-xl py-3 font-semibold'>Technologies Used:</h1>
                                <p className='text-[#1ed2ff]'>HTML, CSS, JavaScript, React.js, Firebase, swiper, React Router, Tailwind, React Router DOM, Daisyui, Fontawesome</p>
                                <div className='flex justify-evenly my-5'>
                                    <a target='_blank' href=""> <button type="button" className="md:py-1 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out hover:scale-110 w-[84px]">Live</button></a>
                                    <a target='_blank' href=""> <button type="button" className="md:py-1 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out hover:scale-110 w-[84px]">Client</button></a>
                                    <a > <button type="button" className="md:py-1 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out hover:scale-110 w-[84px]">Server</button></a>
                                </div>
                            </div>
                            <p className="md:pt-10">Click the button below to close</p>
                        </div>
                        <div className="modal-action my-0">
                            {/* if there is a button, it will close the modal */}
                            <button className="py-2 px-3 rounded-md glass border-2">Close</button>
                        </div>
                    </form>
                </dialog>

                <div className=' shadow-lg hover:shadow-none shadow-[#de0dfe53] dark:shadow-[#38d9a962] rounded button buttton border-2 h-[180px] md:h-[200px] md:w-[400px] w-[360px] relative' data-aos="zoom-in-left" data-aos-duration="1000">
                    <img className='h-full object-cover rounded ' src="https://i.ibb.co/bbZ3b3Y/Screenshot-2023-06-13-232506.png" alt="" />
                    <div className="overlay flex-col rounded delay-150 ease-in-out absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 flex justify-center items-center text-lg">
                        <span className='words font-extrabold text-2xl pb-2 text-transparent'>Technology Cafe</span>
                        <div className='flex gap-3 text-white'>
                            <button onClick={() => window.my_modal_5.showModal()} className='glass px-2 w-[80px]'>Details</button>
                            <a href="https://stately-liger-a0b159.netlify.app/" target='_blank'><button className='glass px-2 w-26'>Live View</button></a>
                        </div>
                    </div>
                </div>
                <dialog id="my_modal_5" className="modal" style={{ overflow: "hidden" }}>
                    <form method="dialog" className="modal-box md:w-[800px] bg-[#320339] max-w-5xl">
                        <Swiper slidesPerView={1} spaceBetween={30} pagination={{ clickable: true, }} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Autoplay, Pagination, Navigation]} className="mySwiper rounded-lg">
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/GvgpgGK/Screenshot-2023-06-13-232506.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/Lp01T4m/Screenshot-2023-06-13-232541.png" alt="" /></SwiperSlide>
                        </Swiper>
                        <div className='mx-5'>
                            <h3 className="font-bold text-2xl pt-5">Technology Cafe - Blog Site</h3>
                            <h1 className='text-xl py-3 font-semibold'>Some key features and functionalities the project:</h1>
                            <div>
                                <ol>
                                    <li>1. User can read blogs and set reading time</li>
                                    <li>2. User can bookmark their favourite blog</li>
                                </ol>
                            </div>
                            <div>
                                <h1 className='text-xl py-3 font-semibold'>Technologies Used:</h1>
                                <p className='text-[#1ed2ff]'>HTML, CSS, JavaScript, React.js, Tailwind, Fontawesome</p>
                                <div className='flex justify-evenly my-5'>
                                    <a target='_blank' href="https://stately-liger-a0b159.netlify.app/"> <button type="button" className="md:py-1 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out hover:scale-110 w-[84px]">Live</button></a>
                                    <a target='_blank' href="https://github.com/nayem-upo/knowledge-cafe"> <button type="button" className="md:py-1 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out hover:scale-110 w-[84px]">Client</button></a>
                                    <a > <button type="button" className="md:py-1 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out hover:scale-110 w-[84px]">Server</button></a>
                                </div>
                            </div>
                            <p className="md:pt-10">Click the button below to close</p>
                        </div>
                        <div className="modal-action my-0">
                            {/* if there is a button, it will close the modal */}
                            <button className="py-2 px-3 rounded-md glass border-2">Close</button>
                        </div>
                    </form>
                </dialog>
            </div>
        </div>
    );
};

export default MyWorks;