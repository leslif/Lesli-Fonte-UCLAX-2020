import React from 'react';
import styled from 'styled-components';

import { mq } from '../common/mediaQueries.js';

const Footer = () => {

    // const myVariable = 'random string of words';
    // const anotherOne = 123;
    // console.log(myVariable, anotherOne);

    // const henry = () => {
        // console.log('Executing Henry Tag');
    // }

    // henry();

    return (
        <FooterStyled>
            <div className='nested-wrapper'>
                My footer
                </div>
            </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`
    background-color: teal;
    
    @media ${mq.tablet} {
        background-color: pink;
    }

    @media ${mq.desktop} {
        background-color: tan;
    }
`;