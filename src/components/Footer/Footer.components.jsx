import React, {useState} from 'react';

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
} from './Footer.styles.jsx';

import './Footer.styles.css';

const Footer = () => {
    const [isHover, setIsHover] = useState(false);
    const handleHover = () => {
        setIsHover(!isHover);
    };

    const handleMouseOut = () => {
        setIsHover(false);
    };
    return (
        <FooterContainer id="footer">
            <FooterWrap>
                <GetInTouch>
                    <Divider />
                    <FooterTitle>Get in touch</FooterTitle>
                    <Divider />
                </GetInTouch>
                <Links>
                    <a
                        onMouseOver={handleHover}
                        onMouseOut={handleMouseOut}
                        href="mailto:guillsav@gmail.com"
                        style={{textDecoration: 'None', marginBottom: '1rem'}}
                    >
                        <ContactMe>
                            {/* {isHover ? (
                                <SendHover className="SendIcon" />
                            ) : (
                                <Send className="SendIcon" />
                            )} */}
                            <i className="far fa-paper-plane fas-4x"></i>
                            contact me
                        </ContactMe>
                    </a>
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
