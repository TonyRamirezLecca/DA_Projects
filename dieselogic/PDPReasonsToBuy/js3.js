/*** JS 3 ***/
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


	/* Previous Test */
	
  //ADD DA CLASS FOR CSS EASE
    jQuery('#ProductDetailWrap').addClass('da-tab');
    //ADD NEW TAB
    jQuery('#ProductDetailWrap .productTabs > a:first-child').after('<a href="javascript:void(0);" onclick="showTab(6, false);" class="tab6">Warranty Info</a>');
    //ADD NEW CONTENT
    jQuery('#ProductDetailWrap .productTabContent > .tab1Content').after('<a href=javascript:void(0); class=mobileTab onclick=showTab(6,!0)>Warranty Info</a><div id=da-info class="tab6Content tabContent"style=display:none><p>Dieselogic warrants our Products to be free from defects in material or workmanship for a period of <strong>1 year. (Performance Remanufactured Products are warranted for 6 months.)</strong><p>The warranty period commences the day the product is shipped to the original Customer and is only valid for the original Customer. This warranty is non-transferable.<p><strong>Dieselogic Limited Warranty DOES NOT COVER and therefore EXCLUDES:</strong><ul><li>Labor costs to install or uninstall Products<li>Labor costs incurred in diagnosis of defects or any other consequential expenses, including third party testing<li>Failures caused by fuel or oil contamination, fire damage, misuse, negligence, modification, abuse, improper application, installation or operation<li>Failures caused by unauthorized service or use of unauthorized parts<li>Failures caused by power enhancing devices or modifications<li>Any down time, towing, travel, lodging, or any other contingent expenses</ul><p><strong>This warranty is in lieu of all other express and implied warranties, including the implied warranties of merchantability and fitness for a particular purpose. Dieselogic does not assume any responsibility for incidental or consequential damages. This warranty sets out your exclusive remedies with respect to the Products covered by it. No attempt to alter, modify, or amend this warranty shall be allowed.</strong><p><strong>For information regarding Returns or Warranty Claims, please see our <a href=https://www.dieselogic.com/t-warranty.aspx target=_blank>Returns & Warranty policy</a>.</strong></div>');

});

whenExists('.yotpo-filter-stars.rating-stars-container', function() {
	if (document.querySelector('.yotpo-filter-stars.rating-stars-container').classList.contains('mL0')) {
	}
	else {
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
});
