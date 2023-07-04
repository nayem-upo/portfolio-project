import React from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data, e) => {
        const messageData = {
            from_name: data.name,
            reply_to: data.email,
            message: data.message
        };

        try {
            await emailjs.send('service_21rgatn', 'template_5covibk', messageData, 'DJLC4io3ui2WMm8Ff');
            e.target.reset()
            Swal.fire('The message has been sent successfully. Thank you!')
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <div className='md:flex md:mt-48 mt-32 mb-32 justify-between items-center' id='contact'>
            <div data-aos="zoom-out-up" data-aos-duration="1000" className='mx-8 md:mx-0'>
                <h1 className='uppercase text-[#DC0DFE] dark:text-[#38D9A9] text-2xl font-semibold pb-7'>get in touch</h1>
                <h1 className='text-white text-5xl md:text-7xl'>Let's Work <br />Together!</h1>
            </div>
            <div className=' md:w-1/2 my-12 md:my-0 mx-5 md:mx-0 bg-white bg-opacity-10 rounded-xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm' data-aos="zoom-out-down" data-aos-duration="1000">
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-7' id='contact-form'>
                    <label htmlFor="name" className='text-white text-lg pt-3'>Your name</label>
                    <input className='bg-transparent text-[#1ed2ff] outline-none border-b text-lg' {...register("name", { required: true })} />
                    {errors.name && <span className='text-red-600 py-1'>Please enter your name</span>}

                    <label htmlFor="email" className='text-white text-lg pt-5'>Your email</label>
                    <input className='bg-transparent text-[#1ed2ff] outline-none border-b text-lg' {...register("email", { required: true })} />
                    {errors.email && <span className='text-red-600 py-1'>Please enter your email</span>}

                    <label htmlFor="message" className='text-white text-lg pt-5'>Your message</label>
                    <textarea className='bg-transparent resize-none text-[#1ed2ff] outline-none border-b text-lg' cols="30" rows="3" {...register("message", { required: true })} />
                    {errors.message && <span className='text-red-600 py-1'>This field is required</span>}

                    <input value="Send message" className='styled-button py-2 border-[#1ed2ff] mt-5 cursor-pointer w-[200px] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Contact;
