'use client'

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";
import { LuAlignJustify } from "react-icons/lu";
import { IconContext } from "react-icons";

interface HeaderProps{
    handleOpen: () => void,
}


const NavBar: FC<HeaderProps> = ({handleOpen}): JSX.Element => {
    return (<>
        <motion.header
            className="header container my-0 xl:my-6 mx-auto rounded-full py-6 xl:py-3 px-8 max-lg:px-4"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.2,
            }}
        >
            <div className=" mx-auto">
                <div className="flex items-center justify-between relative">
                    <div className="flex items-center">
                        <motion.div
                            className="header-logo"
                            initial={{ opacity: 0, x: -10 }}
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

                        <div className="header-nav max-xl:hidden inline-block text-left w-full pl-8 text-xl">
                            <nav className="nav-main-menu w-auto p-0 float-none">
                                <ul className="pt-1">
                                    <motion.li
                                        className="float-left relative text-left p-3"
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
                                        className="float-left relative text-left p-3"
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
                                        className="float-left relative text-left p-3"
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
                                        className="float-left relative text-left p-3"
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
                                        className="float-left relative text-left p-3"
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
                                        className="float-left relative text-left p-3"
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
                        </div>
                    </div>

                    <motion.div
                        className="header-right"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.2,
                            delay: 0.2,
                        }}
                    >
                        <Link href='https://www.google.com' target="_blank" className="btn max-xl:hidden text-center py-4 px-8 rounded-full">Download CV</Link>
                        
                        <div onClick={handleOpen}>
                            <IconContext.Provider value={{ className: "header-icon display-initial xl:hidden" }}>
                                <LuAlignJustify />
                            </IconContext.Provider>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.header>
    </>
    );
}

export default NavBar;