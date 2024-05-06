import SecondaryButton from './SecondaryButton'

const Project = ({ className, bgImg }) => {

    return (
        <div className={`${className} h-48 md:h-60 lg:h-80 bg-yellow-300 rounded-lg relative`}>
            <img src={bgImg} className='w-full h-full object-cover absolute top-0 left-0 z-0' alt="" />
            <div className='w-full h-full absolute top-0 left-0 bg-black opacity-70 z-10'></div>
            <div className='w-full h-full absolute flex flex-col items-center justify-center z-30'>
                <h3 className='text-white font-bold uppercase text-wrap text-xl md:text-2xl'>Project name</h3>
                <p className='absolute left-1 bottom-1 md:left-3 md:bottom-3 font-semibold text-white capitalize text-sm'>click here to know more</p>
                <div className='flex gap-5 md:gap-7 mt-3'>
                    <button className='cursor-pointer px-2 py-1 text-sm md:text-lg font-semibold text-black border-0 outline-none bg-white'>Demo</button>
                    <button className='cursor-pointer px-2 py-1 text-sm md:text-lg font-semibold text-black border-0 outline-none bg-white'>code</button>
                </div>
            </div>
        </div>
    );
};

export default Project;
