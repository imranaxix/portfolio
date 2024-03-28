import React from 'react'
import '../App.css'

const About = ({darkmode}) => {
  return (
    <div className='py-6 lg:py-12 md:py-10 md:mx-10 mx-4 '>
    <h1 className='text-[#0fa41b] text-3xl  font-bold text-center tauri-regular py-4 my-6'>&lt;A<span className={`${darkmode?'text-[#fff]':'text-black'}`}>bout</span>/&gt;</h1>
      <div className={`ubuntu-regular md:text-xl text-sm shadow-lg mb-6 ${darkmode?'bg-[#1c1e21]  text-gray-100':'bg-[#f0f0f0]  text-gray-500'}  rounded-3xl py-6 lg:py-14 lg:px-20 md:px-16 px-6`}>
        <p className='mb-4'>As a frontend developer with a keen interest in crafting engaging user experiences, I specialize in React JS and utilize frameworks like Tailwind CSS to bring designs to life. While I may lack professional experience, my passion for learning and creating drives me. Through self-directed projects and continuous skill development, I aim to contribute innovative solutions to the ever-evolving world of web development. I'm eager to embark on opportunities where I can apply my knowledge and grow alongside dynamic teams, bringing fresh perspectives to the table.</p>
        <p>Driven by a curiosity for emerging technologies and a commitment to mastering my craft, I thrive on challenges that push me to expand my skill set. While my journey as a developer is just beginning, I approach each project with dedication and a determination to deliver high-quality results. My goal is to not only meet client expectations but to exceed them, creating seamless, intuitive interfaces that leave a lasting impression. I'm excited to collaborate with like-minded individuals and contribute to impactful projects that make a difference in the digital landscape</p>
      </div>
    </div>
  )
}


export default About
