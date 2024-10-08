import React from 'react'
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";

import Hackathon from '../assets/Hackathon.jpg'
import Ideathon from '../assets/Ideathon.jpg'
import Buildathon from '../assets/Buildathon.jpg'

function Events() {
  return (
    <div className="min-h-screen bg-black text-white pt-14 lg:pt-24 flex flex-wrap justify-center" id='Events'>
      <div className="w-full px-8 sm:px-56">
        <motion.h1
        initial = {{ opacity:0, x:-100 }}
        whileInView = {{ opacity:1, x:0 }}
        transition = {{ duration:1, delay:0}}
        className="text-3xl sm:text-5xl text-center">
          Events
        </motion.h1>
        <motion.p
        initial = {{ opacity:0, x:-100 }}
        whileInView = {{ opacity:1, x:0 }}
        transition = {{ duration:1, delay:0}}
        className="text-justify pt-3">
          Check out our exciting events and seize the perfect opportunity to challenge yourself, connect with others, and grow! With a combined prize pool of <strong className="text-xl">₹25,000</strong> up for grabs, don't miss your chance to join in and win big. Register now!
        </motion.p>
      </div>

      <motion.div 
      initial = {{ opacity:0, x:-100 }}
      whileInView = {{ opacity:1, x:0 }}
      transition = {{ duration:1, delay:0 }}
      className="container flex justify-center w-full sm:w-1/4 p-5">
        <Link to="/Hackathon" className="max-w-sm">
          <div className="max-w-sm">
            <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
              <img className="rounded-t-lg w-full" src={Hackathon} alt="" />
              <div className="py-6 px-8 rounded-lg bg-white">
                <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">Hackathon</h1>
                <p className="text-gray-700 tracking-wide">
                  Think, code, and innovate with us to transform challenges into endless possibilities!
                </p>
                <Link to="/Hackathon" className="max-w-sm"><button className="mt-6 py-2 px-4 w-full bg-gray-800 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Register Now</button></Link>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      <motion.div 
      initial = {{ opacity:0, x:-100 }}
      whileInView = {{ opacity:1, x:0 }}
      transition = {{ duration:1, delay:0 }}
      className="container flex justify-center w-full sm:w-1/4 p-5">
        <Link to="/Ideathon" className="max-w-sm">
          <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
            <img className="rounded-t-lg w-full" src={Ideathon} alt="" />
            <div className="py-6 px-8 rounded-lg bg-white">
              <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">Ideathon</h1>
              <p className="text-gray-700 tracking-wide">
                Where ideas spark, innovation ignites. Join us in transforming visions into breakthroughs.
              </p>
              <Link to="/Ideathon" className="max-w-sm"><button className="mt-6 py-2 px-4 w-full bg-gray-800 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Register Now</button></Link>
            </div>
          </div>
        </Link>
      </motion.div>

      <motion.div 
      initial = {{ opacity:0, x:-100 }}
      whileInView = {{ opacity:1, x:0 }}
      transition = {{ duration:1, delay:0 }}
      className="container flex justify-center w-full sm:w-1/4 p-5">
        <Link to="/Buildathon" className="max-w-sm">
          <div className="max-w-sm">
            <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
              <img className="rounded-t-lg w-full" src={Buildathon} alt="" />
              <div className="py-6 px-8 rounded-lg bg-white">
                <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">Buildathon</h1>
                <p className="text-gray-700 tracking-wide">
                  From concept to creation, let's build impactful solutions that truly make a difference.
                </p>
                <Link to="/Buildathon" className="max-w-sm"><button className="mt-6 py-2 px-4 w-full bg-gray-800 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Register Now</button></Link>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  )
}

export default Events
