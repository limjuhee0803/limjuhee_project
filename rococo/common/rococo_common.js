
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


    // 스크롤 애니메이션
    $(function(){
      function scrollevents(scrollPos){
          var wh =  $(window).height();
          current_scroll = scrollPos;
          $(".show_trigger").each(function(){
              show_whatever($(this), current_scroll, wh);
          });
      }

      let ticking = false;
      var current_scroll, wh;
      function show_whatever(el, current_scroll, wh){
          var el_offset_t = el.offset().top;
          if(current_scroll > el_offset_t - wh + 150){
              el.parent().removeClass("wait_scroll");
              el.remove();
          }    
      }

      $(window).on('scroll',function(){
          if (!ticking) {
              window.requestAnimationFrame(function() {
                  scrollevents(window.scrollY);
                  ticking = false;
              });
              ticking = true;
          }
      });
  });

