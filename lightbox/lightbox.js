'use strict';

const imgClick = document.querySelectorAll('.gallery-item');

const lightBox = document.querySelector('.lightbox');

const lightBoxImg = document.querySelector('.lightbox #lightbox-image');

imgClick.forEach((item) => {
    item.addEventListener('click', () => {
        lightBox.style.display = 'flex';
        const srcVal = item.src.replace('-thumbnail', '');
        lightBoxImg.src = srcVal;
    });
});

const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', () => {
    lightBox.style.display = 'none';
});
lightBox.addEventListener('click', () => {
    e.stopPropagation();
    lightBox.style.display = 'none';
});
