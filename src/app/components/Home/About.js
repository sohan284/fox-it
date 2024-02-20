import React from 'react';
import CustomTitleBar from '../shared/CustomTitleBar';
import { motion } from "framer-motion"
function About() {
  return (
    <motion.div className='container mx-auto mt-20'>
      <CustomTitleBar title="About Us" />
      <div className='flex lg:flex-row flex-col mx-auto px-5'>

        <div className='text-primary w-full'>
          <h4 className='text-3xl font-bold my-5 text-left'>
            Fox It | A global EdTech-based digital workforce development and skill-oriented education provider.
          </h4>
          <p className='font-medium text-left'>
          Welcome to Fox IT, your premier destination for unlocking the power of technology. At Fox IT, we're committed to empowering individuals and businesses alike with cutting-edge IT solutions, expert guidance, and unparalleled support. Whether you're a seasoned professional looking to advance your skills or an organization striving for digital excellence, our comprehensive range of courses and services cater to all your technology needs. Join us on a transformative journey where innovation meets expertise, and together, let's shape the future of IT. </p>
        </div>
        <div className='flex justify-center items-center w-full'>
          <div className='grid grid-cols-2 gap-10 w-full m-5'>
            <div className='bg-secondary shadow-xl flex justify-center items-center h-32 px-5 rounded-3xl font-bold text-2xl text-primary font-serif' style={{ border: "5px solid #009790" }}>
              <span>25 Students</span>
            </div>
            <div className='bg-secondary shadow-xl flex justify-center items-center px-5 rounded-3xl font-bold text-2xl text-primary font-serif' style={{ border: "5px solid #009790" }}>
              <span>3 Trainers</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>

  )
}


export default About;