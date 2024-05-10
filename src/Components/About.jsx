import React from 'react'
import img from '../assets/about-img.png'

const About = () => {
  return (
    <div className='flex flex-col w-auto'>
      <div className='bg-[#EDEDED]  md:flex w-full'>
        <div className='flex p-10 md:w-[200%] font-bold text-green-700 lg:text-[15px] lg:p-10 xl:p-24 md:p-8 md:text-[10px] xl:text-[20px]'>
        <span className='text-xs md:text-base'>
        <p>We believe that when you eat fresh, you think fresh; and we bring this fresh thinking in all our endeavours. We are committed to innovating better, healthier, high-quality food that delights our customers. We are dedicated to fostering positive impact by providing sustainable livelihoods to our suppliers and meaningful careers to our team.</p> <br />
        <p>Eversub India Pvt Limited (EIPL) has the master franchise rights to open and operate Subway restaurants in India, Sri Lanka and Bangladesh. Subway is set to expand freshness and power through the mission of serving healthy, tasty, and fresh food to everyone.</p> <br />
        <p>India is the largest market for EIPL and is focussed to expand Subway footprint aggressively. EIPL is a fully owned subsidiary of Culinary Brands Private Limited.</p>
        </span>
        </div>
        <div className='flex w-auto md:w-[180%] h-auto justify-center items-center '>
        <img src={img} className="h-[150px] md:h-[70%]" alt="subway"/>
        </div>
      </div>
      <div className='bg-[#008938] flex w-full h-full p-10 flex-col justify-between '>
        <div className='md:flex justify-between w-full'>
          <div className='flex flex-col'>
            <h3 className='text-white font-bold text-[22px]'>CUSTOMER CARE</h3>
            <p className='text-yellow-500 pt-2'>customercare@subway.in</p>
          </div>
          <div className='flex flex-col '>
            <h3 className='text-white font-bold text-[22px]'>FOR VENDOR PARTNERSHIP</h3>
            <p className='text-yellow-500 pt-2'>partner@subway.in</p>
          </div>
        </div>
        <p className='w-[20rem] text-white font-semibold'>Eversub India Private Limited
            6th Floor, Vaman Techno Centre,
            Makwana Road, Marol, Andheri East,
            Mumbai – 400059, Maharashtra
        </p>
        <p className='text-white font-semibold mt-6 pt-2 border-t-2 border-yellow-400 xl:text-[18px] lg:text-[15px] md:text-[12px] '>All rights reserved. Akshay Nagdiya</p>
      </div>
      
    </div>
  )
}

export default About;
