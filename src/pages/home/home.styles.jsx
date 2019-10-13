import styled from 'styled-components';

export const HomeContainer = styled.section`
    max-width: 960px;
    margin: 0 auto;

    @media (max-width: 1000px) {
        padding: 0 2%;
    }

    @media (max-width: 960px) {
        max-width: 900px;
    }

    @media (max-width: 768px) {
        max-width: 709px;
    }
`;
