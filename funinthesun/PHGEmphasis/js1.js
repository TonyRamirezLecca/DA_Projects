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
whenExists('.brz-root__container.brz-reset-all', function () {
	/* Add font awesome */
		var fontAwesome5 = document.createElement("link");
		fontAwesome5.type = "text/css"; fontAwesome5.rel = "stylesheet";
		fontAwesome5.href="https://use.fontawesome.com/releases/v5.4.0/css/all.css";
		document.querySelector("head").appendChild(fontAwesome5);

	/* Name sections */
		jQuery('.brz-root__container.brz-reset-all > section:nth-child(2)').eq(0).addClass('da_section1');
		jQuery('.brz-root__container.brz-reset-all > section:nth-child(5)').eq(0).addClass('da_section2');
		jQuery('.brz-root__container.brz-reset-all > section:nth-child(3)').eq(0).addClass('da_section3');

	/* Adds Aloha Peral harbor text /groupon info /read more */
	jQuery('<div class="da_section3-wrapper"><h1>Aloha Pearl Harbor Tour</h1></div>').appendTo('.da_section3');
	
	/* Move read more section */
	var regex2 = /Aloha Pearl Harbor Tour/i;
	document.querySelectorAll('h1 > span').forEach((el, i, arr) => {
		if (regex2.test(el.innerHTML)) {
			var aloha = el.parentNode.parentNode.parentNode.parentNode.nextElementSibling;
			document.querySelector('.da_section3-wrapper').append(aloha);
			return;
		}
	});



	/* Section 1 */
		jQuery('.da_section1').html('<div class="da_container"><div class="da_section1-header"><h2>Groupon Pricing</h2></div><div class="da_section1-info"><div class="da_section1-info-title"><h6>Adult</h6><h6>Child</h6><h6>Lap Child</h6></div><div class="da_section1-prices"><div class="da_section1-price"><div class="da_section1-crossed-out">$79.00</div><div class="da_section1-price-blue">$38.00</div></div><div class="da_section1-price"><div class="da_section1-crossed-out">$69.00</div><div class="da_section1-price-blue">$38.00</div></div><div class="da_section1-price"><div class="da_section1-price-blue">FREE</div></div></div></div></div>');

	/* Move Tour Inclusions section below section 1 */
		jQuery('.da_section2').insertAfter('.da_section1');
		jQuery('.da_section2').html('<div class="da_container"><div class="da_section2-header"><h2>Tour Inclusions</h2></div><div class="da_section2-content-ctn"><div class="da_section2-content"><div class="da_section2-content-img-ctn"><img src="https://alohapearlharbor.com/wp-content/uploads/brizy/1040/assets/images/iW=655&iH=424&oX=44&oY=0&cW=565&cH=424/Premium-Trans.jpg"/></div><div class="da_section2-content-text"><h6>TWO-WAY TRANS FROM WAIKIKI</h6><p>Transportation quality can be hit or miss in Hawaii. We don’t take any chances by providing round-trip transfers from Waikiki to Pearl Harbor in beautiful limo style buses. You’ll not only appreciate the air conditioning, but also the hospitable tour guides.</p></div></div><div class="da_section2-content"><div class="da_section2-content-img-ctn"><img src="https://alohapearlharbor.com/wp-content/uploads/brizy/1044/assets/images/iW=636&iH=424&oX=35&oY=0&cW=565&cH=424/kona-coffee.jpg"/></div><div class="da_section2-content-text"><h6>FRESH HOT KONA COFFEE & DOUNUTS</h6><p>Pearl Harbor is an activity that is best experienced early in the morning. So, we’ve got you covered with bold cups of fresh Kona coffee. Throw in the legendary hot malasada donuts from Leonard’s Bakery, and you’ve got the recipe for a great start to the morning!</p></div></div><div class="da_section2-content"><div class="da_section2-content-img-ctn"><img src="https://alohapearlharbor.com/wp-content/uploads/brizy/1045/assets/images/iW=636&iH=424&oX=35&oY=0&cW=565&cH=424/Visitor-Center.jpg"/></div><div class="da_section2-content-text"><h6>VISITORS CENTER & MUSEUMS</h6><p>The Visitors Center will be your hub while touring Pearl Harbor. It is the first building that you check-in to, and the location where shuttles to the other attractions depart and return from. The Visitor Center is also home to 2 different museums named “Road To War” & “Attack” which come included with your admission to Pearl Harbor. </p></div></div></div></div>');
		jQuery('<div class="da_vp-banner"><div class="da_vp-ctn"><div class="da_vp"><i class="fas fa-check"></i>Waikiki Pickups in Limo Bus Trans</div><div class="da_vp"><i class="fas fa-check"></i>Hot Coffee and Purple Taro Donuts</div><div class="da_vp"><i class="fas fa-check"></i>Visitors Center & Museum</div></div><div class="da_plus"><i class="fas fa-plus"></i></div><div class="da_vp-ctn"><div class="da_vp"><i class="fas fa-check"></i>Exclusive Documentary</div><div class="da_vp"><i class="fas fa-check"></i>U.S.S Arizona Memorial</div><div class="da_vp"><i class="fas fa-check"></i>Wall of Names</div></div><div class="da_plus"><i class="fas fa-plus"></i></div><div class="da_vp-ctn"><div class="da_vp"><i class="fas fa-check"></i>Tears of the Arizona</div><div class="da_vp"><i class="fas fa-check"></i>King Kamehameha Statue</div><div class="da_vp"><i class="fas fa-check"></i>Punchbowl National Cemetary</div></div></div>').appendTo('.da_section2 > .da_container')

	/* Removes text section*/
		var regex = /Activity Highlights/i;
		var myelement;
		document.querySelectorAll('span').forEach((el, i, arr) => {
			if (regex.test(el.innerHTML)) {
				myelement = el
				return;
			}
		});
		myelement.parentNode.parentNode.parentNode.parentNode.nextElementSibling.remove();
		myelement.remove();



	/* ===========MOBILE SECTION============ */

	/* Add plus to the top of the vp section */
	jQuery('<div class="da_plus-text">PLUS...</div>').prependTo('.da_vp-banner')

	/* Create new price section */
	jQuery('<div class="da_section1-info-mobile"><div class="da_mobile-section"><div class="da_mobile-title">Adult</div><div class="da_mobile-price"><div class="da_section1-crossed-out">$79.00</div><div class="da_section1-price-blue">$38.00</div></div></div><div class="da_mobile-section"><div class="da_mobile-title">Child</div><div class="da_mobile-price"><div class="da_section1-crossed-out">$69.00</div><div class="da_section1-price-blue">$38.00</div></div></div><div class="da_mobile-section"><div class="da_mobile-title">Lap Child</div><div class="da_mobile-price"><div class="da_section1-price-blue">FREE</div></div></div></div>').insertAfter('.da_section1-info');
});
