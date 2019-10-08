import React from 'react';

import {ReactComponent as HTML} from '../../assets/html5-brands.svg';
import {ReactComponent as CSS} from '../../assets/css3-alt-brands.svg';
import {ReactComponent as JS} from '../../assets/js-square-brands.svg';
import {ReactComponent as ReactBrand} from '../../assets/react-brands.svg';
import {ReactComponent as LESS} from '../../assets/LESS.svg';
import {ReactComponent as SASS} from '../../assets/sass-brands.svg';
import {ReactComponent as Node} from '../../assets/node-js-brands.svg';

import headshot from '../../assets/avatar.png';

import {
    HeaderBg,
    HeaderContainer,
    Bio,
    Avatar,
    HeaderTitle,
    HeaderText,
    HeaderDesc,
    Technologies,
    Tech,
    TechSolo,
    More
} from './Header.styles';

const Header = () => {
    return (
        <header>
            <HeaderBg>
                <HeaderContainer>
                    <Bio>
                        <Avatar src={headshot} />
                        <HeaderTitle>Guillaume Savy</HeaderTitle>
                        <HeaderDesc>
                            Full Stack Web Developer working with technologie
                            such as
                        </HeaderDesc>
                    </Bio>
                    <Technologies>
                        <Tech>
                            <TechSolo>
                                <HTML style={{width: '30px', height: '30px'}} />
                                <HeaderText>HTML</HeaderText>
                            </TechSolo>
                            <TechSolo>
                                <CSS style={{width: '30px', height: '30px'}} />
                                <HeaderText>CSS</HeaderText>
                            </TechSolo>
                            <TechSolo>
                                <JS style={{width: '30px', height: '30px'}} />
                                <HeaderText>Javascript</HeaderText>
                            </TechSolo>
                            <TechSolo>
                                <ReactBrand
                                    style={{width: '30px', height: '30px'}}
                                />
                                <HeaderText>React</HeaderText>
                            </TechSolo>
                            <TechSolo>
                                <LESS style={{width: '30px', height: '30px'}} />
                                <HeaderText>LESS</HeaderText>
                            </TechSolo>
                            <TechSolo>
                                <SASS style={{width: '30px', height: '30px'}} />
                                <HeaderText>SASS</HeaderText>
                            </TechSolo>
                            <TechSolo>
                                <Node style={{width: '30px', height: '30px'}} />
                                <HeaderText>Nodejs</HeaderText>
                            </TechSolo>
                            <More>
                                <HeaderText>And more...</HeaderText>
                            </More>
                        </Tech>
                    </Technologies>
                </HeaderContainer>
            </HeaderBg>
        </header>
    );
};

export default Header;
