import React from 'react'
import html from '../assets/images/HTML.png'
import css from '../assets/images/CSS.png'
import js from '../assets/images/JS.png'
import react1 from '../assets/images/React1.png'
import react2 from '../assets/images/React2.png'
import python from '../assets/images/python.svg'


function Experience() {
    const stacks =[
        {
            id:1,
            src:html,
            title :"HTML",
            style:'shadow-orange-500',
        },
        {
            id:2,
            src:css,
            title :"CSS",
            style:'shadow-blue-500',
        },
        {
            id:3,
            src:js,
            title :"JavaScript",
            style:'shadow-yellow-500',
        },
        {
            id:4,
            src:react1,
            title :"REACT",
            style:'shadow-blue-600',
        },
        {
            id:5,
            src:python,
            title :"PYTHON",
            style:'shadow-yellow-500',
        },
       
    ]
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 broder-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I have worked with</p>
            </div>
            <div className='grid w-full grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {stacks.map(({id,style,title,src})=>{
                    return <div key={id}     className= {`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style} `}>
                    <img className='w-20 mx-auto' src={src} alt="" />
                    <p className='mt-4'>{title}</p>
                </div>
                })}


                
            </div>
        </div>
    </div>
  )
}

export default Experience