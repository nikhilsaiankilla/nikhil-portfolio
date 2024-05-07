import Wrapper from './../components/Wrapper'

import { photo } from './../assests/index'

const AboutPage = () => {
    return (
        <Wrapper>
            <h1 className='text-2xl md:text-5xl font-bold capitalize'>About Me</h1>
            <div className='w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 md:gap-6'>
                <div className='flex flex-col gap-5 flex-[2]'>
                    <h2>Nikhil sai ankilla</h2>
                    <h4>full stack web developer</h4>
                    <p className='text-lg font-normal text-wrap text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores pariatur quibusdam tempore ea repellendus quod repellat adipisci neque excepturi. Ab esse odio voluptates eveniet suscipit minima nostrum et optio consectetur possimus amet pariatur, itaque incidunt facilis. Exercitationem, fugiat accusantium? Facilis.</p>
                    <p className='text-lg font-normal text-wrap text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores pariatur quibusdam tempore ea repellendus quod repellat adipisci neque excepturi. Ab esse odio voluptates eveniet suscipit minima nostrum et optio consectetur possimus amet pariatur, itaque incidunt facilis. Exercitationem, fugiat accusantium? Facilis.</p>
                    <p className='text-lg font-normal text-wrap text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores pariatur quibusdam tempore ea repellendus quod repellat adipisci neque excepturi. Ab esse odio voluptates eveniet suscipit minima nostrum et optio consectetur possimus amet pariatur, itaque incidunt facilis. Exercitationem, fugiat accusantium? Facilis.</p>
                </div>
                <img src={photo} alt="" className='w-[350px] h-[450px] object-contain flex-1' />
            </div>
        </Wrapper>
    )
}

export default AboutPage