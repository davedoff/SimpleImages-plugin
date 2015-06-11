/**
 * Function that gives you the option to navigate through images
 */
(function($) {

  var methods = {
    element: null,
    numImages: 0,
    currentImage: 0,
    init: function(){
      this.numImages = this.element.children().length;
      $('<div></div>')
        .addClass('galleryContainer')
          .appendTo('#'+ this.element.attr('id'));

      $('<div></div>')
        .addClass('imageContainer')
          .appendTo('.galleryContainer');

      this.element.children().not('.galleryContainer').each(function(){

        $(this).css({
          'display': 'none'
        });
        $('.imageContainer').append($(this));
      });

      var firstImg = $('.imageContainer').children().eq(this.currentImage);

      $('.imageContainer').css({
        'width': firstImg.innerWidth(),
        'height': firstImg.innerHeight()
      });

      $('<div></div>')
        .addClass('previous')
          .click(this.previousImage)
            .prependTo('.galleryContainer');

      $('<div></div>')
        .addClass('next')
          .click(this.nextImage)
            .appendTo('.galleryContainer');


      this.showCurrentImage();

      $('.imageContainer').children().eq(this.currentImage).load(function(){
        console.log("loaded");
      });
    },
    showCurrentImage: function(){
      $('.imageContainer')
        .children()
          .eq(this.currentImage)
            .fadeToggle();
    },
    nextImage: function() {
      if(methods.currentImage === methods.numImages - 1) {
        methods.showCurrentImage();
        methods.currentImage = 0;
      } else {
        methods.showCurrentImage();
        methods.currentImage++;
      }

      methods.showCurrentImage();
    },
    previousImage: function() {
      if(methods.currentImage === 0) {
        methods.showCurrentImage();
        methods.currentImage = methods.numImages - 1;
      } else {
        methods.showCurrentImage();
        methods.currentImage--;
      }

      methods.showCurrentImage();
    },
  };

  $.fn.imageGallery = function(options) {
    options = $.extend({}, $.fn.imageGallery.defaults, options);

    return this.each(function() {
      methods.element = $(this);
      methods.init();
      console.log('imageGallery plugin is ready.');
      if(options.animate) setInterval(function() {methods.nextImage();}, options.animationDuration);
    });
  };

  $.fn.imageGallery.defaults = {
    'animate': false,
    'animationDuration': 3000
  };

}) (jQuery);
