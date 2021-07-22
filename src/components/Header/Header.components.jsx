import React from 'react';

import { ReactComponent as HTML } from '../../assets/html5-brands.svg';
import { ReactComponent as CSS } from '../../assets/css3-alt-brands.svg';
import { ReactComponent as JS } from '../../assets/js-square-brands.svg';
import { ReactComponent as ReactBrand } from '../../assets/react-brands.svg';
import { ReactComponent as LESS } from '../../assets/LESS.svg';
import { ReactComponent as SASS } from '../../assets/sass-brands.svg';
import { ReactComponent as Node } from '../../assets/node-js-brands.svg';

import headshot from '../../assets/avatar-2.png';

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
  More
} from './Header.styles';

const Header = () => {
  return (
    <HeaderBg id="who-i-am">
      <HeaderContainer>
        <Bio>
          <Avatar rel="preload" src={headshot} alt="guillaume" />
          <HeaderTitle>Guillaume Savy</HeaderTitle>
          <HeaderDesc>
            Full Stack Web Developer working with technologies such as
          </HeaderDesc>
        </Bio>
        <Technologies>
          <Tech>
            <HTML style={{ width: '30px', height: '30px' }} />
            <HeaderText>HTML</HeaderText>
          </Tech>
          <Tech>
            <CSS style={{ width: '30px', height: '30px' }} />
            <HeaderText>CSS</HeaderText>
          </Tech>
          <Tech>
            <JS style={{ width: '30px', height: '30px' }} />
            <HeaderText>Javascript</HeaderText>
          </Tech>
          <Tech>
            <ReactBrand style={{ width: '30px', height: '30px' }} />
            <HeaderText>React</HeaderText>
          </Tech>
          <Tech>
            <LESS style={{ width: '30px', height: '30px' }} />
            <HeaderText>LESS</HeaderText>
          </Tech>
          <Tech>
            <SASS style={{ width: '30px', height: '30px' }} />
            <HeaderText>SASS</HeaderText>
          </Tech>
          <Tech>
            <Node style={{ width: '30px', height: '30px' }} />
            <HeaderText>Nodejs</HeaderText>
          </Tech>
          <More>
            <HeaderText>and more...</HeaderText>
          </More>
        </Technologies>
      </HeaderContainer>
    </HeaderBg>
  );
};

export default Header;
