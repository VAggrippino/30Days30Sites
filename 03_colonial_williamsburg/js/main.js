const carousel = document.getElementById('carousel');

// Set background images for each element with a data-bgimage property.
const bgImages = document.querySelectorAll('[data-bgimage]');
bgImages.forEach(image => {
  image.style.backgroundImage = `url(${image.dataset.bgimage})`;
});

if (carousel) {
  setInterval(() => {
    const carouselImages = carousel.querySelectorAll('.image');
    const firstImage = carouselImages[0];
    const secondImage = carouselImages[1];
    const newImage = firstImage.cloneNode(true);
    newImage.classList.remove('first', 'going');

    firstImage.classList.add('going');
    firstImage.addEventListener('transitionend', () => {
      goingImages = carousel.querySelectorAll('.going');
      goingImages.forEach(image => carousel.removeChild(image));
    });

    secondImage.classList.add('first');
    carousel.appendChild(newImage);
  }, 3000);
}

document.querySelector('li.active a').addEventListener('click', e => e.preventDefault());
