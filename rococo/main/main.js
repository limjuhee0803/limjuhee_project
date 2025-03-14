// 메인 배너 이벤트
const inner = document.querySelector(".inner");
        const section = document.querySelector("section");

        window.onscroll = function() {
        let value = window.pageYOffset / section.offsetTop + 1;
        inner.style.transform = `scale(${value})`;
        };

    $(function(){
    
    var $window = $(window);    //Window object
    
    var scrollTime = 1.2;     //Scroll time
    var scrollDistance = 170;   //Distance. Use smaller value for shorter scroll and greater value for longer scroll
        
    $window.on("mousewheel DOMMouseScroll", function(event){
        
        event.preventDefault(); 
                        
        var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta*scrollDistance);
        
        TweenMax.to($window, scrollTime, {
        scrollTo : { y: finalScroll, autoKill:true },
            ease: Power1.easeOut,
            autoKill: true,
            overwrite: 5              
        });
            
    });
    
});

//스와이퍼
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5, //모바일 설정
    spaceBetween: 15,
    slideToClickedSlide : true,
    breakpoints: {
      768: { 
        slidesPerView: 3.5, //브라우저가 768보다 클 때
        spaceBetween: 30,
      }
  }
});
