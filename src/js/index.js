var test = 'include js error';

$(document).ready(function() {
	console.log('document ready');

	// =================Include Modules==============================
	@@include('./modules/testModule.js');
	// =============================================================

	if ($('body')) {console.log('jQuery OK')}
	console.log(test); 

});


window.onload = function() {
	console.log('window load');
};