import SecondaryButton from './SecondaryButton'

const Project = ({ className, cover }) => {

    return (
        <div className={`${className} relative rounded-sm h-48 md:h-60 lg:h-80 m-2 z-0 bg-black flex items-center justify-center`}>
            <img src={cover} alt="" className='absolute w-full h-full top-0 left-0 z-0' />
            <div className='absolute w-full h-full bg-black opacity-40 z-[5] hover:opacity-0 transition-all duration-200 ease-linear'></div>
            <div className='absolute w-full h-full top-0 left-0 flex flex-col gap-3 items-center justify-center z-10'>
                <h1 className='text-white text-lg md:text-2xl font-bold capitalize poetsen-one-regular'>Project Name</h1>
                <div className='flex gap-3'>
                    <SecondaryButton label="Demo" color="bg-white" />
                    <SecondaryButton label="Code" color="bg-white" />
                </div>
            </div>
        </div>
    );
};

export default Project;
