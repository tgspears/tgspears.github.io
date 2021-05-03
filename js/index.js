$(document).ready(function(){

    $(window).scroll(function() {
        
        var position = $(this).scrollTop();

        $(".section").each(function() {
            var target = $(this).offset().top - 10;
            var id = $(this).attr('id');

            if (position >= target) {
                $("#navigation > a").removeClass("active-nav");
                $("#navigation > a[href='#"+id+"']").addClass("active-nav");
            };
        });
    });

    $("#navigation #nav-burger").click(function(){
        
        $(".hamburger").toggleClass("is-active");

        $("#navigation").click(function(){
            $("#navigation")
                .addClass("shown-mobile-nav");
        })

        $("#navigation.shown-mobile-nav").click(function(){
            $("#navigation")
                .addClass("hidden-mobile-nav")
                .removeClass("shown-mobile-nav");
        })

        $("#navigation.hidden-mobile-nav").click(function(){
            $("#navigation")
                .addClass("shown-mobile-nav")
                .removeClass("hidden-mobile-nav");
        })
    })
})