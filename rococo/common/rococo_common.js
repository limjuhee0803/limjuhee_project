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
});

//menu
$('.hambuger').on('click', () => {
  $('.menu').toggleClass('change-menu');
  $('.menu .header-icon').toggleClass('change-menu');
  $('.hambuger').toggleClass('change-hambuger');
});


