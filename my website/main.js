var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    sliderPerGroup: 4,
    loop: false,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });
  
   // Get the button
   let mybutton = document.getElementById("myBtn");
        
   // When the user scrolls down 20px from the top of the document, show the button
   window.onscroll = function() {scrollFunction()};
   
   function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       mybutton.style.display = "block";
     } else {
       mybutton.style.display = "none";
     }
   }
   
   // When the user clicks on the button, scroll to the top of the document
   function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
   }