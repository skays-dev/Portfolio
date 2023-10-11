import StarWrapper from "@/hoc/SectionWrapper";
import Link from "next/link";
import { FC } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motions/motion";

SwiperCore.use([Autoplay, Navigation]);

const Blog: FC = () => {
    return (
        <div className="container mx-auto px-8">
            <div className="flex items-end flex-wrap mb-12">

                <div className="flex-none md:flex-0 w-full max-w-full md:w-[66.6666666667%]">
                    <motion.h1
                        className="mb-3 text-5xl max-xl:text-4xl font-semibold tracking-tight leading-none color-secondary"
                        variants={fadeIn("right", undefined, 0.2, 0.6)}
                    >
                        Our Blog
                    </motion.h1>
                    <motion.p
                        className="font-normal text-base color-white"
                        variants={fadeIn("right", undefined, 0.2, 0.6)}
                    >
                        Lorem ipsum dolor sit amet consectetur. In ac dolor
                        <br />
                        Accumsan tempus in diam ipsum nibh velit.
                    </motion.p>
                </div>

                <div className="flex-none md:flex-0 w-full md:w-[33.3333333333%] text-left md:text-right max-w-full mt-3 md:mt-0">
                    <motion.div
                        variants={fadeIn("left", undefined, 0.2, 0.6)}
                    >
                        <Link href='#' className='read-more inline text-base font-normal tracking-tight mb-0 md:mb-5'>
                            Read More
                            <svg
                                className="inline"
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

            <div className="mt-6">
                
                <motion.div 
                    className="box-swiper relative w-full"
                    variants={fadeIn("up", undefined, 0.6, 0.6)}
                >
                    <div className="swiper-container relative h-full pb-9">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                991: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1250: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className="swiper-wrapper"
                        >

                            <SwiperSlide
                                className="swiper-slide"
                            >
                                <div className="card-body rounded-3xl primary-secondary-gradient w-full p-[1px] shadow-card">
                                    <div className="item p-6 rounded-3xl">
                                        <Image className="mb-4 rounded" src="http://localhost:3000/assets/imgs/template/projects/masterlys.png" alt="project 1" width={848} height={370} />
                                        <Link href="#">
                                            <h4 className="color-white text-2xl font-semibold mb-4 tracking-tight leading-none">Project Number 1</h4>
                                        </Link>

                                        <p className="color-content-3 text-base font-normal tracking-tight mb-8">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum eum repellat pariatur velit unde nulla inventore.
                                        </p>
                                        <div className="flex justify-between">
                                            <Link href='https://www.google.com' target="_blank" className="btn flex items-center text-center py-4 px-9 rounded-full">Read More</Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide
                                className="swiper-slide"
                            >
                                <div className="card-body rounded-3xl primary-secondary-gradient w-full p-[1px] shadow-card">
                                    <div className="item p-6 rounded-3xl">
                                        <Image className="mb-4 rounded" src="http://localhost:3000/assets/imgs/template/projects/masterlys.png" alt="project 1" width={848} height={370} />
                                        <Link href="#">
                                            <h4 className="color-white text-2xl font-semibold mb-4 tracking-tight leading-none">Project Number 1</h4>
                                        </Link>

                                        <p className="color-content-3 text-base font-normal tracking-tight mb-8">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum eum repellat pariatur velit unde nulla inventore.
                                        </p>
                                        <div className="flex justify-between">
                                            <Link href='https://www.google.com' target="_blank" className="btn flex items-center text-center py-4 px-9 rounded-full">Read More</Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide
                                className="swiper-slide"
                            >
                                <div className="card-body rounded-3xl primary-secondary-gradient w-full p-[1px] shadow-card">
                                    <div className="item p-6 rounded-3xl">
                                        <Image className="mb-4 rounded" src="http://localhost:3000/assets/imgs/template/projects/masterlys.png" alt="project 1" width={848} height={370} />
                                        <Link href="#">
                                            <h4 className="color-white text-2xl font-semibold mb-4 tracking-tight leading-none">Project Number 1</h4>
                                        </Link>

                                        <p className="color-content-3 text-base font-normal tracking-tight mb-8">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum eum repellat pariatur velit unde nulla inventore.
                                        </p>
                                        <div className="flex justify-between">
                                            <Link href='https://www.google.com' target="_blank" className="btn flex items-center text-center py-4 px-9 rounded-full">Read More</Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide
                                className="swiper-slide"
                            >
                                <div className="card-body rounded-3xl primary-secondary-gradient w-full p-[1px] shadow-card">
                                    <div className="item p-6 rounded-3xl">
                                        <Image className="mb-4 rounded" src="http://localhost:3000/assets/imgs/template/projects/masterlys.png" alt="project 1" width={848} height={370} />
                                        <Link href="#">
                                            <h4 className="color-white text-2xl font-semibold mb-4 tracking-tight leading-none">Project Number 1</h4>
                                        </Link>

                                        <p className="color-content-3 text-base font-normal tracking-tight mb-8">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum eum repellat pariatur velit unde nulla inventore.
                                        </p>
                                        <div className="flex justify-between">
                                            <Link href='https://www.google.com' target="_blank" className="btn flex items-center text-center py-4 px-9 rounded-full">Read More</Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            
                        </Swiper>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default StarWrapper(Blog, "blog");