import React from 'react';

import ProjectsList from '../../components/ProjectsList/ProjectsList.component';

import {HomeContainer} from './home.styles';

const HomePage = () => {
    return (
        <HomeContainer>
            <section className="my-projects">
                <ProjectsList />
            </section>
        </HomeContainer>
    );
};

export default HomePage;
