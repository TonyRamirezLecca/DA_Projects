<!-- Form Tracking for Google Analytics and Facebook -->
<script>

	var gform_6 = document.getElementById('#gform_6');
	var gform_8 = document.getElementById('#gform_8');
	var gform_11 = document.getElementById('#gform_11');
	var gform_4 = document.getElementById('#gform_4');

	gform_6.addEventListener('submit', function(event) {
		event.preventDefault();
		fbq('track', 'Lead', {
			content_name: 'Get Your Fair Cash Form',
			content_category: 'Form'
		});
		gtag('event', 'conversion', {'send_to': 'AW-868829438/HukxCK2y3cIBEP6RpZ4D'});
		ga('send', 'event', 'Get Your Fair Cash Form', 'submit', {
			hitCallback: function() {
				gform_6.submit();
			}
		});
	});

	gform_8.addEventListener('submit', function(event) {
		event.preventDefault();
		fbq('track', 'Lead', {
			content_name: 'Ask	Question Form',
			content_category: 'Form'
		});
		gtag('event', 'conversion', {'send_to': 'AW-868829438/2pR8CIy898IBEP6RpZ4D'});
		ga('send', 'event', 'Ask	Question Form', 'submit', {
			hitCallback: function() {
				gform_8.submit();
			}
		});
	});

	gform_11.addEventListener('submit', function(event) {
		event.preventDefault();
		fbq('track', 'Lead', {
			content_name: 'Mortgage Asuumption Form',
			content_category: 'Form'
		});
		gtag('event', 'conversion', {'send_to': 'AW-868829438/llzbCKm_7cIBEP6RpZ4D'});
		ga('send', 'event', 'Mortgage Asuumption Form', 'submit', {
			hitCallback: function() {
				gform_11.submit();
			}
		});
	});

	gform_4.addEventListener('submit', function(event) {
		event.preventDefault();
		fbq('track', 'Lead', {
			content_name: 'Contact Us Form',
			content_category: 'Form'
		});
		gtag('event', 'conversion', {'send_to': 'AW-868829438/Ag52COW_7cIBEP6RpZ4D'});
		ga('send', 'event', 'Contact Us Form', 'submit', {
			hitCallback: function() {
				gform_4.submit();
			}
		});
	});

</script>
