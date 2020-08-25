import React from 'react';
import styled from 'styled-components';

import GooglePackage from './GoogleMap/GooglePackage.jsx';

const GoogleMaps = () => {

    return (
        <GoogleMapsStyled className='GoogleMaps'>
            <GooglePackage />
        </GoogleMapsStyled>
    );
}

export default GoogleMaps;

const GoogleMapsStyled = styled.div`
    
`;