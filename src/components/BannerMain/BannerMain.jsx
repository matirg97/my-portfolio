import React from 'react'
import "./BannerMain.css"
import imageLogo from "../assets/blackLogo.png"
import '@fontsource/roboto/300.css';


const BannerMain = ({}) => {

    return (
        <div className='containerBanner'>
            <div className='containerBanner-Logo' >
                <div>
                    <a href="https://www.matigodoy.com/">
                    <img src={imageLogo} className="imgLogoBanner animate__animated animate__fadeInDown animate__slow" />
                    </a>
                </div>
            </div>
            <div className='wave'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='waveSVG' preserveAspectRatio="xMidYMid meet">
                    <path
                        fill="#C9ADA7"
                        fill-opacity="2"
                        d="M0,160L30,144C60,128,120,96,180,101.3C240,107,300,149,360,160C420,171,480,149,540,133.3C600,117,660,107,720,117.3C780,128,840,160,900,160C960,160,1020,128,1080,117.3C1140,107,1200,117,1260,128C1320,139,1380,149,1410,154.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">
                    </path>
                </svg>
                <div class="arrow">
                    <a href="#aboutPage">
                    <span></span>
                    <span></span>
                    <span></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BannerMain