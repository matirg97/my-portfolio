import React, { useState, useEffect } from 'react';
import "./ProjectsMain.css";
import { Typography, CircularProgress } from '@mui/material';
import { getFirestore } from '../../firebase/firebase';
import ProjectMainItem from '../ProjectsMainItem/ProjectMainItem';

const ProjectsMain = () => {

    const [projectsArray, setProjectsArray] = useState([]);
    const db = getFirestore();
    const projectCollection = db.collection('projects');

    useEffect(() => {
        projectCollection.get()
            .then((querySnapshot) => {
                if (querySnapshot.size == 0) {
                    return console.log("There's no documents with that query");
                }
                console.log("There's documents");
                setProjectsArray(querySnapshot.docs.map((doc) => doc.data()));
                console.log(projectsArray);
            }
            )
            .catch((err) => {
                console.log(`The error in the firebase was : ${err}`);
            })
    }, []);

    return (
        <div id='projects-main-container'>
            <Typography fontFamily={"Roboto"} variant="h3" letterSpacing={10} fontWeight={"bold"}>
                Proyectos
            </Typography>
            {projectsArray.length > 0 ? projectsArray.map(data => {
                return <ProjectMainItem data={data} key={data.title} />
            })
                :
                <CircularProgress size={"70%"} thickness={1} sx={{ margin: 2 }} />
            }
        </div>
    )
}

export default ProjectsMain