console.log("DA_SCRIPT");
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

whenExists('.field.field--name-field-product-bundle-section.field--type-entity-reference-revisions.field--label-hidden.field__items,.clearfix.text-formatted.field.field--name-field-product-when-to-apply p', function () {

	/* Add class to container */
	jQuery('.field.field--name-field-product-bundle-section.field--type-entity-reference-revisions.field--label-hidden.field__items').addClass('da_section-ctn');

	/* Add class to first 3 children of container */
	jQuery('#field_product_bundle_section > h2').addClass('da_section1');
	jQuery('.da_section-ctn > div:nth-child(2)').addClass('da_section2');
	jQuery('.da_section-ctn > div:nth-child(3)').addClass('da_section3');

	var whenToApply = document.querySelector('#field_product_when_to_apply p').innerHTML;


	//Add before first section
	jQuery('<div class=da_new-section1><div class=da_text-section1><h4>When To Apply</h4><p>' + whenToApply + '</p></div><div class=da_img1><img src=https://static.disruptive.co/scotts/pdp-additional-content/WhenToApply.jpg></div><div class="da_gray"></div></div>').insertBefore('.da_section1');

	//Add before second section
	if (jQuery('#field_product_how_to_apply p').length ) {
		console.log('p exits');
		var howToUse = document.querySelector('#field_product_how_to_apply p').innerHTML;
		jQuery('<div class=da_new-section2><div class=da_text-section2><h4>How To Use</h4><p>' + howToUse + '</p></div><div class=da_img2><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/pdp-additional-content/manPushingSpreader.jpg></div><div class="da_gray"></div></div>').insertBefore('.da_section2');
	}
	else {
		console.log('p no exits');
		var howToUse = document.querySelector('#field_product_how_to_apply ol').innerHTML;
		jQuery('<div class=da_new-section2><div class=da_text-section2><h4>How To Use</h4><p>' + howToUse + '</p></div><div class=da_img2><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/pdp-additional-content/manPushingSpreader.jpg></div><div class="da_gray"></div></div>').insertBefore('.da_section2');
	}

	//Add before third section
	if (jQuery('#field_product_where_not_to_apply p').length) {
		var whereNotToUse = document.querySelector('#field_product_where_not_to_apply p').innerHTML;
		jQuery('<div class=da_new-section3><div class=da_text-section3><h4>Where Not to Use</h4><p>' + whereNotToUse + '</p></div><div class=da_img3><img src=https://static.disruptive.co/scotts/pdp-additional-content/kidAndDog.jpg></div><div class="da_gray"></div></div>').insertBefore('.da_section3');
		/* Move Images around */
		/* Media */
		jQuery('.da_section2 > section > div:nth-child(1)').removeClass('paragraph--media-position--right-align');
		jQuery('.da_section2 > section > div:nth-child(1)').addClass('paragraph--media-position--left-align');
		/* Text */
		jQuery('.da_section2 > section > div:nth-child(2)').removeClass('paragraph--text-position--left');
		jQuery('.da_section2 > section > div:nth-child(2)').addClass('paragraph--text-position--right');
	}

});



