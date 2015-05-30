/**
 * greenbox image function
 */
  (function($) {
  $.fn.greenbox = function() {

    var windowHeigth = window.innerHeight || $(window).height(), // makes it work on ipad & android
        windowWidth  = window.innerWidth  || $(window).width();

    // Display the overlay
    $('<div id="overlay"></div>')
      .css('opacity', '0')
      .animate({'opacity' : '0.9'}, 'fast')
      .appendTo('body');
    
    // Create the greenbox container
    $('<div id="greenbox"></div>')
      .hide()
      .appendTo('body');
    
    // Display the image on load
    $('<img>')
      .attr('src', $(this).attr('src'))
      .css({
        'max-height': windowHeigth, 
        'max-width':  windowWidth
      })
      .load(function() {
        $('#greenbox')
          .css({
            'top':  (windowHeigth - $('#greenbox').height()) / 2,
            'left': (windowWidth  - $('#greenbox').width())  / 2
          })
          .fadeIn();
      })
      .appendTo('#greenbox');
      
      // Remove it all on click
      $('#overlay, #greenbox').click(function() {
        $('#overlay, #greenbox').remove();
      });
    
    console.log("Display image in greenbox.");

  }

}) (jQuery);
