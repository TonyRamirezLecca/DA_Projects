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

/*Add href*/
whenExists('.da-get-info', function () {
	jQuery('.da-get-info').attr('href', 'https://nau.edu/request-information/?lead=Vendor&vendor=Disruptive&interaction=Webform');
});








/* Dont Add the code below this */



/*When GET INFO button is in the hero*/
whenExists('.col.sqs-col-5.span-5', function () {
	jQuery('a.da-get-info').click(function(){
		jQuery([document.documentElement, document.body]).animate({
			scrollTop: jQuery('div.row.sqs-row > div.col.sqs-col-5.span-5').offset().top
		}, 900);
	});	
});





