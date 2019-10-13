import React, {useState} from 'react';

import Project from '../Project/Project.components';

import PROJECTS_DATA from '../../data';

const ProjectsList = () => {
    const [projects] = useState(PROJECTS_DATA);
    return (
        <>
            {projects.map(({id, ...otheProjectProps}) => (
                <Project key={id} {...otheProjectProps} />
            ))}
        </>
    );
};

export default ProjectsList;
