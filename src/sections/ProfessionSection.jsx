import Wrapper from '../components/Wrapper'
import SectionTitle from '../components/SectionTitle'

import { SiLeetcode, SiTailwindcss, SiJavascript, SiMysql, SiExpress } from "react-icons/si";
import { FaReact, FaSass, FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";

const ProfessionSection = () => {
    return (
        <Wrapper className="bg-primary-color">
            <SectionTitle title="My Tech Stack" />
            <p className='text-sm md:text-lg font-semibold capitalize text-center my-10 text-gray-600'>
                In my toolkit, I wield React.js for dynamic front-end magic, Node.js with Express.js for crafting sturdy back-end solutions, and MySQL as the backbone of my database architecture. With this trio, I craft user-friendly and efficient web applications, ensuring a seamless experience from start to finish.
            </p>
            <div className='w-full flex flex-col md:flex-row items-center justify-center md:justify-around flex-wrap mt-16 gap-10 md:gap-20'>
                <div className='w-full md:w-[40%] bg-white border-0 rounded-lg shadow-lg p-5 md:p-10 flex flex-col gap-4'>
                    <h4 className='text-[#00649F] text-xl md:text-3xl font-bold uppercase font-sans poetsen-one-regular'>Front end</h4>
                    <p className='text-sm sm:text-lg font-normal'>
                        I specialize in front-end development, primarily utilizing React.js along with CSS3, Tailwind CSS, and SCSS to create engaging user interfaces.
                    </p>
                    <div className='flex flex-wrap gap-3 mt-3'>
                        <FaReact className='text-2xl text-[#00649F]' />
                        <SiJavascript className='text-2xl text-[#00649F]' />
                        <SiTailwindcss className='text-2xl text-[#00649F]' />
                        <FaSass className='text-2xl text-[#00649F]' />
                    </div>
                </div>
                <div className='w-full md:w-[40%] bg-white border-0 rounded-lg shadow-lg p-5 md:p-10 flex flex-col gap-4'>
                    <h4 className='text-[#00649F] text-xl md:text-3xl font-bold uppercase font-sans poetsen-one-regular'>backend end</h4>
                    <p className='text-sm sm:text-lg font-normal'>
                        I specialize in backend development, leveraging Node.js, Express.js, and MySQL for database management. This tech stack forms the backbone of my backend development projects.
                    </p>
                    <div className='flex flex-wrap gap-3 mt-3'>
                        <FaNodeJs className='text-2xl text-[#00649F]' />
                        <SiMysql className='text-2xl text-[#00649F]' />
                        <SiExpress className='text-2xl text-[#00649F]' />
                    </div>
                </div>
                <div className='w-full md:w-[40%] bg-white border-0 rounded-lg shadow-lg p-5 md:p-10 flex flex-col gap-4'>
                    <h4 className='text-[#00649F] text-xl md:text-3xl font-bold uppercase font-sans poetsen-one-regular'>
                        java + DSA
                    </h4>
                    <p className='text-sm sm:text-lg font-normal'>
                        I began learning Data Structures and Algorithms (DSA) with Java using the <a href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" target='_blank' rel='noopener noreferrer' className='text-[#00649F] font-extrabold cursor-pointer mx-2'>Striver sheet</a> and successfully tackled over 30 LeetCode problems.
                    </p>
                    <div className='flex items-center gap-5'>
                        <FaJava className='text-2xl font-bold text-[#00649F]' />
                        <a href="https://leetcode.com/u/nikhilsai24/" target='_blank' rel='noopener noreferrer' className='flex gap-2 text-lg text-[#00649F] capitailize font-bold mt-2'>
                            <SiLeetcode className='text-2xl cursor-pointer' />
                            leetcode
                        </a>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default ProfessionSection