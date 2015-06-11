SimpleImages - jQuery plugin for images
=============
SimpleImages is a jQuery plugin including a greenbox, gallery and slideshow function. SimpleImages is extremely easy to use and you are able to implement any of the functions so it fits your website.

###1. Download

Start by cloning or download the zipfile.

###2. Include the scripts

Include the javascript-files to your footer.

```html
  <script src="slideshow.js"></script>
  <script src="gallery.js"></script>
  <script src="greenbox.js"></script>
```

Dont forget to add jQuery to your footer aswell!

###3. Add code to your main javascript-file

Add this code to your main javascript-file (mine is called main.js and is also included to the footer).

```javascript
  $(document).ready(function() {
    'use strict';
    $('#gallerynav').imageGallery({
      //change animate to true if you want to automate the gallery
      'animate': false,
      //if animate is true animationDuration is the duration between the images in the gallery
      'animationDuration': 3000
    });
    $('body').slideshow( {
      //the duration between the images. default is set to 3 seconds 
      'timestep': 3000
    });
    $('.greenbox').click(function() {
      $(this).greenbox({
      //change the opacity on the background of the greenbox
        'opacity': 0.8
      });
    });
  });
```

###4. Add CSS

Add this code to your css and change the values the way you want. You can also find the CSS in the CSS-folder.

```css
  #gallery {
    position: relative;
    text-align: center;
    min-height: 220px;
  }

  #gallery img {
    cursor: pointer;
  }

  .thumbnail {
    height: 150px;
    width: 250px;
  }

  #overlay{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:998;
    background:#5EB95E url(../img/loader.gif) no-repeat scroll center center;
  }

  #greenbox{
    position:fixed;
    z-index:999;
  }

  #slideshow {
    position: relative;
    min-height: 250px;
  }

  .slideshow {
    position: absolute;
  }

  .slideshow-images {
    width: 905px;
    height: 190px;
  }

  .previous:before{
    content: "<";
  }

  .next:before{
    content: ">";
  }

  .previous, .next {
    font-size:40px;
    text-align:center;
  }

  .next:hover, .previous:hover {
    color: #5EB95E;
  }

  .galleryContainer{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .imageContainer img{
      position: absolute;
      width: 841px;
      height: 401px; 
  }
```

###5.1 Add greenbox to your image class

Now you can just add the class 'greenbox' to the images you want the plugin to work for.

```html
  <img class='greenbox' src='image.jpg' alt='' width='200px' />
```

###5.2 Adding a gallery

Now you can just add images inside a div with the id "gallery". Add the classes 'thumbnail' and 'greenbox' to the images for a cooler look.

```html
  <div id="gallery"> 
    <img class="thumbnail greenbox" src="image1.jpg"> 
    <img class="thumbnail greenbox" src="image2.jpg"> 
    <img class="thumbnail greenbox" src="image3.jpg"> 
  </div>
```

###5.3 Adding a slideshow

Now you can just add images inside a div with the id "slideshow". The images must also have the classes 'slideshow' and 'slideshow-images'.

```html
  <div id="slideshow"> 
    <img class="slideshow slideshow-images" src="image1.jpg"> 
    <img class="slideshow slideshow-images" src="image2.jpg"> 
    <img class="slideshow slideshow-images" src="image3.jpg"> 
  </div>
```

###6. Extra stuff

Your footer should look something like this in the end: 

```html
  <script src="jquery.js"></script>
  <script src="main.js"></script> 
  <script src="slideshow.js"></script> 
  <script src="gallery.js"></script> 
  <script src="greenbox.js"></script>
```

You can also add a loader-gif to your plugin if you want it to look extra cool when clicking extra large images. Just download a loader-gif and name it 'loader.gif' and place it in the 'img' folder. 

You can find example images and loader.gif at https://github.com/davedoff/img
