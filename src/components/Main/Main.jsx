import React from 'react'
import "./Main.css"
import BannerMain from '../BannerMain/BannerMain';
import NavBar from "../NavBar/NavBar"
import AboutMain from '../AboutMain/AboutMain';
import SkillsMain from '../SkillsMain/SkillsMain';
import ProjectsMain from '../ProjectsMain/ProjectsMain';
import ContactMain from '../ContactMain/ContactMain';

const Main = () => {
    return (
        <main className='main-principal-container'>
            <BannerMain />
            <NavBar />
            <AboutMain/>
            <SkillsMain/>
            <ProjectsMain/>
            <ContactMain/>
        </main>
    )
}

export default Main