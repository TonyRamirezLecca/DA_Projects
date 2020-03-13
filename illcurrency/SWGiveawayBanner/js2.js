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
console.log('disruptive')
whenExists('.announcement', function () {
	console.log('advertising')

	$('<div class="da_new-banner"><h6><strong>GIVEAWAY LIVE!</strong> We\'re giving away a t-shirt every week this spring. Every $5 spent gets you an entry to win!</h6><img class="da_banner-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/ill-currency/giveaway-banner/Shirts.png"/><i class="fa fa-times da_times"></i></div>').insertBefore('.announcement');

	$('#s-b0ebebcf-f57c-4784-80a2-1f2a41b3b2d3').addClass('da_mystery-box').appendTo('body');

	$('<div class="da_mystery-box-wrapper"></div>').insertAfter('.shg-box-content > .shg-box-vertical-align-wrapper:first-child');

	$('.da_mystery-box').appendTo('.da_mystery-box-wrapper');

	$('<div class="da_new-content"><div class="da_text-ctn"><strong>We are giving away a t-shirt every week this spring! every $5 spent gets you an entry to win.</br></strong><p>Winners will be selected every Monday morning and will receive a free t-shirt of their choice. Each giveaway runs from Monday at 12:00 AM until Sunday at 11:59 PM.</p><a href="https://illcurrency.com/collections/all?sort_by=best-selling">Shop Now</a></div><img class="da_new-content-img da_desktop" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/ill-currency/giveaway-banner/air-jordan-8-tinker-air-raid-black-t-drip-too-hard+3.png"/><div class="da_new-content-img da_mobile" style="background-image: url(https://s3-us-west-1.amazonaws.com/static.disruptive.co/ill-currency/giveaway-banner/air-jordan-8-tinker-air-raid-black-t-drip-too-hard_mobile.png);"></div></div>').prependTo('.da_mystery-box-wrapper');

	$('.da_times').click(() => {
		$('.da_new-banner').slideUp();
	});


});

