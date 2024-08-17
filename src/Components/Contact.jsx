import React, { useEffect, useRef } from 'react';
import '../App.css'
import gsap, { ScrollTrigger } from 'gsap/all';

const Contact = ()=>{
    const parent = useRef(null);
    const imgDiv = useRef(null);

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: parent.current,
                start: "0 30%",
                end: "top 0",
                scrub:1,
                // markers: true,

            }
        });

        tl
        .to(imgDiv.current,{
            width: "30rem",
        })
    })



    return (
        <div ref={parent} className='contact w-full h-[100vh] bg-[#0D0E13] text-white flex flex-col gap-10 py-20'>
            <div className='relative contact-1 h-[70%] w-full flex items-end justify-center'>
                <div className='slider overflow-x-hidden overflow-y-hidden whitespace-nowrap'>
                    <h1 className='text-4xl sm:text-9xl inline-block mr-4'>Ideas in motion, creativity unleashed.</h1>
                    <h1 className='text-4xl sm:text-9xl inline-block mr-4'>Ideas in motion, creativity unleashed.</h1>
                    
                </div>

                <div className='lg:hidden absolute top-1/3 md:top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 md:w-80 bg-red-50'>
                    <a href="https://drive.google.com/file/d/1qZeY3O3wZy21w3lQYTEj70Lu0m8hvosA/view?usp=sharing" target='_blank'>
                    <img className='h-full w-full object-cover' src="/resumeImg.jpg" alt="" />
                    </a>
                </div>

                {/* https://drive.google.com/file/d/1qZeY3O3wZy21w3lQYTEj70Lu0m8hvosA/view?usp=sharing */}

                <div ref={imgDiv} className='hidden lg:block absolute top-1/3 md:top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 md:w-80 '>
                <a href="https://drive.google.com/file/d/1qZeY3O3wZy21w3lQYTEj70Lu0m8hvosA/view?usp=sharing" target='_blank'>
                    <img className='h-full w-full object-cover' src="/resumeImg.jpg" alt="" />
                    </a>
                </div>
            </div>
            <div className='contact-2 h-[40%] w-full pt-5  px-5 sm:px-10 sm:flex sm:items-center sm: justify-between'>
                <div className=' flex gap-5 sm:gap-16 flex-col items-start'>
                    <p className='sm:w-1/2'>Need a hand or just want to chat? Drop us a line, send a DM, or give a shout — we're here to help and will get back to you in a flash!</p>

                    <div className='flex flex-col'>
                        <a href="mailto:dipanshu1231@gmail.com">dipanshu1231@gmail.com</a>
                        <a href="tel:+917023274842">+91 7023274842</a>
                    </div>
                </div>
                <div className='flex flex-col sm:gap-2 pt-5 sm:pt-[76px]'>
                    <a className='sm:text-xl' href="https://github.com/ItzzDipanshu">Github</a>
                    <a className='sm:text-xl' href="https://www.linkedin.com/in/dipanshu-singh-rathore/">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;