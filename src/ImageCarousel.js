import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

function ImageCarousel(props) {
    const [index, setIndex] = useState(0);
    const images = ["https://virtualbackdrop.s3.amazonaws.com/wit_background_1.png",
        "https://virtualbackdrop.s3.amazonaws.com/wit_background_2.png",
        "https://virtualbackdrop.s3.amazonaws.com/wit_background_3.png",
        "https://virtualbackdrop.s3.amazonaws.com/wit_background_4.png"
    ]

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        props.onBackgroundImageSelect(images[selectedIndex]);
    };

    return (
        <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={null}
            slide={false} >
            {images.map((imageSrc) =>
                <Carousel.Item key={imageSrc}>
                    <img
                        className="d-block w-100"
                        src={imageSrc}
                        alt=""
                        style={{ padding: 8 }}
                    />
                </Carousel.Item>
            )}
        </Carousel >
    );
}

export default ImageCarousel;