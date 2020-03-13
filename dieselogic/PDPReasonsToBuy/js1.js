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
whenExists('.productTabs, div[data-yotpo-element-id="1"]', function () {
	/* JSON OBJECTS */
	var da = {
		img1: 'https://static.disruptive.co/dieselogic/pdp-reasons-to-buy/img1.jpg',
		img2: 'https://static.disruptive.co/dieselogic/pdp-reasons-to-buy/img2.jpg',
		img3: 'https://static.disruptive.co/dieselogic/pdp-reasons-to-buy/img3.jpg',
		fiftyYears: 'https://static.disruptive.co/dieselogic/pdp-reasons-to-buy/50years.png',
		injection: 'https://static.disruptive.co/dieselogic/pdp-reasons-to-buy/injection.png',
		jacksonville: 'https://static.disruptive.co/dieselogic/pdp-reasons-to-buy/jacksonville.png',
		money: 'https://static.disruptive.co/dieselogic/pdp-reasons-to-buy/money.png',
		wallet: 'https://static.disruptive.co/dieselogic/pdp-reasons-to-buy/wallet.png'
	}

	$('.productInfo, .productPictureWrap').wrapAll('<div class="da_wrapper"></div>');


	$(`<div class="da_new-section">
		<div class="da_new-section-title"><div class="da_left-line"></div><div class="da_title">WHY DIESELOGIC</div><div class="da_right-line"></div></div>

		<div class="da_section">
			<div class="da_text-section">
			<div class="da_text-wrapper">
				<div class="da-text-title">WE HAVE THE BEST PRICES AROUND</div>
				<div class="da-text-content">Dieselogic cuts out the middle man, meaning the same quality at lower prices. <strong style="font-weight: 800 !important">Found a better deal elsewhere? Give us a call at <a href="tel:8885985789">(888)598-5789</a> to talk about price matching.</strong></div>
				<div class="da_text-icons">
					<img src="${da.money}"/>
					<img src="${da.wallet}"/>
				</div>
			</div>
			</div>
			<div class="da_img-section">
				<div class="da_img da_img1" style="background-image: url(${da.img1});"></div>
			</div>
		</div>

		<div class="da_section">
			<div class="da_img-section">
				<div class="da_img da_img2" style="background-image: url(${da.img2});"></div>
			</div>
			<div class="da_text-section">
			<div class="da_text-wrapper">
				<div class="da-text-title">WE DO EVERYTHING IN-HOUSE, </br> RIGHT HERE IN THE USA.</div>
				<div class="da-text-content">We pride ourselves in superior craftsmanship, quality product lines, and responsive in-house customer service.</div>
				<div class="da_text-icons">
					<img src="${da.jacksonville}"/>
				</div>
				</div>
			</div>
		</div>

		<div class="da_section">
			<div class="da_text-section">
			<div class="da_text-wrapper">
				<div class="da-text-title">WE HAVE OVER 50 YEARS OF EXPERIENCE</div>
				<div class="da-text-content">As leaders in the diesel injection system remanufacturing and refurbishing industry for over 5 decades, you can shop in confidence.</div>
				<div class="da_text-icons">
					<img src="${da.injection}"/>
					<img src="${da.fiftyYears}"/>
				</div>
				</div>
			</div>
			<div class="da_img-section">
				<div class="da_img da_img3" style="background-image: url(${da.img3});"></div>
			</div>
		</div>
	</div>`).insertBefore('.productTabs')

	$('div[data-yotpo-element-id="1"]').insertAfter('#ProductDetailWrap');
});
whenExists('.yotpo-filter-stars.rating-stars-container', function() {
	if (document.querySelector('.yotpo-filter-stars.rating-stars-container').classList.contains('mL0')) {
	}
	else {
		if ($('#trad-price-jo').length)) {
			$('<div class="da_yotpo yotpo"></div>').insertBefore('#trad-price-jo');
			$('.yotpo-filter-stars.rating-stars-container').clone().addClass('da_review-stars').appendTo('.da_yotpo');
			$('.reviews-qa-labels-container').clone().addClass('da_review-num').appendTo('.da_yotpo');

			whenExists('div[data-yotpo-element-id="1"]', function() {
				jQuery('.da_yotpo').click(function() {
					event.preventDefault();
					jQuery([document.documentElement, document.body]).animate({
						scrollTop: jQuery('div[data-yotpo-element-id="1"]').offset().top
					}, 600);
				});
			});
		}
		else {
			$('<div class="da_yotpo yotpo"></div>').insertAfter('.variantprice');
			$('.yotpo-filter-stars.rating-stars-container').clone().addClass('da_review-stars').appendTo('.da_yotpo');
			$('.reviews-qa-labels-container').clone().addClass('da_review-num').appendTo('.da_yotpo');

			whenExists('div[data-yotpo-element-id="1"]', function() {
				jQuery('.da_yotpo').click(function() {
					event.preventDefault();
					jQuery([document.documentElement, document.body]).animate({
						scrollTop: jQuery('div[data-yotpo-element-id="1"]').offset().top
					}, 600);
				});
			});
		}
	}
});
