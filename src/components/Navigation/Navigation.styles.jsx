import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const NavBar = styled.nav`
    background: #0f0f0f;
    width: 100vw;
    height: 5.4rem;
    color: #fff;
    font-size: 1.4rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    @media (max-width: 320px) {
        font-size: 1.1rem;
    }
`;

export const NavContainer = styled.div`
    max-width: 960px;
    margin: 0 auto;
    display: flex;

    @media (max-width: 1000px) {
        padding: 0 10%;
    }

    @media (max-width: 868px) {
        width: 100%;
        padding: 0 4%;
    }

    @media (max-width: 610px) {
        width: 100%;
        margin: 0;
        padding: 0 2%;
        justiy-content: space-between;
    }
`;

export const Pages = styled.div`
    width: 389px;
    display: flex;
    align-items: center;

    @media (max-width: 610px) {
        width: 48%;
    }

    @media (max-width: 460px) {
        width: 53%;
        margin-right: 4%;
    }
`;

export const CallToAction = styled.div`
    width: 571px;

    @media (max-width: 610px) {
        width: 45%;
    }
`;

export const GetInTouch = styled.a`
    width: 180px;
    height: 38px;
    border: 1px solid #fff;
    opacity: 0.9;
    color: #fff;
    text-transform: uppercase;
    background: none;
    font-size: 1.2rem;
    border-radius: 2px;
    text-align: center;
    transition: all 0.2s ease-out;
    padding: 1rem 4rem;
    text-decoration: none;

    &:hover {
        background: rgb(255, 255, 255, 0.2);
    }

    @media (max-width: 600px) {
        width: auto;
        heigh: auto;
        padding: 0.5rem 1.2rem;
    }
`;

export const Link = styled(NavLink)`
    border: 0;
    text-decoration: none;
    color: #fff;
    opacity: 0.49;
    margin-right: 3rem;
    transition: all 0.2s ease-out;

    &:hover {
        opacity: 1;
    }

    &.active {
        opacity: 1;
    }

    @media (max-width: 460px) {
        margin-right: 1.2rem;
    }
`;
