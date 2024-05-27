import React from 'react'
import Project from '../assets/images/ProjectManagement.jpg'
function Portfolio() {
    const portfolios = [
        {
            id:1,
            src:Project,
        },
        {
            id:2,
            src:Project,
        },
        {
            id:3,
            src:Project,
        },
        {
            id:4,
            src:Project,
        },
        {
            id:5,
            src:Project,
        },
    ];

  return (
   
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {portfolios.map((port)=>{
                return <div key={port.id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={port.src} className='rounded-md hover:scale-105 duration-200' alt="" />
                <div>
                    <button className='hover:scale-105 duration-200 w-1/2 px-3 py-2'>Demo</button>
                    <button className='hover:scale-105 duration-200 w-1/2 px-3 py-2 '>Code</button>
                </div>
                </div>
            })}
                
            </div>
        </div>




    </div>
    
  )
}

export default Portfolio