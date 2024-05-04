import SecondaryButton from '../components/SecondaryButton'
import SectionTitle from '../components/SectionTitle'
import Wrapper from '../components/Wrapper'

const AboutSection = () => {
    return (
        <Wrapper className="flex items-center justify-center flex-col md:flex-row">
            <div className='flex flex-col flex-1 items-start justify-start'>
                <SectionTitle title="who am i" />
                <h1 className='capitalize text-3xl md:text-4xl leading-normal text-left font-bold w-full lg:w-4/5  lg:ml-14 poetsen-one-regular'>
                    i'm a full-stack web developer based in hyderabad, india.
                </h1>
            </div>
            <div className='flex flex-col flex-1 gap-5 mt-5 md:mt-0'>
                <p className='text-sm sm:text-lg font-semibold capitalize w-full'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis ex numquam laudantium beatae quisquam labore quod saepe architecto! Ratione suscipit nobis atque laboriosam? Ratione nemo doloremque sequi alias veritatis commodi?</p>
                <p className='text-sm sm:text-lg font-semibold capitalize w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus velit quam saepe magni quisquam ratione aut illum odio. Sed dicta illum, officiis atque nihil architecto sint aspernatur exercitationem in. Beatae.</p>
                <SecondaryButton label="about me" />
            </div>
        </Wrapper>
    )
}

export default AboutSection