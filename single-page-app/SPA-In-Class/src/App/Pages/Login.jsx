import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import LoginForm from './Contact/LoginForm.jsx';

const Login = () => {

    return (
        <LoginStyled className='Login'>
            <Helmet>
                <title>Login :: SPA App</title>
            </Helmet>
            <div className='nested-wrapper'>
                <div className='Login Field'>
                    <LoginForm />
                </div>
            </div>
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`
    
`;