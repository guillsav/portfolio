import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background: #04040c;
    color: rgb(255, 255, 255, 0.9);
    width: 100vw;
    padding: 0;
    padding-bottom: 5rem;
    margin: 0;
`;

export const FooterWrap = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding: 0;

    @media (max-width: 1024px) {
        max-width: 100vw;
        margin: 0;
    }
`;

export const GetInTouch = styled.div`
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: 2.5fr 2fr 2.5fr;
    grid-gap: 4rem;
    padding-top: 5rem;

    @media (max-width: 1024px) {
        grid-template-columns: 1.5fr 2fr 1.5fr;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr 2fr 1fr;
        grid-gap: 1rem;
    }

    @media (max-width: 420px) {
        grid-template-columns: 4fr;
        grid-gap: 0;
    }
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
    height: 1px;
    background: rgb(255, 255, 255, 0.9);

    @media (max-width: 420px) {
        display: none;
    }
`;

export const FooterTitle = styled.h2`
    font-size: 3.4rem;
    color: rgb(255, 255, 255, 0.9);
    font-weight: 700;
    margin: 0;
    padding: 0;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 3rem;
    }
`;

export const ContactMe = styled.button`
    width: 180px;
    height: 38px;
    color: #151515;
    text-transform: uppercase;
    background: #50e3c2;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 2px;
    text-align: center;
    display: flex;
    padding: 0 3.5rem;
    justify-content: space-between;
    text-decoration: none;
    margin-bottom: 1rem;
    border: none;
    transition: all 0.1s ease-out;

    &:hover {
        background: none;
        border: 0.5px solid #50e3c2;
        color: #50e3c2;
    }

    @media (max-width: 550px) {
        padding: 0 2.5rem;
        justify-content: space-between;
    }

    @media (max-width: 450px) {
        width: 130px;
        heigh: auto;
        padding: 0 1.5rem;
        font-size: 1.2rem;
        justify-content: space-between;
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
