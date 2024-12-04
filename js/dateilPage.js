document.addEventListener("DOMContentLoaded", () => {
    const sliderImages = document.querySelector(".slider-images");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const dots = document.querySelectorAll(".dot");
  
    const imageWidth = 460; // ширина одной картинки
    let currentIndex = 0;
  
    const updateSlider = () => {
      sliderImages.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    };
  
    nextBtn.addEventListener("click", () => {
      if (currentIndex < sliderImages.children.length - 1) {
        currentIndex++;
        updateSlider();
      }
    });
  
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
      });
    });
  });

  
document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinksBurgerMenu = document.querySelector(".navLinksBurgerMenu");

  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    navLinksBurgerMenu.classList.toggle("active");
  });
});
  