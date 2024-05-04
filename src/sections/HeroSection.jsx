import Button from '../components/Button'

import { RiContactsFill } from "react-icons/ri";
import { FaDownload } from "react-icons/fa6";

import MyData from '../data/MyData.json'

const HeroSection = () => {
    return (
        <div className="w-full h-[90vh] flex justify-center bg-primary-color">
            <div className='mt-36 sm:mt-40 md:mt-48'>
                <p className='secondary-text-color uppercase text-lg md:text-2xl font-semibold bebas-neue-regular'>👋 Hey ! everyone</p>
                <div className='pl-3'>
                    <h1 className='text-2xl md:text-6xl uppercase font-bold poetsen-one-regular'>{MyData?.name?.split(" ")[0] + " " + MyData?.name?.split(" ")[1]}</h1>
                    <h1 className='text-2xl md:text-6xl uppercase font-bold poetsen-one-regular'>full stack developer</h1>
                    <p className='text-gray-700 text-sm md:text-xl leading-6 font-medium mt-3'>Crafting Digital Dreams, One Line at a Time, <br />
                        Eager to Explore Internship Opportunities.</p>
                    <div className='mt-5 flex items-center justify-start gap-3 flex-wrap'>
                        <Button label="resume" icon={<FaDownload />} />
                        <Button label="contact me" icon={<RiContactsFill />} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection