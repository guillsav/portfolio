import React from 'react';

import Project from '../Project/Project.components';

import PROJECTS_DATA from '../../data';

class ProjectsList extends React.Component {
    state = {projects: PROJECTS_DATA};
    render() {
        const {projects} = this.state;
        return (
            <>
                {projects &&
                    projects.map(({id, ...otheProjectProps}) => (
                        <Project key={id} {...otheProjectProps} />
                    ))}
            </>
        );
    }
}

export default ProjectsList;
