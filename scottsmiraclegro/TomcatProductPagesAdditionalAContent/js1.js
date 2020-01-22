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
whenExists('#product-learn-region', function () {
	/* Add class to container */
	if (window.location.href.includes('https://www.tomcatbrand.com/en-us/products/mice/tomcat-press-n-set-mouse-trap')) {
		jQuery('.field.field--name-field-product-bundle-section.field--type-entity-reference-revisions.field--label-hidden.field__items').addClass('da_section-ctn');

		/* Add class to first 3 children of container */
		jQuery('.da_section-ctn > section:nth-child(1)').addClass('da_section1');
		jQuery('.da_section-ctn > section:nth-child(2)').addClass('da_section2');
		jQuery('.da_section-ctn > section:nth-child(3)').addClass('da_section3');
		jQuery('.da_section-ctn > section:nth-child(4)').addClass('da_section4');



		//Add before first section
		if (jQuery('#field_product_where_to_apply p').length ) {
			var whereToUse = document.querySelector('#field_product_where_to_apply p').innerHTML;
			jQuery('<div class=da_new-section1><div class=da_text-section1><h4>Where to Use</h4><p>' + whereToUse + '</p></div><div class=da_img1><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-pages-additional-aplus-content/mouse+corner.jpg></div><div class="da_gray"></div></div>').insertBefore('.da_section1');
		}
		//Add before second section
		if (jQuery('#field_product_when_to_apply p').length ) {
			var whenToApply = document.querySelector('#field_product_when_to_apply p').innerHTML;
			jQuery('<div class=da_new-section2><div class=da_text-section2><h4>When to Use</h4><p>' + whenToApply + '</p></div><div class=da_img2><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-pages-additional-aplus-content/Mouse-Chewing.jpg></div><div class="da_gray"></div></div>').insertBefore('.da_section2');
		}

		//Add before third section
		var howOftenToApply = document.querySelector('#field_product_how_often_to_apply p').innerHTML;
		jQuery('<div class=da_new-section3><div class=da_text-section3><h4>How often to apply</h4><p>' + howOftenToApply + '</p></div><div class=da_img3><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-pages-additional-aplus-content/Calendar.jpg></div><div class="da_gray"></div></div>').insertBefore('.da_section3');

		//Add before fourth section
		var guarantee = document.querySelector('#field_product_guarantee p').innerHTML;
		jQuery('<div class=da_new-section4><div class=da_text-section4><h4>Guarantee</h4><p>' + guarantee + '</p></div><div class=da_img4><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-pages-additional-aplus-content/GUARANTEE.png></div><div class="da_gray"></div></div>').insertBefore('.da_section4');

		/* Move Images around */
		/* Media */
		jQuery('.da_section1  > div:nth-child(1)').removeClass('paragraph--media-position--right-align');
		jQuery('.da_section1 > div:nth-child(1)').addClass('paragraph--media-position--left-align');
		/* Text */
		jQuery('.da_section1 > div:nth-child(2)').removeClass('paragraph--text-position--left');
		jQuery('.da_section1 > div:nth-child(2)').addClass('paragraph--text-position--right');

		/* Media */
		jQuery('.da_section3 > div:nth-child(1)').removeClass('paragraph--media-position--right-align');
		jQuery('.da_section3 > div:nth-child(1)').addClass('paragraph--media-position--left-align');
		/* Text */
		jQuery('.da_section3 > div:nth-child(2)').removeClass('paragraph--text-position--left');
		jQuery('.da_section3 > div:nth-child(2)').addClass('paragraph--text-position--right');
	}
	else if (window.location.href.includes('https://www.tomcatbrand.com/en-us/products/more/tomcat-repellents-animal-repellent-granules')) {
		jQuery('.field.field--name-field-product-bundle-section.field--type-entity-reference-revisions.field--label-hidden.field__items').addClass('da_section-ctn');
		jQuery('<div class="da_section-ctn"><section></section><section></section><section></section><section></section></div>').insertAfter('#product-detail-region');

		/* Add class to first 3 children of container */
		jQuery('.da_section-ctn > section:nth-child(1)').addClass('da_section1');
		jQuery('.da_section-ctn > section:nth-child(2)').addClass('da_section2');
		jQuery('.da_section-ctn > section:nth-child(3)').addClass('da_section3');
		jQuery('.da_section-ctn > section:nth-child(4)').addClass('da_section4');

		//Add before third section
		var howOftenToApply = document.querySelector('#field_product_how_often_to_apply p').innerHTML;
		jQuery('<div class="da_no-padding da_new-section3"><div class=da_text-section3><h4>How often to apply</h4><p>' + howOftenToApply + '</p></div><div class=da_img3><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-pages-additional-aplus-content/Calendar.jpg></div><div class="da_gray"></div></div>').insertBefore('.da_section3');

		//Add before fourth section
		var guarantee = document.querySelector('#field_product_guarantee p').innerHTML;
		jQuery('<div class="da_no-padding da_new-section4"><div class=da_img4><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-pages-additional-aplus-content/GUARANTEE.png></div><div class=da_text-section4><h4>Guarantee</h4><p>' + guarantee + '</p></div><div class="da_gray"></div></div>').insertBefore('.da_section4');
	}
	else {
		jQuery('.field.field--name-field-product-bundle-section.field--type-entity-reference-revisions.field--label-hidden.field__items').addClass('da_section-ctn');
		jQuery('<div class="da_section-ctn"><section></section><section></section><section></section><section></section></div>').insertAfter('#product-detail-region');

		/* Add class to first 3 children of container */
		jQuery('.da_section-ctn > section:nth-child(1)').addClass('da_section1');
		jQuery('.da_section-ctn > section:nth-child(2)').addClass('da_section2');
		jQuery('.da_section-ctn > section:nth-child(3)').addClass('da_section3');
		jQuery('.da_section-ctn > section:nth-child(4)').addClass('da_section4');



		//Add before first section
		if (jQuery('#field_product_where_to_apply p').length ) {
			var whereToUse = document.querySelector('#field_product_where_to_apply p').innerHTML;
			jQuery('<div class="da_no-padding da_new-section1"><div class=da_text-section1><h4>Where to Use</h4><p>' + whereToUse + '</p></div><div class=da_img1><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-pages-additional-aplus-content/mouse+corner.jpg></div><div class="da_gray"></div></div>').insertBefore('.da_section1');
		}

		//Add before second section
		if (jQuery('#field_product_when_to_apply p').length ) {
			var whenToApply = document.querySelector('#field_product_when_to_apply p').innerHTML;
			jQuery('<div class="da_no-padding da_new-section2"><div class=da_img2><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-pages-additional-aplus-content/Mouse-Chewing.jpg></div><div class=da_text-section2><h4>When to Use</h4><p>' + whenToApply + '</p></div><div class="da_gray"></div></div>').insertBefore('.da_section2');
		}

		//Add before third section
		var howOftenToApply = document.querySelector('#field_product_how_often_to_apply p').innerHTML;
		jQuery('<div class="da_no-padding da_new-section3"><div class=da_text-section3><h4>How often to apply</h4><p>' + howOftenToApply + '</p></div><div class=da_img3><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-pages-additional-aplus-content/Calendar.jpg></div><div class="da_gray"></div></div>').insertBefore('.da_section3');

		//Add before fourth section
		var guarantee = document.querySelector('#field_product_guarantee p').innerHTML;
		jQuery('<div class="da_no-padding da_new-section4"><div class=da_img4><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-pages-additional-aplus-content/GUARANTEE.png></div><div class=da_text-section4><h4>Guarantee</h4><p>' + guarantee + '</p></div><div class="da_gray"></div></div>').insertBefore('.da_section4');
	}
});



