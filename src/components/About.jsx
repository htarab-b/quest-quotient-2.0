import React from 'react'

import {motion} from 'framer-motion';

function About() {
  return (
    <div className="bg-black text-white lg:pt-20 pt-16" id='About'>
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
        className="pt-4 text-justify">Quest Quotient returns for its second edition, proudly hosted by the Department of Computer Science. This premier technical symposium brings together the best minds to compete and collaborate across three dynamic events: Hackathon, Ideathon, and Buildathon. Scheduled for  24th and 25th of September 2024 , we invite all of the interested students to engage in a dynamic experience of competition and collaboration. Dive into coding challenges, ignite innovative ideas, and transform concepts into tangible solutions. Join us to push the boundaries of technology, network with peers, and drive forward the future of tech.</motion.p>
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
        className="pt-4 text-justify">The Department of Computer Science at SRM Institute of Science and Technology is dedicated to cultivating exceptional computer professionals equipped with the skills and values necessary to impact the future. Our rigorous programs emphasize practical experience and theoretical knowledge, preparing students for dynamic careers in computing through hands-on learning and innovative research opportunities.</motion.p>
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
        className="pt-4 text-justify">Welcome to Inferno, a dynamic tech community driven by students from the Department of Computer Science at SRM Institute of Science and Technology. We celebrate diversity and welcome talent from all disciplines, not just computer science.At Inferno, we host a variety of engaging events, including symposiums, hackathons, and workshops, designed for everyone to learn and excel, regardless of their background. Our passionate student leaders are committed to fostering creativity and collaboration, empowering each member to showcase their unique skills and talents.</motion.p>
      </div>
    </div>
  )
}

export default About
