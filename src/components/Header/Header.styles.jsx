import styled from 'styled-components';

// Assets
import bg from '../../assets/top_bg_blue.png';

export const HeaderBg = styled.header`
    width: 100vw;
    background: url(${bg}) no-repeat center center/cover;
    border: none;
`;

export const HeaderContainer = styled.div`
    max-width: 960px;
    height: 100%;
    margin: 0 auto;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 10rem;

    @media (max-width: 868px) {
        margin: 0;
        padding: 0 1%;
        padding-bottom: 8rem;
    }

    @media (max-width: 700px) {
        padding: 0 1%;
        padding-bottom: 7rem;
    }

    @media (max-width: 320px) {
        padding: 0 1%;
        padding-bottom: 6rem;
    }
`;

export const Bio = styled.div`
    width: 100%;
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 15rem;
    margin-bottom: 4rem;
`;

export const Technologies = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 4rem 1rem;
    padding: 0 22%;

    @media (max-width: 868px) {
        padding: 0 10%;
    }

    @media (max-width: 520px) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 4rem 1rem;
        padding: 0 4%;
        padding-bottom: 4rem;
    }
`;

export const Tech = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const More = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

export const Avatar = styled.img`
    border: 0px;
    background: url(${props => props.src}) no-repeat center center/cover;
    outline: none;
    border-radius: 50%;
    width: 150px;
    height: 150px;
`;

export const HeaderTitle = styled.h1`
    margin: 0;
    padding: 0;
    opacity: 0.95;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 2.4rem;
    margin: 15px;
`;

export const HeaderDesc = styled.p`
    font-weight: 400;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    text-align: center;
`;

export const HeaderText = styled.p`
    font-weight: 400;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
`;
