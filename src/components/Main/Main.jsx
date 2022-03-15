import React from 'react'
import "./Main.css"
import BannerMain from '../BannerMain/BannerMain';
import NavBar from "../NavBar/NavBar"
import AboutMain from '../AboutMain/AboutMain';
import SkillsMain from '../SkillsMain/SkillsMain';


const Main = () => {
    return (
        <main className='main-principal-container'>
            <BannerMain />
            <NavBar />
            <AboutMain/>
            <SkillsMain/>
            Main
        </main>
    )
}

export default Main