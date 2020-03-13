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
whenExists('.submitbutton, .step:nth-child(22)', function () {
	console.log('disruptive advertising');

	//Add Classes
		document.querySelectorAll('.step').forEach(function(el, i, arr) {
			var stepNum = i + 1;
			el.classList.add('da_step-' + stepNum);
		});
		document.querySelector('.submitbutton').classList.add('da_submit');

	/* Property Type */
		$('<div class="da_property-type"><label class="container">Single Family<input type="radio" name="da_radio" value="SingleFamily"><span class="checkmark"></span></label><label class="container">Multi Family<input type="radio" name="da_radio" value="MultiFamily"><span class="checkmark"></span></label><label class="container">Condo/Town Home<input type="radio" name="da_radio" value="Condo"><span class="checkmark"></span></label><label class="container">Mobile Home<input type="radio" name="da_radio" value="MobileHome"><span class="checkmark"></span></label></div>').insertAfter('#property_type');
		document.querySelectorAll('.da_property-type input').forEach(function(el, i, arr) {
			el.addEventListener("change", function() {
				document.querySelector('#property_type').value = el.value;
				console.log('value', el.value);
				console.log(document.querySelector('#property_type').value);
					document.querySelector('.da_step-2 .stepBtn').click();
			});
		});

	/* Timeframe */
		$('<div class="da_timeframe"><label class="container">ASAP<input type="radio" name="da_radio2" value="1"><span class="checkmark"></span></label><label class="container">Within 3 Months<input type="radio" name="da_radio2" value="2"><span class="checkmark"></span></label><label class="container">Within 6 Months<input type="radio" name="da_radio2" value="6"><span class="checkmark"></span></label><label class="container">I\'m in no rush<input type="radio" name="da_radio2" value="5"><span class="checkmark"></span></label></div>').insertAfter('#timeframe');
		document.querySelectorAll('.da_timeframe input').forEach(function(el, i, arr) {
			el.addEventListener("change", function() {
				document.querySelector('#timeframe').value = el.value;
				console.log('value', el.value);
				console.log(document.querySelector('#timeframe').value);
				document.querySelector('.da_step-3 .stepBtn').click();
			});
		});

	/* Occupancy */
		$('<div class="da_occupancy"><label class="container">Owner Occupied<input type="radio" name="da_radio3" value="1"><span class="checkmark"></span></label><label class="container">Tenant Occupied<input type="radio" name="da_radio3" value="2"><span class="checkmark"></span></label><label class="container">Vacant<input type="radio" name="da_radio3" value="3"><span class="checkmark"></span></label></div>').insertAfter('#occupancy');
		document.querySelectorAll('.da_occupancy input').forEach(function(el, i, arr) {
			el.addEventListener("change", function() {
				document.querySelector('#occupancy').value = el.value;
				console.log('value', el.value);
				console.log(document.querySelector('#occupancy').value);
					document.querySelector('.da_step-4 .stepBtn').click();
			});
		});

	/* Months Behind */
		$('<div class="da_months-behind"><label class="container">No<input type="radio" name="da_radio4" value="0"><span class="checkmark"></span></label><label class="container">Yes, 1 month<input type="radio" name="da_radio4" value="1"><span class="checkmark"></span></label><label class="container">Yes, 2 months<input type="radio" name="da_radio4" value="2"><span class="checkmark"></span></label><label class="container">Yes, 3+ months<input type="radio" name="da_radio4" value="3"><span class="checkmark"></span></label></div>').insertAfter('#months_behind');
		document.querySelectorAll('.da_months-behind input').forEach(function(el, i, arr) {
			el.addEventListener("change", function() {
				document.querySelector('#months_behind').value = el.value;
				console.log('value', el.value);
				console.log(document.querySelector('#months_behind').value);
					document.querySelector('.da_step-5 .stepBtn').click();
			});
		});


});
