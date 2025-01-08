var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 10,
    slideToClickedSlide : true,
    centeredSlides:true,
    breakpoints: {
      768: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      }
  }
});