//스와이퍼
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 10,
    slideToClickedSlide : true,
    centeredSlides:true,
    breakpoints: {
      768: {
        slidesPerView: 8,
      }
  }
});

//스와이퍼 이미지 변경 => 반복문 공부해서 변경하기
//버튼a 클릭 시 .lookbook-left img의 경로가 ../images/lookbook_main_0a.jpg로 변경
//버튼a 클릭 시 .lookbook-right img의 경로가 ../images/lookbook01_0a.jpg로 변경

// 버튼 클릭 처리
for (let btnNum = 1; btnNum <= 10; btnNum++) {
  $(`.btn${btnNum}`).on('click', () => {
    // lookbook-left 이미지 설정
    let lookbookMainImg = btnNum < 10 ? `../images/lookbook_main_0${btnNum}.jpg` : `../images/lookbook_main_${btnNum}.jpg`;
    $('.lookbook-left img').attr({
      src: lookbookMainImg,
      alt: 'lookbook-main2',
    });

    // lookbook-right 이미지 설정
    for (let i = 0; i < 9; i++) {
      let lookbookRightImg = btnNum < 10 ? `../images/lookbook0${i + 1}_0${btnNum}.jpg` : `../images/lookbook0${i + 1}_${btnNum}.jpg`;
      $('.lookbook-right img').eq(i).attr({
        src: lookbookRightImg,
        alt: 'lookbook-main2',
      });
    }

    // 활성화된 버튼 클래스 설정
    $(`.btn${btnNum}`).addClass('active_btn');
    for (let i = 1; i <= 10; i++) {
      if (i !== btnNum) {
        $(`.btn${i}`).removeClass('active_btn');
      }
    }
  });
}