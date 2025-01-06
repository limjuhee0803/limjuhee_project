//header
let prevScroll = window.scrollY;

$(window).on('scroll', () => {
  let currentScroll = window.scrollY;

  if (prevScroll > currentScroll) {
    $('header').css({ top: 0 });
  } else {
    $('header').css({ top: -100 });
  }

  prevScroll = currentScroll;
  console.log('prevScroll:', prevScroll);
});

//menu
$('.hambuger').on('click', () => {
  $('.menu').toggleClass('change-menu');
  $('.hambuger').toggleClass('change-hambuger');
});

//back to top
$('a[href="#"]').on('click', (evt) => {
  evt.preventDefault();
});

$('.up').on('click', () => {
  scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

$('.up').on('click', () => {
  scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});


$('.footer-butterfly').hover(
  (e) => {
    $('.footer-butterfly').addClass('active-portfolio');
  },
  (e) => {
    $('.footer-butterfly').removeClass('active-portfolio');
  }
);

$('.footer-butterfly.active-portfolio').on('click', () => {
  $('.footer-butterfly.active-portfolio').attr(
    'href',
    'https://limjuhee0803.github.io/limjuhee-portfolio/index.html'
  );
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 14,
    spaceBetween: 10,
    centeredSlides:true,
    slideToClickedSlide : true,
    navigation:{
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev",
  },
});

//스와이퍼 이미지 변경
//1.btn2클릭 시 .lookbook-left img의 경로가 ../images/lookbook-main2.png로 변경
//2.btn2클릭 시 .lookbook-right li 속의 모든 img의 경로가 끝에 _2가 붙음