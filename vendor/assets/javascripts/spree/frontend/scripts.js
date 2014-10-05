//jQuery code
jQuery(function($) {
	"use strict";

	$(".tabs").tabs();
	/* end tabs */

	(function(d, s, id) {
       var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_EN/sdk.js#xfbml=1&version=v2.0";
       	fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    /* end share facebook */

    (function(d){
	    var f = d.getElementsByTagName('SCRIPT')[0], p = d.createElement('SCRIPT');
	    p.type = 'text/javascript';
	    p.async = true;
	    p.src = '//assets.pinterest.com/js/pinit.js';
	    f.parentNode.insertBefore(p, f);
	}(document));  
	/* end share priterest */

	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
	/* end share twitter */

	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
	/* end follow twitter */

	(function(d, s, id) {
	 	var js, fjs = d.getElementsByTagName(s)[0];
	 	if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_EN/sdk.js#xfbml=1&version=v2.0";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
	/* end facebook like */

	$(".btn-controls__hide").click(function(){
		$(".open-bar").slideToggle("slow");
		return false;
	});
	/* end hide / show bar */

	$('.scroll-top').click(function(){
		$('html, body').animate({scrollTop : 0},1000);
		return false;
	});
	/* end scroll top */

	$(".contact-btn-toggle").click(function(){
		$(".contact-map .wrap-container").slideToggle();
		return false;
	});
	/* end contact btn toggle */

	$("<a href='#' class='nav-toggle-btn'><i class='nav-toggle-btn__icon'></i>Drop Menu</idv>").insertAfter(".wrap-nav");
	
	$(".nav-toggle-btn").on('click', function(e) {
		e.preventDefault();
		$(".wrap-nav").slideToggle();
		return false;
	});
	/* End toggle nav */

    if($(".main-slider").length){
        $(".main-slider").bxSlider({
            mode: "fade"
        });
    }
    /* end home main slider */

    if($(".item-slider").length){
        $(".item-slider").bxSlider({
            pagerCustom: '.item-pager',
            nextSelector: '.slider-arrow_next',
            prevSelector: '.slider-arrow_prev',
        });
    }
    /* end item slider */

    if ( $.isFunction($.fn.fitVids) ) {
        $("body").fitVids();
    }

});
