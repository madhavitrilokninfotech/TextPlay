$(document).ready(function() {


    // scroll hide and show

    $('.navbar-nav li a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    $(".navbar-toggler").click(function() {
        $("body").toggleClass("no-scroll");
    });

    $(".header-menu ul li a").click(function() {
        $("body").removeClass("no-scroll");
    });


    // top nav header scroll active class add start

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".header-main").addClass("active");
        } else {
            $(".header-main").removeClass("active");
        }
    });
    // top nav header scroll active class add end


    // scroll to add class js end

    // function onScroll(event) {
    //     var scrollPos = $(document).scrollTop();
    //     $('#menu-center li.nav-item a.scrollTosection').each(function() {
    //         var currLink = $(this);
    //         var refElement = $(currLink.attr("href"));
            
    //         //console.table(refElement.position().top, scrollPos, refElement.position().top + refElement.height(), scrollPos);

    //         if (refElement.position().top - 50 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
    //             $('#menu-center li.nav-item a.scrollTosection').removeClass("active");
    //             currLink.addClass("active");
    //         } else {
    //             currLink.removeClass("active");
    //         }
    //     });
    // }

    // $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function() {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
        }, 500, 'swing', function() {
            //window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });



    $('.moment-sec-slider').each(function() {
        var $slider = $(this);

        $slider.on('init', function(e, slick) {
            $slider.find('.slick-dots').toggle(slick.slideCount > 1);
        });

        $slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            infinite: false,
            speed: 500,
            cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
            autoplay: false,
            adaptiveHeight: false
        });
    });


    // $('.moment-sec-slider').slick({
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   dots: true,
    //   arrows: true,
    //   infinite: false,
    //   speed: 500,
    //   cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    //   autoplay: false,
    //   adaptiveHeight: false,
    //   // appendDots: $('.moment-sec-slider'),
    //   // dotsClass: 'slick-dots',
    // });


    // Mobile Mockup Slider Animation Start


    $('.smart-features-img-slider-v2').on('afterChange', function(event, slick, currentSlide) {

        $('.smart-features-pane-v2').removeClass('unactive-1 unactive-2 active-1 current-slide');
        var currentIndex = currentSlide;
        var panes = [
            $('.smart-features-v21'),
            $('.smart-features-v22'),
            $('.smart-features-v23')
        ];

        // Add active classes for the current pane
        panes[currentIndex].addClass('current-slide active-1');

        if (currentIndex === 0) {
            panes[1].addClass('unactive-1');
            panes[2].addClass('unactive-2');
        } else if (currentIndex === 1) {
            panes[2].addClass('unactive-1');
            panes[0].addClass('unactive-2');
        } else if (currentIndex === 2) {
            panes[0].addClass('unactive-1');
            panes[1].addClass('unactive-2');
        }
    });



    $('.smart-features-img-slider-v2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        fade: false, 
        adaptiveHeight: false,
        asNavFor: '.parents-features-slider-v2',
    });

    // VERTICAL THUMBS (NAV)
    $('.parents-features-slider-v2').slick({
        slidesToShow: 3, 
        slidesToScroll: 1,
        asNavFor: '.smart-features-img-slider-v2',
        focusOnSelect: true, 
        vertical: true,
        verticalSwiping: true,
        arrows: true,
        dots: false,
        infinite: false,
        variableHeight: true, 
        responsive: [{
            breakpoint: 992,
            settings: {
                vertical: false, 
                verticalSwiping: false,
                slidesToShow: 1, 
                arrows: true
            }
        }]
    });

    $('.parents-features-slider-v2').on('setPosition', function () {
      $(this).find('.slick-slide').css('height', 'auto');
      $(this).find('.slick-list').css('height', 'auto');
    });


// Mobile Mockup Slider Animation END

    $('.vm-shape-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // 3 seconds
        speed: 1000, // transition speed
        arrows: false,
        infinite: false,
        fade: true, 
        adaptiveHeight: false,
        asNavFor: '.vm-shape-point-slider',
        swipe: false,
        draggable: false
    });

    // VERTICAL THUMBS (NAV)
    $('.vm-shape-point-slider').slick({
        slidesToShow: 5, 
        slidesToScroll: 1,
        asNavFor: '.vm-shape-slider',
        focusOnSelect: true, 
        arrows: false,
        dots: false,
        infinite: false,
        swipe: false,
        draggable: false
    });



        var userAgent = navigator.userAgent.toLowerCase();
        var isAndroid = userAgent.indexOf("android") > -1;
        var isIOS = /iphone|ipad|ipod/.test(userAgent);

        // Check if store buttons exist before modifying them
        if ($("#google-play").length || $("#app-store").length) {
            if (isAndroid) {
                $("#google-play").show();
            } else if (isIOS) {
                $("#app-store").show();
            }
        }


        
document.addEventListener("DOMContentLoaded", function() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var isAndroid = /android/i.test(userAgent);
    var isIOS = /iPad|iPhone|iPod/.test(userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    // Ensure elements exist before modifying them
    var googlePlayBtn = document.getElementById("google-play");
    var appStoreBtn = document.getElementById("app-store");

    if (isAndroid && googlePlayBtn) {
        googlePlayBtn.style.display = "inline-block";
    } else if (isIOS && appStoreBtn) {
        appStoreBtn.style.display = "inline-block";
    }
});


    $(document).on('click', '.click-flip-btn', function(e) {
        e.preventDefault();

        var parentBox = $(this).closest('.ms-box');
        parentBox.toggleClass('active');
    });



});


// $(window).on('load',function(){
//     setTimeout(function(){ 
//     $('.page-loader').fadeOut('slow');
//     });
// });







var audio_song = document.getElementById("audio_song");
var audio_songBtn = document.getElementById("audio_song-btn");

function playPause(song, btn) {
   if (song.paused) {
      song.play();
      btn.classList.add("playing");
   } else {
      song.pause();
      btn.classList.remove("playing");
   }
}

// Reset button when audio ends
audio_song.addEventListener("ended", function () {
   audio_songBtn.classList.remove("playing");
});

audio_songBtn.addEventListener("click", function () {
   playPause(audio_song, audio_songBtn);
});




