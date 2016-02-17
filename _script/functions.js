$(function(){
    $('.pictures').owlCarousel({
        autoplay: true,
        autoplayTimeout: 4500,
        autoplayHoverPause: true,
        center: true,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: [ '<', '>' ],
        items: 1
    });
    $("#galeriaCursos").responsiveSlides({
        manualControls: '#galeriaCursos-pager',
        speed: 500
    });
});