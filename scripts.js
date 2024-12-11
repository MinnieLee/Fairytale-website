const images = document.querySelectorAll('.image-container');

images.forEach((image) => {
  image.addEventListener('mouseover', () => {
    images.forEach((img) => {
      if (img !== image) {
        img.style.opacity = '0.2';
      }
    });
  });

  image.addEventListener('mouseout', () => {
    images.forEach((img) => {
      img.style.opacity = '1';
    });
  });
});































































































