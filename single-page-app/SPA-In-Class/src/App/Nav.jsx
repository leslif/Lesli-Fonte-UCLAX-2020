import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import  { mq } from '../common/mediaQueries.js';

const Nav = () => {
    return (
        <NavStyled>
            <div className='nested-wrapper'>
                <NavLink to="/" exact>Welcome</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/login">Login</NavLink>
                </div>
            </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    background-color: teal;
    text-align: center;

    a {
        display: inline-block;

        text-align: center;
        font-size: 20px;
        background-color: #134241;
        color: white;
        text-decoration: none;
        border-radius: 2px;
        margin-bottom: 2px;
        margin-top: 5px;
        line-height: 40px;
        width: 100%;

        @media ${mq.tablet} {
            width: 100px;
            line-height: 50px;
            margin-right: 10px;
            margin-left: 10px;
        }
        @media ${mq.desktop} {
            width: 150px;
        }

        &:hover {
            background-color: #052727;
        }

        &.active {
            background-color: pink;
        }
    }
`;