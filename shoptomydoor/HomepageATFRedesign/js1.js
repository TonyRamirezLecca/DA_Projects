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

console.log('disruptive');
whenExists('.bg-light.g-ad-header, .banner', function () {
	console.log('advertising');

	/* YOU CAN CHANGE THESE, JUST DONT CHANGE THE IMAGE URLS*/
	var da = {
		IMAGE_fist_pump : 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/shop-to-my-door/homepage-atf-redesign/Fist-Pump-Computer.jpg',
		ICON_tax_free_shipping : '<img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/shop-to-my-door/homepage-atf-redesign/Shippin+Icon%403x.png"/>',
		ICON_map : '<img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/shop-to-my-door/homepage-atf-redesign/Map+Icon%403x.png"/>',
		ICON_plane: '<img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/shop-to-my-door/homepage-atf-redesign/Plane+Icon%403x.png"/>',
		ICON_calendar: '<img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/shop-to-my-door/homepage-atf-redesign/Calendar+Icon%403x.png"/>',
		ICON_insurance: '<img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/shop-to-my-door/homepage-atf-redesign/Insured+Icon%403x.png"/>'
	}

	/* Hide Slider at top */
	$('.bg-light.g-ad-header').hide();


	/* Hero */
	$('.banner').html(`

			<div class="da_left">
				<div class="da_circle"></div>
				<div class="da_title-ctn">
					<span class="da_light-text">Shop U.S. Stores</span></br>
					<strong class="da_large-font">Tax-Free</strong></br>
					<span class="da_light-text da_large-font">&<strong class="da_large-font"> Save Up To 70%</strong></br>
					<span class="da_light-text">To Nigeria</span>
				</div>

				<div class="da_vp-ctn">
					<div class="da_vp">
						<div class="da_vp-icon">${da.ICON_tax_free_shipping}</div>
						<div class="da_vp-text">Tax-free shipping</div>
					</div>
					<div class="da_vp">
						<div class="da_vp-icon">${da.ICON_map}</div>
						<div class="da_vp-text">Free personal US/UK address</div>
					</div>
					<div class="da_vp">
						<div class="da_vp-icon">${da.ICON_plane}</div>
						<div class="da_vp-text">Fast & flexible shipping options (air or ocean)</div>
					</div>
					<div class="da_vp">
						<div class="da_vp-icon">${da.ICON_calendar}</div>
						<div class="da_vp-text">Ship to your home in as little as 3 days</div>
					</div>
					<div class="da_vp">
						<div class="da_vp-icon">${da.ICON_insurance}</div>
						<div class="da_vp-text">Fully insured, superior service and support</div>
					</div>
				</div>
			</div>
			<div class="da_right"><img class="da_fist-pump" src="${da.IMAGE_fist_pump}"/></div>

	`);
	
});
