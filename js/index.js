$(document).ready(function(){
    $(window).scroll(function() {
        var position = $(this).scrollTop();

        $(".section").each(function() {
            var target = $(this).offset().top;
            var id = $(this).attr('id');

            if (position >= target) {
                $("#navigation > a").removeClass("active-nav");
                $("#navigation > a[href='#"+id+"']").addClass("active-nav");
            };
        });
    });
})