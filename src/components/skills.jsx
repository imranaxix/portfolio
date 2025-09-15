import React from 'react';
import '../App.css';

const Skills = ({ darkmode }) => {
  // List of devicon class names
  const skillIcons = [
    "html5-plain-wordmark",
    "css3-plain-wordmark",
    "javascript-plain",
    "vuejs-plain-wordmark",
    "tailwindcss-original",
    "react-original",
    "nodejs-plain-wordmark",
    "express-original-wordmark",
    "java-plain",
    "cplusplus-plain",
    "csharp-plain",
    "unity-plain",
    "mysql-plain-wordmark",
    "mongodb-plain-wordmark",
    "git-plain",
    "github-original-wordmark",
  ];

  return (
    <div className='py-10 mx-4 px-6 md:px-20 pt-20 relative flex justify-center flex-col items-center'>
      {/* Title */}
      <h1 className='text-[#0fa41b] text-3xl font-bold text-center tauri-regular my-10 mt-10'>
        &lt;S<span className={`${darkmode ? 'text-[#fff]' : 'text-black'}`}>kills</span>/&gt;
      </h1>

      {/* Skills Container */}
      <div
        className={`
          flex justify-center items-center
          w-full max-w-6xl mx-auto
          p-10 md:p-16 lg:p-20 
          shadow-inner rounded-3xl
          ${darkmode ? 'bg-[#1c1e21]' : 'bg-[#f0f0f0]'}
        `}
      >
        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-24 sm:gap-x-28 md:gap-x-32 lg:gap-x-36 gap-y-10 sm:gap-y-12 md:gap-y-14 lg:gap-y-16 text-6xl md:text-7xl">
          {skillIcons.map((icon, idx) => (
            <i
              key={idx}
              className={`devicon-${icon} colored skill-icon
                ${icon.includes("express") ? "express-color" : ""}
                ${icon.includes("github") ? "github-color" : ""}
                transition-all duration-300 ease-in-out
                lg:hover:scale-125 lg:hover:rotate-6
                lg:hover:drop-shadow-[0_0_15px_#0fa41b]
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
