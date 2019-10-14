import React from 'react';

import aboutIMG from '../../assets/about-image.png';

import {
    AboutMe,
    AboutContainer,
    AboutTitle,
    AboutDetails,
    AboutIMG
} from './about.styles';

const AboutPage = () => (
    <AboutMe id="about-me">
        <AboutContainer>
            <AboutTitle>about me</AboutTitle>
            <AboutDetails>
                <AboutIMG src={aboutIMG} alt="about-image" />
                <p>
                    I am a Web Developer residing in the NYC Greater Area, eager
                    to learn new technologies, and enjoy problem solving. My
                    background use to be as a Web Designer, where I worked
                    closely with Developers and found myself enjoying the
                    technical aspect of building products for clients. This
                    experience lead me to learn Web Development and technologies
                    like HTML, CSS, Javascript, React, Nodejs etc... I am
                    looking forward to combine my knowledge in Web Development
                    and Web Design and help building products that makes a
                    difference.
                </p>
            </AboutDetails>
        </AboutContainer>
    </AboutMe>
);

export default AboutPage;
