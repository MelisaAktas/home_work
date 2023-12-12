
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let counter = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
      });
    }
  
    function nextSlide() {
      counter = (counter + 1) % slides.length;
      showSlide(counter);
    }
  
    setInterval(nextSlide, 5000);
  
    // İlk slaytı göster
    showSlide(counter);
  });


