//스와이퍼
var swiper = new Swiper(".mySwiper", {
    slidesPerView : 'auto',
    loop : true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });

//사이즈 옵션 버튼
$('.size_option h3').on('click', () => {
    $('.size_option').addClass('active_size');
  });