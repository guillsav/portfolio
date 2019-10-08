import styled from 'styled-components';

// Assets
import bg from '../../assets/top_bg.png';

export const HeaderBg = styled.div`
    width: 100vw;
    height: 700px;
    background: url(${bg}) no-repeat center center/cover;
`;

export const HeaderContainer = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 100px;
`;

export const Bio = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 40px;
`;

export const Technologies = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    padding: 0 210px;
`;

export const Tech = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: space-between;
    width: 100%;
    height: 185px;
    padding: 0;
    margin: 0;
`;

export const TechSolo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 103px;
    height: 65px;
    margin: 0 14px;
`;

export const More = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: end;
    width: 103px;
    height: 65px;
    margin: 0 14px;
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
