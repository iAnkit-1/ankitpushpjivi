import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

function Contact() {
  return (

   
    <div className='max-w-[1000px] mx-auto bg-black sm:py-20 p-5' id='contact'>


      <div className='text-center'>
        <h2 className='text-4xl font-bold leading-tight primary-color'>Contact Me</h2>
      </div>
      <div className='max-w-[500px] mx-auto'>
        <div className='mt-4 bg-[#161616] rounded-3xl'>
          <div className='p-5 flex gap-5 justify-center items-center'>

          <a href="https://www.linkedin.com/in/ankitpushpjivi" target='_blank' rel='noopener noreferer'>
              <FaLinkedin color='blue' size={50} />
            </a>

            <a href="https://www.github.com/iAnkit-1" target='_blank' rel='noopener noreferer'>
              <FaGithub color='white' size={50} />
            </a>

            <a href="https://www.linkedin.com/in/ankitpushpjivi" target='_blank' rel='noopener noreferer'>
              <FaInstagram color='red' size={50} />
            </a>

            <a  href="https://www.linkedin.com/in/ankitpushpjivi" target='_blank' rel='noopener noreferer'>
            <MdEmail color='linear-gradient(90deg, rgba(245,189,45,1) 0%, rgba(255,0,181,1) 100%)' size={50} />
            </a>

          </div>
          

        </div>
      </div>
    </div>
  )
}

export default Contact
