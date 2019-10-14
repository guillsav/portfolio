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
                    I am a Web Developer residing in the Greater NYC Area with a
                    background in Web Design. When working as a Web Designer, I
                    worked closely with Developers and found myself enjoying the
                    technical aspect of building products for clients. This
                    experience leads me to learn Web Development and
                    technologies like HTML, CSS, Javascript, React, Nodejs
                    etc... I am looking forward to combining my knowledge in Web
                    Development and Web Design to help build products that make
                    a difference.
                </p>
            </AboutDetails>
        </AboutContainer>
    </AboutMe>
);

export default AboutPage;
