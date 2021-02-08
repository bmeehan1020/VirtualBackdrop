import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

function ImageCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://virtualbackdrop.s3.amazonaws.com/wit_background_1.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://virtualbackdrop.s3.amazonaws.com/wit_background_2.png"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://virtualbackdrop.s3.amazonaws.com/wit_background_3.png"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://virtualbackdrop.s3.amazonaws.com/wit_background_4.png"
                    alt="Fourth slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ImageCarousel;