import React from 'react';
import '../App.css';


const Skills = ({darkmode}) => {
  return (
    <div className='py-10 mx-4 px-20   pt-20 relative flex justify-center flex-col items-center '>
      <h1 className='text-[#0fa41b] text-3xl font-bold text-center tauri-regular  my-10 mt-10'>&lt;S<span className={`${darkmode?'text-[#fff]':'text-black'}`}>kills</span>/&gt;</h1>
      <div className={`p-20 text-6xl flex justify-center items-center px-[10rem] md:px-[20rem] lg:px-[30rem] py-40   shadow-inner ${darkmode?'bg-[#1c1e21]':'bg-[#f0f0f0]'} rounded-3xl`}>
        <i className="devicon-html5-plain-wordmark colored absolute left-[20%] md:bottom-[20%] bottom-[25%] z-10"></i>
        <i className="devicon-css3-plain-wordmark colored absolute left-[20%] md:left-[30%] bottom-[40%] md:bottom-[35%] z-10"></i>
        <i className="devicon-javascript-plain colored absolute md:left-[40%] left-[41%] bottom-[10%] md:bottom-[45%] z-10"></i>
        <i className="devicon-react-original-wordmark colored absolute right-[41%] md:right-[40%] md:bottom-[45%] bottom-[50%] z-10"></i>
        <i className="devicon-vuejs-plain-wordmark colored absolute right-[20%] md:right-[30%] bottom-[40%] md:bottom-[35%] z-10"></i>
        <i className="devicon-tailwindcss-original colored absolute right-[20%]  md:bottom-[20%] bottom-[25%] z-10"></i>
      </div>
    </div>
  );
};

export default Skills;
