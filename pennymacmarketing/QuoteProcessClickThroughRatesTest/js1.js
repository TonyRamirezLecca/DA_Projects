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
whenExists('body.value', function () {
	console.log("DA SCRIPT");

	/*PURCHASE SECTION*/
	if (window.location.href.includes('/purchase')) {
		whenExists('body.value', function () {
				$('<p class="da_step">Continue to Step 2 of 7</p>').appendTo('.question-layout');
		});

		whenExists('body.down', function () {
				$('<p class="da_step">Continue to Step 3 of 7</p>').appendTo('.question-layout');
		});

		whenExists('body.location', function () {
				$('<p class="da_step">Continue to Step 4 of 7</p>').appendTo('.question-layout');
		});

		whenExists('body.veteran', function () {
				$('<p class="da_step">Continue to Step 5 of 7</p>').appendTo('.question-layout');
		});

		whenExists('body.goals', function () {
				$('<p class="da_step">Continue to Step 6 of 7</p>').appendTo('.question-layout');
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
			$('<p class="da_step">Continue to Step 2 of 8</p>').appendTo('.question-layout');
		});

		whenExists('body.balance', function () {
			$('<p class="da_step">Continue to Step 3 of 8</p>').appendTo('.question-layout');
		});

		whenExists('body.location', function () {
			$('<p class="da_step">Continue to Step 4 of 8</p>').appendTo('.question-layout');
		});

		whenExists('body.goals', function () {
			$('<p class="da_step">Continue to Step 5 of 8</p>').appendTo('.question-layout');
			$('#cash-out').click(() => {
				clickedEquity = true;
			});
		});

		whenExists('body.cash', function () {
				$('<p class="da_step">Continue to Step 6 of 9</p>').appendTo('.question-layout');
		});

		whenExists('body.veteran', function () {
			if (!clickedEquity) {
				$('<p class="da_step">Continue to Step 6 of 8</p>').appendTo('.question-layout');
			}
			else {
				$('<p class="da_step">Continue to Step 7 of 9</p>').appendTo('.question-layout');
			}
			$('#yes').click(() => {
				clickedVeteran = true;
			});
		});

		whenExists('body.fha', function () {
			if (clickedEquity) {
				$('<p class="da_step">Continue to Step 8 of 9</p>').appendTo('.question-layout');
			}
			else if (!clickedEquity) {
				$('<p class="da_step">Continue to Step 7 of 8</p>').appendTo('.question-layout');
			}
		});

		whenExists('body.credit', function () {
			console.log(clickedEquity);
			console.log(clickedVeteran);

			if (!clickedEquity && !clickedVeteran) {
				$('<p class="da_step">Continue to Step 8 of 8</p>').appendTo('.question-layout');
			}
			else if (clickedEquity && clickedVeteran) {
				$('<p class="da_step">Continue to Step 8 of 8</p>').appendTo('.question-layout');
			}
			else if (!clickedEquity && clickedVeteran) {
				$('<p class="da_step">Continue to Step 7 of 7</p>').appendTo('.question-layout');
			}
			else if (clickedEquity && !clickedVeteran) {
				$('<p class="da_step">Continue to Step 9 of 9</p>').appendTo('.question-layout');
			}
		});
	}
});
