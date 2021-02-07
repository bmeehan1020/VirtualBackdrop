import React, { useRef, useEffect } from 'react';

function Canvas(props) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // rescale for hdpi screens
        const [width, height] = rescaleCanvas(canvas, context);

        context.clearRect(0, 0, window.innerWidth, window.innerHeight);

        // draw background image
        var img = new Image();
        img.src = 'https://virtualbackdrop.s3.amazonaws.com/wit_background_4.png';
        context.drawImage(img, 0, 0, width, height);

        context.textAlign = 'right';
        context.fillStyle = '#FFF';
        // drawFirstName
        context.font = 'bold 150px Arial';
        context.fillText(props.firstName, width - 50, 150, width / 2);
        // drawLastName
        context.font = 'bold 100px Arial';
        context.fillText(props.lastName, width - 50, 270, width / 2);
        // drawPronouns
        context.font = 'bold 50px Arial';
        context.fillText(`(${props.pronouns})`, width - 50, 360, width / 2);
    })

    const rescaleCanvas = (canvas, context) => {
        const ratio = getPixelRatio(context);

        const width = getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);
        const height = getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        context.scale(ratio, ratio);

        return [width, height];
    };

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

    return (
        <div>
            <canvas
                ref={canvasRef}
                style={{ width: 1920, height: 1080, display: 'none' }}
            />
            <div id="canvasImage"></div>
        </div>
    )
}

export default Canvas;
