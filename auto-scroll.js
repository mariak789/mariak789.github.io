document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".scroll-gallery");
    if (!gallery) return;
  
    const isMobile = /iPhone|iPad|iPod|Android|Mobile|Touch/.test(navigator.userAgent);
  
    if (!isMobile) return; 
  
    let scrollAmount = 0;
    let direction = 1;
    let isPaused = false;
  
    function autoScroll() {
      if (isPaused) return;
  
      scrollAmount += 1 * direction;
  
      gallery.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
  
      const maxScroll = gallery.scrollWidth - gallery.clientWidth;
  
      if (scrollAmount >= maxScroll || scrollAmount <= 0) {
        direction *= -1;
      }
    }
  
    const interval = setInterval(autoScroll, 40);
  
    gallery.addEventListener("touchstart", () => {
      isPaused = true;
    });
    gallery.addEventListener("touchend", () => {
      isPaused = false;
    });
  });