/*** JS 2 ***/
function whenExists(elements, callback) {
	elements = elements.split(',');
	var interval = setInterval(function () {
		for (var i = 0; i < elements.length; i++) {
			if (document.querySelectorAll(elements[i]).length) {
				elements.splice(i, 1);
				i--;
			}
		}
		if (elements.length === 0) {
			callback();
			clearInterval(interval);
		}
	}, 100);
}
whenExists('#quoteForm form input, #input_4_14, #input_4_4, #input_4_3', function () {

	document.querySelector('#input_4_14').setAttribute("type", "tel");
	document.querySelector('#input_4_4').setAttribute("type", "email");
	document.querySelector('#input_4_3').setAttribute("type", "tel");

	jQuery('#quoteForm form input').focus(() => {
		event.stopPropagation() 
			console.log('focused!')
			jQuery('#newNav').removeClass('da_slide-up');
			jQuery('#newNav').addClass('da_slide-down');
	});

	jQuery('#quoteForm form input').blur((event) => {
		event.stopPropagation() 
			console.log('blur notFocused')
			jQuery('#newNav').removeClass('da_slide-down');
			jQuery('#newNav').addClass('da_slide-up');
	});

});
