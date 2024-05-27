import React from 'react';
import IntroSection from './IntroSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import Header from './Header';
import { useRef } from 'react';
import useScrollSnap from 'react-use-scroll-snap';


const Home = () => {
    return (
        <>
            <div className='gradient-background'>
                <Header />
                    <IntroSection />
                    <ProjectsSection /> 
            </div>
        </>
    )
}


export default Home;