
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

whenExists('#ocst_form > div.cim-shipping-section > div.cim-shipping-address-listing-wrapper', function () {

	$('#ocst_form > div.cim-shipping-section > span.ocst-please-no-po-boxes-message').prependTo('#ocst_form > div.cim-shipping-section > div.col-md-6.fill-shipp-add');
	$('#ocst_form > div.cim-shipping-section > h2.cim-section-heading.new-shipping-address-heading').prependTo('#ocst_form > div.cim-shipping-section > div.col-md-6.fill-shipp-add');
	$('#ocst_form > div.cim-shipping-section > div.cim-profile-listing-bottom-bar-separator').remove();

	$('.cim-shipping-section').wrapAll('<div class="DA_Wrapper"/>');
	$('.col-md-6.fill-shipp-add').appendTo('.DA_Wrapper')

	document.querySelectorAll('.cim-shipping-address-listing-wrapper > .cim-shipping-address').forEach((el, i, arr) => {
		var buttonWrap = document.createElement("div"); buttonWrap.classList.add("buttonWrap");
		el.append(buttonWrap);
		buttonWrap.append(el.querySelector('button'));
		buttonWrap.append(el.querySelector('.cim-item-actions-row'));
	});



});
