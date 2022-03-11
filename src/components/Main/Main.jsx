import React from 'react'
import "./Main.css"
import BannerMain from '../BannerMain/BannerMain';
import NavBar from "../NavBar/NavBar"
import AboutMain from '../AboutMain/AboutMain';


const Main = () => {
    return (
        <main>
            <BannerMain />
            <NavBar />
            <AboutMain/>
            Main
        </main>
    )
}

export default Main