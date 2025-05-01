document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  toggle.addEventListener('click', () => {
    links.classList.toggle('active');
  });

  // Hero image rotator
  const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img5.jpg"
  ];
  let currentIndex = Math.floor(Math.random() * images.length);
  const heroImage = document.getElementById("hero-image");

  // Immediately show a random image on load
  heroImage.src = images[currentIndex];

  // Then rotate every 10 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    heroImage.src = images[currentIndex];
  }, 10000); // 10,000ms = 10 seconds
});
