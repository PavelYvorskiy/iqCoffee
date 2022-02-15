const swiper = new Swiper(".mySwiper", {
    //autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
 /*  autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
  /*  pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },*/
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      hideOnClick:false,
    },
    
  });