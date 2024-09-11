import React from 'react'

import {motion} from 'framer-motion';

function About() {
  return (
    <div className="min-h-screen bg-black text-white lg:pt-20 pt-16" id='About'>
      <div className="px-8 sm:px-72">
        <motion.h1
        initial = {{ opacity:0, x:-100 }}
        whileInView = {{ opacity:1, x:0 }}
        transition = {{ duration:1, delay:0}}
        className="text-3xl sm:text-5xl text-center">About the Event</motion.h1>
        <motion.p
        initial = {{ opacity:0, x:-200 }}
        whileInView = {{ opacity:1, x:0 }}
        transition = {{ duration:1, delay:0}}
        className="pt-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quisquam voluptatibus beatae, quia dolore facere possimus! Illum consectetur natus explicabo, maiores optio nulla, voluptate modi unde dolore quis voluptas dolores veritatis expedita! Excepturi suscipit nulla blanditiis, accusamus a repellat, repellendus repudiandae delectus qui tenetur nemo tempore perspiciatis vitae iste similique error nobis dignissimos eveniet doloremque impedit numquam. Quos quisquam quia vero qui laborum? Non dolorum, eos suscipit quasi iure quam eaque minima doloribus saepe itaque soluta ratione voluptates! Officia saepe nam ut? Veniam eos in fugiat. Magnam placeat neque libero recusandae pariatur vero vel iusto nesciunt error dolorem. Facere, earum.</motion.p>
      </div>
      <div className="pt-10 px-8 sm:px-72">
        <motion.h1
        initial = {{ opacity:0, x:-100 }}
        whileInView = {{ opacity:1, x:0 }}
        transition = {{ duration:1, delay:0}}
        className="text-3xl sm:text-5xl text-center">About the Department</motion.h1>
        <motion.p
        initial = {{ opacity:0, x:-200 }}
        whileInView = {{ opacity:1, x:0 }}
        transition = {{ duration:1, delay:0}}
        className="pt-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quisquam voluptatibus beatae, quia dolore facere possimus! Illum consectetur natus explicabo, maiores optio nulla, voluptate modi unde dolore quis voluptas dolores veritatis expedita! Excepturi suscipit nulla blanditiis, accusamus a repellat, repellendus repudiandae delectus qui tenetur nemo tempore perspiciatis vitae iste similique error nobis dignissimos eveniet doloremque impedit numquam. Quos quisquam quia vero qui laborum? Non dolorum, eos suscipit quasi iure quam eaque minima doloribus saepe itaque soluta ratione voluptates! Officia saepe nam ut? Veniam eos in fugiat. Magnam placeat neque libero recusandae pariatur vero vel iusto nesciunt error dolorem. Facere, earum.</motion.p>
      </div>
      <div className="pt-10 px-8 sm:px-72">
        <motion.h1
        initial = {{ opacity:0, x:-100 }}
        whileInView = {{ opacity:1, x:0 }}
        transition = {{ duration:1, delay:0}}
        className="text-3xl sm:text-5xl text-center">About the Club</motion.h1>
        <motion.p
        initial = {{ opacity:0, x:-200 }}
        whileInView = {{ opacity:1, x:0 }}
        transition = {{ duration:1, delay:0}}
        className="pt-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quisquam voluptatibus beatae, quia dolore facere possimus! Illum consectetur natus explicabo, maiores optio nulla, voluptate modi unde dolore quis voluptas dolores veritatis expedita! Excepturi suscipit nulla blanditiis, accusamus a repellat, repellendus repudiandae delectus qui tenetur nemo tempore perspiciatis vitae iste similique error nobis dignissimos eveniet doloremque impedit numquam. Quos quisquam quia vero qui laborum? Non dolorum, eos suscipit quasi iure quam eaque minima doloribus saepe itaque soluta ratione voluptates! Officia saepe nam ut? Veniam eos in fugiat. Magnam placeat neque libero recusandae pariatur vero vel iusto nesciunt error dolorem. Facere, earum.</motion.p>
      </div>
    </div>
  )
}

export default About
