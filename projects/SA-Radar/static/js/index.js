window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/images";
var NUM_INTERP_FRAMES_1 = 9;
var NUM_INTERP_FRAMES_23 = 50;

var interp_images_1 = [];
function preloadInterpolationImages_1() {
  for (var i = 0; i < NUM_INTERP_FRAMES_1; i++) {
    var path = INTERP_BASE + '/ra_' + String(i) + '.jpg';
    interp_images_1[i] = new Image();
    interp_images_1[i].src = path;
  }
}
function setInterpolationImage_1(i) {
  var image = interp_images_1[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper_1').empty().append(image);
}

var interp_images_2 = [];
function preloadInterpolationImages_2() {
  for (var i_2 = 0; i_2 < NUM_INTERP_FRAMES_23; i_2++) {
    var path_2 = INTERP_BASE + '/left_' + String(i_2) + '.jpg';
    interp_images_2[i_2] = new Image();
    interp_images_2[i_2].src = path_2;
  }
}
function setInterpolationImage_2(i_2) {
  var image_2 = interp_images_2[i_2];
  image_2.ondragstart = function() { return false; };
  image_2.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper_2').empty().append(image_2);
}

var interp_images_3 = [];
function preloadInterpolationImages_3() {
  for (var i_3 = 0; i_3 < NUM_INTERP_FRAMES_23; i_3++) {
    var path_3 = INTERP_BASE + '/right_' + String(i_3) + '.jpg';
    interp_images_3[i_3] = new Image();
    interp_images_3[i_3].src = path_3;
  }
}
function setInterpolationImage_3(i_3) {
  var image_3 = interp_images_3[i_3];
  image_3.ondragstart = function() { return false; };
  image_3.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper_3').empty().append(image_3);
}

$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

	preloadInterpolationImages_1();
	preloadInterpolationImages_2();
	preloadInterpolationImages_3();

    $('#interpolation-slider_1').on('input', function(event) {
      setInterpolationImage_1(this.value);
    });
    setInterpolationImage_1(0);
    $('#interpolation-slider_1').prop('max', NUM_INTERP_FRAMES_1 - 1);


	$('#interpolation-slider_2').on('input', function(event) {
      setInterpolationImage_2(this.value);
    });
    setInterpolationImage_2(0);
    $('#interpolation-slider_2').prop('max', NUM_INTERP_FRAMES_23 - 1);

	
	$('#interpolation-slider_3').on('input', function(event) {
      setInterpolationImage_3(this.value);
    });
    setInterpolationImage_3(0);
    $('#interpolation-slider_3').prop('max', NUM_INTERP_FRAMES_23 - 1);

	
    bulmaSlider.attach();

})
