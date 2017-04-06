$(document).ready(function(){





// PAGE SCROLLER
  
	$(".scroll-btn").click(function() {
	    var scrollTo = $(this).attr("data-val");

	    if ($(window).width() > 670) {
	      $('html, body').animate({
	        scrollLeft: $(scrollTo).offset().left
	      }, 1000);
	    }
	    else {
	      $('html, body').animate({
	        scrollTop: $(scrollTo).offset().top
	      }, 1000);
	    }

  });


//MENU CONTROLL

  $(".menu-trigger").click(function(){
    $(".menu-trigger img").toggleClass("menu-open");
    $(".scroll-btn").toggleClass("item-active");
    $(".mobile-nav").toggleClass("menu-active");
  });  



// SET UP
  
	function setUp(){
	    if ($(window).width() > 670) {
	      $(".scroll-btn").addClass("item-active");
	      $(".menu-trigger img").toggleClass("menu-open");
	      $(".mobile-nav").toggleClass("menu-active");
	      $(".mobile-nav").css({"display" : "none"});
	    }
		
    	navSetupToWidth();
	}
	setUp();


// SETS NAV ACORDING TO WIDTH

  function navSetupToWidth () {
    if ($(window).width() <= 670) {

      $("nav").css(
      {
        "display" : "none"
      });
      
      $(".mobile-nav").css(
      {
          "display" : "none",
          "position" : "fixed",
          "pointer-events" : "none",
          
      });
      $(".mobile-menu-trigger").css(
      {
      	"pointer-events" : "all",
      	"display" : "block"
      });
    }
    else {
      $("nav").css(
      {       
        "display" : "block"
      });
      $(".mobile-nav").css(
      {
        "display" : "none"
      });
      $(".mobile-menu-trigger").css(
      {
      	"display" : "none"
      }); 
    }
    // $(".menu-trigger").css(
    // {
    // 	"pointer-events": "all"
    // });
  }
  $(window).resize(function(){ 
    navSetupToWidth();
  });


// SETS THE COLOR OF THE MENU TRIGGER

  $(window).scroll(function() {
    if ($(".mobile-menu-trigger").offset().top - 50 >= $(".landing-view").height()) {
      $(".mobile-menu-trigger").attr("src", "images/menu-icon.png");
    }
    else {
      $(".mobile-menu-trigger").attr("src", "images/menu-icon-white.png");
    }

  });

});