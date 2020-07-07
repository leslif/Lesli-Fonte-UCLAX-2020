import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderStyled>My Header</HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: pink;
    font-size: 40px;
`;