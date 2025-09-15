import React from 'react'
import '../App.css'

const About = ({darkmode}) => {
  return (
    <div className='py-6 lg:py-12 md:py-10 md:mx-10 mx-4 '>
    <h1 className='text-[#0fa41b] text-3xl  font-bold text-center tauri-regular py-4 my-6'>&lt;A<span className={`${darkmode?'text-[#fff]':'text-black'}`}>bout</span>/&gt;</h1>
      <div className={`ubuntu-regular md:text-xl text-sm shadow-lg mb-6 ${darkmode?'bg-[#1c1e21]  text-gray-100':'bg-[#f0f0f0]  text-gray-500'}  rounded-3xl py-6 lg:py-14 lg:px-20 md:px-16 px-6`}>
        <p className='mb-4'>As a software engineer with a passion for building dynamic and engaging applications, I specialize in creating seamless user experiences across both frontend and backend development. My technical skills include HTML, CSS, JavaScript, React.js, Vue.js, and PHP on the frontend, and Node.js, Express.js, MySQL, and MongoDB on the backend. I also bring experience in Unity game development using C++, Java, and C#, with version control managed through Git and GitHub. While I may not yet have extensive professional experience, I’ve developed a strong foundation through self-directed projects, focusing on building responsive interfaces, scalable architectures, and interactive systems. My curiosity for new technologies and dedication to clean, efficient coding drive me to continuously learn and refine my craft.</p>
        <p>I thrive on challenges that push me to grow, whether it’s designing smooth UI interactions, optimizing databases, or experimenting with game mechanics. Each project I take on is approached with focus, creativity, and a determination to deliver high-quality results. My goal is not only to meet expectations but to exceed them, crafting applications that are intuitive, impactful, and memorable. I’m eager to collaborate with innovative teams, contribute fresh perspectives, and expand my expertise while working on projects that make a difference in the digital landscape.</p>
      </div>
    </div>
  )
}


export default About

