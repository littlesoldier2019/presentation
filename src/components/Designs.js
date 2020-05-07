import React, { useState, } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slide1 from '../image/h1.PNG';
import Slide2 from '../image/H2.PNG';
import Slide3 from '../image/h3.png';
import Slide5 from '../image/h5.png';
import Slide7 from '../image/github.PNG';



function Designs() {

    const [slides, setSlide] = useState([Slide1, Slide2, Slide3, Slide5, Slide7])

    const content = slides.map(item => {
        return (
            <div style={{ backgroundImage: `url(${item})`, backgroundColor: '#ffff', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '95vh'}}>
            </div>
        )
    });

    return (
        <>
            <div className="caption"> Early Designs and Prototypes.</div>
            <div style={{ marginLeft: '250px', height: '100vh', borderTop:'1px solid #e5e5e5' }}>
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
        </>
    );
};

export default Designs;