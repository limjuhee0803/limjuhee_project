// banner 마우스 이벤트
const img1 = document.querySelector('.item1');
const img2 = document.querySelector('.item2');
const img3 = document.querySelector('.item3');
const img4 = document.querySelector('.item4');

addEventListener('mousemove', (evt) => {
  let x = evt.clientX,
    y = evt.clientY;
  console.log(x, y);

  img1.style.transform = `translate(${x / 60}px,${-y / 50}px)`;
  img2.style.transform = `translate(${x / -50}px,${-y / 100 + 10}px)`;
  img3.style.transform = `translate(${30 - x / 60}px,${-y / 50}px)`;
  img4.style.transform = `translate(${50 - x / 80}px,${-y / 20}px)`;
});

//스와이퍼
var swiper = new Swiper(".mySwiper", {
  slidesPerView : 'auto',
  loop : true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

