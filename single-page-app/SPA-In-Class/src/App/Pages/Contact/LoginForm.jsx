import React, { useState } from 'react';
import styled from 'styled-components';

import API from '../../../common/axios.js';

import Button from '../../../common/Forms/Button.jsx';

import FormGroup from '../../../common/Forms/FormGroup.jsx'

const formFields = {
    userNameField: {
        id: 'userName',
        label: 'User Name',
        inputType: 'text',
        value: '',
        validate: {
            required: true,
            valid: true,
            message: '',
        }
    },

    passwordField: {
        id: 'password',
        label: 'Password',
        inputType: 'text',
        value: '',
        validate: {
            required: true,
            valid: true,
            message: '',
        }
    }
}

const LoginForm = () => {

    const [userName, userNameUpdate ] = useState(formFields.userNameField);
    const [password, passwordUpdate ] = useState(formFields.passwordField);

    const handleOnChange = (event, formField) => {
        const newField = {
            ...formField,
            value: event.target.value,
        }
        if (newField.validate.required === true) {
            console.log('Validating: ', newField.label);

        if (newField.value.length < 4) {
            newField.validate.valid = false;
            newField.validate.message = `You forgot to fill out the ${newField.label} field.`;
        } else {
            newField.validate.valid = true;
            newField.validate.message = ``;
        }
        }

        if (formField.id === 'userName') {
            userNameUpdate(newField);
        }
        if (formField.id === 'password') {
            passwordUpdate(newField);
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Captured Form Submit');

        if ( userName.validate.valid === true && password.validate.valid === true) {
            console.log('Valid Submitting form.');

            const postData = {
                userName: userName,
                password: password,
            }

            API.post('/loginUser', postData).then((result) => {
                console.log('result', result);
            });
        }
    }

    return (
        <LoginFormStyled className='LoginForm'>
            <form onSubmit={ handleFormSubmit }>
                <FormGroup
                    formField={ userName }
                    onChange= { handleOnChange }
                />
                <FormGroup
                    formField={ password }
                    onChange= { handleOnChange }
                />

                <Button type='submit'>Login</Button>
            </form>
        </LoginFormStyled>
    );
}

export default LoginForm;

const LoginFormStyled = styled.div`
    
`;