import React from 'react'
// import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'
import { FaLinkedinIn } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className="md:px-[19rem] pt-[6rem] px-16">
            <div className="py-16 lg:section">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row ">
                        {/* <motion.div
                            variants={fadeIn("right", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="flex-1 flex justify-start items-center"
                        >*/}
                            <div> 
                                <h4 className="text-xl uppercase text-blue-500 font-medium mb-2 tracking-wide">
                                    get in touch
                                </h4>
                                <h2 className="text-[45px] lg:text[90px] leading-none mb-12">
                                    Lets work <br /> together!
                                </h2>
                                <div className="text-sm flex gap-4 py-1 text-blue-400">
                                    <FaLinkedinIn />
                                    <FaLinkedinIn />
                                    <FaLinkedinIn />
                                    <FaLinkedinIn />
                                </div>
                            </div>
                        {/* </motion.div> */}
                        <form className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-[4rem] p-[28px] items-start">
                            <input
                                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:to-blue-500 transition-all"
                                placeholder="Your email"
                                type="text"
                            />

                            <textarea className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:to-blue-500 transition-all resize-none mb-12"
                                placeholder="Your massage"
                            ></textarea>
                            <a className="bg-gradient-to-r from-blue-500 to-blue-500 py-2 px-4 rounded-lg" href="#">message</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact