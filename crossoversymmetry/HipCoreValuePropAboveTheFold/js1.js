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
whenExists('.et_pb_module_inner >  h1', function () {

	/* Selects Get Estimate Section */
	var regex = /Hip.*Core System/i;
	document.querySelectorAll('h1').forEach((el, i, arr) => {
		console.log('iterating');
		if (regex.test(el.innerHTML)) {
			console.log(el);
			el.innerHTML = 'Hip & Core System </br> <span class="da_subtext">Increase power generation and transfer</span>';
		}
	});

});
