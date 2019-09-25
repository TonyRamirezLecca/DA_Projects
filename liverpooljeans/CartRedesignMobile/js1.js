/*** JS 1 ***/

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

whenExists('.Cart__NoteContainer', function () {
	$('.Cart__NoteContainer').clone().addClass('show-for-mobile').insertAfter('.Cart__Footer');
	$('.Cart__NoteContainer').addClass('show-for-desktop');

	//grabs image and puts it next to the total. Then wraps both.
	$('.show-for-mobile > div,.Cart__Total.Heading.u-h6').wrapAll('<div class="DA_Wrapper"></div>');
	$('.DA_Wrapper > div').prependTo('.DA_Wrapper');
});
