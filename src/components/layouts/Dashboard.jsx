import React from 'react'
import Container from '../Container'
import Images from '../Images'
import dash from '../../assets/dash.png'
import { motion } from "framer-motion"

const Dashboard = () => {
    return (
        <>
            <div className="relative">
                <div className="bg-[#08154F] text-white font-google py-[100px] h-screen sticky top-0 flex justify-center items-center">
                    
                    <Container>
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="flex items-center justify-between flex-col sm:flex-row gap-x-[60px] mx-[40px]"
                        >
                            <div>
                                <h1 className='py-[5px] px-[7px] w-[140px] mx-auto md:mx-0 text-center md:text-left border border-[#383D57] text-[#989bac]'>
                                    Dashboard
                                </h1>

                                <p className='text-[40px] md:text-[50px] w-[400px] md:w-[500px] mx-auto md:mx-0 text-center md:text-left'>
                                    Your Mission Control for End-To-End Servicing
                                </p>

                                <p className='text-[12px] font-light mx-auto md:mx-0 text-center md:text-left md:w-[500px]'>
                                    A centralized command center for high-stakes recovery. 
                                    Track performance and agent activity in real-time with a 
                                    continuous data stream designed for rapid, informed decision-making.
                                </p>

                                <div className="text-center md:text-left">
                                    <button
                                        className='text-[19px] font-light text-white mt-[20px] py-[8px] px-[20px] bg-blue-600 rounded-[10px] hover:bg-white hover:text-black border cursor-pointer border-[#000]'
                                    >
                                        Start A Pilot
                                    </button>
                                </div>
                            </div>

                            <div>
                                <Images src={dash} />
                            </div>

                        </motion.div>
                    </Container>

                </div>
            </div>
        </>
    )
}

export default Dashboard