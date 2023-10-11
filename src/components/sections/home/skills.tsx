import { FC } from "react";

import Image from "next/image";
import StarWrapper from "@/hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "@/utils/motions/motion";
import { Tilt } from "react-tilt";

const Skills: FC = (): JSX.Element => {
    return (
        <div className="mx-auto sm:px-16 px-6 sm:py-16 py-40 container">
            <div className="text-center">
                <motion.h1
                    className="mb-4 text-5xl max-xl:text-4xl font-semibold tracking-tight leading-none color-secondary"
                    variants={zoomIn(0.2, 0.4)}
                >
                    Skills
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

            <div className="skills-all flex flex-row flex-wrap justify-center gap-10">
                <Tilt>
                    <motion.div
                        className="skills-item w-28 h-28"
                        variants={fadeIn("up", undefined, 0.4, 0.6)}
                    >
                        <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' alt='icon skills' width={96} height={96} />
                    </motion.div>
                </Tilt>

                <Tilt>
                    <motion.div
                        className="skills-item w-28 h-28"
                        variants={fadeIn("up", undefined, 0.6, 0.6)}
                    >
                        <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' alt='icon skills' width={96} height={96} />
                    </motion.div>
                </Tilt>

                <Tilt>
                    <motion.div
                        className="skills-item w-28 h-28"
                        variants={fadeIn("up", undefined, 0.8, 0.6)}
                    >
                        <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' alt='icon skills' width={96} height={96} />
                    </motion.div>
                </Tilt>

                <Tilt>
                    <motion.div
                        className="skills-item w-28 h-28"
                        variants={fadeIn("up", undefined, 1, 0.6)}
                    >
                        <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' alt='icon skills' width={96} height={96} />
                    </motion.div>
                </Tilt>

                <Tilt>
                    <motion.div
                        className="skills-item w-28 h-28"
                        variants={fadeIn("up", undefined, 1.2, 0.6)}
                    >
                        <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' alt='icon skills' width={96} height={96} />
                    </motion.div>
                </Tilt>

                <Tilt>
                    <motion.div
                        className="skills-item w-28 h-28"
                        variants={fadeIn("up", undefined, 1.4, 0.6)}
                    >
                        <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' alt='icon skills' width={96} height={96} />
                    </motion.div>
                </Tilt>

                <Tilt>
                    <motion.div
                        className="skills-item w-28 h-28"
                        variants={fadeIn("up", undefined, 1.6, 0.6)}
                    >
                        <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' alt='icon skills' width={96} height={96} />
                    </motion.div>
                </Tilt>

                <Tilt>
                    <motion.div
                        className="skills-item w-28 h-28"
                        variants={fadeIn("up", undefined, 1.8, 0.6)}
                    >
                        <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' alt='icon skills' width={96} height={96} />
                    </motion.div>
                </Tilt>


                <Tilt>
                    <motion.div
                        className="skills-item w-28 h-28"
                        variants={fadeIn("up", undefined, 2, 0.6)}
                    >
                        <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' alt='icon skills' width={96} height={96} />
                    </motion.div>
                </Tilt>


                <Tilt>
                    <motion.div
                        className="skills-item w-28 h-28"
                        variants={fadeIn("up", undefined, 2.2, 0.6)}
                    >
                        <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' alt='icon skills' width={96} height={96} />
                    </motion.div>
                </Tilt>

                <Tilt>
                    <motion.div
                        className="skills-item w-28 h-28"
                        variants={fadeIn("up", undefined, 2.4, 0.6)}
                    >
                        <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg' alt='icon skills' width={96} height={96} />
                    </motion.div>
                </Tilt>

                <Tilt>
                    <motion.div
                        className="skills-item w-28 h-28"
                        variants={fadeIn("up", undefined, 2.6, 0.6)}
                    >
                        <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' alt='icon skills' width={96} height={96} />
                    </motion.div>
                </Tilt>

                <Tilt>
                    <motion.div
                        className="skills-item w-28 h-28"
                        variants={fadeIn("up", undefined, 2.8, 0.6)}
                    >
                        <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' alt='icon skills' width={96} height={96} />
                    </motion.div>
                </Tilt>

                <Tilt>
                    <motion.div
                        className="skills-item w-28 h-28"
                        variants={fadeIn("up", undefined, 3, 0.6)}
                    >
                        <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' alt='icon skills' width={96} height={96} />
                    </motion.div>
                </Tilt>

                <Tilt>
                    <motion.div
                        className="skills-item w-28 h-28"
                        variants={fadeIn("up", undefined, 3.2, 0.6)}
                    >
                        <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' alt='icon skills' width={96} height={96} />
                    </motion.div>
                </Tilt>

                <Tilt>
                    <motion.div
                        className="skills-item w-28 h-28"
                        variants={fadeIn("up", undefined, 3.4, 0.6)}
                    >
                        <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' alt='icon skills' width={96} height={96} />
                    </motion.div>
                </Tilt>

                <Tilt>
                    <motion.div
                        className="skills-item w-28 h-28"
                        variants={fadeIn("up", undefined, 3.6, 0.6)}
                    >
                        <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' alt='icon skills' width={96} height={96} />
                    </motion.div>
                </Tilt>

                <Tilt>
                    <motion.div
                        className="skills-item w-28 h-28"
                        variants={fadeIn("up", undefined, 3.8, 0.6)}
                    >
                        <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' alt='icon skills' width={96} height={96} />
                    </motion.div>
                </Tilt>
            </div>
        </div>
    );
}
export default StarWrapper(Skills, 'skills', 'mt-[-10rem]');