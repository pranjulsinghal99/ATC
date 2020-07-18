$(document).ready(function () {
  			$(window).scroll(function () {
    			if ($(this).scrollTop() > 100) {
     				$('.scroll-top').fadeIn();
    			} else {
      				$('.scroll-top').fadeOut();
    			}
  			});

  			$('.scroll-top').click(function () {
    			$("html, body").animate({
      				scrollTop: 0
    			}, 100);
      			return false;
  			});

		});

	
	    $('.logo-slider').slick({
	        slidesToShow: 5,
	        slidesToScroll: 1,
	        autoplay: true,
	        autoplaySpeed: 1500,
	        arrows: true,
	        dots: false,
	        infinite: true,
	        pauseOnHover: false,
	        responsive: [{
	            breakpoint: 770,
	            settings: {
	                slidesToShow: 4
	            }
	        }, {
	            breakpoint: 520,
	            settings: {
	                slidesToShow: 3
	            }
	        }]
		});