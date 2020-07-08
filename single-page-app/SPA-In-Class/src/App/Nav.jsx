import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return (
        <NavStyled>
            <div className='nested-wrapper'>
                Navigation
                </div>
            </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    background-color: teal;
`;