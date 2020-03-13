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
whenExists('.submitbutton, .step:nth-child(22)', function () {
	console.log('disruptive advertising');

	//Add Classes
		document.querySelectorAll('.step').forEach(function(el, i, arr) {
			var stepNum = i + 1;
			el.classList.add('da_step-' + stepNum);
		});
		document.querySelector('.da_step-2 .stepBtn').classList.add('da_hide-btn');
		document.querySelector('.da_step-2 .stepBtn').classList.remove('stepBtn');
	$('<a class="da_step-btn">NEXT <i class="fa fa-arrow-right fa-lg"></li></a>').insertAfter('.da_step-2 .da_hide-btn');

	$('#property_type').wrap('<div class="da_wrapper"><div class="da_row"><div class="da_property-type da_section"><p>Property Type?</p></div><div class="da_timeframe da_section"><p>How soon would you like to sell?</p></div></div><div class="da_row"><div class="da_occupancy da_section"><p>Occupancy?</p></div><div class="da_months-behind da_section"><p>Behind on mortgage payments?</p></div></div></div>');

	$('#property_type').appendTo('.da_property-type');
	$('#timeframe').appendTo('.da_timeframe');
	$('#occupancy').appendTo('.da_occupancy');
	$('#months_behind').appendTo('.da_months-behind');

	$('#property_type_error').html('Please select property type').hide();
	$('#timeframe_error').html('Please select timeframe').insertAfter('#property_type_error').hide();
	$('#occupancy_error').html('Please select occupancy').insertAfter('#property_type_error').hide();
	$('#months_behind_error').html('Please select months behind').insertAfter('#property_type_error').hide();

	document.querySelector('.da_step-3').remove();
	document.querySelector('.da_step-4').remove();
	document.querySelector('.da_step-5').remove();

	/* Property Type */
		$('<div class="da_property-type"><label class="container">Single Family<input type="radio" name="da_radio" value="SingleFamily"><span class="checkmark"></span></label><label class="container">Multi Family<input type="radio" name="da_radio" value="MultiFamily"><span class="checkmark"></span></label><label class="container">Condo/Town Home<input type="radio" name="da_radio" value="Condo"><span class="checkmark"></span></label><label class="container">Mobile Home<input type="radio" name="da_radio" value="MobileHome"><span class="checkmark"></span></label></div>').insertAfter('#property_type');
		document.querySelectorAll('.da_property-type input').forEach(function(el, i, arr) {
			el.addEventListener("change", function() {
				document.querySelector('#property_type').value = el.value;
			});
		});

	/* Timeframe */
		$('<div class="da_timeframe"><label class="container">ASAP<input type="radio" name="da_radio2" value="1"><span class="checkmark"></span></label><label class="container">Within 3 Months<input type="radio" name="da_radio2" value="2"><span class="checkmark"></span></label><label class="container">Within 6 Months<input type="radio" name="da_radio2" value="6"><span class="checkmark"></span></label><label class="container">I\'m in no rush<input type="radio" name="da_radio2" value="5"><span class="checkmark"></span></label></div>').insertAfter('#timeframe');
		document.querySelectorAll('.da_timeframe input').forEach(function(el, i, arr) {
			el.addEventListener("change", function(){
				document.querySelector('#timeframe').value = el.value;
			});
		});

	/* Occupancy */
		$('<div class="da_occupancy"><label class="container">Owner Occupied<input type="radio" name="da_radio3" value="1"><span class="checkmark"></span></label><label class="container">Tenant Occupied<input type="radio" name="da_radio3" value="2"><span class="checkmark"></span></label><label class="container">Vacant<input type="radio" name="da_radio3" value="3"><span class="checkmark"></span></label></div>').insertAfter('#occupancy');
		document.querySelectorAll('.da_occupancy input').forEach(function(el, i, arr) {
			el.addEventListener("change", function() {
				document.querySelector('#occupancy').value = el.value;
			});
		});

	/* Months Behind */
		$('<div class="da_months-behind"><label class="container">No<input type="radio" name="da_radio4" value="0"><span class="checkmark"></span></label><label class="container">Yes, 1 month<input type="radio" name="da_radio4" value="1"><span class="checkmark"></span></label><label class="container">Yes, 2 months<input type="radio" name="da_radio4" value="2"><span class="checkmark"></span></label><label class="container">Yes, 3+ months<input type="radio" name="da_radio4" value="3"><span class="checkmark"></span></label></div>').insertAfter('#months_behind');
		document.querySelectorAll('.da_months-behind input').forEach(function(el, i, arr) {
			el.addEventListener("change", function() {
				document.querySelector('#months_behind').value = el.value;
			});
		});

	function dropDownSelected() {
			if (document.querySelector('#property_type').value !== '' && document.querySelector('#timeframe').value !== '' && document.querySelector('#occupancy').value !== '' && document.querySelector('#months_behind').value !== '') {
				document.querySelector('.da_hide-btn').click();
			}
			else {
				console.log('not working yet');
			}
	}
	function errorCheck() {
		$('#property_type_error').hide();
		$('#timeframe_error').hide();
		$('#occupancy_error').hide();
		$('#months_behind_error').hide();
		$('#property_type').removeClass('field_error');
		$('#timeframe').removeClass('field_error');
		$('#occupancy').removeClass('field_error');
		$('#months_behind').removeClass('field_error');
		if (document.querySelector('#property_type').value == '') {
			$('#property_type_error').show();
			$('#property_type').addClass('field_error');
		} else if (document.querySelector('#timeframe').value == '') {
			$('#timeframe_error').show();
			$('#timeframe').addClass('field_error');
		} else if (document.querySelector('#occupancy').value == '') {
			$('#occupancy_error').show();
			$('#occupancy').addClass('field_error');
		} else if (document.querySelector('#months_behind').value == '') {
			$('#months_behind_error').show();
			$('#months_behind').addClass('field_error');
		}
		else {
			document.querySelector('.da_hide-btn').click();
		}
	}


	document.querySelectorAll('.da_property-type label, .da_timeframe label, .da_occupancy label, .da_months-behind label').forEach(function(el, i, arr) {
		el.addEventListener("change", function() {
			if (document.querySelector('#property_type').value !== '') {
				$('#property_type_error').hide();
				$('#property_type').removeClass('field_error');
			}
			if (document.querySelector('#timeframe').value !== '') {
				$('#timeframe_error').hide();
				$('#timeframe').removeClass('field_error');
			} 
			if (document.querySelector('#occupancy').value !== '') {
				$('#occupancy_error').hide();
				$('#occupancy').removeClass('field_error');
			}
			if (document.querySelector('#months_behind').value !== '') {
				$('#months_behind_error').hide();
				$('#months_behind').removeClass('field_error');
			}
			dropDownSelected();
		});
	});

	document.querySelector('.da_step-btn').addEventListener("click", () => {
		errorCheck();
	});

});
