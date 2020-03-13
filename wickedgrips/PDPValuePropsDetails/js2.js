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
whenExists('.tabs.wc-tabs', function () {

	$('<div class="da_button-ctn"><div class="da_description">DESCRIPTION</div><div class="da_additional-info da_active">ADDITIONAL INFORMATION</div></div>').appendTo('.tabs.wc-tabs');





	$('.da_description').click(() => {
		$('#tab-title-description').addClass('active');
		$('#tab-title-additional_information').removeClass('active');

		$('#tab-additional_information').hide();
		$('#tab-description').show();

		$('.da_additional-info').addClass('da_active');
		$('.da_description').removeClass('da_active');
	});



	$('.da_additional-info').click(() => {
		$('#tab-title-additional_information').addClass('active');
		$('#tab-title-description').removeClass('active');

		$('#tab-description').hide();
		$('#tab-additional_information').show();

		$('.da_additional-info').removeClass('da_active');
		$('.da_description').addClass('da_active');
	});


});
