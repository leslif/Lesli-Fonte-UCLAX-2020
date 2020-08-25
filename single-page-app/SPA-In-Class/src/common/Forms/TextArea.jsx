import React from 'react';
import styled from 'styled-components';

const TextArea = ({formField, onChange}) => {

    const handleOnChange = (event) => {
        onChange(event, formField);
    }

    return (
        <TextAreaStyled className='Control TextArea'>
            <textarea 
                id={ formField.id } 
                name={ formField.id }
                onChange={ handleOnChange }
                value={ formField.value }
            />
        </TextAreaStyled>
    );
}

export default TextArea;

const TextAreaStyled = styled.div`
    
`;