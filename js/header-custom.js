jQuery(function($) {
$(document).ready( function() {
  //enabling stickUp on the '.navbar-wrapper' class
	$('.navbar-wrapper').stickUp({
		parts: {
		  0: 'home',
		  1: 'aboutme',
		  2: 'skills',
		  3: 'projcets',
			4: 'experience',
			5: 'education',
			6: 'contact'
		},
		itemClass: 'menuItem',
		itemHover: 'active',
		topMargin: 'auto'
		});
	});

	$( ".navbar.navbar-inverse.navbar-static-top a" ).click(function() {
	  $( ".navbar-collapse" ).addClass( "hideClass" );
	});
	
	$( ".navbar.navbar-inverse.navbar-static-top a" ).click(function() {
	  $( ".navbar-collapse" ).addClass( "collapse" );
	});
	
	$( ".navbar.navbar-inverse.navbar-static-top a" ).click(function() {
	  $( ".navbar-collapse" ).removeClass( "in" );
	});
	
	$( ".navbar-toggle" ).click(function() {									 
	  $( ".navbar-collapse" ).removeClass( "hideClass" );
	});
	
	$('#banner').superslides({
	  animation: 'fade',
	  play: 5000
	});

});
