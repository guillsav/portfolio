import styled from 'styled-components';

export const AboutMe = styled.section`
    background: #f0f0f0;
    padding: 10rem 0;
    margin: 0;
    line-height: 1.8;

    @media (max-with: 768px) {
        padding: 8rem 0;
    }

    @media (max-with: 500px) {
        padding: 6rem 0;
    }
`;

export const AboutContainer = styled.div`
    max-width: 960px;
    margin: 0 auto;
    font-size: 1.6rem;

    @media (max-width: 1024px) {
        margin: 0 2%;
    }

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }

    @media (max-width: 500px) {
        font-size: 1.6rem;
    }
`;

export const AboutTitle = styled.h2`
    font-size: 2.4rem;
    text-transform: uppercase;
    color: #040420;
    margin: 0;
    margin-bottom: 0;
    padding: 0;
`;

export const AboutDetails = styled.div`
    display: grid;
    grid-template-columns: 4fr;
    grid-gap: 2.3rem;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const AboutIMG = styled.img`
    border: 0px;
    background: url(${props => props.src}) no-repeat center center/cover;
    outline: none;
    border-radius: 50%;
    width: 150px;
    height: 150px;

    @media (max-width: 768px) {
        display: none;
    }
`;
