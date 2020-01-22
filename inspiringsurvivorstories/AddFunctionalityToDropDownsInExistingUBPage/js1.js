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

whenExists('.da_new-section', function () {
	console.log("Exists");

	//vanilla changes
	document.querySelectorAll('.da_accordion-text').forEach((el, i, arr) => {
		el.classList.add('da_hide-paragraph');
	});
	//start with plus default
	document.querySelectorAll('.da_minus').forEach((el, i, arr) => {
		el.classList.add('da_hide-plus-minus');
	});

	document.querySelectorAll('.da_accordion-tab > h6').forEach((el, i, arr) => {
		el.addEventListener("click", () => {
			console.log('clicked');
			document.querySelectorAll('.da_accordion-text').forEach((element, index) => {
				if (i == index) return;
				element.classList.add('da_hide-paragraph');
			});
			document.querySelectorAll('.da_minus').forEach((element, index) => {
				if (i == index) return;
				element.classList.add('da_hide-plus-minus');
			});
			document.querySelectorAll('.da_plus').forEach((element, index) => {
				if (i == index) return;
				element.classList.remove('da_hide-plus-minus');
			});

			el.nextElementSibling.classList.toggle('da_hide-paragraph');
			el.querySelector('.da_plus').classList.toggle('da_hide-plus-minus');
			el.querySelector('.da_minus').classList.toggle('da_hide-plus-minus');
		});
	});

});

