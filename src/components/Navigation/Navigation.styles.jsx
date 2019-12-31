import styled from 'styled-components';

// export const NavBar = styled.nav`
//     background: #0f0f0f;
//     width: 100vw;
//     height: 5.4rem;
//     color: #fff;
//     font-size: 1.4rem;
//     text-transform: uppercase;
//     display: flex;
//     align-items: center;

//     @media (max-width: 320px) {
//         font-size: 1.1rem;
//     }
// `;

export const NavBar = styled.nav`
    background: #04040c;
    border-top: 1px solid rgb(255, 255, 255, 0.08);
    width: 100vw;
    height: 5.4rem;
    color: #fff;
    font-size: 1.4rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media (max-width: 320px) {
        font-size: 1.1rem;
    }
`;

export const NavContainer = styled.div`
    max-width: 960px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-gap: 1.2rem;
    padding: 0;
    align-items: center;

    @media (max-width: 1024px) {
        grid-gap: 1rem;
        margin: 0 4%;
    }

    @media (max-width: 700px) {
        grid-template-columns: 2fr 2.5fr;
        margin: 0 4%;
    }

    @media (max-width: 500px) {
        grid-template-columns: 2fr 1.5fr;
        margin: 0 2%;
    }
`;
// `;

// export const NavContainer = styled.div`
//     max-width: 960px;
//     margin: 0 auto;
//     display: flex;

//     @media (max-width: 1000px) {
//         padding: 0 10%;
//     }

//     @media (max-width: 868px) {
//         width: 100%;
//         padding: 0 4%;
//     }

//     @media (max-width: 610px) {
//         width: 100%;
//         margin: 0;
//         padding: 0 2%;
//         justiy-content: space-between;
//     }
// `;

export const Pages = styled.div`
    margin-right: 16rem;

    @media (max-width: 1024px) {
        margin-right: 6rem;
    }

    @media (max-width: 750px) {
        margin-right: 1rem;
    }
`;

export const CallToAction = styled.div``;

export const GetInTouch = styled.button`
    width: 180px;
    height: 38px;
    background: #50e3c2;
    color: #040420;
    border: none;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 2px;
    border: none;
    display: flex;
    padding: 0 3.5rem;
    justify-content: space-between;
    transition: all 0.1s ease-out;
    text-decoration: none;

    &:hover {
        background: none;
        color: #50e3c2;
        border: 0.5px solid #50e3c2;
    }

    @media (max-width: 550px) {
        padding: 0 2.5rem;
        justify-content: space-between;
    }

    @media (max-width: 450px) {
        width: 130px;
        heigh: auto;
        padding: 0 1rem;
        font-size: 1.2rem;
        justify-content: space-between;
    }
`;

export const Link = styled.a`
    border: 0;
    text-decoration: none;
    color: #fff;
    margin-right: 2rem;
    transition: all 0.2s ease-out;

    &:hover {
        opacity: 1;
    }

    &.active {
        opacity: 1;
    }

    @media (max-width: 500px) {
        margin-right: 1.2rem;
    }
`;
