/*** JS 4 ***/
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
whenExists('.back, .step:nth-child(13)', function () {
	console.log('da_test');

	function updateSteps(stepNumber) {
		stepNumber = stepNumber;
		document.querySelectorAll('.da_progress-bar').forEach((element) => {
			element.querySelectorAll('.da_step').forEach((el, i, arr) => {
				if (i == stepNumber) {
					console.log(i, stepNumber);
					el.setAttribute('class', 'da_step da_current');
				}
				else if (i < stepNumber) {
					console.log(i, stepNumber);
					el.setAttribute('class', 'da_step da_done');
				}
				else {
					console.log(i, stepNumber);
					el.setAttribute('class', 'da_step');
				}
			});
		});
	}

	document.querySelectorAll('.step .FormSubtitle').forEach((el, i, arr) => {
		if (i < 9) {
			el.innerHTML = 'Tell us about your home';
		}
	});


	$('.step').each(function() {
		$('<div class="da_progress-bar"><div class="da_row"><div class="da_step da_current">Step 1/13</div><div class="da_line"></div><div class="da_step">Step 2/13</div><div class="da_line"></div><div class="da_step">Step 3/13</div><div class="da_line"></div><div class="da_step">Step 4/13</div><div class="da_line"></div><div class="da_step">Step 5/13</div><div class="da_line"></div><div class="da_step">Step 6/13</div><div class="da_line"></div><div class="da_step">Step 7/13</div></div><div class="da_hide-mobile da_line"></div><div class="da_row"><div class="da_step">Step 8/13</div><div class="da_line"></div><div class="da_step">Step 9/13</div><div class="da_line"></div><div class="da_step">Step 10/13</div><div class="da_line"></div><div class="da_step">Step 11/13</div><div class="da_line"></div><div class="da_step">Step 12/13</div><div class="da_line"></div><div class="da_step">Step 13/13</div></div></div>').insertAfter($(this).find('.Formtitle'));
	});

	/* JSON Progress bar */
	var progress = [];

	//If they click back
	document.querySelectorAll('.back').forEach((el) => {
		el.addEventListener('click', () => {
			progress.pop();
			updateSteps(progress.length);
		});
	});

	document.querySelectorAll('.stepBtn').forEach((el, i) => {
		el.addEventListener('click', () => {
			switch (i) {
				case 0:
					if (document.querySelector('#reason').value != "") {
						progress.push('check');
						updateSteps(progress.length);
					}
					break;
				case 1:
					if (document.querySelector('#property_type').value != "") {
						progress.push('check');
						updateSteps(progress.length);
					}
					break;
				case 2:
					if (document.querySelector('#timeframe').value != "") {
						progress.push('check');
						updateSteps(progress.length);
					}
					break;
				case 3:
					if (document.querySelector('#occupancy').value != "") {
						progress.push('check');
						updateSteps(progress.length);
					}
					break;
				case 4:
					if (document.querySelector('#months_behind').value != "") {
						progress.push('check');
						updateSteps(progress.length);
					}
					break;
				case 5:
					if (document.querySelector('#address').value != "") {
						progress.push('check');
						updateSteps(progress.length);
					}
					break;
				case 6:
					if (document.querySelector('#bedrooms').value != "" && document.querySelector('#bathrooms').value != "") {
						progress.push('check');
						updateSteps(progress.length);
					}
					break;
				case 7:
					if (document.querySelector('#price').value != "") {
						progress.push('check');
						updateSteps(progress.length);
					}
					break;
				case 8:
					if (document.querySelector('#listed').value != "") {
						progress.push('check');
						updateSteps(progress.length);
					}
					break;
				case 9:
					if (document.querySelector('#first_name').value != "" && document.querySelector('#last_name').value != "") {
						progress.push('check');
						updateSteps(progress.length);
					}
					break;
				case 10:
					if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.querySelector('#email').value)) {
						progress.push('check');
						updateSteps(progress.length);
					}
					break;
				case 11:
						if (/^\d{5}$/.test(document.querySelector('#postal_code').value)) {
							progress.push('check');
							updateSteps(progress.length);
						}
					break;
				case 12:
					if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(document.querySelector('#phone').value) && document.querySelector('#cell_phone').value != "") {
							progress.push('check');
							updateSteps(progress.length);
					}
					break;
			}
		});
	});


	//If they change and it automatically goes to next
		document.querySelector('#reason').addEventListener('change', () => {
			if (	document.querySelector('#reason').value != "") {
				progress.push('check');
				updateSteps(progress.length);
			}
		});
		document.querySelector('#property_type').addEventListener('change', () => {
			if (document.querySelector('#property_type').value != "") {
				progress.push('check');
				updateSteps(progress.length);
			}
		});
		document.querySelector('#timeframe').addEventListener('change', () => {
			if (document.querySelector('#timeframe').value != "") {
				progress.push('check');
				updateSteps(progress.length);
			}
		});
		document.querySelector('#occupancy').addEventListener('change', () => {
			if (document.querySelector('#occupancy').value != "") {
				progress.push('check');
				updateSteps(progress.length);
			}
		});
		document.querySelector('#months_behind').addEventListener('change', () => {
			if (document.querySelector('#months_behind').value != "") {
				progress.push('check');
				updateSteps(progress.length);
			}
		});
		document.querySelector('#bedrooms').addEventListener('change', () => {
			if (document.querySelector('#bedrooms').value != "" && document.querySelector('#bathrooms').value != "") {
				progress.push('check');
				updateSteps(progress.length);
			}
		});
		document.querySelector('#bathrooms').addEventListener('change', () => {
			if (document.querySelector('#bedrooms').value != "" && document.querySelector('#bathrooms').value != "") {
				progress.push('check');
				updateSteps(progress.length);
			}
		});
		document.querySelector('#price').addEventListener('change', () => {
			if (document.querySelector('#price').value != "") {
				progress.push('check');
				updateSteps(progress.length);
			}
		});
		document.querySelector('#listed').addEventListener('change', () => {
			if (document.querySelector('#listed').value != "") {
				progress.push('check');
				updateSteps(progress.length);
			}
		});

});

