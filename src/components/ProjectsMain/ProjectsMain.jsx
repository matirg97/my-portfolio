import React from 'react';
import "./ProjectsMain.css";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import imgEcommerce from "../assets/ProjectsImgs/e-commerce-project.PNG"
import imgPortfolio from "../assets/ProjectsImgs/matiwebdev-project.PNG"
const ProjectsMain = () => {
    return (
        <div id='projects-main-container'>
            <Typography fontFamily={"monospace"} variant="h3">
                Mis proyectos
            </Typography>
            <Card className='projects-main-container-card'>
                <CardMedia
                    className='projects-main-container-card__Media'
                    component="img"
                    height="auto"
                    image={imgEcommerce}
                    alt="screen sitio e-commerce"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        matiwebdev - e-commerce
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Este proyecto es un e-commerce creado en reactJs con las siguientes tecnologias: firebase, mui,
                        reactstrap, css.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">
                        <a href="https://matiwebdev.vercel.app/" target="_blank">
                            Deploy
                        </a>
                    </Button>
                    <Button size="small">
                        <a href="https://github.com/matirg97/matiwebdev" target="_blank">
                            GitHub
                        </a>
                    </Button>
                </CardActions>
            </Card>
            <Card className='projects-main-container-card'>
                <CardMedia
                    className='projects-main-container-card__Media'
                    component="img"
                    height="auto"
                    image={imgPortfolio}
                    alt="screen sitio e-commerce"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        matiwebdev - portfolio
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Este es mi portfolio personal, sin dudas el proyecto al que mas cariño le tengo, fue creado con reactJs , css y mui.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">
                        <a href="https://matiasgodoy.vercel.app/" target="_blank" rel="noopener noreferrer">
                            Deploy
                        </a>
                    </Button>
                    <Button size="small">
                        <a href="https://github.com/matirg97/my-portfolio" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProjectsMain