document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.getElementById('auto-scroll-gallery');

  if (!gallery) return;

  function smoothScroll() {
      gallery.scrollBy({
          left: 1, 
          behavior: 'smooth' 
      });
  }

  setInterval(smoothScroll, 30);
});