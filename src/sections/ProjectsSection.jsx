import Project from '../components/Project'
import SectionTitle from '../components/SectionTitle'
import Wrapper from '../components/Wrapper'

const ProjectsSection = () => {
    return (
        <Wrapper className="bg-primary-color">
            <SectionTitle title="my projects" />
            <div className='w-full flex flex-col'>
                <div className='w-full flex flex-col md:flex-row items-center justify-between'>
                    <Project className="flex-[2]" cover="https://a.storyblok.com/f/99519/1100x619/1bd432fd52/website-project-management-build-phase.png/m/2160x1215/filters:format(png)" />
                    <Project className="flex-[1]" cover="https://a.storyblok.com/f/99519/1100x619/1bd432fd52/website-project-management-build-phase.png/m/2160x1215/filters:format(png)" />
                </div>
                <div className='w-full flex flex-col md:flex-row items-center justify-between'>
                    <Project className="flex-[1]" cover="https://a.storyblok.com/f/99519/1100x619/1bd432fd52/website-project-management-build-phase.png/m/2160x1215/filters:format(png)" />
                    <Project className="flex-[2]" cover="https://a.storyblok.com/f/99519/1100x619/1bd432fd52/website-project-management-build-phase.png/m/2160x1215/filters:format(png)" />
                </div>
            </div>
        </Wrapper>
    )
}

export default ProjectsSection