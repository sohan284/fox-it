import React from 'react';
function About() {
  return (
    <div className='flex lg:flex-row flex-col mt-10 container mx-auto px-5'>
      <div className='text-primary w-full'>
        <h4 className='text-3xl font-bold my-5 text-left'>
          Fox It | A global EdTech-based digital workforce development and skill-oriented education provider.
        </h4>
        <p className='font-medium text-left'>
          Fox IT currently serving over 3 million learners and professionals and 2300+ academic institutions in 15+ countries. CodersTrust mission is to transform underprivileged, disadvantaged, and marginalized communities - especially youth and women - with career skills for the Digital Era and connect them with work opportunities to enable financial independence and economic growth at a global scale. CodersTrust has developed a sustainable and scalable market-based model for providing skill-focused training to millions of youths worldwide, resulting in employment, upward social mobility and durable social impact.
        </p>
      </div>
      <div className='flex justify-center items-center w-full'>
        <div className='grid grid-cols-2 gap-10 w-full m-5'>
          <div className='bg-primary flex justify-center items-center h-32 px-5 rounded-3xl font-bold text-4xl text-secondary font-serif '>
            <span>25 Students</span>
          </div>
          <div className='bg-primary flex justify-center items-center px-5 rounded-3xl font-bold text-4xl text-secondary font-serif'>
            <span>3 Trainers</span>
          </div>
        </div>
      </div>
    </div>
  )
}


export default About;