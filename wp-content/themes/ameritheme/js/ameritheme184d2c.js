jQuery( function() {
    
    /* AG Component: Hovercards */
    // Turn each card into one big link
    jQuery('.ag_hovercard').map(function() {
      var buttonUrl = jQuery(this).find('.learnmore-link a').attr('href');
      if (!buttonUrl) {
          console.log('No industry button url found, trying industry title...');
          var buttonUrl = jQuery(this).find('.industry-icon-title a').attr('href');
      }
      jQuery(this).prepend('<a href="' + buttonUrl + '" style="position:absolute;width: 100%;height: 100%;z-index: 99;"></a>');
    });
    
    // Show the card's button on hover
    jQuery('.ag_hovercard').hover( function() {
        jQuery(this).find('.learnmore-link').addClass('ag_btn ag_btn-primary');
    });
    jQuery('.ag_hovercard').mouseout( function() {
        jQuery(this).find('.learnmore-link').removeClass('ag_btn ag_btn-primary');
    });
    /* /hovercards */
    
    /* AG Component: Auto-masthead */
    var mastheadTitle = jQuery('.ag_masthead--simple h1');
    
    jQuery(window).on('scroll', function() {
        var st = jQuery(this).scrollTop();
        mastheadTitle.css({
            'opacity' : 1 - st/250
        });
    });

	function parallaxInit() {
		if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			jQuery('.ag_masthead').parallax("30%", 0.3);
		}
	}
	/* /auto-masthead */
    
});

jQuery(window).bind('load', function() {

	"use strict";
// 	parallaxInit();

});