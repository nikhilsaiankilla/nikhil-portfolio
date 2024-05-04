import Wrapper from '../components/Wrapper'
import SectionTitle from '../components/SectionTitle'

const CertificationsSection = () => {
    return (
        <Wrapper>
            <SectionTitle title="certifications & achivements" />
            <div className='w-full flex items-center justify-center flex-wrap gap-5 md:gap-14 my-5 md:mt-10'>

                <div className='p-5 md:p-10 border-0 shadow-lg flex flex-col gap-1 items-start justify-start bg-primary-color'>
                    <h1 className='font-bold text-lg capitalize poetsen-one-regular'>Complete React js Certification</h1>
                    <div className='flex items-center ml-[-10px]'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8p51c5kpdhV9JwECPPD64cAfrZyH2wMqgLoVh9bxr_A&s" className='w-[60px] h-[60px] object-contain' alt="" />
                        <h6 className='ml-[-5px] text-sm sm:text-lg font-normal'>From Udemy</h6>
                    </div>
                    <button className='px-2 py-1 font-bold bg-primary-color border border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out rounded-md'>View Certificate</button>
                </div>

                <div className='p-5 md:p-10 border-0 shadow-lg flex flex-col gap-3 items-start justify-start bg-primary-color'>
                    <h1 className='font-bold text-lg capitalize poetsen-one-regular'>completed the 30+ DSA Questions</h1>
                    <div className='flex items-center ml-[-10px]'>
                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3628885-3030025.png" className='w-[30px] h-[30px] object-contain mr-3' alt="" />
                        <h6 className='text-sm sm:text-lg font-normal'>leetcode</h6>
                    </div>
                    <button className='px-2 py-1 font-bold bg-primary-color border border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out rounded-md'>View profile</button>
                </div>


                <div className='p-5 md:p-10 border-0 shadow-lg flex flex-col gap-1 items-start justify-start bg-primary-color'>
                    <h1 className='font-bold text-lg capitalize poetsen-one-regular'>Complete Node, Express and Mysql Certification</h1>
                    <div className='flex items-center ml-[-10px]'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8p51c5kpdhV9JwECPPD64cAfrZyH2wMqgLoVh9bxr_A&s" className='w-[60px] h-[60px] object-contain' alt="" />
                        <h6 className='ml-[-5px] text-sm sm:text-lg font-normal'>From Udemy</h6>
                    </div>
                    <button className='px-2 py-1 font-bold bg-primary-color border border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out rounded-md'>View Certificate</button>
                </div>

                <div className='p-5 md:p-10 border-0 shadow-lg flex flex-col gap-3 items-start justify-start bg-primary-color'>
                    <h1 className='font-bold text-lg capitalize poetsen-one-regular'>certificate of organizing sankalp techinical event</h1>
                    <div className='flex items-center ml-[-10px]'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTuUi4fOtaJcc5OuB4v_lGAeJDy4aQoEyeTq2-vo59SA&s" className='w-[30px] h-[30px] object-contain mr-3' alt="" />
                        <h6 className='text-sm sm:text-lg font-normal'>From Sri indu college of engineering and techonology</h6>
                    </div>
                    <button className='px-2 py-1 font-bold bg-primary-color border border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out rounded-md'>View Certificate</button>
                </div>

            </div>
        </Wrapper>
    )
}

export default CertificationsSection