/* JS 3  */

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

whenExists('#viewed-products_block_left', function () {
	
/*** JS 2 ***/

/* Move Warning */
$('#last_quantities').insertAfter('.product_attributes');

$('<div class="da_vps"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/bhm-store/pdp-cta-emphasis/VPs.png"/></div>').prependTo('.product_attributes');
$('.box-security > img').attr('src', 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/bhm-store/pdp-cta-emphasis/visa.png');

$('<p>5% Value Added Tax will be added on checkout.</p>').prependTo('.box-security');


$('<div class="da_v2-social-ctn"></div>').appendTo('#buy_block');
$('.socialsharing_product > .btn-facebook').appendTo('.da_v2-social-ctn');
$('.socialsharing_product > .btn-google-plus').appendTo('.da_v2-social-ctn');
$('#send_friend_button').appendTo('.da_v2-social-ctn');
$('.print > a').appendTo('.da_v2-social-ctn');

$('#send_friend_button').html('');
$('.da_v2-social-ctn > a:last-child').html('');

/*** JS 1 ***/

/* Remove Camera Picture Banner*/
	$('.top-column').hide();
/* Move breadcrumbs to top */
	$('.breadcrumb.clearfix').addClass('da_breadcrumbs').insertBefore('.columns-container');
/* Move header to the top of the image and then hide it and only show in mobile */
	$('.top-title > h1').addClass('da_mobile-header').insertBefore('#center_column');


/*********************************** */




/* Move Viewed Products */
	$('#viewed-products_block_left').insertBefore('.page-product-box.blockproductscategory');

/* Move Right column under "Warning last items in stock!" */
	$('#buy_block').insertAfter('p#availability_date');
	/* Wrap Quantity Input */
	$('#quantity_wanted_p a.button-minus, #quantity_wanted_p a.button-plus, input#quantity_wanted').wrapAll('<div class="da_quantity-wrapper"></div>')
/* Move Social icons to the right */
	$('.socialsharing_product').appendTo('.pb-right-column');
	$('#usefull_link_block').appendTo('.pb-right-column');

/* Wrap the center and right column */
	$('.pb-center-column, .pb-right-column').wrapAll('<div class="da_column-wrapper"></div>');

/* Drop Down Fucntionality */
	/* Change More Info -> DETAILS ADD PLUS MINUS */
		var regex = /More info/i;
		var name_of_element;
		document.querySelectorAll('.page-product-box > .page-product-heading').forEach((el, i, arr) => {
			if (regex.test(el.innerHTML)) {
				el.innerHTML = 'DETAILS <span class="da_details-plus">+</span><span class="da_details-minus">-</span>';
				console.log(el);
				el.classList.add('da_details-header');
				el.nextElementSibling.classList.add('da_details-text');
				return;
			}
		});

	/* Change DATA SHEET -> ADD PLUS MINUS*/
		var regex = /DATA SHEET/i;
		var name_of_element;
		document.querySelectorAll('.page-product-box > .page-product-heading').forEach((el, i, arr) => {
			if (regex.test(el.innerHTML)) {
				el.innerHTML = 'DATA SHEET <span class="da_data-sheet-plus">+</span><span class="da_data-sheet-minus">-</span>';
				el.classList.add('da_data-sheet-header');
				el.nextElementSibling.classList.add('da_data-sheet-text');
				return;
			}
		});

	/* Default hide */
			$('.da_data-sheet-minus').hide();
			$('.da_data-sheet-text').slideUp();
			$('.da_details-minus').hide();
			$('.da_details-text').slideUp();


	/* Collapse Data Sheet */
		$('.da_data-sheet-header').click(() => {
			$('.da_data-sheet-text').slideToggle();
			$('.da_data-sheet-plus').toggle();
			$('.da_data-sheet-minus').toggle();
		});

	/* Collapse Details  */
		$('.da_details-header').click(() => {
			$('.da_details-text').slideToggle();
			$('.da_details-plus').toggle();
			$('.da_details-minus').toggle();
		});


/* Mobile Code */
$('#usefull_link_block').clone().insertAfter('.warning_inline');
$('.socialsharing_product').clone().insertAfter('.warning_inline');

$('#usefull_link_block').eq(0).addClass('da_email-btns');
$('.socialsharing_product').eq(0).addClass('da_social-btns');





});

