Greenbox - jQuery plugin for images
=============
Plugin that enlarges your image on click and fades the background to a green color. 

###1. Download

Start by downloading the zipfile.

###2. Include the script

Include the javascript-file to your footer.

```html
    <script src="greenbox.js"></script>
```

Dont forget to add jQuery to your footer aswell!

###3. Add code to your main javascript-file

Add this code to your main javascript-file (mine is called main.js and is also included to the footer).

```javascript
  $(document).ready(function() {
    'use strict';
    $('.greenbox').click(function() {
      $(this).greenbox();
    });
  });
```

###3. Add CSS

Add this code to your CSS to make it look cool.

```css
#overlay {
	position:fixed;
	top:0;
	left:0;
	width:100%;
	height:100%;
	z-index:998;
	background:#69d025 url(img/loader.gif) no-repeat scroll center center;
}

#greenbox {
	position:fixed;
	z-index:999;
}
```

###4. Add greenbox to your image class

Now you can just add the class 'greenbox' to the images you want the plugin to work for.

```html
  <img class='greenbox' src='img/david.jpg' alt='' width='200px' />
```

###5. Extra stuff

Your footer should look something like this in the end: 

```html
  <script src="../js/jquery.js"></script> //the jquery file
  <script src="main.js"></script>         //the main javascript file
  <script src="greenbox.js"></script>     //plugin
```

If you would like to change the color of the box to any other color, just change the background of #overlay in the css to whatever you like.

```css
	background:#69d025 url(img/loader.gif) no-repeat scroll center center;
```

You can also add a loader-gif to your plugin if you want it to look extra cool when clicking extra large images. Just download a loader-gif and name it 'loader.gif' place it in the 'img' folder.
