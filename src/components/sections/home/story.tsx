
import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import StarWrapper from "@/hoc/SectionWrapper";
import { FC } from "react";
import { motion } from 'framer-motion';
import { fadeIn, zoomIn } from "@/utils/motions/motion";

import Image from "next/image";
import { experiences } from "@/constants";


const StoriesItem: FC<{experience: any}> = ({ experience }) => {
    return (
        
        <VerticalTimelineElement
            id='2'
            contentStyle={{
                background: "#1C1C1C",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #1C1C1C" }}
            date={experience.date}
            dateClassName="verticalTimeLineItem-date"
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <Image
                        src='/assets/imgs/meta.png' // Assuming the image is in the public folder
                        alt={experience.company_name}
                        width={100} // Adjust the width as needed
                        height={100} // Adjust the height as needed
                    />
                </div>
            }
            visible={true}
            className="verticalTimeLineItem"
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                <p className='text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point: any, index: any) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
}


const Story: FC = () => {
    return (
        <>
            <div className="text-center">
                <motion.p
                    className="color-content-3 mb-1 font-normal text-base"
                    variants={fadeIn("down", undefined, 0.6, 0.4)}
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
                    variants={fadeIn("up", undefined, 0.6, 0.4)}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga cumque placeat,
                    <br /> tempore inventore nisi.
                </motion.p>
            </div>

            <motion.div
                className='mt-20 flex flex-col'
                variants={fadeIn("up", "spring", 0.8, 0.6)}
            >
                <VerticalTimeline>
                    {experiences.map((experience, index) =>
                        <StoriesItem
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    )}
                </VerticalTimeline>
            </motion.div>
        </>
    );
}

export default StarWrapper(Story, "story", 'mt-[-10rem]');