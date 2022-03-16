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
                            ¡Hola! Antes que nada, ¡Bienvenido a mi página web!
                            <br />
                            <br />
                            Mi nombre es Matías Godoy, soy de Capital Federal, Buenos Aires, Argentina.
                            <br />
                            Empecé a programar en marzo de 2021 y, si bien tuve algunos altos y bajos en mi carrera (en la cual uno como estudiante/profesional siempre continúa aprendiendo), creo que la programación tiene que ver mucho con esos tópicos: la constante prueba y error, el estancamiento en distintos proyectos y muchos desafíos más que van surgiendo en el día a día. Esto para nosotros, los programadores, ¡es lo más normal del mundo! Aprender a lidiar con estas trabas es lo que más me apasiona de mi trabajo. La satisfacción que uno siente al resolver un error, realizar un diseño llamativo y de gran alcance (y también al finalizar un proyecto, por supuesto) es incomparable.
                            <br />
                            Por estas razones, te invito a explorar todos mis proyectos realizados hasta el momento. Espero puedas disfrutarlos tanto como yo lo hice al programarlos.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default AboutMain