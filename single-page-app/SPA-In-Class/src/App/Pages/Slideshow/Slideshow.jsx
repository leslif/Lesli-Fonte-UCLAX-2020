import React from 'react';
import styled from 'styled-components';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { slides } from './slidesData.js';

const Slideshow = () => {

    const renderSlides = () => {
        return slides.map((slide) => {
            return (
                <div>
                    <img src={ slide.image } />
                </div>
            );
        });
    }

    return (
        <SlideshowStyled className='Slideshow'>
            <Carousel
                showThumbs={ false }
                showIndicators= { true }
                autoPlay={ true }
                infiniteLoop={ true }
                showArrows={ true }
                >
                { renderSlides () }
            </Carousel> 
        </SlideshowStyled>
    );
}

export default Slideshow;

const SlideshowStyled = styled.div`
    .carousel .slide. legend {
        background-color: maroon;
        color: white;
    }
    
`;