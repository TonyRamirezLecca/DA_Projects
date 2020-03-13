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
whenExists('article, .title, .subtitle', function () {
	if (document.querySelector('body.is-mobile')) {
		/* HomepageScreen */
		$('#wi-content > .container:nth-child(1) > article > img:first-child').hide();
		$(`<div class="da_hero-section">
				<div class="da_hero-ctn">
				<div class="da_hero-text-ctn">
				<h1>WELCOME. WE CAN'T WAIT TO DIGITALLY PRESERVE YOUR HOME MOVIES SO YOU CAN ENJOY THEM AGAIN.</h1>
				<h6>WE ARE PROUD TO BE THE CONVENIENT, TOP-QUALITY, LOCAL OPTION FOR FAMILIES IN THE NORTHEAST.</h6>
				<a class="da_cta" href="#pricing">GET A FREE ESTIMATE</a>
				</div>
				<img class="da_hero-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/everpresent/video-tapes-comp-advantage/vhs.png"/>
			</div>
			</div>`).prependTo('#wi-content');
		$('#our-team').hide();

		/* VP SECTION */
		$(`<div class="da_vp-section">
		<div class="da_vp-wrapper">
			<h4 class="da_vp">OVER 15 MILLION</br> MEMORIES PRESERVED</h4>
			<h4 class="da_vp">OVER 30 YEARS</br> SERVING LOCAL FAMILIES</h4>
		</div>
		<div class="da_vp-subtext">"Money very well spent. We spent 4 hours the first night after receiving the digitized videos reminiscing and watching things we hadn’t ever seen!! Thank you!" -Shannon</div>
		</div>`).insertAfter('.da_hero-section');

		/* Table */
		$('<div class="da_table-section" style="margin-bottom: 20px;"><div class="da_table"><div class="da_description-section"><h4>WHY FAMILIES CHOOSE US</h4></div><div class="da_everpresent-section"><h4>EVERPRESENT</h4></div><div class="da_competitors-section"><h4>COMPETITORS</h4></div></div></div>').insertAfter('.da_vp-section');
		var table = [
			{
				desc: 'Local drop-off and at-home pickup options',
				ever: '<img src="https://static.disruptive.co/everpresent/video-tapes-comp-advantage/check+1.png" class="da_checkmark"/>',
				comp: 'by mail only'
			},
			{
				desc: 'Safe Handling with barcode tracking',
				ever: '<img src="https://static.disruptive.co/everpresent/video-tapes-comp-advantage/check+1.png" class="da_checkmark"/>',
				comp: '<span class="da_x">X</span>'
			},
			{
				desc: 'Label transcription, custom filenames',
				ever: '<img src="https://static.disruptive.co/everpresent/video-tapes-comp-advantage/check+1.png" class="da_checkmark"/>',
				comp: '<span class="da_x">X</span>'
			},
			{
				desc: '2.5 hours of footage included',
				ever: '<img src="https://static.disruptive.co/everpresent/video-tapes-comp-advantage/check+1.png" class="da_checkmark"/>',
				comp: 'additional fees'
			},
			{
				desc: '$5 Extra copies & DVDs',
				ever: '<img src="https://static.disruptive.co/everpresent/video-tapes-comp-advantage/check+1.png" class="da_checkmark"/>',
				comp: '$10-12, all-or-nothing bundles'
			},
			{
				desc: 'Guaranteed Delivery Dates',
				ever: '<img src="https://static.disruptive.co/everpresent/video-tapes-comp-advantage/check+1.png" class="da_checkmark"/>',
				comp: '<span class="da_x">X</span>'
			},
			{
				desc: 'Rush orders',
				ever: '<img src="https://static.disruptive.co/everpresent/video-tapes-comp-advantage/check+1.png" class="da_checkmark"/>',
				comp: '<span class="da_x">X</span>'
			},
			{
				desc: 'Custom troubleshooting (repairs, foreign formats)',
				ever: '<img src="https://static.disruptive.co/everpresent/video-tapes-comp-advantage/check+1.png" class="da_checkmark"/>',
				comp: '<span class="da_x">X</span>'
			},
			{
				desc: 'Free Digital Downloads',
				ever: '<img src="https://static.disruptive.co/everpresent/video-tapes-comp-advantage/check+1.png" class="da_checkmark"/>',
				comp: '<span class="da_x">X</span>'
			},
			{
				desc: 'Custom editing',
				ever: '<img src="https://static.disruptive.co/everpresent/video-tapes-comp-advantage/check+1.png" class="da_checkmark"/>',
				comp: '<span class="da_x">X</span>'
			},
			{
				desc: 'Customizable packages based on project size',
				ever: '<img src="https://static.disruptive.co/everpresent/video-tapes-comp-advantage/check+1.png" class="da_checkmark"/>',
				comp: '<span class="da_x">X</span>'
			}
		]
		table.map((el) => {
			$(`<div>${el.desc}</div>`).appendTo('.da_description-section');
			$(`<div>${el.ever}</div>`).appendTo('.da_everpresent-section');
			$(`<div>${el.comp}</div>`).appendTo('.da_competitors-section');
		});
	}
	else {
		/* HomepageScreen */
		$('#wi-content > .container:nth-child(1)').addClass('da_hero-section').html(`
				<div class="da_hero-ctn">

				<div class="da_hero-text-ctn">
				<h1>WELCOME. WE CAN'T WAIT TO DIGITALLY PRESERVE YOUR HOME MOVIES SO YOU CAN ENJOY THEM AGAIN.</h1>
				<h6>WE ARE PROUD TO BE THE CONVENIENT, TOP-QUALITY, LOCAL OPTION FOR FAMILIES IN THE NORTHEAST.</h6>
				<a class="da_cta" href="#pricing">GET A FREE ESTIMATE</a>
				</div>

				<img class="da_hero-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/everpresent/video-tapes-comp-advantage/vhs.png"/>
			</div>
			`)

		/* VP SECTION */
		$(`<div class="da_vp-section">
		<div class="da_vp-wrapper">
			<h4 class="da_vp">OVER 15 MILLION</br> MEMORIES PRESERVED</h4>
			<h4 class="da_vp">OVER 30 YEARS</br> SERVING LOCAL FAMILIES</h4>
		</div>
		<div class="da_vp-subtext">"Money very well spent. We spent 4 hours the first night after receiving the digitized videos reminiscing and watching things we hadn’t ever seen!! Thank you!" -Shannon</div>
		</div>`).insertAfter('.da_hero-section');

		/* Table */
		$('div#wi-content > a[href="#pricing"]').hide();
		$('<div class="da_table-section"><div class="da_table"><div class="da_description-section"><h4>WHY FAMILIES CHOOSE US</h4></div><div class="da_everpresent-section"><h4>EVERPRESENT</h4></div><div class="da_competitors-section"><h4>COMPETITORS</h4></div></div></div>').insertAfter('div#wi-content > a[href="#pricing"]');
		var table = [
			{
				desc: 'Local drop-off and at-home pickup options',
				ever: '<img src="https://static.disruptive.co/everpresent/video-tapes-comp-advantage/check+1.png" class="da_checkmark"/>',
				comp: 'by mail only'
			},
			{
				desc: 'Safe Handling with barcode tracking',
				ever: '<img src="https://static.disruptive.co/everpresent/video-tapes-comp-advantage/check+1.png" class="da_checkmark"/>',
				comp: '<span class="da_x">X</span>'
			},
			{
				desc: 'Label transcription, custom filenames',
				ever: '<img src="https://static.disruptive.co/everpresent/video-tapes-comp-advantage/check+1.png" class="da_checkmark"/>',
				comp: '<span class="da_x">X</span>'
			},
			{
				desc: '2.5 hours of footage included',
				ever: '<img src="https://static.disruptive.co/everpresent/video-tapes-comp-advantage/check+1.png" class="da_checkmark"/>',
				comp: 'additional fees'
			},
			{
				desc: '$5 Extra copies & DVDs',
				ever: '<img src="https://static.disruptive.co/everpresent/video-tapes-comp-advantage/check+1.png" class="da_checkmark"/>',
				comp: '$10-12, all-or-nothing bundles'
			},
			{
				desc: 'Guaranteed Delivery Dates',
				ever: '<img src="https://static.disruptive.co/everpresent/video-tapes-comp-advantage/check+1.png" class="da_checkmark"/>',
				comp: '<span class="da_x">X</span>'
			},
			{
				desc: 'Rush orders',
				ever: '<img src="https://static.disruptive.co/everpresent/video-tapes-comp-advantage/check+1.png" class="da_checkmark"/>',
				comp: '<span class="da_x">X</span>'
			},
			{
				desc: 'Custom troubleshooting (repairs, foreign formats)',
				ever: '<img src="https://static.disruptive.co/everpresent/video-tapes-comp-advantage/check+1.png" class="da_checkmark"/>',
				comp: '<span class="da_x">X</span>'
			},
			{
				desc: 'Free Digital Downloads',
				ever: '<img src="https://static.disruptive.co/everpresent/video-tapes-comp-advantage/check+1.png" class="da_checkmark"/>',
				comp: '<span class="da_x">X</span>'
			},
			{
				desc: 'Custom editing',
				ever: '<img src="https://static.disruptive.co/everpresent/video-tapes-comp-advantage/check+1.png" class="da_checkmark"/>',
				comp: '<span class="da_x">X</span>'
			},
			{
				desc: 'Customizable packages based on project size',
				ever: '<img src="https://static.disruptive.co/everpresent/video-tapes-comp-advantage/check+1.png" class="da_checkmark"/>',
				comp: '<span class="da_x">X</span>'
			}
		]
		table.map((el) => {
			$(`<div>${el.desc}</div>`).appendTo('.da_description-section');
			$(`<div>${el.ever}</div>`).appendTo('.da_everpresent-section');
			$(`<div>${el.comp}</div>`).appendTo('.da_competitors-section');
		});
		$('<a class="da_cta" href="#pricing">GET A FREE ESTIMATE</a>').insertAfter('.da_table');
	}
});




