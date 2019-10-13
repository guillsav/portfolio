import React from 'react';

import ProjectsList from '../../components/ProjectsList/ProjectsList.component';

import {HomeContainer} from './home.styles';

const HomePage = () => {
    return (
        <HomeContainer id="my-projects">
            <ProjectsList />
        </HomeContainer>
    );
};

export default HomePage;
