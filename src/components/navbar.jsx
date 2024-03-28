import React, {useState} from 'react';
import '../App.css';

const Navbar = ({ darkMode, handleThemeChange }) => {
  let Navlinks = [
    { name:'Home', id:'home' },
    { name:'About', id:'about' },
    { name:'Expertise', id:'skills' },
    { name:'Projects', id:'projects' }
  ];

  let [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setOpen(false);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpen(false);
  };



  return (
    <div className=' w-full fixed top-0 left-0 z-20 select-none'>
      <div className={`md:flex items-center justify-between py-5 shadow-md rounded-t-3xl md:pr-10 md:pl-20 px-5 mx-auto duration-75  ease-in ${darkMode ? 'bg-[#1c1e21]' : 'bg-[#f0f0f0]'}`}>
      <h1 className='text-[#0fa41b] text-2xl font-bold tauri-regular cursor-pointer' onClick={scrollToTop} id='home'>&lt;I<span className={`${darkMode?'text-[#fff]':'text-black'}`}>mran</span>/&gt;</h1>
      <div
          onClick={() => setOpen(!open)}
          className={`text-3xl absolute right-6 top-6 cursor-pointer md:hidden }`}
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div> 
      <div className='flex justify-between'>
        <ul className={`md:flex md:items-center justify-end select-none md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-12 duration-75 ease-in ${
              open ? 'top-16 opacity-100' : 'top-[-490px]'
            } md:opacity-100 opacity-0 ${darkMode?'bg-[#1c1e21] ' : 'bg-[#f0f0f0]'}`}>
          {Navlinks.map((Navlink) => (
            <li key={Navlink.id} className='mx-5 cursor-pointer text-base font-semibold md:ml-8  md:my-0 my-7 transition duration-100 ease-in'>
              <span onClick={() => scrollToSection(Navlink.id)} className={`${darkMode?'text-white':'text-black'} transition-all hover:text-[#0fa41b]`}>{Navlink.name}</span>
            </li>
          ))}
          <div className='flex justify-start items-center  lg:ml-0 ml-[-6px]'> 
            <div>
              <select className={`ml-5 border-none  py-2 px-1 cursor-pointer text-base font-semibold rounded-lg ${darkMode?'bg-[#1c1e21]':'bg-[#f0f0f0]'}`} onChange={handleThemeChange}>
                <option value="dark">Dark Mode</option>
                <option value="light">Light Mode</option>
                
              </select>
            </div>
            <button onClick={() => scrollToSection('contact')} className={`ml-20 border-[#0fa41b] border-[1px] text-[#0fa41b]  cursor-pointer hover:bg-[#0fa41b]  py-2 px-4 text-base font-bold rounded-lg ${darkMode?'hover:text-[#121315] transition-all hover:border-[#121315]':'hover:text-[#fff]  hover:border-[#fff]'}`}>Contact</button>
          </div>
        </ul>
        
      </div>
      </div>
    </div>
  );
};

export default Navbar;
