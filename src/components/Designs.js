import React, { useState,} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slide1 from '../image/h1.jpg';
import Slide2 from '../image/h2.jpg';
import Slide3 from '../image/h3.png';
import Slide5 from '../image/h5.png';
import Slide6 from '../image/h6.png';
import Slide7 from '../image/h7.png';



function Designs () {
    const [slides, setSlide] = useState([Slide1, Slide2, Slide3, Slide5, Slide6, Slide7])
    const content = slides.map(item => {
        return (
            <div style={{ backgroundImage: `url(${item})`,  backgroundPosition:'center', backgroundRepeat:'no-repeat', height:'95vh'}}>
            </div>
        )
    });

    return (
        <div style={{ marginLeft: '250px', height:'100vh'}}>
            <Carousel
                autoPlay={true}
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