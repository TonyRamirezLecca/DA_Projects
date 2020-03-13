/* CUSTOM CODE */
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

	jQuery('#property_type').wrap('<div class="da_wrapper"><div class="da_property-type da_section"><p>Property Type?</p></div><div class="da_timeframe da_section"><p>How soon would you like to sell?</p></div><div class="da_occupancy da_section"><p>Occupancy?</p></div><div class="da_months-behind da_section"><p>Behind on mortgage payments?</p></div></div>');

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

	function dropDownSelected() {
			if (document.querySelector('#property_type').value !== '' && document.querySelector('#timeframe').value !== '' && document.querySelector('#occupancy').value !== '' && document.querySelector('#months_behind').value !== '') {
				document.querySelector('.da_hide-btn').click();
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

	document.querySelectorAll('#property_type, #timeframe, #occupancy, #months_behind').forEach(function(el, i, arr) {
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

	document.querySelector('.da_step-btn').addEventListener("click", function() {
		errorCheck();
	});


});
