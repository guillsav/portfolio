import React from 'react';

import {
    ProjectContainer,
    ProjectDetails,
    ProjectTitle,
    TechStack,
    StackTitle,
    Techs,
    Tech,
    Overview,
    ProjectIMG,
    Controls,
    CallToAction
} from './Project.styles';

const Project = ({
    title,
    image,
    alt,
    github,
    liveProject,
    summary,
    description,
    techs
}) => {
    const renderTech = () => {
        return techs.map((tech, i) => <Tech key={i}>{tech}</Tech>);
    };

    const renderDesc = () => {
        return description.map((desc, i) => <li key={i}>{desc}</li>);
    };

    return (
        <ProjectContainer>
            <ProjectDetails>
                <ProjectTitle>{title}</ProjectTitle>
                <TechStack>
                    <StackTitle>Main Technology Stack</StackTitle>
                    <Techs>{renderTech()}</Techs>
                </TechStack>
                <div>{summary}</div>
                <ul>{renderDesc()}</ul>
            </ProjectDetails>
            <Overview>
                <ProjectIMG src={image} alt={alt} />
                <Controls>
                    <CallToAction to={liveProject}>View Project</CallToAction>
                    <CallToAction to={github} inverted="true">
                        View Code
                    </CallToAction>
                </Controls>
            </Overview>
        </ProjectContainer>
    );
};

export default Project;
