new Swiper (".reviews__swiper", {

 loop: true,

 navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
 },
 
 pagination: {
  el: '.swiper-pagination',
  type: 'bullets',
},
});

new Swiper (".products__swiper", {

  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  slidesPerView: 'auto',
  spaceBetween: 20,
});