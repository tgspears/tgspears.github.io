// On load, center the nav
$(document).ready(function(){

	$("#nav-container").css("margin-right", ($(window).width()-$("#nav-container").width())/2);

})

// On window resize, center the nav
$(window).resize(function(){

	$("#nav-container").css("margin-right", ($(window).width()-$("#nav-container").width())/2);

})