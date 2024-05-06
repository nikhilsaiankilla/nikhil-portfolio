import Project from '../components/Project'
import SectionTitle from '../components/SectionTitle'
import Wrapper from '../components/Wrapper'

const ProjectsSection = () => {
    return (
        <Wrapper>
            <SectionTitle title="my projects" />
            <div className='w-full flex flex-col gap-2 md:gap-4 mt-5 md:mt-7 bg-red-200'>
                <div className='w-full flex flex-col md:flex-row gap-2 md:gap-4'>
                    <Project className="w-full md:w-[60%]" bgImg="https://s3-alpha.figma.com/hub/file/1868768632/319bab1e-752e-460b-83d6-a5b8fa5067c8-cover.png" />
                    <Project className="w-full md:w-[40%]" bgImg="https://s3-alpha.figma.com/hub/file/1868768632/319bab1e-752e-460b-83d6-a5b8fa5067c8-cover.png" />
                </div>
                <div className='w-full flex flex-col md:flex-row gap-2 md:gap-4'>
                    <Project className="w-full md:w-[40%]" bgImg="https://s3-alpha.figma.com/hub/file/1868768632/319bab1e-752e-460b-83d6-a5b8fa5067c8-cover.png" />
                    <Project className="w-full md:w-[60%]" bgImg="https://s3-alpha.figma.com/hub/file/1868768632/319bab1e-752e-460b-83d6-a5b8fa5067c8-cover.png" />
                </div>
            </div>
        </Wrapper>
    )
}

export default ProjectsSection