import styled from 'styled-components';

export const AboutContainer = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding: 10rem 0;
    font-size: 2rem;

    @media (max-width: 1024px) {
        margin: 0 2%;
    }

    @media (max-width: 768px) {
        padding: 8rem 0;
        font-size: 1.8rem;
    }

    @media (max-width: 500px) {
        padding: 6rem 0;
        font-size: 1.6rem;
    }
`;
