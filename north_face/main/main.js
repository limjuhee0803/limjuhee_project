//부드러운 스크롤
document.addEventListener("DOMContentLoaded", function () {
    // Lenis 초기화
    if (!window.lenisInstance) {
      const lenis = new Lenis({
        duration: 4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
  
      window.lenisInstance = lenis;
  
      // 애니메이션 프레임 연결
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
    }
  });

//menu
$('.menu_btn').on('click', () => {
    $('.menu').toggleClass('change-menu');
    $('.menu .header-icon').toggleClass('change-menu');
    $('.contents').toggleClass('dark');
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

//카드 이펙트
/*
document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };
}
    */


//카드 이펙트
document.addEventListener("DOMContentLoaded", function() {
    const cardsElement = document.getElementById("cards");

    if (cardsElement) {
        cardsElement.onmousemove = e => {
            for(const card of document.getElementsByClassName("card")) {
                const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        };
    } else {
        console.error('Element with id "cards" not found.');
    }
});
    
//상품 오토 스와이퍼
autoSwiper();

function autoSwiper(){
    const auto_Sw = document.getElementsByClassName("autoSwiper");
    let arr_slide = Array.from(auto_Sw);
    arr_slide.forEach((ele, idx, array) => {
        array[idx].classList.add("type" + idx);

        const Swiper_sub01 = new Swiper( '.type' + idx, {
            effect : 'fade',
            loop : true,
            autoplay: {
                delay: 2000,
            },
        });
    });
}

//상품 스와이퍼
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 10,
    slideToClickedSlide : true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 7,
        spaceBetween: 20.
      }
  }
});