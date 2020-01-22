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

whenExists('.subtitle', function () {
	//Change subtitle
	$('.subtitle').html('Incorporates intelligent </br>vibration into your gameplay.');
	$('.subtitle').insertAfter('#shopify-section-1563378092776 > div > div > div.feature-row__item.feature-row__text.feature-row__text--left.larger-text > h2');
	//Change title
	$('#shopify-section-1563378092776 > div > div > div.feature-row__item.feature-row__text.feature-row__text--left.larger-text > h2').html('The Immersive</br> Gaming Chair');

	$('#shopify-section-1563378092776 > div > div > div.feature-row__item.feature-row__text.feature-row__text--left.larger-text > a').wrap('<div class="da_cta-wrapper"></div>');

	$('<div class="da_watch-video">Watch Video</div>').appendTo('.da_cta-wrapper');


	/* CREATE POP UP ))_)))))((())((() */
	
	function createPopUp() {
		//creates popup background and popup 
			var popUpBackground = document.createElement("div"); popUpBackground.classList.add("popUpBackground", "displayNone");
			var popUp = document.createElement("div"); popUp.classList.add("popUp", "displayNone");
	
		//appends popup background and pop up to body
			document.querySelector('body').append(popUpBackground);
			document.querySelector('body').append(popUp);
	
		//click background or close button to close popup
			popUpBackground.addEventListener("click", () => {
				popUpBackground.classList.add("displayNone");
				popUp.classList.add("displayNone");
			});
	}
	createPopUp();
	
	//append
	$('#shopify-section-1563377714623').appendTo('.popUp');

	$('.da_watch-video').click(() => {
			document.querySelector('.popUpBackground').classList.remove("displayNone");
			document.querySelector('.popUp').classList.remove("displayNone");
	});


});

