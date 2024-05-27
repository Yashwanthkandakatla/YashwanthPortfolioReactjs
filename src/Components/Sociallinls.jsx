import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

function Sociallinls() {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: 'https://linkedin.com',
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:yashwanthkandakatla.2003@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: 'Resume.pdf',
      download: true,
    },
  ]

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((link)=>{
            return <li key={link.id} className="flex justify-between items-center w-40 h-14 bg-gray-400 px-4 ml-[-100px] hover:ml-[-10px] rounded-md duration-300">
            <a
              className="flex w-full justify-between items-center text-white"
              href={link.href}
              download={link.download}
            >
              {link.child}
            </a>
          </li>

        })}

        
      </ul>
    </div>
  )
}

export default Sociallinls
