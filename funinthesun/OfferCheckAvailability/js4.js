/*** JS 4 ***/

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
whenExists('#reservation > div > div > div > div.brz-bg-content > div > div > div:nth-child(3) > div > div > div > div.brz-tabs__items:nth-child(2) > div.brz-tabs__item--content > div > div > div > div > div > div > div.brz-columns', function () {
	//headline
	$('#reservation > div > div > div > div.brz-bg-content > div > div > div:nth-child(3) > div > div > div > div.brz-tabs__items:nth-child(2) > div.brz-tabs__item--content > div > div > div > div > div > div > div.brz-columns > div > div > div:nth-child(1) > div > div > p').html('Check What\'s Available').addClass('da_headline');

	//Blue text
	$('#reservation > div > div > div > div.brz-bg-content > div > div > div:nth-child(3) > div > div > div > div.brz-tabs__items:nth-child(2) > div.brz-tabs__item--content > div > div > div > div > div > div > div.brz-columns > div > div > div:nth-child(2) > div > div > p > em').html('Before we sell out.').addClass('da_blue-text');
	
	//Info Text
	$('#reservation > div > div > div > div.brz-bg-content > div > div > div:nth-child(3) > div > div > div > div.brz-tabs__items:nth-child(2) > div.brz-tabs__item--content > div > div > div > div > div > div > div.brz-columns > div > div > div:nth-child(3) > div > div > p > span').html('Call us to find the specific date and time for your Pearl Harbor Adventure').addClass('da_info');

	//CTA New Image
	$('<img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/fun-in-the-sun/offer-check-availability/phone.png"/>').prependTo('#sqvooajvzhphzhiptjtlakaxmtapgizaqcwo > a');
	
	//CTA Img
	$('#sqvooajvzhphzhiptjtlakaxmtapgizaqcwo > a > svg').addClass('da_icon');
	
	//CTA text
	$('#sqvooajvzhphzhiptjtlakaxmtapgizaqcwo > a').addClass('da_cta-parent').attr('href', 'tel:888-400-1743');
	$('#sqvooajvzhphzhiptjtlakaxmtapgizaqcwo > a > span').html('<span>CALL NOW (888)450-1640</span>To Check Availability').addClass('da_cta');

	//CTA text 2
	$('<span class="da_cta2">CALL NOW TO CHECK AVAILABILITY</span>').insertAfter('.da_cta');

	//picture
	$('#reservation > div > div > div > div.brz-bg-content > div > div > div:nth-child(3) > div > div > div > div.brz-tabs__items:nth-child(2) > div.brz-tabs__item--content > div > div > div > div > div > div > div.brz-columns > div > div > div > div > div > picture').html('<source srcset="https://s3-us-west-1.amazonaws.com/static.disruptive.co/fun-in-the-sun/offer-check-availability/chat_palm_treev2.png" media="(min-width: 992px)"><source srcset="https://s3-us-west-1.amazonaws.com/static.disruptive.co/fun-in-the-sun/offer-check-availability/chat_palm_treev2.png" media="(min-width: 768px)"><img alt="" class="brz-img" src="" srcset="https://s3-us-west-1.amazonaws.com/static.disruptive.co/fun-in-the-sun/offer-check-availability/chat_palm_treev2.png">').addClass('da_image');

	//Change link
	$('.brz-a.brz-anchor.brz-btn').eq(1).attr('href', 'tel:888-400-1743');

});
