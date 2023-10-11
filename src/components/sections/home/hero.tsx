'use client'

import { FC, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ComputersCanvas from '@/components/canvas/computer';
import Link from 'next/link';
import Typed from "typed.js";


const Hero: FC = (): JSX.Element => {
    const Keywords = useRef(null);

    useEffect(() => {
        const typed = new Typed(Keywords.current, {
            strings: ["Aymane Taoufyq", "Developer Full Stack", "Greatest Of All Time"],
            startDelay: 100,
            typeSpeed: 80,
            backSpeed: 40,
            backDelay: 80,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <header className="section-hero relative w-full h-screen max-xl:h-[75vh] mx-auto">
            <div className='container mx-auto flex flex-row px-8 max-lg:px-4 py-36 max-md:py-16 justify-between max-xl:justify-center'>
                <div className="place-self-center max-xl:text-center">
                    <motion.h4
                        className='color-secondary max-w-2xl mb-4 text-xl font-normal tracking-tight'
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.6,
                        }}
                    >
                        Lorem Ipsum is simply dummy
                    </motion.h4>
                    <motion.h1
                        className="color-white max-w-2xl mb-4 text-5xl max-xl:text-4xl font-semibold tracking-tight leading-none"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.65,
                        }}
                    >
                        Hi, Welcome To My Portfolio
                        <br />

                        I’m {" "}
                        <span className='color-secondary' ref={Keywords}></span>
                    </motion.h1>

                    <motion.p
                        className="color-content-3 max-w-2xl mb-14 font-normal text-xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.7,
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur. In ac dolor
                        Accumsan tempus in diam ipsum nibh velit Lorem ipsum dolor sit amet consectetur. In ac dolor
                        Accumsan tempus in diam ipsum nibh velit.
                    </motion.p>

                    <div className="card flex gap-5 max-xl:justify-center">
                        <motion.div
                            className="card-details text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: 1,
                                ease: [0, 0, 0.5, 1]
                            }}
                        >
                            <h4 className='color-white mt-4 mx-9 font-medium text-base '>Project success</h4>
                            <h1 className='color-white mt-2 font-semibold text-5xl max-xl:text-4xl'>500+</h1>
                        </motion.div>

                        <motion.div
                            className="card-details text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: 1.2,
                                ease: [0, 0, 0.5, 1]
                            }}
                        >
                            <h4 className='color-white mt-4 mx-9 font-medium text-base'>Project success</h4>
                            <h1 className='color-white mt-2 font-semibold text-5xl max-xl:text-4xl'>500+</h1>
                        </motion.div>
                    </div>

                </div>
                <motion.div
                    className='max-xl:hidden xl:mt-0 xl:flex w-[700px] h-[400px]'
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.4,
                        delay: 1.2,
                        ease: [0, 0, 0.5, 1]
                    }}
                >
                    <ComputersCanvas />
                </motion.div>
            </div>

            <motion.div
                className='absolute xs:bottom-10 bottom-60 max-xl:bottom-0 max-[420px]:hidden w-full flex justify-center items-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.4,
                    delay: 1.5,
                    ease: [0, 0, 0.5, 1]
                }}
            >
                <Link href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-round mb-1'
                        />
                    </div>
                </Link>
            </motion.div>
        </header>
    );
}

export default Hero;