import React from 'react';
import '../App.css';
import project1 from './images/project1.jpg';
import project2 from './images/project2.jpg';
import project3 from './images/project3.jpg';


const Projects = ({darkmode}) => {

  const myProjects = [
    { 
      name:'Fast Food Website',
      image: project1,
      para: 'The project aimed to create a vibrant online space for exploring Los Pollos Hermanos, a fictional food chains offerings. Visitors can effortlessly browse menus, discover the latest deals, and find contact information.' ,
      lpSource: 'https://imranaxix.github.io/LosPollosHermanos',
      codeSource: 'https://github.com/imranaxix/LosPollosHermanos',
      tag1:'HTML',
      tag2:'React',
      tag3:'TailwindCSS',
      tag4:'React-Router',

    },
    { 
      name:'Movie Search App',
      image: project2,
      para: 'The Movie Search App, crafted with React and Tailwind CSS fetches movie data from APIs, providing users with comprehensive details like titles, images, ratings, genres, and overviews. Its interface offer a user-friendly experience.' ,
      tag1:'HTML',
      tag2:'React',
      tag3:'TailwindCSS',
      tag4:'API',
      lpSource: 'https://imranaxix.github.io/SigmaMovieSearch/',
      codeSource: 'https://github.com/imranaxix/SigmaMovieSearch',
      
    },
    { 
      name:'Real Estate Website',
      image: project3,
      para: 'The Real Estate Website project strived to forge an accessible online platform using only HTML, CSS, and JavaScript, showcasing property listings with remarkable simplicity and functionality. No framework used!' ,
      tag1:'HTML',
      tag2:'CSS',
      tag3:'Javascript',
      lpSource: 'https://imranaxix.github.io/PropertyAdvisor.github.io/',
      codeSource: 'https://github.com/imranaxix/PropertyAdvisor.github.io',
      
      
    },
  ]

  return (
    <div className='py-2 px-4 mb-20'>
      <h1 className='text-[#0fa41b] text-3xl font-bold text-center tauri-regular py-4 my-6'>&lt;P<span className={`${darkmode?'text-[#fff]':'text-black'}`}>rojects</span>/&gt;</h1>    

      <div className='flex justify-between flex-col items-center lg:px-20 px-10 py-6 rounded-xl lg:flex-row'>
        {myProjects.map((project, index) => (
          <div className=' lg:w-[400px] md:w-[450px]  w-[350px]  lg:mx-2 mx-0  lg:mb-0 mb-10 ubuntu-light' key={index}>
            <div className={`rounded-xl   ${darkmode?'bg-[#1c1e21]':'bg-[#f0f0f0] shadow-md'}`}>
              <div className='bg-black flex justify-center rounded-t-2xl'>
                <img src={project.image} className='h-[200px] select-none' alt="" />
              </div>
              <div className='px-6 py-4'>
                <h2 className='font-semibold text-lg ubuntu-regular '>{project.name}</h2>
                <p className='text-sm py-4 '>{project.para}</p>

                <div className='text-xs flex justify-start text-[#0fa41b] select-none'>
                  {project.tag1 && <span className={`${darkmode?'bg-[#121315]':'bg-[#fefefe]'}  mr-2 px-2 py-1`}>{project.tag1}</span>}
                  {project.tag2 && <span className={`${darkmode?'bg-[#121315]':'bg-[#fefefe]'}  mr-2 px-2 py-1`}>{project.tag2}</span>}
                  {project.tag3 && <span className={`${darkmode?'bg-[#121315]':'bg-[#fefefe]'}  mr-2 px-2 py-1`}>{project.tag3}</span>}
                  {project.tag4 && <span className={`${darkmode?'bg-[#121315]':'bg-[#fefefe]'}  mr-2 px-2 py-1`}>{project.tag4}</span>}
                </div>

                <div className='flex justify-between items-center text-sm py-3 select-none'>
                  <div className='flex justify-center items-center hover:text-[#0fa41b] transition-all'>
                    <ion-icon name="eye-outline" ></ion-icon>
                    <a href={project.lpSource}  target="_blank" rel="noreferrer">
                      <p className='ml-2 cursor-pointer hover:underline'>Live Preview</p>
                    </a>
                  </div>
                  <div className='flex justify-center items-center hover:text-[#0fa41b] transition-all '>
                    <ion-icon name="logo-github"></ion-icon>
                    <a href={project.codeSource}  target="_blank" rel="noreferrer">
                      <p className='ml-2 cursor-pointer hover:underline'>View Code</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Projects;
