'use client'

import Link from "next/link";
import { FC } from "react";
import { easeIn, motion } from "framer-motion";
import Image from "next/image";
import { IconContext } from "react-icons";
import { LuX } from "react-icons/lu";
import { easeInOut } from "framer-motion/dom";

interface SideBarProps {
    handleOpen: () => void,
}

const SideBar: FC<SideBarProps> = ({ handleOpen }): JSX.Element => {
    return (
        <>
            <motion.div
                className="sidebar fixed px-6 color-background-1 h-full z-[99999]"
                initial={{ opacity: 0, width: '0%' }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{
                    duration: 0.4,
                }}
            >
                <motion.div
                    className="container my-0 mx-auto border-b-[1px] border-white py-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.2,
                        delay: 0.6,
                    }}
                >
                    <div className=" mx-auto">
                        <div className="flex items-center justify-between relative">
                            <div className="flex items-center">
                                <motion.div
                                    className="header-logo"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.2,
                                        delay: 0.2,
                                    }}
                                >
                                    <Link href="#" className="block">
                                        <Image src="http://localhost:3000/assets/imgs/template/icons/logo.png" alt="logo" width={56} height={56} />
                                    </Link>
                                </motion.div>
                            </div>

                            <motion.div
                                className="header-right"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.2,
                                    delay: 0.2,
                                }}
                                onClick={handleOpen}
                            >
                                <IconContext.Provider value={{ className: "header-icon" }}>
                                    <LuX />
                                </IconContext.Provider>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
                <div className="sidebar-menu container mx-auto flex flex-col gap-2 overflow-y-auto overflow-x-auto justify-start min-h-full flex-1">
                    <nav className="nav-main-menu w-auto float-none mt-4">
                        <ul className="flex flex-col">
                            <motion.li
                                className="float-left relative text-left text-[2rem]"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.2,
                                    delay: 0.6,
                                }}
                            >
                                <Link href="#" className="link active">Home</Link>
                            </motion.li>

                            <motion.li
                                className="float-left relative text-left text-[2rem]"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.2,
                                    delay: 0.8,
                                }}
                            >
                                <Link href="#" className="link">About</Link>
                            </motion.li>

                            <motion.li
                                className="float-left relative text-left text-[2rem]"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.2,
                                    delay: 1.0,
                                }}
                            >
                                <Link href="#" className="link">Skills</Link>
                            </motion.li>

                            <motion.li
                                className="float-left relative text-left text-[2rem]"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.2,
                                    delay: 1.2,
                                }}
                            >
                                <Link href="#" className="link">Projects</Link>
                            </motion.li>

                            <motion.li
                                className="float-left relative text-left text-[2rem]"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.2,
                                    delay: 1.4,
                                }}
                            >
                                <Link href="#" className="link">Blog</Link>
                            </motion.li>

                            <motion.li
                                className="float-left relative text-left text-[2rem]"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.2,
                                    delay: 1.6,
                                }}
                            >
                                <Link href="#" className="link">Contact Us</Link>
                            </motion.li>
                        </ul>
                    </nav>

                    <div className="mt-8 pt-4 flex flex-col gap-4 w-full justify-center">
                        <p className="w-full color-white flex gap-2 items-center justify-center">
                            <motion.span
                                className="min-w-max color-white"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.2,
                                    delay: 1.6,
                                }}
                            >
                                Get In Touch
                            </motion.span>

                            <motion.span
                                className="min-w-max color-white w-full h-[1px] block bg-white"
                                initial={{ opacity: 0, width: '0%' }}
                                animate={{ opacity: 1, width: '100%' }}
                                transition={{
                                    duration: 0.6,
                                    delay: 2,
                                    ease: easeInOut
                                }}
                            >
                            </motion.span>
                        </p>

                        <motion.p
                            className="text-base color-white font-light tracking-wider"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.2,
                                delay: 2.4,
                            }}
                        >
                            <Link href='#' className="normal-link">
                                skays.dev@gmail.com
                            </Link>
                        </motion.p>

                        <motion.p
                            className="text-base color-white font-light tracking-wider"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.2,
                                delay: 2.6,
                            }}
                        >
                            <Link href='#' className="normal-link">
                                +212 659295575
                            </Link>
                        </motion.p>
                    </div>


                    <motion.div
                        className="left-0 relative h-[1px] border-b-[1px] border-white mt-[4vh] mb-[2vh]"
                        initial={{ opacity: 0, width: '0%' }}
                        animate={{ opacity: 1, width: '100%' }}
                        transition={{
                            duration: 0.6,
                            delay: 2.6,
                            ease: easeInOut
                        }}
                    >
                    </motion.div>

                    <div className="flex flex-row gap-4 mb-[6.1vh] justify-start">
                        <motion.p
                            className="text-base color-white font-light tracking-wider"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.2,
                                delay: 2.8,
                            }}
                        >
                            <Link href='#' className="normal-link">
                                Instagram
                            </Link>
                        </motion.p>

                        <motion.p
                            className="text-base color-white font-light tracking-wider"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.2,
                                delay: 3,
                            }}
                        >
                            <Link href='#' className="normal-link">
                                LindenIn
                            </Link>
                        </motion.p>

                        <motion.p
                            className="text-base color-white font-light tracking-wider"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.2,
                                delay: 3.2,
                            }}
                        >
                            <Link href='#' className="normal-link">
                                Facebook
                            </Link>
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default SideBar;