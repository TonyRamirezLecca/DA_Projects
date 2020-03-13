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
whenExists('.card-body.text-left, .d-flex-column', function () {

	/* JSON OBJECTS */
	var da = {
		icon1 : 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/ranlife/financing-content-followup/Untitled-3-01.png',
		icon2 : 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/ranlife/financing-content-followup/Untitled-3-02.png',
		icon3 : 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/ranlife/financing-content-followup/Untitled-3-03.png',
		icon4 : 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/ranlife/financing-content-followup/Untitled-3-04.png',
		icon5 : 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/ranlife/financing-content-followup/Untitled-3-05.png',
		icon6 : 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/ranlife/financing-content-followup/Untitled-3-06.png',
	}

	$(`
		<div class="da_vp-ctn">

			<div class="da_row">
				<div class="da_vp"><img class="da_vp-icon" src="${da.icon1}"/><span class="da_vp-text">Low Interest Rate</span></div>
				<div class="da_vp"><img class="da_vp-icon" src="${da.icon2}"/><span class="da_vp-text">Low to No Monthly Mortgage Insurance</span></div>
				<div class="da_vp"><img class="da_vp-icon" src="${da.icon3}"/><span class="da_vp-text">No Prepayment Penalty</span></div>
			</div>

			<div class="da_row">
				<div class="da_vp"><img class="da_vp-icon" src="${da.icon4}"/><span class="da_vp-text">Low Monthly Payment</span></div>
				<div class="da_vp"><img class="da_vp-icon" src="${da.icon5}"/><span class="da_vp-text">Minimized Upfront Mortgage Expenses</span></div>
				<div class="da_vp"><img class="da_vp-icon" src="${da.icon6}"/><span class="da_vp-text">Loan Amounts up to $453,100</span></div>
			</div>

		</div>
	`).insertAfter('.card-body.text-left')

	$('.row.justify-content-center.p-3 .col-md-6:last-child').hide();
	$('<div class="da_cta-ctn"></div>').insertAfter('.row.justify-content-center.p-3 .col-md-6:last-child');

	$('.d-flex-column').appendTo('.da_cta-ctn');
	$('.row.justify-content-center.p-3 .col-md-6:nth-child(2) .text-center.mb-5 a').appendTo('.da_cta-ctn');

});
