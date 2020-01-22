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

whenExists('a[data-image-index="14"]', function () {


	//Adds descriptions add image to specific variant
	if (window.location.href.includes('27680328286313')) {
		$('<div class="da_content-description"><p><span class="da_middot">&#x2022;</span> Our preventative home security platform activates in seconds and is 10x stronger than a deadbolt</p><p><span class="da_middot">&#x2022;</span> Anchors to the floor. Activate with your foot</p><p><span class="da_middot">&#x2022;</span> Works with most household doors > </br class="da_br"><span class="da_check-compatability">Check compatibility</span></p><p><span class="da_middot">&#x2022;</span> Installs easily with common tools > </br class="da_br"><a class="da_learn-how" href="https://install.havenlock.com/">Learn how</a></p><p><span class="da_middot">&#x2022;</span> Veteran owned. Made in the USA</p></div>').insertAfter('.product-type-data');
		//Adds Image
		$('<div class="da_product-img-wrapper"><div class="da_product-image1"/></div>').appendTo('#product_tabs_description');
		//Makes Default Product Image this
		setTimeout(() => {
			$('a[data-image-index="14"]').mouseenter();
		}, 1000);
	}
	else if (window.location.href.includes('27441351427')) {
		$('<div class="da_content-description"><p><span class="da_middot">&#x2022;</span> Our preventative home security platform activates in seconds and is 10x stronger than a deadbolt</p><p><span class="da_middot">&#x2022;</span> Anchors to the floor. Activate with your phone</p><p><span class="da_middot">&#x2022;</span> Works with most household doors > </br class="da_br"><span class="da_check-compatability">Check compatibility</span></p><p><span class="da_middot">&#x2022;</span> Installs easily with common tools > </br class="da_br"><a class="da_learn-how" href="https://install.havenlock.com/">Learn how</a></p><p><span class="da_middot">&#x2022;</span> Veteran owned. Made in the USA</p></div>').insertAfter('.product-type-data');
		//Adds Image
		$('<div class="da_product-img-wrapper"><div class="da_product-image1"/></div>').appendTo('#product_tabs_description');
		//Makes Default Product Image this
		setTimeout(() => {
			$('a[data-image-index="17"]').mouseenter();
		}, 1000);
	}
	else if (window.location.href.includes('27442053123')) {
		$('<div class="da_content-description"><p><span class="da_middot">&#x2022;</span> Our preventative home security platform activates in seconds and is 10x stronger than a deadbolt</p><p><span class="da_middot">&#x2022;</span> Anchors to the floor. Activate with key fob</p><p><span class="da_middot">&#x2022;</span> Works with most household doors > </br class="da_br"><span class="da_check-compatability">Check compatibility</span></p><p><span class="da_middot">&#x2022;</span> Installs easily with common tools > </br class="da_br"><a class="da_learn-how" href="https://install.havenlock.com/">Learn how</a></p><p><span class="da_middot">&#x2022;</span> Veteran owned. Made in the USA</p></div>').insertAfter('.product-type-data');
		//Adds Image
		$('<div class="da_product-img-wrapper"><div class="da_product-image2"/></div>').appendTo('#product_tabs_description');
		//Makes Default Product Image this
		setTimeout(() => {
			$('a[data-image-index="14"]').mouseenter();
		}, 1000);
	}

	//Adds fake click event for "check compatability" button
	$('.da_check-compatability').click(() => {
		$('a[href="#installChecklist"]').click();
	});



});
