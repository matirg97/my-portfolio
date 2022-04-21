import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'
import "./ProjectsMainItem.css"

const ProjectMainItem = ({ data }) => {



    return (

        <div id='projects-main-container'>
            <Card className='projects-main-container-card'>
                <CardMedia
                    className='projects-main-container-card__Media'
                    component="img"
                    height="auto"
                    image={data.img}
                    alt="screen sitio e-commerce"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">
                        <a href={data.deploy} target="_blank">
                            Deploy
                        </a>
                    </Button>
                    <Button size="small">
                        <a href={data.github} target="_blank">
                            GitHub
                        </a>
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProjectMainItem