/**
 * Function that fades between images
 */
(function($) {

  $.fn.slideshow = function (options) {
    'use strict';

    var options = $.extend({}, $.fn.slideshow.defaults, options);
    console.log(options);
    var curr_img;
    var numberImages;
    var interval;

    //fadeOut current image and fadeIn next image
    var next = function () {
      'use strict';
      $('.slideshow')
      .eq(curr_img)
      .fadeOut('slow', function () {
        $(this)
        .css('z-index', 0)
        .fadeIn(0)
        .siblings().each(function () {
          var z = (parseInt($(this).css('z-index'), 10));
          $(this).css('z-index', z + 1);
        });
      });
      curr_img = (curr_img + 1) % numberImages;

    };
    //check all images within the class 'slideshow'
    numberImages = $('.slideshow').length;

    var init = function () {
      var zindex = numberImages - 1;
      $('.slideshow')
      .each(function () {
        $(this).css('z-index', zindex);
        curr_img = zindex;
        zindex -= 1;
      })
      interval = setInterval(next, options.timestep);
    }
    init();
    console.log('Slideshow plugin is ready.');
  };

  //Default values for plugin
  $.fn.slideshow.defaults = {
    'timestep': 3000,
  }

})(jQuery);
