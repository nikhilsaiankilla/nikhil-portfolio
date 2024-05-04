import wave from '../assests/wave.png'

const SectionTitle = ({ title }) => {
    return (
        <div className='w-fit flex items-center justify-center my-3 lg:ml-14'>
            <img src={wave} alt='wave img' className='w-20 h-7 flex items-center justify-center center' />
            <h2 className='secondary-text-color uppercase text-lg md:text-3xl font-semibold bebas-neue-regular'>{title}</h2>
        </div>
    )
}

export default SectionTitle