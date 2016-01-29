'use strict';

export default (...images) => {
    images.forEach((src) => {
        const oneImage = new Image();
        oneImage.src = src;
    });
}
