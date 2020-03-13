/* CUSTOM CODE */
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
			clearInterval(interval);
			callback();
		}
	}, 100);
}
whenExists('article, .title, .subtitle', function () {
	var $ = jQuery;
	if (document.querySelector('body.is-mobile')) {
		console.log('mobile');
	}
	else {

		console.log('desktop');
		if ( !$('#da-title').length ) {
			console.log('desktop in')
			var page = location.href
			var	title = $('h1.title').html();
			var	subtitle = $('h2.subtitle').html();
			//REARRANGE
			$('#our-team > .wi-column').wrapAll('<div id=da-props ></div>');
			$('#da-props').prependTo('#wi-content > a[href="#pricing"] + div.container');
			$('#wi-content > div:first-child > article > span').appendTo('#da-props');
			$('#wi-content > a[href="#pricing"] > div .wi-fullwidth-content > div').append('<h1 id=da-title>' + title + '</h1><h2 id=da-subtitle>' + subtitle + '</h2>');
			if ( page.indexOf('photos-to-digital') != -1 ) {
				$('#wi-content > a[href="#pricing"] > div').append('<iframe src="https://www.youtube.com/embed/9qiGkc4qX74?start=3&autoplay=1&loop=1&playlist=9qiGkc4qX74&mute=1&showinfo=0&controls=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
			} else if ( page.indexOf('photo-film-to-digital') != -1 ) {
				$('#wi-content > a[href="#pricing"] > div').append('<iframe src="https://www.youtube.com/embed/rwXSrETgs1Q?start=3&autoplay=1&loop=1&playlist=rwXSrETgs1Q&mute=1&showinfo=0&controls=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
			} else if ( page.indexOf('bound-books-to-digital') != -1 ) {
				$('#wi-content > a[href="#pricing"] > div').append('<iframe src="https://www.youtube.com/embed/RWjNZHBNcS8?start=3&autoplay=1&loop=1&playlist=RWjNZHBNcS8&mute=1&showinfo=0&controls=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
			} else if ( page.indexOf('video-tapes-to-digital') != -1 ) {
				$('#wi-content > a[href="#pricing"] > div').append('<iframe src="https://www.youtube.com/embed/TrRJdIsbQxs?start=4&autoplay=1&loop=1&playlist=TrRJdIsbQxs&mute=1&showinfo=0&controls=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
			} else if ( page.indexOf('home-movies-to-digital') != -1 ) {
				$('#wi-content > a[href="#pricing"] > div').append('<iframe src="https://www.youtube.com/embed/S2SLg36biDc?start=13&autoplay=1&loop=1&playlist=S2SLg36biDc&mute=1&showinfo=0&controls=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
			} else if ( page.indexOf('audio-to-digital') != -1 ) {
				$('#wi-content > a[href="#pricing"] > div').append('<iframe src="https://www.youtube.com/embed/UwGRf4mg0QE?autoplay=1&loop=1&playlist=UwGRf4mg0QE&mute=1&showinfo=0&controls=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
			}
		}

		/* VP SECTION */
		$(`<div class="da_vp-section">
		<div class="da_vp-wrapper">
			<h4 class="da_vp"><i class="fas fa-photo-video da_icon"/>OVER 15 MILLION</br> MEMORIES PRESERVED</h4>
			<h4 class="da_vp"><i class="fas fa-certificate da_icon"/>OVER 30 YEARS</br> SERVING LOCAL FAMILIES</h4>
		</div>
		<div class="da_vp-subtext">"Money very well spent. We spent 4 hours the first night after receiving the digitized videos reminiscing and watching things we hadn’t ever seen!! Thank you!" -Shannon</div>
		</div>`).insertAfter('.da_hero-section');

		/* Table */
		$('div#wi-content > a[href="#pricing"]').hide();
		$('<div class="da_table-section"><div class="da_table-title"><div class="da_left-bar"></div><h2 class="da_title-text">WHY FAMILIES CHOOSE US</h2><div class="da_right-bar"></div></div><table class="da_table"><tr><th>WHAT OUR CLIENTS</br> CARE ABOUT</th><th>HOW WE HANDLE THINGS AT EVERPRESENT</th><th>HOW MOST OTHERS HANDLE THINGS</th></tr></table></div>').insertBefore('#wi-content > .container:nth-child(3)'); //div#wi-content > a[href="#pricing"]
		var table = [
			{
				desc: 'Safe handling',
				ever: 'Convenient local drop-off and home pickup options; barcode tracking; all orders handled by our staff in our vehicles; local digitizing facility secured by video cameras, ID cards',
				comp: 'By mail only'
			},
			{
				desc: 'Organization',
				ever: 'Written labels transcribed for you into digital filenames and DVD labels and menus',
				comp: 'No transcription offered, or you are required to manually enter labels online'
			},
			{
				desc: 'Pricing',
				ever: 'Standard package includes USB or DVD and 2.5 hours of footage',
				comp: 'List prices don’t include DVD/USB; many services cut off transfers at the 2-hr mark; look out for  surcharges for tapes over 30 minutes'
			},
			{
				desc: 'DVDs & Extra Copies',
				ever: 'Just $5/disc for extra copies; you can choose to just get extra copies for the most important tapes; scratch resistant, gold archival DVD upgrades available',
				comp: 'Average price of $10-12 for extra copies; no DVD upgrade options; all-or-nothing choices on extra copy packages'
			},
			{
				desc: 'Turnaround Time',
				ever: 'Rush orders and guaranteed delivery dates available',
				comp: 'Wait for box to arrive; no rush option; no guarantees; 4-8 week average turnaround time regardless of order size'
			},
			{
				desc: 'Troubleshooting',
				ever: 'We handle moldy tapes, broken tape repairs, rare formats, foreign formats',
				comp: 'Non-standard items may be returned un-digitized'
			},
			{
				desc: 'Digital Downloads',
				ever: 'Included free with every order for six months',
				comp: 'Not always included; look out for auto-enrollment in paid storage after 30-60 days'
			},
			{
				desc: 'Editing Options',
				ever: 'Custom, affordable editing available, ranging from simple cuts to extensive event slideshows or mini-documentaries',
				comp: 'No editing available'
			},
			{
				desc: 'Privacy & Transparency',
				ever: 'We will take credit cards over the phone or accept checks; 50% deposit upfront; we only bill for the work we do',
				comp: 'Credit cards must be entered online; full payment upfront; packages may force you to pay for 10 tapes when you only have 7'
			}
		]
		table.map((el) => {
			$(`<tr><td>${el.desc}</td><td>${el.ever}</td><td>${el.comp}</td></tr>`).appendTo('.da_table');
		});
		$('.maxbutton-12.maxbutton.maxbutton-national').clone().addClass('da_clone-btn').insertAfter('.da_table');
	}
});

