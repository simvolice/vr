/*Include function and libraries*/

function include(url){document.write('<script src="'+url+'"></script>');return false;}

include('js/jquery.waitforimages.min.js');
include('js/appear.min.js');
include('js/jquery.bxslider.min.js');
include('js/isotope.pkgd.min.js');
include('js/jquery.countTo.js');
include('js/owl.carousel.min.js');
include('js/retina.min.js');
include('js/jquery.mb.YTPlayer.min.js');
include('js/wow.min.js');
include('js/jquery.simple-text-rotator.min.js');

/*==========================*/

/*==========================*/
/*Parallax*/
/*==========================*/
var deviceAgent = navigator.userAgent.toLowerCase();
var isTouchDevice = Modernizr.touchevents || (deviceAgent.match(/(iphone|ipod|ipad)/) || deviceAgent.match(/(android)/)  || deviceAgent.match(/(iemobile)/) || deviceAgent.match(/iphone/i) || deviceAgent.match(/ipad/i) || deviceAgent.match(/ipod/i) || deviceAgent.match(/blackberry/i) || deviceAgent.match(/bada/i));

if(!isTouchDevice){
	$(document).ready(function() {
		$('.parallax-block').css({'background-attachment':'fixed'});
	});
}
/*==========================*/

/*==========================*/
/*Page preloader */
/*==========================*/
$(window).on('load', function () {
    jQuery.waitForImages.hasImgProperties = ['background','backgroundImage'];
    jQuery('body').waitForImages(function() {
        jQuery("#page-preloader").delay(1200).fadeOut('slow');
        jQuery('body').css('overflowY','auto');
		/*==========================*/
		/*Animation*/
		/*==========================*/
		wow = new WOW({
    		animateClass: 'animated',
    		offset: 100
    	});
    	wow.init();
		/*==========================*/
    });
});
/*==========================*/

/*==========================*/
/*Video background*/
/*==========================*/
var vidfilter = {
	grayscale: 100
}
$(function(){
	var windowWidth = jQuery(window).width();
		if(windowWidth > 768){
			$(".player").YTPlayer();
			$('#vid').YTPApplyFilters(vidfilter);
		}
	else{
		$('.video').css({'background-image':'url(images/video-cover.jpg)'});
	}
});
/*==========================*/

/*==========================*/
/*Section scrolling */
/*==========================*/
jQuery(function() {
    var sections = $('section');
    var nav = $('nav ul li');
    var nav_height = $('header').outerHeight();
    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop();
        sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('current');
                sections.removeClass('current');
                $(this).addClass('current');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('current');
            }
        });
    });
});
/*==========================*/

/*==========================*/
/*sticky header*/
/*==========================*/
$(window).scroll(function(){
  var sticky = $('header'),
      scroll = $(window).scrollTop(),
	  windowWidth = jQuery(window).width();
if(windowWidth > 768){
  if (scroll > 0){
	sticky.addClass('fixed');

  }
  else sticky.removeClass('fixed');
 }
});
/*==========================*/




$(document).ready(function() {

/*==========================*/
/*first screen height*/
/*==========================*/
    function setHeiHeight() {
        var h = $(window).height();
		$('#top').css('min-height', h); /*Mozilla fix*/
        $('.top-outer').css('height', h);
		$('.slides li').css('min-height', h);
    }
    setHeiHeight();
    $(window).resize(setHeiHeight);
/*==========================*/
	function setMarg() {
		var popMargTop2 = $('header').outerHeight();
		var popMargTop3 = $('.top-left-separator').outerHeight();
		var windowWidth = jQuery(window).width();
		$('.top-outer').css('padding-top', popMargTop2);
		if(windowWidth > 768){
			$('.top-outer').css('padding-bottom', popMargTop2 + popMargTop3);
		}
		else{
			$('.top-outer').css('padding-bottom', popMargTop2);
		}
    }
    setMarg();
	$(window).resize(setMarg);
/*==========================*/

/*==========================*/
/*Image slider*/
/*==========================*/
    $('.slides').bxSlider({
        mode: 'fade',
        slideMargin: 0,
        auto: true,
        pause: 7000,
        autoControls: false,
        controls: true,
        pager: false
    });

/*==========================*/
/*Slider for text rotator*/
/*==========================*/
	$('.slides-rotate').bxSlider({
        mode: 'fade',
        slideMargin: 0,
        auto: false,
        autoControls: false,
        controls: true,
        pager: false
    });
/*==========================*/

/*==========================*/
/*Background slider*/
/*==========================*/
	var imgHead = [
			'images/slide2.jpg',
			'images/slide2_2.jpg'
		], i=1;
	function bgSlider(){

		if(i > (imgHead.length-1)){
			$('.bg-slider .slide').animate({'opacity':'0'},200,function(){
				i=1;
				$('.bg-slider .slide').css({'background-image':'url('+imgHead[0]+')'});
			});
			$('.bg-slider .slide').animate({'opacity':'1'},200);
		}else{
			$('.bg-slider .slide').animate({'opacity':'0'},200,function(){
				$('.bg-slider .slide').css({'background-image':'url('+imgHead[i]+')'});
				i++;
			});
			$('.bg-slider .slide').animate({'opacity':'1'},200);
		}

	}
	var intervalbgSlider = setInterval(bgSlider,6000);
/*==========================*/

/*==========================*/
/*Text Rotator*/
/*==========================*/
$(".slide1 .rotate").textrotator({
  animation: "flip", // dissolve, fade, flip, flipUp, flipCube, flipCubeUp and spin.
  speed: 2000
});
$(".slide2 .rotate").textrotator({
  animation: "flipUp",
  speed: 2000
});
/*==========================*/

/*==========================*/
/*Smooth scrolling to sections*/
/*==========================*/

$(".scroll-down, .menu-item, #promo a").click(function() {
	var offsetSize = $(".fixed").innerHeight();
	$("html, body").animate({
		scrollTop: $($(this).attr("href")).offset().top - offsetSize + "px"
	}, {
		duration: 800
	});
	return false;
});
/*==========================*/

/*==========================*/
/*main menu*/
/*==========================*/
		$(".ham").click(function(){
			$("header").toggleClass("sb-active");
		});
/*==========================*/

/*==========================*/
/*Sub-menu*/
$(".has-sub").click(function(e) {
	e.preventDefault();
	$(this).next(".sub-menu").slideToggle("fast");
});
/*==========================*/

/*----------------------------------------------------*/
/*  Animated Count To
/*----------------------------------------------------*/

    jQuery('#about .count-box').each(function () {
        jQuery(this).appear(function() {
            jQuery('.counter').countTo();
        });
    });
/*==========================*/

/*==========================*/
/*Portfolio sorting*/
/*==========================*/
	$('.portfolio-b').isotope({
	  columnWidth: '.grid-sizer',
	  itemSelector: '.p-item',
	  percentPosition: true
	});

	$('.p-filters').on( 'click', 'li', function() {
	  var filterValue = $(this).attr('data-filter');
	  $('.portfolio-b').isotope({ filter: filterValue });
	});

	  $('.p-filters').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'li', function() {
		  $buttonGroup.find('.is-checked').removeClass('is-checked');
		  $( this ).addClass('is-checked');
		});
	  });
/*==========================*/

/*==========================*/
/*Mail form*/
/*==========================*/
$(".btn-show").click(function(){
	$(this).toggleClass("open");
	$(this).next(".pop-wrap").stop('true','true').slideToggle("fast");
});
/*==========================*/

/*==========================*/
/*Validate form*/
/*==========================*/
$("#mailform").validate({
    submitHandler: function(form) {
      $.ajax({
        url: "/1/mail/mail.php",
        type: 'post',
        data: $(form).serialize(),

        success: function(response){
          $('#mailform').html('<div class="results">Thank you for your message!</div>');
		  window.setTimeout(function(){location.reload()},2000)
        }
      });
    },

    rules: {
    "email" : {
        required: true,
        email: true
      },
	"name" : {
        required: true
      },
    "message" : {
        required: true
      }
    }

});
/*==========================*/

/*==========================*/
/*EqualHeight for blocks*/
/*==========================*/
(function($) {

    $.fn.equalHeights = function() {
        var maxHeight = 0,
            $this = $(this);

        $this.each( function() {
            var height = $(this).innerHeight();

            if ( height > maxHeight ) { maxHeight = height; }
        });

        return $this.css('height', maxHeight);
    };

    $('[data-equal]').each(function(){
        var $this = $(this),
            target = $this.data('equal');
        $this.find(target).equalHeights();
    });

})(jQuery);

$('#blog .news-item').equalHeights();
$('#content .news-item').equalHeights();

$(window).resize(function(){
	$('#blog .news-item').equalHeights();
	$('#content .news-item').equalHeights();
});

/*==========================*/

/*==========================*/
/*Carousel testimonials*/
/*==========================*/
  $("#testi").owlCarousel({
    navigation : false,
    pagination : true,
    autoPlay : 7000,
	singleItem : true
  });
/*==========================*/

/*==========================*/
/*Carousel clients*/
/*==========================*/
  $("#brands").owlCarousel({
    navigation : false,
    pagination : false,
    autoPlay : 4000,
	items : 5,
    itemsDesktop : [1200,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsMobile : [480,1]
  });
/*==========================*/

/*==========================*/
/*Fix footer to bottom*/
/*==========================*/
    function fixFooter() {
		var h_1 = $('footer').outerHeight();
		var h_2 = $('header').outerHeight();
		var elem = $('#main-content');
		var elem2 = $(window).height();
		var elem3 = elem2 - h_1 - h_2;
		elem.css({
			'min-height' : elem3,
			'margin-top' : h_2
		});
    }
    fixFooter();
    $(window).resize(fixFooter);
/*==========================*/
});
