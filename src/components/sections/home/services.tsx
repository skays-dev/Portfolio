import StarWrapper from "@/hoc/SectionWrapper";
import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "@/utils/motions/motion";
import Image from "next/image";
import React from "react";
import { Tilt } from "react-tilt";


const Services: FC = (): JSX.Element => {
    return (
        <div className="mx-auto sm:px-16 px-6 sm:py-16 py-10 container">
            <div className="text-center">
                <motion.p
                    className="color-content-3 mb-1 font-normal text-base"
                    variants={zoomIn(0.2, 0.4)}
                >
                    let's make something together
                </motion.p>

                <motion.h1
                    className="mb-3 text-5xl max-xl:text-4xl font-semibold tracking-tight leading-none color-secondary"
                    variants={zoomIn(0.2, 0.4)}
                >
                    Services
                </motion.h1>
                <motion.p
                    className="color-content-3 mb-12 font-normal text-base"
                    variants={zoomIn(0.2, 0.4)}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga cumque placeat,
                    <br /> tempore inventore nisi.
                </motion.p>
            </div>

            <div className="all-services max-w-5xl mx-auto flex flex-row flex-wrap  justify-center gap-6">
                <Tilt className='w-[324px]'>
                    <motion.div
                        className="rounded-3xl primary-secondary-gradient w-full p-[1px] shadow-card"
                        variants={fadeIn("right", "spring", 0.75, 0.75)}
                    >
                        <div className="service-item p-6 rounded-3xl">
                            <div className="mb-3 flex justify-center items-center w-8 h-8 bg-round rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19.3297 5.68027L13.0597 2.30027C12.3997 1.94027 11.5997 1.94027 10.9397 2.30027L4.66969 5.68027C4.20969 5.93027 3.92969 6.41027 3.92969 6.96027C3.92969 7.50027 4.20969 7.99027 4.66969 8.24027L10.9397 11.6203C11.2697 11.8003 11.6397 11.8903 11.9997 11.8903C12.3597 11.8903 12.7297 11.8003 13.0597 11.6203L19.3297 8.24027C19.7897 7.99027 20.0697 7.51027 20.0697 6.96027C20.0697 6.41027 19.7897 5.93027 19.3297 5.68027Z" fill="#8362F0" />
                                    <path d="M9.91 12.79L4.07 9.87C3.62 9.65 3.1 9.67 2.68 9.93C2.25 10.2 2 10.65 2 11.15V16.66C2 17.61 2.53 18.47 3.38 18.9L9.21 21.82C9.41 21.92 9.63 21.97 9.85 21.97C10.11 21.97 10.37 21.9 10.6 21.76C11.03 21.5 11.28 21.04 11.28 20.54V15.03C11.29 14.07 10.76 13.21 9.91 12.79Z" fill="#8362F0" />
                                    <path d="M21.3187 9.93014C20.8887 9.67014 20.3688 9.64014 19.9288 9.87014L14.0988 12.7901C13.2488 13.2201 12.7188 14.0701 12.7188 15.0301V20.5401C12.7188 21.0401 12.9687 21.5001 13.3987 21.7601C13.6287 21.9001 13.8887 21.9701 14.1487 21.9701C14.3687 21.9701 14.5887 21.9201 14.7887 21.8201L20.6188 18.9001C21.4688 18.4701 21.9987 17.6201 21.9987 16.6601V11.1501C21.9987 10.6501 21.7487 10.2001 21.3187 9.93014Z" fill="#8362F0" />
                                </svg>
                            </div>
                            <h2 className="color-white text-xl font-semibold tracking-tight leading-none mb-2">Important Features</h2>
                            <p className="color-content-4 text-base font-normal">Lorem ipsum dolor sit amet consectetur. In ac dolorAccumsan tempus in diam ipsum tempus in diam ipsum.</p>
                        </div>
                    </motion.div>
                </Tilt>

                <Tilt className='w-[324px]'>
                    <motion.div
                        className="rounded-3xl primary-secondary-gradient w-full p-[1px] shadow-card"
                        variants={fadeIn("right", "spring", 0.75, 0.75)}
                    >
                        <div className="service-item p-6 rounded-3xl">
                            <div className="mb-3 flex justify-center items-center w-8 h-8 bg-round rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19.3297 5.68027L13.0597 2.30027C12.3997 1.94027 11.5997 1.94027 10.9397 2.30027L4.66969 5.68027C4.20969 5.93027 3.92969 6.41027 3.92969 6.96027C3.92969 7.50027 4.20969 7.99027 4.66969 8.24027L10.9397 11.6203C11.2697 11.8003 11.6397 11.8903 11.9997 11.8903C12.3597 11.8903 12.7297 11.8003 13.0597 11.6203L19.3297 8.24027C19.7897 7.99027 20.0697 7.51027 20.0697 6.96027C20.0697 6.41027 19.7897 5.93027 19.3297 5.68027Z" fill="#8362F0" />
                                    <path d="M9.91 12.79L4.07 9.87C3.62 9.65 3.1 9.67 2.68 9.93C2.25 10.2 2 10.65 2 11.15V16.66C2 17.61 2.53 18.47 3.38 18.9L9.21 21.82C9.41 21.92 9.63 21.97 9.85 21.97C10.11 21.97 10.37 21.9 10.6 21.76C11.03 21.5 11.28 21.04 11.28 20.54V15.03C11.29 14.07 10.76 13.21 9.91 12.79Z" fill="#8362F0" />
                                    <path d="M21.3187 9.93014C20.8887 9.67014 20.3688 9.64014 19.9288 9.87014L14.0988 12.7901C13.2488 13.2201 12.7188 14.0701 12.7188 15.0301V20.5401C12.7188 21.0401 12.9687 21.5001 13.3987 21.7601C13.6287 21.9001 13.8887 21.9701 14.1487 21.9701C14.3687 21.9701 14.5887 21.9201 14.7887 21.8201L20.6188 18.9001C21.4688 18.4701 21.9987 17.6201 21.9987 16.6601V11.1501C21.9987 10.6501 21.7487 10.2001 21.3187 9.93014Z" fill="#8362F0" />
                                </svg>
                            </div>
                            <h2 className="color-white text-xl font-semibold tracking-tight leading-none mb-2">Important Features</h2>
                            <p className="color-content-4 text-base font-normal">Lorem ipsum dolor sit amet consectetur. In ac dolorAccumsan tempus in diam ipsum tempus in diam ipsum.</p>
                        </div>
                    </motion.div>
                </Tilt>

                <Tilt className='w-[324px]'>
                    <motion.div
                        className="rounded-3xl primary-secondary-gradient w-full p-[1px] shadow-card"
                        variants={fadeIn("right", "spring", 0.75, 0.75)}
                    >
                        <div className="service-item p-6 rounded-3xl">
                            <div className="mb-3 flex justify-center items-center w-8 h-8 bg-round rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19.3297 5.68027L13.0597 2.30027C12.3997 1.94027 11.5997 1.94027 10.9397 2.30027L4.66969 5.68027C4.20969 5.93027 3.92969 6.41027 3.92969 6.96027C3.92969 7.50027 4.20969 7.99027 4.66969 8.24027L10.9397 11.6203C11.2697 11.8003 11.6397 11.8903 11.9997 11.8903C12.3597 11.8903 12.7297 11.8003 13.0597 11.6203L19.3297 8.24027C19.7897 7.99027 20.0697 7.51027 20.0697 6.96027C20.0697 6.41027 19.7897 5.93027 19.3297 5.68027Z" fill="#8362F0" />
                                    <path d="M9.91 12.79L4.07 9.87C3.62 9.65 3.1 9.67 2.68 9.93C2.25 10.2 2 10.65 2 11.15V16.66C2 17.61 2.53 18.47 3.38 18.9L9.21 21.82C9.41 21.92 9.63 21.97 9.85 21.97C10.11 21.97 10.37 21.9 10.6 21.76C11.03 21.5 11.28 21.04 11.28 20.54V15.03C11.29 14.07 10.76 13.21 9.91 12.79Z" fill="#8362F0" />
                                    <path d="M21.3187 9.93014C20.8887 9.67014 20.3688 9.64014 19.9288 9.87014L14.0988 12.7901C13.2488 13.2201 12.7188 14.0701 12.7188 15.0301V20.5401C12.7188 21.0401 12.9687 21.5001 13.3987 21.7601C13.6287 21.9001 13.8887 21.9701 14.1487 21.9701C14.3687 21.9701 14.5887 21.9201 14.7887 21.8201L20.6188 18.9001C21.4688 18.4701 21.9987 17.6201 21.9987 16.6601V11.1501C21.9987 10.6501 21.7487 10.2001 21.3187 9.93014Z" fill="#8362F0" />
                                </svg>
                            </div>
                            <h2 className="color-white text-xl font-semibold tracking-tight leading-none mb-2">Important Features</h2>
                            <p className="color-content-4 text-base font-normal">Lorem ipsum dolor sit amet consectetur. In ac dolorAccumsan tempus in diam ipsum tempus in diam ipsum.</p>
                        </div>
                    </motion.div>
                </Tilt>

                <Tilt className='w-[324px]'>
                    <motion.div
                        className="rounded-3xl primary-secondary-gradient w-full p-[1px] shadow-card"
                        variants={fadeIn("right", "spring", 0.75, 0.75)}
                    >
                        <div className="service-item p-6 rounded-3xl">
                            <div className="mb-3 flex justify-center items-center w-8 h-8 bg-round rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19.3297 5.68027L13.0597 2.30027C12.3997 1.94027 11.5997 1.94027 10.9397 2.30027L4.66969 5.68027C4.20969 5.93027 3.92969 6.41027 3.92969 6.96027C3.92969 7.50027 4.20969 7.99027 4.66969 8.24027L10.9397 11.6203C11.2697 11.8003 11.6397 11.8903 11.9997 11.8903C12.3597 11.8903 12.7297 11.8003 13.0597 11.6203L19.3297 8.24027C19.7897 7.99027 20.0697 7.51027 20.0697 6.96027C20.0697 6.41027 19.7897 5.93027 19.3297 5.68027Z" fill="#8362F0" />
                                    <path d="M9.91 12.79L4.07 9.87C3.62 9.65 3.1 9.67 2.68 9.93C2.25 10.2 2 10.65 2 11.15V16.66C2 17.61 2.53 18.47 3.38 18.9L9.21 21.82C9.41 21.92 9.63 21.97 9.85 21.97C10.11 21.97 10.37 21.9 10.6 21.76C11.03 21.5 11.28 21.04 11.28 20.54V15.03C11.29 14.07 10.76 13.21 9.91 12.79Z" fill="#8362F0" />
                                    <path d="M21.3187 9.93014C20.8887 9.67014 20.3688 9.64014 19.9288 9.87014L14.0988 12.7901C13.2488 13.2201 12.7188 14.0701 12.7188 15.0301V20.5401C12.7188 21.0401 12.9687 21.5001 13.3987 21.7601C13.6287 21.9001 13.8887 21.9701 14.1487 21.9701C14.3687 21.9701 14.5887 21.9201 14.7887 21.8201L20.6188 18.9001C21.4688 18.4701 21.9987 17.6201 21.9987 16.6601V11.1501C21.9987 10.6501 21.7487 10.2001 21.3187 9.93014Z" fill="#8362F0" />
                                </svg>
                            </div>
                            <h2 className="color-white text-xl font-semibold tracking-tight leading-none mb-2">Important Features</h2>
                            <p className="color-content-4 text-base font-normal">Lorem ipsum dolor sit amet consectetur. In ac dolorAccumsan tempus in diam ipsum tempus in diam ipsum.</p>
                        </div>
                    </motion.div>
                </Tilt>

                <Tilt className='w-[324px]'>
                    <motion.div
                        className="rounded-3xl primary-secondary-gradient w-full p-[1px] shadow-card"
                        variants={fadeIn("right", "spring", 0.75, 0.75)}
                    >
                        <div className="service-item p-6 rounded-3xl">
                            <div className="mb-3 flex justify-center items-center w-8 h-8 bg-round rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19.3297 5.68027L13.0597 2.30027C12.3997 1.94027 11.5997 1.94027 10.9397 2.30027L4.66969 5.68027C4.20969 5.93027 3.92969 6.41027 3.92969 6.96027C3.92969 7.50027 4.20969 7.99027 4.66969 8.24027L10.9397 11.6203C11.2697 11.8003 11.6397 11.8903 11.9997 11.8903C12.3597 11.8903 12.7297 11.8003 13.0597 11.6203L19.3297 8.24027C19.7897 7.99027 20.0697 7.51027 20.0697 6.96027C20.0697 6.41027 19.7897 5.93027 19.3297 5.68027Z" fill="#8362F0" />
                                    <path d="M9.91 12.79L4.07 9.87C3.62 9.65 3.1 9.67 2.68 9.93C2.25 10.2 2 10.65 2 11.15V16.66C2 17.61 2.53 18.47 3.38 18.9L9.21 21.82C9.41 21.92 9.63 21.97 9.85 21.97C10.11 21.97 10.37 21.9 10.6 21.76C11.03 21.5 11.28 21.04 11.28 20.54V15.03C11.29 14.07 10.76 13.21 9.91 12.79Z" fill="#8362F0" />
                                    <path d="M21.3187 9.93014C20.8887 9.67014 20.3688 9.64014 19.9288 9.87014L14.0988 12.7901C13.2488 13.2201 12.7188 14.0701 12.7188 15.0301V20.5401C12.7188 21.0401 12.9687 21.5001 13.3987 21.7601C13.6287 21.9001 13.8887 21.9701 14.1487 21.9701C14.3687 21.9701 14.5887 21.9201 14.7887 21.8201L20.6188 18.9001C21.4688 18.4701 21.9987 17.6201 21.9987 16.6601V11.1501C21.9987 10.6501 21.7487 10.2001 21.3187 9.93014Z" fill="#8362F0" />
                                </svg>
                            </div>
                            <h2 className="color-white text-xl font-semibold tracking-tight leading-none mb-2">Important Features</h2>
                            <p className="color-content-4 text-base font-normal">Lorem ipsum dolor sit amet consectetur. In ac dolorAccumsan tempus in diam ipsum tempus in diam ipsum.</p>
                        </div>
                    </motion.div>
                </Tilt>

                <Tilt className='w-[324px]'>
                    <motion.div
                        className="rounded-3xl primary-secondary-gradient w-full p-[1px] shadow-card"
                        variants={fadeIn("right", "spring", 0.75, 0.75)}
                    >
                        <div className="service-item p-6 rounded-3xl">
                            <div className="mb-3 flex justify-center items-center w-8 h-8 bg-round rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19.3297 5.68027L13.0597 2.30027C12.3997 1.94027 11.5997 1.94027 10.9397 2.30027L4.66969 5.68027C4.20969 5.93027 3.92969 6.41027 3.92969 6.96027C3.92969 7.50027 4.20969 7.99027 4.66969 8.24027L10.9397 11.6203C11.2697 11.8003 11.6397 11.8903 11.9997 11.8903C12.3597 11.8903 12.7297 11.8003 13.0597 11.6203L19.3297 8.24027C19.7897 7.99027 20.0697 7.51027 20.0697 6.96027C20.0697 6.41027 19.7897 5.93027 19.3297 5.68027Z" fill="#8362F0" />
                                    <path d="M9.91 12.79L4.07 9.87C3.62 9.65 3.1 9.67 2.68 9.93C2.25 10.2 2 10.65 2 11.15V16.66C2 17.61 2.53 18.47 3.38 18.9L9.21 21.82C9.41 21.92 9.63 21.97 9.85 21.97C10.11 21.97 10.37 21.9 10.6 21.76C11.03 21.5 11.28 21.04 11.28 20.54V15.03C11.29 14.07 10.76 13.21 9.91 12.79Z" fill="#8362F0" />
                                    <path d="M21.3187 9.93014C20.8887 9.67014 20.3688 9.64014 19.9288 9.87014L14.0988 12.7901C13.2488 13.2201 12.7188 14.0701 12.7188 15.0301V20.5401C12.7188 21.0401 12.9687 21.5001 13.3987 21.7601C13.6287 21.9001 13.8887 21.9701 14.1487 21.9701C14.3687 21.9701 14.5887 21.9201 14.7887 21.8201L20.6188 18.9001C21.4688 18.4701 21.9987 17.6201 21.9987 16.6601V11.1501C21.9987 10.6501 21.7487 10.2001 21.3187 9.93014Z" fill="#8362F0" />
                                </svg>
                            </div>
                            <h2 className="color-white text-xl font-semibold tracking-tight leading-none mb-2">Important Features</h2>
                            <p className="color-content-4 text-base font-normal">Lorem ipsum dolor sit amet consectetur. In ac dolorAccumsan tempus in diam ipsum tempus in diam ipsum.</p>
                        </div>
                    </motion.div>
                </Tilt>
            </div>
        </div>
    );
}

export default StarWrapper(Services, "services", 'mt-[-10rem]');