$(document).ready(function (){
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
   
   const productsCard1 = document.querySelector(".products__card-1");
   const productsCardSlider1 = document.querySelector(".products__card-slider-1");
   const modal = document.querySelector(".modal");
   const modalClose = document.querySelector(".modal__close");
   
   productsCard1.addEventListener("click", toggleModal);
   
   productsCardSlider1.addEventListener("click", toggleModal);
   
   modalClose.addEventListener("click", toggleModal);
   
   function toggleModal (){
     modal.classList.toggle("open");
     }

     // Убавляем кол-во по клику
         $('.product-counter .minus-btn').click(function() {
         let $input = $(this).parent().find('.counter-number');
         let count = parseInt($input.val()) - 1;
         count = count < 1 ? 1 : count;
         $input.val(count);
     });
     // Прибавляем кол-во по клику
     $('.product-counter .plus-btn').click(function() {
         let $input = $(this).parent().find('.counter-number');
         let count = parseInt($input.val()) + 1;
         count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
         $input.val(parseInt(count));
     }); 
     // Убираем все лишнее и невозможное при изменении поля
     $('.product-counter .counter-number').bind("change keyup input click", function() {
         if (this.value.match(/[^0-9]/g)) {
             this.value = this.value.replace(/[^0-9]/g, '');
         }
         if (this.value == "") {
             this.value = 1;
         }
         if (this.value > parseInt($(this).data('max-count'))) {
             this.value = parseInt($(this).data('max-count'));
         }    
     });  

    // тут Ира пытается в магнетизм
    if ($(window).width() > 768) {
      var magnetic = document.querySelectorAll('.magnetic');

magnetic.forEach(function(elem){
 $(document).on('mousemove touch', function(e){
   magnetize(elem, e);
 });
})


function magnetize(el, e){
 var mX = e.pageX,
     mY = e.pageY;
 const item = $(el);
 
 const customDist = item.data('dist') * 20 || 120;
 const centerX = item.offset().left + (item.width()/2);
 const centerY = item.offset().top + (item.height()/2);
 
 var deltaX = Math.floor((centerX - mX)) * -0.1;
 var deltaY = Math.floor((centerY - mY)) * -0.1;
 
 var distance = calculateDistance(item, mX, mY);
   
 if(distance < customDist){
   TweenMax.to(item, 0.1, {y: deltaY, x: deltaX, scale:1.1});
   item.addClass('magnet');
 }
 else {
   TweenMax.to(item, 0.6, {y: 0, x: 0, scale:1});
   item.removeClass('magnet');
 }
}

function calculateDistance(elem, mouseX, mouseY) {
 return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
}
   }
});