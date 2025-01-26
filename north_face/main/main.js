//카드 이펙트
document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };
    }
    
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
    spaceBetween: 20,
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