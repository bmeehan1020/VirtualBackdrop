import React, { useRef, useEffect } from 'react';

function Canvas(props) {
    const canvasRef = useRef(null);

    const getPixelRatio = context => {
        var backingStore =
            context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            1;

        return (window.devicePixelRatio || 1) / backingStore;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // rescale for hdpi screens
        const ratio = getPixelRatio(context);
        const width = getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);
        const height = getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        context.scale(ratio, ratio);

        context.clearRect(0, 0, window.innerWidth, window.innerHeight);

        // draw background image
        var img = new Image();
        img.src = 'https://virtualbackdrop.s3.amazonaws.com/wit_background_5.png';
        context.drawImage(img, 0, 0, width, height);

        // drawFirstName
        // drawLastName
        // drawPronouns
        context.font = 'bold 48px Arial';
        context.fillStyle = '#FFF';
        context.fillText(props.firstName, 10, 50);


    })

    return (
        <canvas
            ref={canvasRef}
            style={{ width: 800, height: 600 }}
        />
    )
}

export default Canvas;
