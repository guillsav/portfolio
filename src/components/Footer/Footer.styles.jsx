import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background: #2b2a2a;
    color: rgb(255, 255, 255, 0.9);
    height: 318px;
    width: 100%;
    padding: 0;
    margin: 0;
`;

export const FooterWrap = styled.div`
    width: 960px;
    margin: 0 auto;
    padding: 0;
`;

export const GetInTouch = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5rem;
`;

export const Links = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1.8rem;
`;

export const Divider = styled.div`
    width: 323px;
    height: 1px;
    background: rgb(255, 255, 255, 0.9);
`;

export const FooterTitle = styled.h2`
    font-size: 3.8rem;
    color: rgb(255, 255, 255, 0.9);
    font-weight: 700;
    margin: 0;
    padding: 0;
`;

export const ContactMe = styled.a`
    width: 180px;
    height: 38px;
    opacity: 0.9;
    color: #fff;
    text-transform: uppercase;
    background: none;
    font-size: 1.2rem;
    border-radius: 2px;
    border: 1px solid #fff;
    text-align: center;
    transition: all 0.2s ease-out;
    padding: 1rem 4rem;
    text-decoration: none;
    margin-bottom: 1rem;

    &:hover {
        background: rgb(255, 255, 255, 0.2);
    }
`;
export const Link = styled.a`
    width: 50px;
    opacity: 0.9;
    color: #fff;
    text-transform: uppercase;
    background: none;
    font-size: 1.2rem;
    text-decoration: none;
`;

export const Socials = styled.div`
    width: 180px;
    display: flex;
    justify-content: space-between;
    padding: 0 2.2rem;
    align-items: baseline;
    margin-top: 1rem;
`;
