import React from 'react'
import '../App.css'


const Footer = ({darkmode}) => {
  return (
    <div className='pt-16   '>
      <div className={`${darkmode?'bg-[#1c1e21]':'bg-[#f0f0f0]'} rounded-b-3xl px-20 py-10 flex flex-col lg:flex-row   lg:justify-between items-center`}>
      <h1 className='text-[#0fa41b] text-2xl font-bold tauri-regular lg:mb-0 mb-5 cursor-pointer' id='home'>&lt;I<span className={`${darkmode?'text-[#fff]':'text-black'} `}>mran</span>/&gt;</h1>
      <div className={`flex ${darkmode?'text-gray-300':'text-gray-500'}  justify-center ml-10 flex-col lg:flex-row items-center text-sm`}>
      <div className='flex justify-center items-center lg:text-xs text-[12px] '>
        <a href="tel:03244439186"><p className='hover:text-[#0fa41b] duration-75 ease-in'>+923244439186</p></a>
        <a href="mailto:mimranaziz09@gmail.com">
          <p className= 'mr-10 ml-10 hover:text-[#0fa41b] duration-75 ease-in'>
            mimranaziz09@gmail.com
          </p>
      </a>     
      </div>
      <div className=''>
      <div className='grid grid-cols-4 gap-3 lg:mt-0 mt-5 lg:ml-0 ml-[-40px] text-lg'>
        <a href="https://www.linkedin.com/in/imran-aziz-29740b324/" target="_blank" rel="noreferrer"><ion-icon name="logo-linkedin" ></ion-icon></a>
        <a href="https://api.whatsapp.com/send?phone=92 3244439 186" target="_blank" rel="noreferrer"><ion-icon name="logo-whatsapp"></ion-icon></a>
        <a href="https://www.youtube.com/@codeKhana01/" target="_blank" rel="noreferrer"><ion-icon name="logo-youtube"></ion-icon></a>
        <a href="https://github.com/imranaxix" target="_blank" rel="noreferrer"><ion-icon name="logo-github"></ion-icon></a>
      </div>
       </div>
      
      </div>
      </div>
    </div>
  )
}

export default Footer
