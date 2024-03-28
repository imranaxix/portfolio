import React from 'react';
import Image from './images/banner.png';
import '../App.css'

const Banner = () => {
  return (
    <div className='flex justify-between lg:flex-row flex-col-reverse items-center px-[5%] md:px-20 py-16 mt-20'>
      <div className='w-[45%] lg:ml-0 ml-40 md:ml-60 select-none'>
        <img className='w-full max-w-[500px]' src={Image} alt="Banner" />
      </div>

      <div className='md:w-[100%] lg:w-[45%]  ubuntu-light'>
        <h2 className='text-3xl '>Hi, I'm</h2>
        <h1 className='text-7xl ubuntu-regular font-medium'>Imran Aziz</h1>
        <h3 className='text-xl w-[100%] py-2'>A passionate <span className='text-[#0fa41b] ubuntu-regular'>&lt;front end developer/&gt;</span> dedicated to crafting responsive and user-friendly websites</h3>
      </div>
    </div>
  );
};

export default Banner;
