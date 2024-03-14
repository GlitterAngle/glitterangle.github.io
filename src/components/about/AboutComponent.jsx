import React, { forwardRef } from 'react';
import { useSpring, animated } from '@react-spring/web'
import headshot from '../../assets/headshot/IMG_6768 2.jpg'
import css from '../../assets/tech/css.png'
import express from '../../assets/tech/expressjs.png'
import git from '../../assets/tech/git.png'
import html from '../../assets/tech/HTML5_Badge.png'
import javascript from '../../assets/tech/javascript-1.png'
import mongo from '../../assets/tech/MongoDB_Logomark_ForestGreen.png'
import node from '../../assets/tech/nodejs-icon.png'
import react from '../../assets/tech/react-2.png'
import psql from '../../assets/tech/psql.png'

const About = forwardRef((props, ref) => {
  const color = useSpring({
    loop: true,
    to: [
      { borderColor: '#00D9E0' },
    { borderColor: '#38E7C8' },
    { borderColor: '#7BF1A8' },
    { borderColor: '#00D9E0' },
    ],
    from: { borderColor: '#27C8EA' },
    config: {
      tension: 120, 
      friction: 14, 
    }
  })
  return (
    <>
    <div ref={ref} className='p-10 text-left grid md:grid-cols-2 p-4 mt-60'>
      <animated.img style={color} src={headshot} alt='headshot' className="border-2 h-96 w-96 rounded-full object-cover object-center row-span-2 place-self-center" />
      <p className='indent-8 mb-8'>
        Hello and welcome! I'm Lesley Rotonto, and I'm thrilled to have you explore my portfolio.
        My journey in web development is fueled by a decade-long background in art and a deep-rooted passion for coding and continuous learning.
        My experience in retail has sharpened my communication skills, enabling me to effectively connect and collaborate.
        I bring a unique blend of artistic vision and technical skill to every project, driven by my innate curiosity and a desire to delve into the intricacies of web technologies.
      </p>
      <p className='indent-8 mb-8'>
        My path has been shaped by self-learning and exploring various point-of-sale systems, demonstrating my adaptability and problem-solving skills.
        As I seek to join a team that values growth and innovation, I am excited to contribute my creativity, dedication, and collaborative spirit.
        Thank you for taking the time to get to know me a little better – I look forward to the opportunity to learn, create, and grow together.
      </p>
      
    </div>
    <div className='flex justify-center w-full'>
    <animated.div style={color} className='p-4 w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4'>
        <div className='flex justify-center items-center col-span-full'><img src={react} className='h-26 w-16'/></div>
        <div className='flex justify-center items-center'><img src={css} className='h-26 w-16'/></div>
        <div className='flex justify-center items-center'><img src={psql} className='h-26 w-16'/></div>
        <div className='flex justify-center items-center'><img src={mongo} className='h-26 w-10'/></div>
        <div className='flex justify-center items-center'><img src={node} className='h-26 w-16'/></div>
        <div className='flex justify-center items-center'><img src={express} className='h-26 w-16'/></div>
        <div className='flex justify-center items-center'><img src={javascript} className='h-26 w-16'/></div>
        <div className='flex justify-center items-center'><img src={git} className='h-26 w-16'/></div>
        <div className='flex justify-center items-center'><img src={html} className='h-26 w-16'/></div>
    </animated.div>
      </div>
      </>
  )
})

export default About