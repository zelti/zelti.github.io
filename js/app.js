$(document).foundation();
// Returns true if the specified element has been scrolled into the viewport.
    $(document).ready(function(){

    	startAnimation();

		function isElementInViewport(elem) {
		    var $elem = $(elem);

		    // Get the scroll position of the page.
		    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
		    var viewportTop = $(scrollElem).scrollTop();
		    var viewportBottom = viewportTop + $(window).height();

		    // Get the position of the element on the page.
		    var elemTop = Math.round( $elem.offset().top );
		    var elemBottom = elemTop + $elem.height();

		    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));

		}

		function checkAnimation() {
		    var $elem = $('.skill-animate-wrapper');

		    if (isElementInViewport($elem)) {
		    	if(!$elem.hasClass('active-anim')){
		        	startAnimation();
		    	}
		    } else {
			    if($elem.hasClass('active-anim')){
		        	resetAnimation();
		        }
		    }
		}

		$(window).scroll(function(){
    		checkAnimation();
		});

		function startAnimation(){
			$('.skill-animate-wrapper').addClass('active-anim');
			$('.skill-bar-wrapper').each(function(){
    			var value= $(this).children('.skill-bar-text').children('span').html();
    			$(this).children('.skill-bar-content').animate({
	    			width: value,
	    		},{
	    			duration:2000,
	    			step:function(now,fx){
	    				$(this).siblings('.skill-bar-text').children('span').html(parseInt(now)+'%');
	    			},
	    		});
    		});
		}
		function resetAnimation(){
			$('.skill-animate-wrapper').removeClass('active-anim');
			$('.skill-bar-wrapper .skill-bar-content').each(function(){
				$(this).css("width","0%");
			});

		}
	});