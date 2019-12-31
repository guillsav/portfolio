import React, {useState} from 'react';

import {
    NavBar,
    NavContainer,
    Pages,
    Link,
    CallToAction,
    GetInTouch
} from './Navigation.styles';

const Navigation = () => {
    const [isHover, setIsHover] = useState(false);
    const handleHover = () => {
        setIsHover(!isHover);
    };

    const handleMouseOut = () => {
        setIsHover(false);
    };
    return (
        <NavBar id="navigation">
            <NavContainer>
                <Pages>
                    <Link exact href="/#about-me">
                        about me
                    </Link>
                    <Link exact href="/#my-projects">
                        my projects
                    </Link>
                </Pages>
                <CallToAction
                    onMouseOver={handleHover}
                    onMouseOut={handleMouseOut}
                >
                    <a
                        href="mailto:guillsav@gmail.com"
                        style={{textDecoration: 'None'}}
                    >
                        <GetInTouch href="mailto:guillsav@gmail.com">
                            {/* {isHover ? <SendHover /> : <Send />} */}
                            <i className="far fa-paper-plane fas-3x"></i>
                            get in touch
                        </GetInTouch>
                    </a>
                </CallToAction>
            </NavContainer>
        </NavBar>
    );
};

export default Navigation;
