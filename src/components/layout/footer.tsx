'use client'

import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn } from "@/utils/motions/motion";

const Footer: FC = () => {
    return (
        <motion.footer
            className="rounded-lg m-4"
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
        >
            <div className="w-full container mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        variants={fadeIn("left", undefined, 0.6, 0.2)}
                    >
                        <Link href="#" className="flex items-center mb-4 sm:mb-0">
                            <Image src="http://localhost:3000/assets/imgs/template/icons/logo.png" alt="logo" width={60} height={60} />
                        </Link>
                    </motion.div>


                    <ul className="pt-1 flex flex-wrap items-center mb-6 gap-2">
                        <motion.li
                            className="float-left relative text-left p-3"
                            variants={fadeIn("right", undefined, 0.6, 0.2)}
                        >
                            <Link href="#" className="link active">Home</Link>
                        </motion.li>

                        <motion.li
                            className="float-left relative text-left p-3"
                            variants={fadeIn("right", undefined, 0.8, 0.2)}
                        >
                            <Link href="#" className="link">About</Link>
                        </motion.li>

                        <motion.li
                            className="float-left relative text-left p-3"
                            variants={fadeIn("right", undefined, 1, 0.2)}
                        >
                            <Link href="#" className="link">Skills</Link>
                        </motion.li>

                        <motion.li
                            className="float-left relative text-left p-3"
                            variants={fadeIn("right", undefined, 1.2, 0.2)}
                        >
                            <Link href="#" className="link">Projects</Link>
                        </motion.li>

                        <motion.li
                            className="float-left relative text-left p-3"
                            variants={fadeIn("right", undefined, 1.4, 0.2)}
                        >
                            <Link href="#" className="link">Blog</Link>
                        </motion.li>

                        <motion.li
                            className="float-left relative text-left p-3"
                            variants={fadeIn("right", undefined, 1.6, 0.2)}
                        >
                            <Link href="#" className="link">Contact Us</Link>
                        </motion.li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mb-6 lg:mt-4" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        variants={fadeIn("right", undefined, 0.6, 0.2)}
                        className="flex gap-2"
                    >
                        <Link href="#" className="flex items-center mb-4 sm:mb-0">
                            <Image src="http://localhost:3000/assets/imgs/template/icons/logo.png" alt="logo" width={24} height={24} />
                        </Link>
                        <Link href="#" className="flex items-center mb-4 sm:mb-0">
                            <Image src="http://localhost:3000/assets/imgs/template/icons/logo.png" alt="logo" width={24} height={24} />
                        </Link>
                        <Link href="#" className="flex items-center mb-4 sm:mb-0">
                            <Image src="http://localhost:3000/assets/imgs/template/icons/logo.png" alt="logo" width={24} height={24} />
                        </Link>
                    </motion.div>


                    <motion.span
                        className="block text-sm sm:text-center color-content-1"
                        variants={fadeIn("left", undefined, 0.6, 0.2)}
                    >
                        © 2023 - Aymane
                    </motion.span>
                </div>

            </div>
        </motion.footer>
    );
}

export default Footer;