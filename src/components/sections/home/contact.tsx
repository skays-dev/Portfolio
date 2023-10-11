import StarWrapper from "@/hoc/SectionWrapper";
import { fadeIn, zoomIn } from "@/utils/motions/motion";
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <motion.div
            className="rounded-3xl primary-secondary-gradient mx-auto max-w-screen-lg w-full p-[1px] shadow-card"
            variants={fadeIn('up', undefined, 0.2, 0.2)}
        >
            <div className="item color-background-1  py-14 px-12 rounded-3xl">
                <motion.div
                    className="text-center mb-16"
                    variants={zoomIn(0.2, 0.4)}
                >
                    <p className="mt-4 text-base leading-7 color-content-3 font-regular uppercase">
                        Contact
                    </p>
                    <h3 className="font-semibold color-secondary text-5xl sm:text-4xl leading-normal tracking-tight color-secondary">
                        Get In <span className="color-white">Touch</span>
                    </h3>
                </motion.div>

                <form className="w-full">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <motion.div
                            className="w-full md:w-1/2 px-3 mb-6 md:mb-0"
                            variants={fadeIn('up', undefined, 0.4, 0.2)}
                        >
                            <label className="block uppercase tracking-wide color-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                                First Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                        </motion.div>
                        <motion.div
                            className="w-full md:w-1/2 px-3"
                            variants={fadeIn('up', undefined, 0.5, 0.2)}
                        >
                            <label className="block uppercase tracking-wide color-white text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                        </motion.div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <motion.div
                            className="w-full px-3"
                            variants={fadeIn('up', undefined, 0.6, 0.2)}
                        >
                            <label className="block uppercase tracking-wide color-white text-xs font-bold mb-2" htmlFor="grid-email">
                                Email Address
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="********@*****.**" />
                        </motion.div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <motion.div
                            className="w-full px-3 mb-6"
                            variants={fadeIn('up', undefined, 0.7, 0.2)}
                        >
                            <label className="block uppercase tracking-wide color-white text-xs font-bold mb-2" htmlFor="grid-password">
                                Your Message
                            </label>
                            <textarea rows={10} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                        </motion.div>
                        <motion.div
                            className="flex justify-between w-full px-3"
                            variants={fadeIn('up', undefined, 0.8, 0.2)}
                        >
                            <button className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                                Send Message
                            </button>
                        </motion.div>
                    </div>
                </form>
            </div>
        </motion.div>
    );
}

export default StarWrapper(Contact, 'contact');