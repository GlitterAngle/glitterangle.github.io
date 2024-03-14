import React, {forwardRef} from 'react'
import projectOne from '../../assets/projects/projectOne.png'
import projectTwo from '../../assets/projects/prjectTwo.png'
import projectThree from '../../assets/projects/projectThree.png'
import projectFour from '../../assets/projects/projectFour.png'

const ProjectComponent = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='mt-20'>
            <div className='grid md:grid-cols-1 p-4 '>
                <div className="rounded-full object-cover object-center row-span-1 place-self-center p-4">
                    <img src={projectOne}></img>
                    <p>Solo frontend project created with JS HTML and CSS</p>
                    <a href='https://github.com/GlitterAngle/Pong' className='underline'>Code</a>
                </div>
                <div className=" w-96 rounded-full object-cover object-center row-span-1 place-self-center p-4">
                    <img src={projectTwo}></img>
                    <p>Solo fullstack project created with JS MongoDB and NodeJS</p>
                    <a href='https://github.com/GlitterAngle/Recipe-Backend-' className='underline mr-2'>Backend Code</a>

                    <a href='https://github.com/GlitterAngle/Recipe-Frontend' className='underline'>Frontend Code </a>

                </div>
                <div className=" w-96 rounded-full object-cover object-center row-span-1 place-self-center p-4">
                    <img src={projectThree}></img>
                    <p>Fullstack project created with ReactJS MongoDB and NodeJS</p>
                    <a href='https://github.com/GlitterAngle/life-choices-server' className='underline mr-2'>Backend Code</a>
                    <a href='https://github.com/GlitterAngle/life-choices-frontend' className='underline'>Frontend Code </a>
                </div>
                <div className=" w-96 rounded-full object-cover object-center row-span-1 place-self-center p-4">
                    <img src={projectFour}></img>
                    <p>Fullstack project created with ReactJS Python and SQL</p>
                    <a href='https://github.com/GlitterAngle/Vogue-Estate-Backend' className='underline mr-2'>Backend Code</a>
                    <a href='https://github.com/GlitterAngle/Vogue-Estates-FrontEnd' className='underline'>Frontend Code </a>
                </div>
            </div>
        </div>
    )
})

export default ProjectComponent