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

// 버튼1
$('.btn1').on('click', () => {
  $('.lookbook-left img').attr({
    src: `../images/lookbook_main_01.jpg`,
    alt: 'lookbook-main2',
  });

  let idx = $(this).index();
  $('.lookbook-right img').eq(0).attr({
    src: `../images/lookbook01_01.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(1).attr({
    src: `../images/lookbook02_01.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(2).attr({
    src: `../images/lookbook03_01.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(3).attr({
    src: `../images/lookbook04_01.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(4).attr({
    src: `../images/lookbook05_01.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(5).attr({
    src: `../images/lookbook06_01.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(6).attr({
    src: `../images/lookbook07_01.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(7).attr({
    src: `../images/lookbook08_01.jpg`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(8).attr({
    src: `../images/lookbook09_01.jpg`,
    alt: 'lookbook-main2',
  });
  $('.btn1').addClass('active_btn');
  $('.btn2').removeClass('active_btn');
  $('.btn3').removeClass('active_btn');
  $('.btn4').removeClass('active_btn');
  $('.btn5').removeClass('active_btn');
  $('.btn6').removeClass('active_btn');
  $('.btn7').removeClass('active_btn');
  $('.btn8').removeClass('active_btn');
  $('.btn9').removeClass('active_btn');
  $('.btn10').removeClass('active_btn');
});

// 버튼2
$('.btn2').on('click', () => {
  $('.lookbook-left img').attr({
    src: `../images/lookbook_main_02.jpg`,
    alt: 'lookbook-main2',
  });

  let idx = $(this).index();
  $('.lookbook-right img').eq(0).attr({
    src: `../images/lookbook01_02.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(1).attr({
    src: `../images/lookbook02_02.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(2).attr({
    src: `../images/lookbook03_02.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(3).attr({
    src: `../images/lookbook04_02.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(4).attr({
    src: `../images/lookbook05_02.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(5).attr({
    src: `../images/lookbook06_02.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(6).attr({
    src: `../images/lookbook07_02.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(7).attr({
    src: `../images/lookbook08_02.jpg`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(8).attr({
    src: `../images/lookbook09_02.jpg`,
    alt: 'lookbook-main2',
  });

  $('.btn2').addClass('active_btn');
  $('.btn1').removeClass('active_btn');
  $('.btn3').removeClass('active_btn');
  $('.btn4').removeClass('active_btn');
  $('.btn5').removeClass('active_btn');
  $('.btn6').removeClass('active_btn');
  $('.btn7').removeClass('active_btn');
  $('.btn8').removeClass('active_btn');
  $('.btn9').removeClass('active_btn');
  $('.btn10').removeClass('active_btn');
});

// 버튼3
$('.btn3').on('click', () => {
  $('.lookbook-left img').attr({
    src: `../images/lookbook_main_03.jpg`,
    alt: 'lookbook-main2',
  });

  let idx = $(this).index();
  $('.lookbook-right img').eq(0).attr({
    src: `../images/lookbook01_03.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(1).attr({
    src: `../images/lookbook02_03.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(2).attr({
    src: `../images/lookbook03_03.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(3).attr({
    src: `../images/lookbook04_03.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(4).attr({
    src: `../images/lookbook05_03.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(5).attr({
    src: `../images/lookbook06_03.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(6).attr({
    src: `../images/lookbook07_03.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(7).attr({
    src: `../images/lookbook08_03.jpg`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(8).attr({
    src: `../images/lookbook09_03.jpg`,
    alt: 'lookbook-main2',
  });
  $('.btn3').addClass('active_btn');
  $('.btn1').removeClass('active_btn');
  $('.btn2').removeClass('active_btn');
  $('.btn4').removeClass('active_btn');
  $('.btn5').removeClass('active_btn');
  $('.btn6').removeClass('active_btn');
  $('.btn7').removeClass('active_btn');
  $('.btn8').removeClass('active_btn');
  $('.btn9').removeClass('active_btn');
  $('.btn10').removeClass('active_btn');
});

// 버튼4
$('.btn4').on('click', () => {
  $('.lookbook-left img').attr({
    src: `../images/lookbook_main_04.jpg`,
    alt: 'lookbook-main2',
  });

  let idx = $(this).index();
  $('.lookbook-right img').eq(0).attr({
    src: `../images/lookbook01_04.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(1).attr({
    src: `../images/lookbook02_04.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(2).attr({
    src: `../images/lookbook03_04.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(3).attr({
    src: `../images/lookbook04_04.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(4).attr({
    src: `../images/lookbook05_04.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(5).attr({
    src: `../images/lookbook06_04.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(6).attr({
    src: `../images/lookbook07_04.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(7).attr({
    src: `../images/lookbook08_04.jpg`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(8).attr({
    src: `../images/lookbook09_04.jpg`,
    alt: 'lookbook-main2',
  });
  $('.btn4').addClass('active_btn');
  $('.btn2').removeClass('active_btn');
  $('.btn3').removeClass('active_btn');
  $('.btn1').removeClass('active_btn');
  $('.btn5').removeClass('active_btn');
  $('.btn6').removeClass('active_btn');
  $('.btn7').removeClass('active_btn');
  $('.btn8').removeClass('active_btn');
  $('.btn9').removeClass('active_btn');
  $('.btn10').removeClass('active_btn');
});

// 버튼5
$('.btn5').on('click', () => {
  $('.lookbook-left img').attr({
    src: `../images/lookbook_main_05.jpg`,
    alt: 'lookbook-main2',
  });

  let idx = $(this).index();
  $('.lookbook-right img').eq(0).attr({
    src: `../images/lookbook01_05.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(1).attr({
    src: `../images/lookbook02_05.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(2).attr({
    src: `../images/lookbook03_05.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(3).attr({
    src: `../images/lookbook04_05.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(4).attr({
    src: `../images/lookbook05_05.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(5).attr({
    src: `../images/lookbook06_05.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(6).attr({
    src: `../images/lookbook07_05.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(7).attr({
    src: `../images/lookbook08_05.jpg`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(8).attr({
    src: `../images/lookbook09_05.jpg`,
    alt: 'lookbook-main2',
  });
  $('.btn5').addClass('active_btn');
  $('.btn2').removeClass('active_btn');
  $('.btn3').removeClass('active_btn');
  $('.btn4').removeClass('active_btn');
  $('.btn1').removeClass('active_btn');
  $('.btn6').removeClass('active_btn');
  $('.btn7').removeClass('active_btn');
  $('.btn8').removeClass('active_btn');
  $('.btn9').removeClass('active_btn');
  $('.btn10').removeClass('active_btn');
});

// 버튼6
$('.btn6').on('click', () => {
  $('.lookbook-left img').attr({
    src: `../images/lookbook_main_06.jpg`,
    alt: 'lookbook-main2',
  });

  let idx = $(this).index();
  $('.lookbook-right img').eq(0).attr({
    src: `../images/lookbook01_06.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(1).attr({
    src: `../images/lookbook02_06.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(2).attr({
    src: `../images/lookbook03_06.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(3).attr({
    src: `../images/lookbook04_06.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(4).attr({
    src: `../images/lookbook05_06.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(5).attr({
    src: `../images/lookbook06_06.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(6).attr({
    src: `../images/lookbook07_06.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(7).attr({
    src: `../images/lookbook08_06.jpg`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(8).attr({
    src: `../images/lookbook09_06.jpg`,
    alt: 'lookbook-main2',
  });
  $('.btn6').addClass('active_btn');
  $('.btn2').removeClass('active_btn');
  $('.btn3').removeClass('active_btn');
  $('.btn4').removeClass('active_btn');
  $('.btn5').removeClass('active_btn');
  $('.btn1').removeClass('active_btn');
  $('.btn7').removeClass('active_btn');
  $('.btn8').removeClass('active_btn');
  $('.btn9').removeClass('active_btn');
  $('.btn10').removeClass('active_btn');
});

// 버튼7
$('.btn7').on('click', () => {
  $('.lookbook-left img').attr({
    src: `../images/lookbook_main_07.jpg`,
    alt: 'lookbook-main2',
  });

  let idx = $(this).index();
  $('.lookbook-right img').eq(0).attr({
    src: `../images/lookbook01_07.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(1).attr({
    src: `../images/lookbook02_07.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(2).attr({
    src: `../images/lookbook03_07.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(3).attr({
    src: `../images/lookbook04_07.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(4).attr({
    src: `../images/lookbook05_07.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(5).attr({
    src: `../images/lookbook06_07.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(6).attr({
    src: `../images/lookbook07_07.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(7).attr({
    src: `../images/lookbook08_07.jpg`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(8).attr({
    src: `../images/lookbook09_07.jpg`,
    alt: 'lookbook-main2',
  });
  $('.btn7').addClass('active_btn');
  $('.btn2').removeClass('active_btn');
  $('.btn3').removeClass('active_btn');
  $('.btn4').removeClass('active_btn');
  $('.btn5').removeClass('active_btn');
  $('.btn6').removeClass('active_btn');
  $('.btn1').removeClass('active_btn');
  $('.btn8').removeClass('active_btn');
  $('.btn9').removeClass('active_btn');
  $('.btn10').removeClass('active_btn');
});

// 버튼8
$('.btn8').on('click', () => {
  $('.lookbook-left img').attr({
    src: `../images/lookbook_main_08.jpg`,
    alt: 'lookbook-main2',
  });

  let idx = $(this).index();
  $('.lookbook-right img').eq(0).attr({
    src: `../images/lookbook01_08.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(1).attr({
    src: `../images/lookbook02_08.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(2).attr({
    src: `../images/lookbook03_08.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(3).attr({
    src: `../images/lookbook04_08.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(4).attr({
    src: `../images/lookbook05_08.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(5).attr({
    src: `../images/lookbook06_08.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(6).attr({
    src: `../images/lookbook07_08.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(7).attr({
    src: `../images/lookbook08_08.jpg`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(8).attr({
    src: `../images/lookbook09_08.jpg`,
    alt: 'lookbook-main2',
  });
  $('.btn8').addClass('active_btn');
  $('.btn2').removeClass('active_btn');
  $('.btn3').removeClass('active_btn');
  $('.btn4').removeClass('active_btn');
  $('.btn5').removeClass('active_btn');
  $('.btn6').removeClass('active_btn');
  $('.btn7').removeClass('active_btn');
  $('.btn1').removeClass('active_btn');
  $('.btn9').removeClass('active_btn');
  $('.btn10').removeClass('active_btn');
});

// 버튼9
$('.btn9').on('click', () => {
  $('.lookbook-left img').attr({
    src: `../images/lookbook_main_09.jpg`,
    alt: 'lookbook-main2',
  });

  let idx = $(this).index();
  $('.lookbook-right img').eq(0).attr({
    src: `../images/lookbook01_09.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(1).attr({
    src: `../images/lookbook02_09.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(2).attr({
    src: `../images/lookbook03_09.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(3).attr({
    src: `../images/lookbook04_09.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(4).attr({
    src: `../images/lookbook05_09.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(5).attr({
    src: `../images/lookbook06_09.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(6).attr({
    src: `../images/lookbook07_09.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(7).attr({
    src: `../images/lookbook08_09.jpg`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(8).attr({
    src: `../images/lookbook09_09.jpg`,
    alt: 'lookbook-main2',
  });
  
  $('.btn9').addClass('active_btn');
  $('.btn2').removeClass('active_btn');
  $('.btn3').removeClass('active_btn');
  $('.btn4').removeClass('active_btn');
  $('.btn5').removeClass('active_btn');
  $('.btn6').removeClass('active_btn');
  $('.btn7').removeClass('active_btn');
  $('.btn8').removeClass('active_btn');
  $('.btn1').removeClass('active_btn');
  $('.btn10').removeClass('active_btn');
});

// 버튼10
$('.btn10').on('click', () => {
  $('.lookbook-left img').attr({
    src: `../images/lookbook_main_10.jpg`,
    alt: 'lookbook-main2',
  });

  let idx = $(this).index();
  $('.lookbook-right img').eq(0).attr({
    src: `../images/lookbook01_10.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(1).attr({
    src: `../images/lookbook02_10.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(2).attr({
    src: `../images/lookbook03_10.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(3).attr({
    src: `../images/lookbook04_10.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(4).attr({
    src: `../images/lookbook05_10.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(5).attr({
    src: `../images/lookbook06_10.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(6).attr({
    src: `../images/lookbook07_10.jpg`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(7).attr({
    src: `../images/lookbook08_10.jpg`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(8).attr({
    src: `../images/lookbook09_10.jpg`,
    alt: 'lookbook-main2',
  });
  $('.btn10').addClass('active_btn');
  $('.btn2').removeClass('active_btn');
  $('.btn3').removeClass('active_btn');
  $('.btn4').removeClass('active_btn');
  $('.btn5').removeClass('active_btn');
  $('.btn6').removeClass('active_btn');
  $('.btn7').removeClass('active_btn');
  $('.btn8').removeClass('active_btn');
  $('.btn9').removeClass('active_btn');
  $('.btn1').removeClass('active_btn');
});