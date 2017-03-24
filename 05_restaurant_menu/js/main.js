const foodImages = document.querySelectorAll('.food .image');

foodImages.forEach(image => {
  image.style.backgroundImage = `url(${image.dataset.image})`;
});
