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

whenExists('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.cim-ocst-estimated-shipping-methods-wrapper.active > div > a', function () {

	//Change Payment Info Text
	$('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > h2').html('Payment Information');
	//moves red text below title
	$('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.ocst-page-card-not-yet-billed-message').insertAfter('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > h2');

	//Bill to this card step
	$('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.form-group.cim-form-button-row > button').html('Next Step >');
	$('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.form-group.cim-form-button-row').appendTo('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side');

	//Shipping Section
	$('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.cim-ocst-estimated-shipping-methods-wrapper.active').insertAfter('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.cim-ocst-basket-contents-wrapper.active > div.bask-container > div.bask-items-wrapper');

	//Button
	document.querySelector('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.cim-ocst-basket-contents-wrapper.active > div.bask-container > div.cim-ocst-estimated-shipping-methods-wrapper.active > div > a').addEventListener("click", () => {
		document.querySelector('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.cim-ocst-basket-contents-wrapper.active > div.bask-container > div.cim-ocst-estimated-shipping-methods-wrapper.active > h2').classList.add('showTable');
		document.querySelector('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.cim-ocst-basket-contents-wrapper.active > div.bask-container > div.cim-ocst-estimated-shipping-methods-wrapper.active > div > table > tbody').classList.add('showTable');
		document.querySelector('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.cim-ocst-basket-contents-wrapper.active > div.bask-container > div.cim-ocst-estimated-shipping-methods-wrapper.active > div').classList.add('restoreMargin');
		document.querySelector('.cim-ocst-shipping-method-disclaimer').classList.add('showDisclaimer');
	});

	//Billing Section
	$('#ocst_form > div.cim-payment-section > div.cim-payment-section-left-side > h2').html('Billing Address');
});
