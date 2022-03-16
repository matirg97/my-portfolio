import React from 'react'
import "./ContactMain.css"
import { Typography } from '@mui/material'
import resumeEspanol from "../assets/resume/CvFinalMatiasGodoy.pdf"
import resumeEnglish from "../assets/resume/CVFinalEnglishMatiasGodoy.pdf"

const ContactMain = () => {
    return (
        <div id='contactMain-container'>
            <div className='contactMain-container-principal'>
                <div>
                    <Typography variant='h4' align='center' fontFamily={"monospace"} color="black" >
                        ¿Te gustaría contactarme?
                    </Typography>
                </div>
                <div className='contactMain-container__svgIcons'>
                    <a href="mailto:matiasgodoy7@hotmail.com" target="_blank" rel="noopener noreferrer">
                        <svg className=' animate__animated animate__pulse animate__slower 	2s animate__infinite infinite' overflow="scroll" viewBox="7.591810019517593 13.58045115719796 48.539913655659916 36.419548842802044" xmlns="http://www.w3.org/2000/svg" width="200" height="150"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="14.001" x2="32" y1="30.744" y2="30.744"><stop offset="0" stop-color="#c8c8c8" /><stop offset="1" stop-color="#cdcdcd" /></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="28.665" x2="50" y1="36.447" y2="36.447"><stop offset="0" stop-color="#d9d9d9" /><stop offset="1" stop-color="#e2e2e2" /></linearGradient><path d="M53 50H11a3 3 0 0 1-3-3V17a3 3 0 0 1 3-3h42a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3z" fill="#eaeaea" /><path d="M14 50h-3a3 3 0 0 1-3-3V17a3 3 0 1 1 6 0z" fill="#d54c3f" /><path d="M50 50h3a3 3 0 0 0 3-3V17a3 3 0 1 0-6 0z" fill="#b63524" /><path d="M54.718 19.46a3 3 0 1 0-3.436-4.92l-19.28 14.037-.002.001-.002-.001-19.28-14.037a3 3 0 0 0-3.436 4.92l-.08-.059L32 36M54.799 19.401L32 36" fill="#de5145" /><path d="M53 14c-.639 0-1.232.2-1.718.54l-19.28 14.037-.002.001-.002-.001-19.28-14.037A2.988 2.988 0 0 0 11 14z" fill="#efefef" /><path d="M14.001 24.188L8.945 19.18l-.002.004c.106.1.219.192.339.276l-.08-.059 4.8 3.495-.001 1.328" fill="#c64132" /><path d="M28.668 38.591L14 50l.001-25.937 14.664 14.524" fill="#e3e3e3" /><path d="M28.668 38.591L32 36 14.001 22.896v1.167l14.664 14.524z" fill="url(#a)" /><path d="M40.061 50H50V22.895L32 36l-3.335 2.587z" fill="url(#b)" /></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/matiasgodoy-97/" target="_blank" rel="noopener noreferrer">
                        <svg className=' animate__animated animate__pulse animate__slower 	2s animate__infinite infinite' height="150" width="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><g fill="none"><path d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z" fill="#069" /><path d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z" fill="#fff" /></g></svg>
                    </a>
                </div>
                <Typography variant='h5' align='center' fontFamily={"monospace"} color="black">
                    Descarga mi CV!
                </Typography>
                <div className='contactMain-container__button'>
                    <a href={resumeEnglish} target="_blank" rel="noopener noreferrer">
                        <button className='cvButton'><span>English</span></button>
                    </a>
                    <a href={resumeEspanol} target="_blank" rel="noopener noreferrer">
                        <button className='cvButton'><span>Español</span></button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactMain