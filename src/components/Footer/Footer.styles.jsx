import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background: #2b2a2a;
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
