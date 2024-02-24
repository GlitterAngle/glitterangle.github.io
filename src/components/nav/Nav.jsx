import { Link } from 'react-router-dom'
import React, { useState} from 'react';
import github from '../../assets/social_logos/github.png'
import linkedin from '../../assets/social_logos/li.png'
import logo from '../../assets/logo/lr.png'

const Nav = () => {
  const [burgerOpen, setBurgerOpen] = useState(false)

  const toggleBurger = () =>{
    setBurgerOpen(!burgerOpen)
  }

  return (
    <div>
      <div class="fixed top-0 left-0 right-0 bg-black bg-opacity-5">
        <section class="relative mx-auto">

          <nav class="flex justify-between text-[#4A4453]">
            <div class="px-5 xl:px-12 py-6 flex w-full items-center">
              <p class="text-3xl font-bold font-heading" href="#">
                <img class="h-12" src={logo} alt="logo" />
              </p>
              <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li><Link to="/" class="hover:text-[#805A73] hover:underline text-[#4A4453]" href="#">Home</Link></li>
                <li><Link to="/about" class="hover:text-[#805A73] hover:underline text-[#4A4453]" href="#">About</Link></li>
                <li><Link to="/projects" class="hover:text-[#805A73] hover:underline text-[#4A4453]" href="#">Projects</Link></li>
                {/* <li><a class="hover:text-gray-200" href="#">Contact Us</Link></li> */}
              </ul>

              <div class="hidden xl:flex items-center space-x-5 items-center">
                <a class="flex items-center hover:animate-lift-up" href="https://www.linkedin.com/in/lesley-rotonto/">
                  <img class='h-8' src={linkedin} alt='linkedin' />
                </a>

                <a class="flex items-center hover:animate-lift-up " href="https://github.com/GlitterAngle">
                  <img class='h-8' src={github} alt='github' />
                </a>

              </div>
            </div>

            <a class="xl:hidden flex mr-6 items-center hover:animate-lift-up" href="https://www.linkedin.com/in/lesley-rotonto/">
              <img class='h-8' src={linkedin} alt='linkedin' />
            </a>
            <a class="xl:hidden flex mr-6 items-center hover:animate-lift-up" href="https://github.com/GlitterAngle">
              <img class='h-8' src={github} alt='github' />
            </a>
            <a class="navbar-burger self-center mr-12 md:hidden" onClick={toggleBurger} href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#4A4453] hover:text-[#805A73]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>

            </a>
            <div className={`absolute md:relative md:hidden md:flex absolute flex-col top-full right-0 bg-black bg-opacity-5 transition-transform duration-500 ease-out ${burgerOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'} md:relative md:flex md:opacity-100 md:translate-y-0`}>
              <ul className="flex flex-col md:flex-row px-4 mx-auto font-semibold font-heading space-y-2 md:space-y-0 md:space-x-12">
                <li><Link to="/" className="hover:text-[#805A73] hover:underline text-[#4A4453]">Home</Link></li>
                <li><Link to="/about" className="hover:text-[#805A73] hover:underline text-[#4A4453]">About</Link></li>
                <li><Link to="/projects" className="hover:text-[#805A73] hover:underline text-[#4A4453]">Projects</Link></li>
                {/* Other menu items */}
              </ul>
            </div>
          </nav>

        </section>
      </div>
    </div>
  )
}

export default Nav