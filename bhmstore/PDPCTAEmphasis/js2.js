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

whenExists('#last_quantities', function () {
/* Move Warning */
$('#last_quantities').insertAfter('.product_attributes');

$('<div class="da_vps"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/bhm-store/pdp-cta-emphasis/VPs.png"/></div>').prependTo('.product_attributes');
$('.box-security > img').attr('src', 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/bhm-store/pdp-cta-emphasis/visa.png');

$('<p>5% Value Added Tax will be added on checkout.</p>').prependTo('.box-security');


$('<div class="da_v2-social-ctn"></div>').appendTo('#buy_block');
$('.socialsharing_product > .btn-facebook').appendTo('.da_v2-social-ctn');
$('.socialsharing_product > .btn-google-plus').appendTo('.da_v2-social-ctn');
$('#send_friend_button').appendTo('.da_v2-social-ctn');
$('.print > a').appendTo('.da_v2-social-ctn');

$('#send_friend_button').html('');
$('.da_v2-social-ctn > a:last-child').html('');
	
});

