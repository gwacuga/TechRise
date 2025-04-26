document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.nav-toggle');
    const links  = document.querySelector('.nav-links');
    toggle.addEventListener('click', () => {
      links.classList.toggle('active');
    });
  });
  
  const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg"
  ];
  
  let currentIndex = 0;
  const heroImage = document.getElementById("hero-image");
  
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    heroImage.src = images[currentIndex];
  }, 60000); // 60,000ms = 1 minute
  