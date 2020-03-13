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
whenExists('.ProductMeta', function () {

	/* JSON OBJECTS */
	var da = {
		vp4 : 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/heart-of-sun/product-page-vp/cam.png',
		vp3 : 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/heart-of-sun/product-page-vp/map.png',
		vp2 : 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/heart-of-sun/product-page-vp/person.png',
		vp1 : 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/heart-of-sun/product-page-vp/thread.png'
	}

	$(`<div class="da_vp-ctn">

		<div class="da_vp">
			<img class="da_vp-img" src="${da.vp1}"/>
			<div class="da_vp-text">Designed with luxe Italian fabrics + high quality metal details</div>
		</div>

		<div class="da_vp">
			<img class="da_vp-img" src="${da.vp2}"/>
			<div class="da_vp-text">Adjustable designs for all body types</div>
		</div>

		<div class="da_vp">
			<img class="da_vp-img" src="${da.vp3}"/>
			<div class="da_vp-text">Made in the USA by our 100% female team</div>
		</div>

		<div class="da_vp">
			<img class="da_vp-img" src="${da.vp4}"/>
			<div class="da_vp-text">Worn by your favorite celebrities</div>
		</div>

		</div>`).insertAfter('.ProductMeta');

	$(`<div class="da_banner">
		FREE US SHIPPING + SHOP NOW, PAY LATER WITH AFTERPAY	
		</div>`).prependTo('body');

	$('.da_vp:nth-child(4)').click(() => {
		window.location.href = "https://heartofsunswim.com/pages/celebs";
	});

});
