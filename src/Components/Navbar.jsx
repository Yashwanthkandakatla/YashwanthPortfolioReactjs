import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';
function Navbar() {
  const [nav, setnav] = useState(false)

  const links = [
    {
      id: 1,
      link: 'Home',
    },
    {
      id: 2,
      link: 'About',
    },
    {
      id: 3,
      link: 'Portfolio',
    },
    {
      id: 4,
      link: 'Experience',
    },
    {
      id: 5,
      link: 'Contact',
    },
  ]
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
      <div className="text-5xl font-signature ml-2">YashwanthK</div>

      <ul className="hidden md:flex">
        {links.map(({id,link}) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer  font-medium text-gray-400 hover:scale-110 duration-150"
            >
              <Link to={link.toLowerCase()} smooth duration={500}>
                {link}
                </Link>
              
            </li>
          )
        })}
      </ul>
      <div
        onClick={() => setnav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
      {links.map(({link,id}) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={()=>setnav(!nav)} to={link.toLowerCase()} smooth duration={500}>
                {link}
                </Link>
            </li>
          )
        })}
        
        <li className="px-4 cursor-pointer capitalize py-6 text-4xl">Home</li>
      </ul>


      )}
      
    </div>
  )
}

export default Navbar
