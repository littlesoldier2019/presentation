import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slide1 from '../image/h1.jpg';
import Slide2 from '../image/h2.jpg';
import Slide3 from '../image/h3.jpg';
import Slide4 from '../image/h4.jpg';



function Designs () {
    const [slides, setSlide] = useState([Slide1, Slide2, Slide3, Slide4])
    const content = slides.map(item => {
        return (
            <div style={{ backgroundImage: `url(${item})`,  backgroundPosition:'center', height:'95vh'}}>
            </div>
        )
    });

    return (
        <div style={{ marginLeft: '250px', height:'100vh'}}>
            <Carousel
                // autoPlay={true}
                interval={8000}
                stopOnHover={true}
                infiniteLoop={true}
                transitionTime={1000}
                showStatus={false}
            >
               
            {content}
            </Carousel>
        </div>
        
    );
};

export default Designs;