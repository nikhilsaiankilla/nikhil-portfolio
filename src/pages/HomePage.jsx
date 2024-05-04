import HeroSection from '../sections/HeroSection'
import ProjectsSection from '../sections/ProjectsSection'
import SkillsSection from '../sections/SkillsSection'
import ProfessionSection from '../sections/ProfessionSection'
import CertificationsSection from '../sections/CertificationsSection'
// import BlogsSection from '../sections/BlogsSection'
import ContactSection from '../sections/ContactSection'
import AboutSection from '../sections/AboutSection'

const HomePage = () => {
    return (
        <>
            {/* HERO SECTION  */}

            <HeroSection />

            {/* ABOUT SECTION  */}

            <AboutSection />

            {/* PROJECTS SECTION  */}

            <ProjectsSection />

            {/* SKILLS SECTION  */}

            <SkillsSection />

            {/* PROFESSION SECTION  */}

            <ProfessionSection />

            {/* CERTIFICATION SECTION  */}

            <CertificationsSection />

            {/* BLOGS SECTION  */}

            {/* <BlogsSection /> */}

            {/* CONTACT SECTION  */}

            <ContactSection />

        </>
    )
}

export default HomePage