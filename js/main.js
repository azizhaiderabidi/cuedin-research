$(document).ready(function () {

    $(window).scroll(function () { 
        
        if ($(this).scrollTop() >= 300) {
            $(".header").addClass("shadow-lg");
        } 
        else if ($(this).scrollTop() < 300){
            if($(".header").hasClass("shadow-lg")){
                $(".header").removeClass("shadow-lg");
            }
        } 
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout:2000,
        margin: 10,
        nav: true,
        items: 1,
      })

    //   $('#about').on('click', function(){
        
    //     $('html,body').animate({
        
    //         scrollTop: $("#about-us").offset().top - offset
    //    }, 100);
    // });

  });