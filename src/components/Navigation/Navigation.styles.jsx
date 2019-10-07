import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const NavBar = styled.div`
    background: #0f0f0f;
    width: 100%;
    height: 54px;
    color: #fff;
    font-size: 1.4rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
`;

export const NavContainer = styled.div`
    width: 960px;
    margin: 0 auto;
    display: flex;
`;

export const Pages = styled.div`
    width: 389px;
    display: flex;
    align-items: center;
`;

export const CallToAction = styled.div`
    width: 571px;
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
    padding: 10px 40px;
    text-decoration: none;

    &:hover {
        background: rgb(255, 255, 255, 0.2);
    }
`;

export const Link = styled(NavLink)`
    border: 0;
    text-decoration: none;
    color: #fff;
    opacity: 0.49;
    margin-right: 30px;
    transition: all 0.2s ease-out;

    &:hover {
        opacity: 1;
    }

    &.active {
        opacity: 1;
    }
`;
