import { useState } from "react";

import SectionTitle from "../components/SectionTitle"
import Wrapper from "../components/Wrapper"

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFilePdf, FaSquareXTwitter, FaLocationDot } from "react-icons/fa6";
import { SiGmail, SiLeetcode } from "react-icons/si";


const ContactSection = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your form submission logic here
        console.log(formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <Wrapper className="bg-primary-color">
            <SectionTitle title="contact me" />
            <div className="w-full flex flex-col justify-between md:flex-row p-5 md:p-20 mt-5 gap-10 md:gap-40">
                <form onSubmit={handleSubmit} className="flex-1">
                    <div className="mb-4">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 outline-none border-none px-4 py-3 shadow-sm"
                            required
                            placeholder="your name"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 outline-none border-none px-4 py-3 shadow-sm"
                            required
                            placeholder="nikhil@gmail.com"
                        />
                    </div>
                    <div className="mb-6">
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 outline-none border-none px-4 py-2 shadow-sm"
                            required
                            placeholder="you message here!"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button className={`block w-fit border border-white hover:border-black bg-black hover:bg-white text-white hover:text-black transition-all duration-100 ease-in-out rounded-sm text-lg uppercase font-medium cursor-pointer px-3 py-2`}>send message</button>
                    </div>
                    <p className="text-sm md:text-lg capitalize text-green-600 mt-5"> message sent successfully</p>
                </form>
                <div className="flex-1">
                    <ul className="w-fit h-fit flex justify-center flex-col gap-4">
                        <li className="flex items-center gap-2 text-lg md:text-xl">
                            <FaLinkedin className="text-[#0A66C2]" />
                            <a href="https://leetcode.com/u/nikhilsai24/" target='_blank' rel='noopener noreferrer' className='capitailize font-semibold'>
                                @nikhilsaiankilla
                            </a>
                        </li>
                        <li className="flex items-center gap-2 text-lg md:text-xl">
                            <SiLeetcode className="text-[#FFA116]" />
                            <a href="https://leetcode.com/u/nikhilsai24/" target='_blank' rel='noopener noreferrer' className='capitailize font-semibold'>
                                @nikhilsai24
                            </a>
                        </li>
                        <li className="flex items-center gap-2 text-lg md:text-xl">
                            <FaGithub className="text-[#1F2328]" />
                            <a href="https://leetcode.com/u/nikhilsai24/" target='_blank' rel='noopener noreferrer' className='capitailize font-semibold'>
                                @nikhilsaiankilla
                            </a>
                        </li>
                        <li className="flex items-center gap-2 text-lg md:text-xl">
                            <FaSquareXTwitter className="text-[#0F1419]" />
                            <a href="https://leetcode.com/u/nikhilsai24/" target='_blank' rel='noopener noreferrer' className='capitailize font-semibold'>
                                @NikhilsaiAnkil1
                            </a>
                        </li>
                        <li className="flex items-center gap-2 text-lg md:text-xl">
                            <SiGmail className="text-[#CD433F]" />
                            <a href="https://leetcode.com/u/nikhilsai24/" target='_blank' rel='noopener noreferrer' className='capitailize font-semibold'>
                                nikhilsaiankilla@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center gap-2 text-lg md:text-xl">
                            <FaFilePdf className="text-[#EA4335]" />
                            <a href="https://leetcode.com/u/nikhilsai24/" target='_blank' rel='noopener noreferrer' className='capitailize font-semibold'>
                                resume
                            </a>
                        </li>
                        <li className="flex items-center gap-2 text-lg md:text-xl">
                            <FaLocationDot className="text-[#EA4335]" />
                            <a href="https://leetcode.com/u/nikhilsai24/" target='_blank' rel='noopener noreferrer' className='capitailize font-semibold'>
                                Hyderabad, India, 501506
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Wrapper>
    )
}

export default ContactSection