import React from 'react'
import {motion} from 'framer-motion'
function Textspan({children}) {
  return (
    <motion.span whileHover={{scale:1.5}}>
        {children}
    </motion.span>
  )
}

export default Textspan