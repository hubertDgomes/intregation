import React, { useRef } from 'react'
import Images from '../Images'
import final from '../../assets/final.jpeg'
import { motion, useScroll, useTransform } from "framer-motion"
const Intregation2 = () => {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <>
            <div className="h-[400vh] relative">
                <motion.div
                style={{opacity2}}
                className="sticky top-0 h-screen flex items-center justify-center">
                    <Images

                        src={final} />
                </motion.div>
            </div>
        </>
    )
}

export default Intregation2
