import React, { useState, useMemo } from 'react';
import '../App.css';
import project1 from './images/project1.jpg';
import project2 from './images/project2.jpg';
import project3 from './images/project3.jpg';
import project4 from './images/project4.png';
import project5 from './images/project5.png';
import project6 from './images/project6.png';

const Projects = ({ darkmode }) => {
  const [expandedProjects, setExpandedProjects] = useState({});
  const [selectedTags, setSelectedTags] = useState(new Set(['All']));

  const myProjects = [
    { 
      name: 'Fast Food Website',
      image: project1,
      para: 'The project aimed to create a vibrant online space for exploring Los Pollos Hermanos, a fictional food chain’s offerings. Visitors can effortlessly browse menus, discover the latest deals, and find contact information.',
      lpSource: 'https://imranaxix.github.io/LosPollosHermanos',
      codeSource: 'https://github.com/imranaxix/LosPollosHermanos',
      tag1: 'React',
      tag2: 'TailwindCSS',
      tag3: 'Router',
    },
    { 
      name: 'Movie Search App',
      image: project2,
      para: 'The Movie Search App, crafted with React and Tailwind CSS, fetches movie data from APIs, providing users with comprehensive details like titles, images, ratings, genres, and overviews. Its interface offers a user-friendly experience.',
      tag1: 'React',
      tag2: 'TailwindCSS',
      tag3: 'API',
      lpSource: 'https://imranaxix.github.io/SigmaMovieSearch/',
      codeSource: 'https://github.com/imranaxix/SigmaMovieSearch',
    },
    { 
      name: 'Vue Jobs App',
      image: project4,
      para: 'The Vue Jobs App utilizes a REST API, enabling users to seamlessly browse, add, edit, and delete job listings. This dynamic, responsive platform simplifies job management, offering a user-friendly interface for effective and efficient job administration.',
      tag1: 'Vue',
      tag2: 'TailwindCSS',
      tag3: 'API',
      tag4: 'Router',
      lpSource: 'https://imranaxixjobs.netlify.app/',
      codeSource: 'https://github.com/imranaxix/jobs',
    },
    { 
      name: 'Weather App',
      image: project5,
      para: 'The Weather App, built with Vue js and Tailwind CSS, allows users to search for real-time weather information in any city worldwide using a weather API. Its sleek design ensures an intuitive and responsive experience for all users.',
      tag1: 'Vue',
      tag2: 'TailwindCSS',
      tag3: 'API',
      lpSource: 'https://imranaxix.github.io/weatherApp/',
      codeSource: 'https://github.com/imranaxix/weatherApp',
    },
    { 
      name: 'Real Estate Website',
      image: project3,
      para: 'The Real Estate Website project strived to forge an accessible online platform using only HTML, CSS, and JavaScript, showcasing property listings with remarkable simplicity and functionality. No framework used!',
      tag1: 'Static',
      tag2: 'CSS',
      tag3: 'JavaScript',
      lpSource: 'https://imranaxix.github.io/PropertyAdvisor.github.io/',
      codeSource: 'https://github.com/imranaxix/PropertyAdvisor.github.io',
    },
    { 
      name: 'Portfolio',
      image: project6,
      para: 'This Portfolio, crafted with React and Tailwind CSS, is a showcase of my skills and projects. As you explore, you are getting a firsthand look at my work, designed to reflect my creativity and technical expertise.',
      tag1: 'React',
      tag2: 'TailwindCSS',
      tag3: 'JavaScript',
      lpSource: 'https://imranaxix.github.io/portfolio/',
      codeSource: 'https://github.com/imranaxix/portfolio',
    },
  ];

  const allTags = useMemo(() => {
    const tags = new Set(['All']);
    myProjects.forEach(project => {
      [project.tag1, project.tag2, project.tag3, project.tag4].forEach(tag => {
        if (tag) tags.add(tag);
      });
    });
    return Array.from(tags);
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedTags.has('All')) return myProjects;
    return myProjects.filter(project =>
      [project.tag1, project.tag2, project.tag3, project.tag4].some(tag => selectedTags.has(tag))
    );
  }, [selectedTags, myProjects]);

  const handleTagToggle = (tag) => {
    setSelectedTags(prev => {
      const newTags = new Set(prev);
      if (tag === 'All') {
        return new Set(['All']);
      } else {
        newTags.delete('All');
        if (newTags.has(tag)) {
          newTags.delete(tag);
          if (newTags.size === 0) newTags.add('All');
        } else {
          newTags.add(tag);
        }
      }
      return newTags;
    });
  };

  const handleToggleDescription = (index) => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const getTruncatedDescription = (description) => {
    const maxLength = 120;
    return description.length > maxLength 
      ? `${description.substring(0, maxLength)}...` 
      : description;
  };

  return (
    <div className='py-2 px-10 lg:px-16 mb-20'>
      <h1 className='text-[#0fa41b] text-3xl font-bold text-center tauri-regular py-4 my-6'>
        &lt;P<span className={`${darkmode ? 'text-[#fff]' : 'text-black'}`}>rojects</span>/&gt;
      </h1>

      <div className='text-sm py-4 flex flex-wrap justify-center text-[#0fa41b] select-none mb-6'>
        {allTags.map(tag => (
          <span
            key={tag}
            onClick={() => handleTagToggle(tag)}
            className={`${
              selectedTags.has(tag)
                ? 'bg-[#0fa41b]  text-white'
                : `${darkmode ? 'bg-[#121315]' : 'bg-[#fefefe]'}`
            } mr-2 border mb-2 border-[#0fa41b] px-2 py-1 cursor-pointer hover:bg-[#0fa41b] hover:text-white transition-colors`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {filteredProjects.map((project, index) => (
          <div className='w-full sm:w-[320px] md:w-[350px] lg:w-[360px] mx-auto mb-6' key={index}>
            <div className={`rounded-xl ${darkmode ? 'bg-[#1c1e21]' : 'bg-[#f0f0f0]'} shadow-md`}>
              <div className='bg-black flex justify-center rounded-t-2xl overflow-hidden'>
                <img src={project.image} className='h-[180px] w-full object-cover' alt={project.name} />
              </div>
              <div className='px-4 py-4'>
                <h2 className='font-semibold text-lg ubuntu-regular'>{project.name}</h2>
                <p className='text-sm py-2'>
                  {expandedProjects[index] ? project.para : getTruncatedDescription(project.para)}
                </p>
                <button
                  onClick={() => handleToggleDescription(index)}
                  className='text-[#0fa41b] text-sm hover:text-green-600 mb-5'>
                  {expandedProjects[index] ? 'Less' : 'More'}
                </button>

                <div className='text-xs flex flex-wrap justify-start text-[#0fa41b] select-none'>
                  {project.tag1 && <span className={`${darkmode ? 'bg-[#121315]' : 'bg-[#fefefe]'} mr-2 px-2 py-1`}>{project.tag1}</span>}
                  {project.tag2 && <span className={`${darkmode ? 'bg-[#121315]' : 'bg-[#fefefe]'} mr-2 px-2 py-1`}>{project.tag2}</span>}
                  {project.tag3 && <span className={`${darkmode ? 'bg-[#121315]' : 'bg-[#fefefe]'} mr-2 px-2 py-1`}>{project.tag3}</span>}
                  {project.tag4 && <span className={`${darkmode ? 'bg-[#121315]' : 'bg-[#fefefe]'} mr-2 px-2 py-1`}>{project.tag4}</span>}
                </div>

                <div className='flex justify-between items-center text-sm py-3'>
                  <div className='flex items-center hover:text-[#0fa41b] transition-all'>
                    <ion-icon name="eye-outline"></ion-icon>
                    <a href={project.lpSource} target="_blank" rel="noreferrer" className='ml-2 cursor-pointer hover:underline'>
                      Live Preview
                    </a>
                  </div>
                  <div className='flex items-center hover:text-[#0fa41b] transition-all'>
                    <ion-icon name="logo-github"></ion-icon>
                    <a href={project.codeSource} target="_blank" rel="noreferrer" className='ml-2 cursor-pointer hover:underline'>
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;