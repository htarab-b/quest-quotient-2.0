import React from 'react';
import {motion} from 'framer-motion';

import down_icon from '../assets/down-icon.png'
import sponsor from '../assets/Sponsor.jpeg'

function Landing() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center flex-wrap" id='Landing'>
            <div className="text-center w-full pointer-events-none">
                <motion.h1
                initial = {{ opacity:0 }}
                animate = {{ opacity:1 }}
                transition = {{ duration:2, delay:2}}
                className="LogoFont sm:text-6xl text-4xl">
                    Quest Quotient
                </motion.h1>
                <motion.h2
                initial = {{ opacity:0 }}
                animate = {{ opacity:1 }}
                transition = {{ duration:2, delay:2.75}}
                className="LogoFont sm:pt-4 pt-2 sm:text-2xl">2.0
                </motion.h2>
                <motion.h3
                initial = {{ opacity:0 }}
                animate = {{ opacity:1 }}
                transition = {{ duration:1.5, delay:1 }}
                className="pt-3 sm:text-2xl text-xl text-center TaglineFont">
                    Ideating the Future
                </motion.h3>
            </div>
            <motion.div
            initial = {{ opacity:0 }}
            animate = {{ opacity:1 }}
            transition = {{ duration:2.5, delay:3.25}}
            onScroll = {{opacity:0}}
            className="absolute top-32 pointer-events-none flex justify-center items-center flex-wrap sm:w-40 w-32">
                <h2 className="sm:text-xl text-lg text-center">
                    Title Sponsor
                </h2>
                <img src={sponsor} className="sm:w-24 w-20" />
            </motion.div>
            <motion.div
            initial = {{ opacity:0 }}
            animate = {{ opacity:0.7 }}
            transition = {{ duration:2.5, delay:3.25}}
            onScroll = {{opacity:0}}
            className="absolute bottom-4 pointer-events-none flex justify-center items-center flex-wrap sm:w-40 w-32">
                <h2 className="sm:text-2xl text-xl text-center">
                    Scroll Down
                </h2>
                <img src={down_icon} className="sm:w-10 w-8" />
            </motion.div>
        </div>
    )
}

export default Landing
