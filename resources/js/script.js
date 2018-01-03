$(document).ready(function() {
     /* Mobile Nav */
     $('.js--nav-icon').click(function() {
          var nav = $('.js--main-nav');
          var icon = $('.js--nav-icon i');
          
          nav.slideToggle(200);
          if(icon.hasClass('ion-navicon-round')){
               icon.addClass('ion-close-round');
               icon.removeClass('ion-navicon-round');
          } else {
               icon.removeClass('ion-close-round');
               icon.addClass('ion-navicon-round');
          }
     })

     /* TODO: For some reason, waypoints are not working
     $('.js--section-biography').waypoint(function(direction) {
          if (direction == "down"){
               $('nav').addClass('sticky');
          }
          else {
               $('nav').removeClass('sticky');
          }
     });
     */
     
     // SLIDE SHOW
     var slideIndex = 0;
     showSlides();

     function showSlides() {
         var i;
         var slides = document.getElementsByClassName("mySlides");
         for (i = 0; i < slides.length; i++) {
             slides[i].style.display = "none"; 
         }
         slideIndex++;
         if (slideIndex > slides.length) {slideIndex = 1} 
         slides[slideIndex-1].style.display = "block"; 
         slides[slideIndex-1].style.transitionDuration = "2s";
         setTimeout(showSlides, 5000); // Change image every 5 seconds
     }
});