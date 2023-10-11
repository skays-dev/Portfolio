import { FC } from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import StarWrapper from "@/hoc/SectionWrapper";
import { textVariant,fadeIn } from '@/utils/motions/motion';


const About: FC = (): JSX.Element => {
    return (
        <div className="container flex flex-col px-8 max-lg:px-4 justify-center mx-auto xl:flex-row xl:justify-between max-xl:items-center max-xl:gap-8">
            <motion.div
                className='lg:mt-0 lg:flex'
                variants={fadeIn("right", undefined, 0.2, 0.4)}
            >
                <Image className='image' src='http://localhost:3000/assets/imgs/template/myImage.png' alt='my Image' width={476} height={448} />
            </motion.div>

            <div className=" max-xl:text-center">
                <motion.h4
                    className='color-secondary text-xl font-normal tracking-tight max-w-2xl mb-4'
                    variants={fadeIn("left", undefined, 0.7, 0.5)}
                >
                    About
                </motion.h4>

                <motion.h1
                    className='color-white max-w-2xl mb-4 text-5xl max-xl:text-4xl font-semibold tracking-tight leading-none'
                    variants={fadeIn("left", undefined, 0.2, 0.4)}
                >
                    Introducing About Myself
                </motion.h1>

                <motion.p
                    className='color-content-3 max-w-2xl mb-12 font-normal text-base'
                    variants={fadeIn("up", undefined, 0.7, 0.5)}
                >
                    Lorem ipsum dolor sit amet consectetur. Orci phasellus et massa urna semper facilisi.
                    Nibh imperdiet sem gravida nisl odio sit. Porttitor vitae donec viverra turpis.
                    Feugiat ipsum odio faucibus purus aliquam odio tempus. Gravida mollis feugiat tortor
                    magna lorem parturient. Feugiat nisi varius quisque dis ultrices viverra viverra ut posuere.
                    Tristique neque diam augue porta sed consequat vel eros. Faucibus senectus malesuada volutpat
                    sem velit. Non phasellus commodo augue placerat eget nibh. Scelerisque massa eleifend laoreet at mus.
                    Sit habitasse tellus morbi volutpat ipsum diam consectetur.
                </motion.p>


                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    variants={fadeIn("up", undefined, 0.7, 0.75)}
                    className="max-xl:flex max-xl:justify-center"
                >
                    <Link href='#' className='read-more flex items-center text-base font-normal tracking-tight'>
                        Read More
                        <svg
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>

                    </Link>
                </motion.div>

            </div>

        </div>
    );
}

export default StarWrapper(About, 'about');