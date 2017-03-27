const images = document.querySelectorAll('.image');

images.forEach(image => {
  const backgroundImage = image.dataset.image;
  image.style.backgroundImage = `url(${backgroundImage})`;
});
