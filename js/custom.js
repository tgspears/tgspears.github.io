(function($) { 
		  
  $(document).ready(function(){
    $('.banner').prepend('<div class="patternOverlay"></div>');		
    
  });	
    
  /*===========================================================*/
    /*	Preloader 
  /*===========================================================*/	
  //<![CDATA[
    $(window).load(function() { // makes sure the whole site is loaded
      $("#status").fadeOut(); // will first fade out the loading animation
      $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
    })
  //]]>
        
  // for mobile nav js	
  $(window).load(function(){
    $('button.navbar-toggle').click(function(){
      $(this).toggleClass('active');
      $('.navbar-collapse').slideToggle();										 
    });
    $('.menuItem a').click(function(){
      $('button.navbar-toggle').removeClass('active');
      $('button.navbar-toggle').addClass('collapsed');
      $('.navbar-collapse').slideToggle();
    })
  });
  // for banner height
  var windowHeight =$(window).height();
  $('.banner').css({'height':windowHeight });

  // Smooth page scroll
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top -16
          }, 1000);
          return false;
        }
      }
    });
  });

}(jQuery));
