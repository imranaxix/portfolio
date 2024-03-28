import React, {useState} from 'react';

import Navbar from './components/navbar';
import './index.css'
import './App.css'
import Projects from './components/projects';
import Banner from './components/banner';
import About from './components/about';
import Skills from './components/skills';
import Footer from './components/footer';



function App() {

  const [darkMode, setDarkMode] = useState(true);
  const toggleMode = () => {
    setDarkMode(!darkMode)
  }
  const handleThemeChange = (e) => {
    const setTheme = e.target.value;
    toggleMode(setTheme === 'dark');
  };

  return (
   <div className={`${darkMode?'bg-black':'bg-[#fefefe]'}`}>
     <div className={`${darkMode?'bg-[#121315] text-white':'bg-[#fefefe] text-black'} px-0 pt-4 w-[100%] rounded-3xl  h-[100%] `}>
     <Navbar darkMode={darkMode} toggleMode={toggleMode} handleThemeChange={handleThemeChange} />
        <div id='home'><Banner  darkmode={darkMode}/></div>
        <div id='about'><About darkmode={darkMode}/></div>
        <div id='skills'><Skills darkmode={darkMode}/></div>
        <div id='projects'><Projects darkmode={darkMode}/></div>
        <div id='contact'><Footer darkmode={darkMode}/></div>
      
      
      
    </div>
   </div>
  );
}

export default App;
