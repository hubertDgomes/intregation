import React, { useRef } from "react"
import Images from "../Images"
import logo1 from "../../assets/logo1.jpeg"
import logo2 from "../../assets/logo2.png"
import logo3 from "../../assets/logo3.jpeg"
import logo4 from "../../assets/logo4.jpeg"
import logo5 from "../../assets/logo5.jpeg"
import final from '../../assets/final.jpeg'
import "../../App.css"
import { motion, useScroll, useTransform } from "framer-motion"
import Dashboard from "./Dashboard"

const Intregration = () => {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })


    const x1 = useTransform(scrollYProgress, [0, 1], [0, 880])
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 300])

    const x2 = useTransform(scrollYProgress, [0, 1], [0, 280])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 430])

    const x3 = useTransform(scrollYProgress, [0, 1], [0, -860])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 300])

    const x4 = useTransform(scrollYProgress, [0, 1], [0, -254])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, 320])

    const x5 = useTransform(scrollYProgress, [0, 1], [0, 750])
    const y5 = useTransform(scrollYProgress, [0, 1], [0, 30])


    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
    const opacity2 = useTransform(scrollYProgress, [0.7, 1], [0, 1])

    return (
        <>
            <div ref={ref} className="h-[400vh] relative">
                <div className="sticky top-0 h-screen bg-[url(../../assets/bg1.png)] bg-no-repeat bg-center bg-cover">
                    <div className="flex items-center justify-center h-screen flex-col ">
                        <motion.h1
                            style={{ opacity }}
                            className='font-google text-[#08144F] text-[54px] w-[522px] text-center'>
                            One platform, unlimited integrations
                        </motion.h1>
                        <motion.button
                            style={{ opacity }}
                            className='text-[19px] font-light text-white font-google mt-[20px] py-[8px] px-[20px] bg-blue-600 rounded-[10px] hover:bg-white hover:text-black border cursor-pointer border-[#000]'>
                            View All Intregation
                        </motion.button>
                        <motion.img
                            src={logo1}
                            style={{ x: x1, y: y1, opacity }}
                            className="absolute left-62.5 top-50 w-[100px] h-[100px]"
                        />
                        <motion.img
                            src={logo5}
                            style={{ x: x5, y: y5, opacity }}
                            className="absolute left-[350px] top-[400px] w-[100px] h-[100px]"
                        />
                        <motion.img
                            src={logo2}
                            style={{ x: x2, y: y2, opacity }}
                            className="absolute left-[700px] top-[100px] w-[100px] h-[100px]"
                        />
                        <motion.img
                            src={logo4}
                            style={{ x: x4, y: y4, opacity }}
                            className="absolute left-[1100px] top-[190px] w-[100px] h-[100px]"
                        />

                        <motion.img
                            src={logo3}
                            style={{ x: x3, y: y3, opacity }}
                            className="absolute right-[250px] top-[200px] w-[100px] h-[100px]"
                        />
                        <motion.img
                            src={logo3}
                            style={{ x: x3, y: y3, opacity }}
                            className="absolute right-[250px] top-[200px] w-[100px] h-[100px]"
                        />

                    </div>
                </div>
                <div className="h-[400vh] relative">
                    <motion.div
                        style={{ opacity: opacity2 }}
                        className="sticky top-0 h-screen flex items-center justify-center">
                        <Images src={final} />
                    </motion.div>
                </div>
                <div className="flex flex-col gap-y-[20px]">
                    <Dashboard/>
                <Dashboard/>
                <Dashboard/>
                </div>
            </div>


        </>
    )
}

export default Intregration