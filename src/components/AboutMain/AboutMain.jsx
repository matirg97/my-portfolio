import React from 'react';
import "./AboutMain.css";
import circleMati from "../assets/circulomatiblanco.png"
import { Card, CardContent, Typography } from '@mui/material';



const AboutMain = () => {
    return (
        <div id='aboutPage'>
            <div className='about-container-ImgText'>
                <img className='about-container-img' src={circleMati} alt="Foto de Matias Godoy en forma circular" />
                <Card className="about-container-card" sx={{ maxWidth: 750 }}>
                    <CardContent className="about-container-card-content">
                        <Typography variant="h5" component="div" align='center' fontFamily={"monospace"}>
                            ¿Quien es matiwebdev?
                        </Typography>
                        <br />
                        <Typography variant="body2">
                            Hola! Antes que nada, bienvenido a mi página web! Espero que la puedas disfrutar inspeccionandola, así como yo disfrute programandola para ustedes.
                            <br />
                            <br />
                            Mi nombre es Matias Godoy, soy de Capital Federal, Buenos Aires, Argentina.
                            <br />
                            Empecé a programar en Marzo de 2021, y si buen tuve algunos altos y bajos en mi carrera (en la cual creo que uno como estudiante/profesional nunca termina de aprender),
                            creo que la programación tiene que ver mucho con esos tópicos: la constante prueba y error, el estancamiento en distintos proyectos , e infinidad de etc... Y es lo más normal del mundo!, aprender a lidiar con
                            estas trabas es lo que más me gusta de programar, ya que la satisfacción que uno siente al resolver un error, al realizar un diseño llamativo y de gran alcance, y también al finalizar un proyecto,
                            son incomparables.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default AboutMain