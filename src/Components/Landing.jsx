import React from 'react';

const Landing = ()=>{
    return(
        <div className='relative w-full h-[150vh] sm:h-[270vh]'>
            <div className='picture w-full h-full'>
                <img className='w-full h-full object-cover' src="/landingBG.jpg" alt="" />
            </div>
            <div className='w-full absolute top-0'> {/* after applying the absolute property to the below div. the max-w-screen-2xl property won't work. That's why we had made an another div for the absolute property. */}
            <div className='text max-w-screen-2xl h-full mx-auto px-5 sm:px-10 text-white'>
                <div className='para mt-72 sm:mt-[25rem]'>
                <p className='font-semibold sm:text-4xl sm:font-light'>I am a passionate front-end developer</p>
                <p className='font-semibold sm:text-4xl sm:font-light'>focused on creating visually engaging and</p>
                <p className='font-semibold sm:text-4xl sm:font-light'>responsive web experiences. Currently, I'm</p>
                <p className='font-semibold sm:text-4xl sm:font-light'>deepening my skills in GSAP animations</p>
                <p className='font-semibold sm:text-4xl sm:font-light'>to bring interactive elements to my projects.</p>

                </div>
                <div className='headings mt-5 sm:mt-10'>
                    <h1 className='text-6xl sm:text-[18rem] sm:font-light tracking-tighter leading-none'>Captivating</h1>
                    <h1 className='text-6xl sm:text-[18rem] sm:font-light tracking-tighter leading-none'>Digital</h1>
                    <h1 className='text-6xl sm:text-[18rem] sm:font-light tracking-tighter leading-none'>Experiences</h1>
                </div>
                <div className='para2 sm:w-1/3 mt-10 sm:mt-20'>
                    <p className='sm:text-xl'>I am committed to bringing innovative</p>
                    <p className='sm:text-xl'>ideas by creating engaging, user-centric</p>
                    <p className='sm:text-xl'>web applications. Unforgettable journeys</p>
                    <p className='sm:text-xl'>start with a click.</p>

                    <a className='sm:text-xl border-b-[.3px] sm:border-b-[1px] border-zinc-100 pb-1 mt-10 inline-block' href="#">Begin Now</a> {/* a tags are inline tags so we had made it inline-block for applying the padding otherwise the padding won't work */}
                </div>
            </div>
            </div>


            
        </div>
    )
}

export default Landing;