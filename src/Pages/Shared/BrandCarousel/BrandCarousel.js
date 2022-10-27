import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import coursera from '../../../assets/brands/coursera.png';
import samsung from '../../../assets/brands/samsung.png';
const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={samsung}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={coursera}
                        alt="Second slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCarousel;