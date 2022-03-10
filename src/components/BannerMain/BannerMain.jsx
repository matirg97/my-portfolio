import React from 'react'
import "./BannerMain.css"
import ImageLogo from "../assets/matiWebDevLogo.png"
import '@fontsource/roboto/300.css';
import Typography from '@mui/material/Typography';


const BannerMain = () => {

    return (
        <div className='containerBanner'>
            <div className='containerBanner-LogoAnimation' >
                <div>
                    <img src={ImageLogo} className="imgLogoBanner"/>
                </div>
                <div>
                    <Typography variant="h2" gutterBottom component="div" className='animate__animated animate__backInDown animate__slow'>
                        Bienvenido
                    </Typography>
                    <Typography variant="h2" gutterBottom component="div" className='animate__animated animate__backInDown animate__slower'>
                        Welcome
                    </Typography>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='wave'>
                <path fill="#7B2CBF" fill-opacity="1" d="M0,96L48,117.3C96,139,192,181,288,186.7C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>
    )
}

export default BannerMain