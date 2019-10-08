import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

export const ProjectContainer = styled.div`
    width: 100%;
    display: flex;
    justity-content: space-between;
    align-items: start;
    margin: 50px 0;
    padding-bottom: 60px;
    border-bottom: 1px solid #dedede;

    &:last-child {
        border: none;
`;
export const ProjectDetails = styled.div`
    width: 48%;
    font-size: 1.6rem;
    margin-right: 3.8rem;
`;
export const ProjectTitle = styled.h2`
    margin: 0;
    padding: 0;
    font-size: 3.4rem;
    font-weight: 700;
    margin-top: 50px;
    margin-bottom: 2.3rem;
    line-height: 3.6rem;
`;

export const TechStack = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2.3rem;
`;

export const StackTitle = styled.h3`
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 400;
    margin: 0;
    padding: 0;
    margin-bottom: 1rem;
`;
export const Techs = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
`;
export const Tech = styled.div`
    width: 100px;
    height: 30px;
    border-radius: 2px;
    background: #bfbfbf;
    color: #0f0f0f;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

export const Overview = styled.div`
    width: 48%;
`;

export const ProjectIMG = styled.img`
    src: ${props => props.src};
    width: 100%;
    border: 0;
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
    box-shadow: 0 1rem 3.4rem 2rem rgb(15, 15, 15, 0.09);
    margin-top: 5rem;
    border-radius: 2px;
`;

export const Controls = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const getButtonStyle = props => {
    if (props.inverted) {
        return invertedStyle;
    }
    return defaultStyle;
};

const defaultStyle = css`
    color: #fff;
    background: #0f0f0f;
    border: 0;
    transition: all 0.2s ease-out;

    &:hover {
        opacity: 0.8;
    }
`;

const invertedStyle = css`
    color: #0f0f0f;
    background: none;
    border: 1px solid #0f0f0f;
    transition: all 0.2s ease-out;

    &:hover {
        color: #fff;
        background: #0f0f0f;
        border: 0;
    }
`;

export const CallToAction = styled(Link)`
    width: 105px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    text-decoration: none;
    border-radius: 2px;
    margin-left: 2rem;

    ${getButtonStyle}
`;