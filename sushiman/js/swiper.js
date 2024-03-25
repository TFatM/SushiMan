var swiper = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,
  centeredSlides: true, 
  slidesPerView: 3,
  spaceBetween: 64,
      modules: [myPlugin],
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
      debugger: true,
    });