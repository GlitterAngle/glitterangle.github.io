import React, { useState, useRef, useEffect} from 'react'
import { useSpring, animated } from '@react-spring/web'
import ProjectComponent from '../../components/projects/ProjectComponent'
import ContactComponent from '../../components/contact/ContactComponent'
import AboutComponent from '../../components/about/AboutComponent'
import logo from '../../assets/Logo/logoHeart.png'
import Nav from '../../components/nav/Nav'


const Landing = () => {
  const [flip, setFlip] = useState(false)
  const navRef = useRef(null)
  const aboutSectionRef = useRef(null)
  const projectsSectionRef = useRef(null)
  const contactSectionRef = useRef(null)

  const animate = useSpring({
    to: {opacity: 1},
    from: {opacity: 0},
    reset: true,
    reverse: flip,
    delay: 100,
    config: { duration: 3000 },
  })

  const color = useSpring({
    loop: true,
    to: [
      { color: '#00D9E0' },
    { color: '#38E7C8' },
    { color: '#7BF1A8' },
    { color: '#00D9E0' },
    ],
    from: { color: '#27C8EA' },
    config: {
      tension: 120, 
      friction: 14, 
    }
  })

  const scrollToNav = () => {
    navRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
    <animated.div style={animate}>
      <div className='h-screen p-4 flex justify-center items-center flex-col'>
        <img src={logo} alt='Logo' className='h-48 w-90'/>
        <h2 className='font-semibold text-2xl'>Engineering Your Vision <br /> Turning Ideas into Impactful Software</h2>
        <br/>
        <p className='text-lg'>Your curiosity is the first step to uncovering the unique ways I bring technology to life. Let's explore the possibilities together.</p>
        <button onClick={scrollToNav} className='bg-[#1E1D1E] text-lg '>Enter</button>
      </div>
      </animated.div>
      <Nav ref={navRef} aboutSectionRef={aboutSectionRef} projectsSectionRef={projectsSectionRef} contactSectionRef={contactSectionRef}/>
      <AboutComponent ref={aboutSectionRef}/>
      <ProjectComponent ref={projectsSectionRef}/>
      <ContactComponent ref={contactSectionRef}/>
    </>
  )
}

export default Landing