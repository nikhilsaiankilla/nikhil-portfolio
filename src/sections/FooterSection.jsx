import { logo } from '../assests/index'

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail, SiLeetcode } from "react-icons/si";

const FooterSection = () => {
    return (
        <div className="flex justify-center md:justify-between gap-2 items-center flex-wrap py-6 px-6 sm:px-14 md:px-20">
            <div className='flex items-center gap-2 cursor-pointer'>
                <img src={logo} alt="" className='w-[20px] h-[20px] object-contain' />
                <h5 className='poetsen-one-regular text-lg capitalize'>nikhil sai</h5>
            </div>

            <span className='text-sm font-semibold flex flex-col items-center justify-center'>
                <span>&copy; Nikhil sai ankilla</span>
                <span className='flex gap-2 items-center justify-center mt-2'><SiGmail /> nikhilsaiankilla@gmail.com</span>
            </span>


            <ul className='flex items-center justify-center flex-wrap gap-3'>
                <li><FaGithub className='text-2xl text-black cursor-pointer' /></li>
                <li><FaLinkedin className='text-2xl text-black cursor-pointer' /></li>
                <li><FaSquareXTwitter className='text-2xl text-black cursor-pointer' /></li>
                <li><SiLeetcode className='text-2xl text-black cursor-pointer' /></li>
            </ul>
        </div>
    )
}

export default FooterSection