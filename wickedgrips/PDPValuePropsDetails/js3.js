/*** JS 3 ***/
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
whenExists('.woocommerce-tabs.wc-tabs-wrapper', function () {

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
			<div class="da_white-background"></div>
		</div>
		`).insertBefore('.woocommerce-tabs.wc-tabs-wrapper');

});
