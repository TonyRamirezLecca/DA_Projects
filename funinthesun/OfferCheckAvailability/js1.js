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

whenExists('#reservation > div > div > div > div.brz-bg-content > div > div > div:nth-child(3) > div > div > div > div.brz-tabs__items:nth-child(2) > div.brz-tabs__item--content > div > div > div > div > div > div > div.brz-columns', function () {
	//headline
	$('#reservation > div > div > div > div.brz-bg-content > div > div > div:nth-child(3) > div > div > div > div.brz-tabs__items:nth-child(2) > div.brz-tabs__item--content > div > div > div > div > div > div > div.brz-columns > div > div > div:nth-child(1) > div > div > p').html('Check What\'s Available').addClass('da_headline');


	//Blue text
	$('#reservation > div > div > div > div.brz-bg-content > div > div > div:nth-child(3) > div > div > div > div.brz-tabs__items:nth-child(2) > div.brz-tabs__item--content > div > div > div > div > div > div > div.brz-columns > div > div > div:nth-child(2) > div > div > p > em').html('Before we sell out.').addClass('da_blue-text');
	
	//Info Text
	$('#reservation > div > div > div > div.brz-bg-content > div > div > div:nth-child(3) > div > div > div > div.brz-tabs__items:nth-child(2) > div.brz-tabs__item--content > div > div > div > div > div > div > div.brz-columns > div > div > div:nth-child(3) > div > div > p > span').html('Use our live chat to find the specific date and time for your Pearl Harbor Adventure').addClass('da_info');
	
	//CTA Img
	$('#sqvooajvzhphzhiptjtlakaxmtapgizaqcwo > a > svg').addClass('da_icon');
	
	//CTA text
	$('#sqvooajvzhphzhiptjtlakaxmtapgizaqcwo > a').addClass('da_cta-parent').attr('href', 'https://lc.chat/now/9232570/');
	$('#sqvooajvzhphzhiptjtlakaxmtapgizaqcwo > a > span').html('CHAT NOW TO CHECK AVAILABILITY').addClass('da_cta');


	//picture
	$('#reservation > div > div > div > div.brz-bg-content > div > div > div:nth-child(3) > div > div > div > div.brz-tabs__items:nth-child(2) > div.brz-tabs__item--content > div > div > div > div > div > div > div.brz-columns > div > div > div > div > div > picture').html('<source srcset="https://s3-us-west-1.amazonaws.com/static.disruptive.co/fun-in-the-sun/offer-check-availability/chat_palm_treev1.png" media="(min-width: 992px)"><source srcset="https://s3-us-west-1.amazonaws.com/static.disruptive.co/fun-in-the-sun/offer-check-availability/chat_palm_treev1.png" media="(min-width: 768px)"><img alt="" class="brz-img" src="" srcset="https://s3-us-west-1.amazonaws.com/static.disruptive.co/fun-in-the-sun/offer-check-availability/chat_palm_treev1.png">').addClass('da_image');
});
