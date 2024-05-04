import Wrapper from '../components/Wrapper'
import SectionTitle from './../components/SectionTitle'
import MyData from './../data/MyData.json'

const SkillsSection = () => {

    return (
        <Wrapper>
            <SectionTitle title="My skills" />
            <div className="w-full flex items-center justify-between flex-wrap gap-3 px-0 md:px-20 mt-10 md:gap-10">
                {
                    MyData?.skills?.map(skills => (
                        <div className='flex items-center justify-center flex-col' key={skills?.id}>
                            <div className='w-[100px] h-[100px] md:w-[150px] md:h-[150px]'>
                                <img src="https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png" alt="skills logo" className='w-full h-full object-contain' />
                            </div>
                            <span className='p-2 flex flex-col items-center justify-center'>
                                <h2 className='text-sm md:text-lg font-bold uppercase text-[#00649F] poetsen-one-regular'>{skills?.sName}</h2>
                                <p className='text-sm md:text-lg font-semibold text-black capitalize'>{skills?.level}</p>
                            </span>
                        </div>
                    ))
                }
            </div>
        </Wrapper >
    )
}

export default SkillsSection