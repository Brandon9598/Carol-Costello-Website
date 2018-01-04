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

     // Select all links with hashes
     $('a[href*="#"]')
       // Remove links that don't actually link to anything
       .not('[href="#"]')
       .not('[href="#0"]')
       .click(function(event) {
         // On-page links
         if (
           location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
           && 
           location.hostname == this.hostname
         ) {
           // Figure out element to scroll to
           var target = $(this.hash);
           target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
           // Does a scroll target exist?
           if (target.length) {
             // Only prevent default if animation is actually gonna happen
             event.preventDefault();
             $('html, body').animate({
               scrollTop: target.offset().top
             }, 1000, function() {
               // Callback after animation
               // Must change focus!
               var $target = $(target);
               $target.focus();
               if ($target.is(":focus")) { // Checking if the target was focused
                 return false;
               } else {
                 $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                 $target.focus(); // Set focus again
               };
             });
           }
         }
       });
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