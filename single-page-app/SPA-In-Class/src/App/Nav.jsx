import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return (
        <NavStyled>Navigation</NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    background-color: pink;
    font-size: 30px;
`;