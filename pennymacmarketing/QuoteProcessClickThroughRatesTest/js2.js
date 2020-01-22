/*** JS 2 ***/

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
// when multiple elements are removed
function whenRemoved(elements, callback) {
	var elements_array = elements.split(',');
	var interval = setInterval(function() {
		for (var i = 0; i < elements_array.length; i++) {
			if (document.querySelectorAll(elements_array[i]).length === 0) {
				elements_array.splice(i,1);
				i--;
			}
		}
		if (elements_array.length === 0) {
			callback();
			elements_array = elements.split(',');
		}
	}, 100);
}


whenExists('body.value', function () {
	console.log("DA SCRIPT");

	/*PURCHASE SECTION*/
	if (window.location.href.includes('/purchase')) {
		whenExists('body.value', function () {
			$('#next').html('Continue to Step 2 of 7');
		});

		whenExists('body.down', function () {
			setTimeout(() => {
				$('#next').html('Continue to Step 3 of 7');
			}, 700);
		});

		whenExists('body.location', function () {
			setTimeout(() => {
				$('#next').html('Continue to Step 4 of 7');
			}, 700);
		});

		whenExists('body.veteran', function () {
			setTimeout(() => {
				$('#next').html('Continue to Step 5 of 7');
			}, 700);
		});

		whenExists('body.goals', function () {
			setTimeout(() => {
				$('#next').html('Continue to Step 6 of 7');
			}, 700);
		});

		whenExists('body.credit', function () {
			$('<p class="da_step">Get My Custom Quote!</p>').appendTo('.question-layout');
		});
	}

	/* REFINANCE SECTION */
	if (window.location.href.includes('/refinance')) {
		var clickedEquity = false;
		var clickedVeteran = false;

		whenExists('body.value', function () {
			setTimeout(() => {
				$('#next').html('Continue to Step 2 of 8');
			}, 700);
		});

		whenExists('body.balance', function () {
			setTimeout(() => {
				$('#next').html('Continue to Step 3 of 8');
			}, 700);
		});

		whenExists('body.location', function () {
			setTimeout(() => {
				$('#next').html('Continue to Step 4 of 8');
			}, 700);
		});

		whenExists('body.goals', function () {
			setTimeout(() => {
				$('#next').html('Continue to Step 5 of 8');
			}, 700);
			$('#cash-out').click(() => {
				clickedEquity = true;
			});
		});

		whenExists('body.cash', function () {
			setTimeout(() => {
				$('#next').html('Continue to Step 6 of 8');
			}, 700);
		});

		whenExists('body.veteran', function () {
			if (!clickedEquity) {
				setTimeout(() => {
					$('#next').html('Continue to Step 6 of 8');
				}, 700);
			}
			else {
				setTimeout(() => {
					$('#next').html('Continue to Step 7 of 9');
				}, 700);
			}
			$('#yes').click(() => {
				clickedVeteran = true;
			});
		});

		whenExists('body.fha', function () {
			if (clickedEquity) {
				setTimeout(() => {
					$('#next').html('Continue to Step 8 of 9');
				}, 700);
			}
			else if (!clickedEquity) {
				setTimeout(() => {
					$('#next').html('Continue to Step 7 of 8');
				}, 700);
			}
		});

		whenExists('body.credit', function () {

			if (!clickedEquity && !clickedVeteran) {
				setTimeout(() => {
					$('#next').html('Continue to Step 8 of 8');
				}, 700);
			}
			else if (clickedEquity && clickedVeteran) {
				setTimeout(() => {
					$('#next').html('Continue to Step 8 of 8');
				}, 700);
			}
			else if (!clickedEquity && clickedVeteran) {
				setTimeout(() => {
					$('#next').html('Continue to Step 7 of 7');
				}, 700);
			}
			else if (clickedEquity && !clickedVeteran) {
				setTimeout(() => {
					$('#next').html('Continue to Step 9 of 9');
				}, 700);
			}
		});
	}
});

