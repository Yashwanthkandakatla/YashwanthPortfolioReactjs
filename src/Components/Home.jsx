import React from 'react'
import Pic from '../assets/images/Pic.jpg'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-scroll';
import Textspan from './Textspan';
function Home() {
  const sentence = "Yashwanth Kandakatla".split("")
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via black to-gray-800 '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white inline-block'>
            {sentence.map((letter,index)=>{
              return(
                <Textspan key={index}>
                      {letter}
                </Textspan>
              )
            })}
            </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
            quo. Tempore vitae, commodi possimus eos ea, doloribus eum magnam
            dicta magni, nostrum quidem est adipisci voluptas eaque incidunt
            voluptatum reprehenderit ex odio cumque aut veritatis aspernatur
            animi fugit? Sunt, aliquid. Soluta consectetur similique eligendi,
            dolorum impedit deleniti distinctio voluptate consequatur.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 rounded-md items-center px-6 py-3 my-2 flex bg-gradient-to-r from-gray-500 to-black-500'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
        {/* <div>
            <img className='rounded-2xl mx-auto w-2/3 md:w-full' src={Pic} alt="my profile photo" />
        </div> */}
      </div>
    </div>
  )
}

export default Home
