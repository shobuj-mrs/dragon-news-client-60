import React from 'react';
import { Carousel } from 'react-bootstrap';
import Brand1 from '../../../assets/brands/Brand1.png';
import Brand2 from '../../../assets/brands/Brand2.png';


const BrandCurosel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand1}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand2}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCurosel;