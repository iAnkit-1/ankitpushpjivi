import React from 'react'
import aboutImg from '../assets/me.jpg'
const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
      
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        <div className='mt-4 md:mt-0 text-left flex'>
          <div className='my-auto mx-6'>
            <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
            <p className='text-base lg:text-lg'>
            Hi, I'm Ankit Pushpjivi, a dedicated Computer Science student with a strong proficiency in the MERN stack and Data Structures & Algorithms. I am passionate about creating dynamic, responsive web applications and solving complex problems through efficient coding practices. My skill set, combined with a keen eye for detail and a commitment to continuous learning, allows me to build innovative solutions that drive user engagement and enhance functionality.
            </p>
          </div>
        </div>
        <img className='mx-auto rounded-3xl py-8 md:py-0' src= {aboutImg} alt="" width={300} height={300} />
      </div>

    </div>
  )
}

export default About
