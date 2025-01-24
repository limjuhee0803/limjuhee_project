// 상품 무한 슬라이드
/*
const control = document.getElementById("direction-toggle");
    const marquees = document.querySelectorAll(".marquee");
    const wrapper = document.querySelector(".wrapper");

    control.addEventListener("click", () => {
    control.classList.toggle("toggle--vertical");
    wrapper.classList.toggle("wrapper--vertical");
    [...marquees].forEach((marquee) =>
        marquee.classList.toggle("marquee--vertical")
    );
    });
*/

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
                delay: 1200,
            },
        });
    });
}
