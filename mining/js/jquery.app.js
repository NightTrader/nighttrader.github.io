/* Theme Name: Aeshio - Responsive bootsrap 4 Cryptocurrency Landing Page Template
   Author: Zoyothemes
   Version: 1.0.0
   Created: January 2019
   File Description: Main Js file of the template
*/

//initializing
(function($) {
    "use strict";
    
    // Sticky Navbar
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".sticky").addClass("nav-sticky");
        } else {
            $(".sticky").removeClass("nav-sticky");
        }
        
    });

    // Smooth Link
    $('.nav-item a, .mouse-down a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    // Magnific Popup
    $('.video-play-icon').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    //Scrollspy
    $("#navbarCollapse").scrollspy({
        offset: 70
    });

    // Loader
    $(window).on('load', function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
    });
    
    //jQuery countdown plugin
    $('#clock').countdown('2020/10/10').on('update.countdown', function(event) {
        var _DateInput = '' +
            '<div><span>%-d</span> Day%!d</div>' +
            '<div><span>%H</span> Hours</div>' +
            '<div><span>%M</span> Minutes</div>' +
            '<div><span>%S</span> Seconds</div>';
        var $this = $(this).html(event.strftime(_DateInput));
    });

    //jQuery Owl-Demo
    $("#owl-demo").owlCarousel({
        items : 4,
        itemsDesktop : [1199,4], 
        itemsDesktopSmall : [991,3],
        itemsTablet: [767,2], 
        itemsMobile : [575,1], 
        pagination : false,
        autoPlay : false,
        slideSpeed : 300
    });	
    (function ($) { 
        var owl = $("#owl-demo");
        owl.owlCarousel();	
        
        // Custom Navigation Events
        $(".next-roadmap").click(function(){
            owl.trigger('owl.next');
        })
        $(".prev-roadmap").click(function(){
            owl.trigger('owl.prev');
        })	
    } )(jQuery);

    // Jquery typed
    $(".element").each(function(){
        var $this = $(this);
        $this.typed({
        strings: $this.attr('data-elements').split(','),
        typeSpeed: 100, // typing speed
        backDelay: 3000 // pause before backspacing
        });
    });

    //jQuery Market slider
    var mSlider = $ ("#market-rate");
        if(mSlider.length) {
            mSlider.owlCarousel({
              loop:true,
              nav:false,
              dots:false,
              margin:30,
              autoplay:true,
              autoplayTimeout:1000,
              smartSpeed:1200,
              autoplayHoverPause:true,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:1
                    },
                    500:{
                        items:2
                    },
                    992:{
                        items:3
                    },
                    1300:{
                        items:4,
                    }
                },
          })
        }
            
})(jQuery);