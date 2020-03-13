/*** JS 4***/
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
whenExists('.tabs.wc-tabs, .woocommerce-tabs.wc-tabs-wrapper', function () {

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





	/* JSON OBJECTS */
	var da = {
		flag: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/wicked-grips/pdp-value-props-details/gloves.jpg',
		gun: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/wicked-grips/pdp-value-props-details/gun-flag.jpg',
		metal: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/wicked-grips/pdp-value-props-details/metal.jpg'
	}

	$(`
		<div class="da_banner-wrapper">
			<div class="da_banner">

				<h6 class="da_sub-title da_first-sub-title">
					WHY BUY FROM WICKED GRIPS?
				</h6>

				<div class="da_vp-ctn">
					<div class="da_vp"><div class="da_img" style="background-image: url(${da.flag})"/><h6 class="da_text">PROUDLY MADE</br> IN THE USA</h6><p class="da_sub-text">Each product is individually</br> handmade</p></div>
					<div class="da_vp"><div class="da_img" style="background-image: url(${da.gun})"/><h6 class="da_text">DESIGNED BY GUN </br>ENTHUSIASTS</h6><p class="da_sub-text">Unique designs that will </br>look wicked on any gun</p></div>
					<div class="da_vp"><div class="da_img" style="background-image: url(${da.metal})"/><h6 class="da_text">QUALITY IS THE </br>PRIORITY</h6><p class="da_sub-text">We only use the highest quality </br> materials</p></div>
				</div>

				<h6 class="da_sub-title">
					OVER 15 YEARS IN THE BUSINESS
				</h6>

			</div>
		</div>
		`).insertBefore('.woocommerce-tabs.wc-tabs-wrapper');

});
