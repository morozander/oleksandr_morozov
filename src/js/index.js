var test = 'include js error';

$(document).ready(function() {
	console.log('document ready');
	// =================Include Modules==============================
	@@include('./modules/testModule.js');
	// =============================================================
	if ($('body')) {console.log('jQuery OK')}

	$.fn.randomize = function(selector){
		var $elems = selector ? $(this).find(selector) : $(this).children(),
				$parents = $elems.parent();
	
		$parents.each(function(){
				$(this).children(selector).sort(function(){
						return Math.round(Math.random()) - 0.5;
				}).detach().appendTo(this);
		});
	
		return this;
	};
	
	// randomize the slides and then call slick
	$('.slider').randomize('.slider__item');

	$('.slider').slick({
		autoplay: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
  });

});


window.onload = function() {
	console.log('window load');
};