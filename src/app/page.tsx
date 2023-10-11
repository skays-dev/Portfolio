'use client'

import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link';
import Hero from '@/components/sections/home/hero';
import About from '@/components/sections/home/about';
import Skills from '@/components/sections/home/skills';
import Services from '@/components/sections/home/services';
import Story from '@/components/sections/home/story';
import Projects from '@/components/sections/home/projects';
import Contact from '@/components/sections/home/contact';
import Blog from '@/components/sections/home/blog';




export default function Home() {
  return (
    <>
      <div className="hero"></div>
      <Hero />

      <About />

      <Skills />

      <Services />

      <Story />

      <Projects />

      <Contact />

      <Blog />
    </>
  )
}
