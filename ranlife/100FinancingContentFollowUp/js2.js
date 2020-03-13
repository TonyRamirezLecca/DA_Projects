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
whenExists('.row.justify-content-center.p-3 > .col-12, .banner-text > a ', function () {

	$('.banner-text > a').html('GET STARTED');


	$('<div class="da_close-btn">X</div>').appendTo('.row.justify-content-center.p-3 > .col-12');
	$('<div class="da_dark-background" style="display: none;"></div>').appendTo('body');

	$('.banner-text > a').click(() => {
		event.preventDefault();
		$('.row.justify-content-center.p-3 > .col-12').fadeIn();
		$('.da_dark-background').fadeIn();
	});

	$('.da_close-btn').click(function() {
		$('.row.justify-content-center.p-3 > .col-12').fadeOut();
		$('.da_dark-background').fadeOut();
	});

	$('.da_dark-background').click(function() {
		$('.row.justify-content-center.p-3 > .col-12').fadeOut();
		$('.da_dark-background').fadeOut();
	});

});
