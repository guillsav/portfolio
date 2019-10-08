import React from 'react';

import {ReactComponent as Send} from '../../assets/send-icon.svg';

import {
    FooterContainer,
    FooterWrap,
    Divider,
    FooterTitle,
    GetInTouch,
    Links,
    ContactMe,
    Link,
    Socials
} from './Footer.styles';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <GetInTouch>
                    <Divider />
                    <FooterTitle>Get in touch</FooterTitle>
                    <Divider />
                </GetInTouch>
                <Links>
                    <ContactMe href="mailto:guillsav@gmail.com">
                        <Send style={{marginRight: '5px'}} />
                        contact me
                    </ContactMe>
                    <Socials>
                        <Link href="https://www.linkedin.com/in/guillaume-savy-0b36ba56/">
                            linkedin
                        </Link>
                        |<Link href="https://github.com/guillsav"> github</Link>
                    </Socials>
                </Links>
            </FooterWrap>
        </FooterContainer>
    );
};
export default Footer;
