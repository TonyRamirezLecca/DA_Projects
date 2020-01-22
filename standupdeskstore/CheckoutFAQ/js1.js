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
whenExists('.column.main > div[data-content-type="row"][data-appearance="contained"][data-element="main"]', function () {

	/* JSON OBJECTS */
	var da = {
		returnInfo : "You have 30 days after the delivery of your order to request a return or replacement part. Stand Up Desk Store will accept returns provided we've issued a return authorization. Please request a return authorization prior to sending a product back. We stand behind our products and will replace any missing or damaged parts or products. You can read our Cancellation and Returns Policy here.",
		shippingTimeframe : "Orders are estimated to arrive 1-5 days after purchase, depending on location. All orders are typically shipped 24 business hours after purchase, unless considered a larger order which may take from 48 to 72 business hours to ship.",
		shipmentTracking : "You will receive a UPS tracking number as soon as it ships! This will allow you to track your package up until delivery. In the case of larger orders, shipping will be provided by an LTL freight carrier, who will provide their own tracking numbers via email!",
	  customerService : 'If you have any questions, we\'d love to help! Simply email us at <a href="mailto:customerservice@standupdeskstore.com" class="da_customer-service-mail">customerservice@standupdeskstore.com</a> or give us a call <a href="tel:855-843-7920." class="da_customer-service-call">855-843-7920</a>.'
	}

	$(`<div class="da_drop-down"><div class="da_header"><h2>FREQUENTLY ASKED QUESTIONS</h2><div class="da_toggle-btn"><span class="da_hide" style="display: none;">HIDE</span><span class="da_view">VIEW</span> <i class="fa fa-angle-up da_angle-up" style="display: none;"></i><i class="fa fa-angle-down da_angle-down"></i></div></div><div class="da_drop-down-content-ctn"><div class="da_drop-down-section"><h1>Return Information:</h1><div class="da_drop-down-text">${da.returnInfo}</div></div><div class="da_drop-down-section"><h1>Shipping Timeframes:</h1><div class="da_drop-down-text">${da.shippingTimeframe}</div></div><div class="da_drop-down-section"><h1>Shipment Tracking:</h1><div class="da_drop-down-text">${da.shipmentTracking}</div></div><div class="da_drop-down-section"><h1>Customer Service:</h1><div class="da_drop-down-text">${da.customerService}</div></div></div></div>`).insertBefore('.column.main > div[data-content-type="row"][data-appearance="contained"][data-element="main"]');

	$('.da_toggle-btn').click(() => {
		$('.da_drop-down-content-ctn').toggleClass('da_slide-down');
		$('.da_angle-up').toggle();
		$('.da_angle-down').toggle();
		$('.da_hide').toggle();
		$('.da_view').toggle();
	});

	
});

