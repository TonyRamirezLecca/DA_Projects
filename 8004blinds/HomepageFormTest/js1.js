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

whenExists('.content-side-form.style-color-682075-bg.vc_custom_1547770183194.row-internal.row-container, #post-13 > div > div > div > div:nth-child(6) > div > div > div.pos-middle.pos-center.align_left.column_parent.col-lg-6.col-md-50.col-sm-100.single-internal-gutter', function () {
	console.log("DA SCRIPT");

	/* Give Elements DA classes */
		//form
		$('.content-side-form.style-color-682075-bg.vc_custom_1547770183194.row-internal.row-container').addClass('da_form');
		//Blinds
		$('#post-13 > div > div > div > div:nth-child(4) > div > div > div.pos-bottom.pos-center.align_center.column_parent.col-lg-6.col-md-50.col-sm-100.single-internal-gutter').addClass('da_blinds');
		//Motorized
		$('#post-13 > div > div > div > div:nth-child(4) > div > div > div.pos-middle.pos-center.align_left.column_parent.col-lg-6.col-md-50.col-sm-100.single-internal-gutter').addClass('da_motorized');
		//Shutters
		$('#post-13 > div > div > div > div:nth-child(5) > div > div > div.pos-bottom.pos-center.align_center.column_parent.col-lg-6.col-md-50.col-sm-100.single-internal-gutter').addClass('da_shutters');
		//Drapery
		$('#post-13 > div > div > div > div:nth-child(5) > div > div > div.pos-middle.pos-center.align_left.column_parent.col-lg-6.col-md-50.col-sm-100.single-internal-gutter').addClass('da_drapery');
		//Panels
		$('#post-13 > div > div > div > div:nth-child(6) > div > div > div.pos-bottom.pos-center.align_center.column_parent.col-lg-6.col-md-50.col-sm-100.single-internal-gutter').addClass('da_panels');
		//Cordless
		$('#post-13 > div > div > div > div:nth-child(6) > div > div > div.pos-middle.pos-center.align_left.column_parent.col-lg-6.col-md-50.col-sm-100.single-internal-gutter').addClass('da_cordless');

	/* Create new row */
		$('#post-13 > div > div > div > div:nth-child(6)').clone().insertAfter('#post-13 > div > div > div > div:nth-child(6)');
		$('#post-13 > div > div > div > div:nth-child(7)').addClass('da_row-4');
		$('#post-13 > div > div > div > div:nth-child(6)').addClass('da_row-3');
		$('#post-13 > div > div > div > div:nth-child(5)').addClass('da_row-2');
		$('#post-13 > div > div > div > div:nth-child(4)').addClass('da_row-1');
	
	/* Move Section Blocks */
		$('.da_row-3 .da_panels').hide();
		$('.da_motorized').insertBefore('.da_row-3 .da_panels');

		$('.da_row-3 .da_cordless').hide();
		$('.da_drapery').insertBefore('.da_row-3 .da_cordless'); 

	/* Move Form */
		$('.da_form').appendTo('.da_row-1 > div');

	/* Hero */
		$('.post-content > .vc_row.row-container:nth-child(2)').addClass('da_hero');
		$('<div class="da_hero-content"><img class="da_sticker" src="https://e2n8i3a5.stackpathcdn.com/wp-content/uploads/2019/01/we-beat-lowes-and-home-depot-badge.png"/><h1>WE BRING THE </br>STORE TO </br>YOUR DOOR!</h1><a class="da_cta" href="https://18004blinds.com/products/">VIEW PRODUCTS</a></div>').appendTo('.da_hero');
		$('.heading-text.el-text.free-text-block').addClass('da_vp').appendTo('.da_hero');
});

