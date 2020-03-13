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
whenExists('#mega-menu-item-11235 > ul, #mega-menu-item-11235 > a', function () {

	if ($('.da_menu').length) return;

	var da = {
		massachusetts: {
			'Massachusetts': 'https://everpresent.com/our-locations/#MA',
			'Newton, MA': 'https://everpresent.com/our-locations/newton-ma/',
			'Ashburnham, MA': 'https://everpresent.com/our-locations/ashburnham-ma/',
			'Back Bay & South End': 'https://everpresent.com/our-locations/boston-back-bay-ma/',
			'Braintree, MA': 'https://everpresent.com/our-locations/south-shore-ma-everpresent/',
			'Burlington, MA': 'https://everpresent.com/our-locations/burlington-massachusetts/',
			'Cambridge/Somerville': 'https://everpresent.com/our-locations/cambridge-ma/',
			'Dartmouth, MA': 'https://everpresent.com/our-locations/new-bedford-ma/',
			'Falmouth, MA': 'https://everpresent.com/our-locations/cape-cod-ma/',
			'Manchester-by-the-Sea': 'https://everpresent.com/our-locations/manchester-by-the-sea-ma/',
			'Natick, MA': 'https://everpresent.com/our-locations/metro-west/',
			'North Attleborough, MA': 'https://everpresent.com/our-locations/north-attleborough-ma/',
			'Northborough, MA': 'https://everpresent.com/our-locations/northborough-ma/',
			'Shrewsbury, MA': 'https://everpresent.com/our-locations/shrewsbury-ma/',
			'Northampton, MA': 'https://everpresent.com/our-locations/western-massachusetts/'
		},
		newhampshire: {
			'New Hampshire': 'https://everpresent.com/our-locations/#NH',
			'Manchester, NH': 'https://everpresent.com/our-locations/manchester-nh/',
			'Portsmouth, NH': 'https://everpresent.com/our-locations/portsmouth-nh/',
			'Salem, NH': 'https://everpresent.com/our-locations/salem-new-hampshire/',
			'Lebanon, NH': 'https://everpresent.com/our-locations/upper-valley-vt-nh/'
		},
		vermont: {
			'Vermont': 'https://everpresent.com/our-locations/#NH',
			'Lebanon, VT': 'https://everpresent.com/our-locations/upper-valley-vt-nh/',
			'So. Burlington, VT': 'https://everpresent.com/our-locations/northern-vermont/'
		},
		connecticut: {
			'Connecticut': 'https://everpresent.com/our-locations/#CT',
			'Darien, CT': 'https://everpresent.com/our-locations/fairfield-county-ct/',
			'Hartford, CT': 'https://everpresent.com/our-locations/hartford-connecticut/',
			'New Haven, CT': 'https://everpresent.com/our-locations/southern-ct/',
			'New London, CT': 'https://everpresent.com/our-locations/new-london-ct/'
		},
		rhodeisland: {
			'Rhode Island': 'https://everpresent.com/our-locations/#MA',
			'Providence, RI': 'https://everpresent.com/our-locations/providence-ri/'
		},
		newyork: {
			'New York': 'https://everpresent.com/our-locations/#NY',
			'Astoria/Queens, NY': 'https://everpresent.com/our-locations/queens-new-york/',
			'Brooklyn, NY': 'https://everpresent.com/our-locations/brooklyn-ny/',
			'Chelsea/NYC': 'https://everpresent.com/our-locations/manhattan-ny/',
			'Hawthorne, NY': 'https://everpresent.com/our-locations/westchester-county-ny/',
			'Hudson Valley, NY': 'https://everpresent.com/our-locations/hudson-valley-ny/',
			'Massapequa Park, NY': 'https://everpresent.com/our-locations/massapequa-park-ny/',
			'New Rochelle, NY': 'https://everpresent.com/our-locations/new-rochelle-ny/',
			'Oyster Bay, NY': 'https://everpresent.com/our-locations/oyster-bay-ny/',
			'Riverhead, NY': 'https://everpresent.com/our-locations/riverhead-ny/',
			'Staten Island, NY': 'https://everpresent.com/our-locations/staten-island-ny/',
			'Troy, NY': 'https://everpresent.com/our-locations/capital-district-ny/'
		},
		newjersey: {
			'New Jersey': 'https://everpresent.com/our-locations/#NJ',
			'Highland Park, NJ': 'https://everpresent.com/our-locations/middlesex-county-nj/',
			'Montclair, NJ': 'https://everpresent.com/our-locations/essex-county-nj/',
			'Morris Plains, NJ': 'https://everpresent.com/our-locations/morris-county-nj/',
			'Pompton Plains, NJ': 'https://everpresent.com/our-locations/northwest-new-jersey/',
			'Waldwick, NJ': 'https://everpresent.com/our-locations/bergen-county-nj/',
			'Warren, NJ': 'https://everpresent.com/our-locations/somerset-county-nj/'
		},
		maine: {
			'Maine': 'https://everpresent.com/our-locations/#NH',
			'Portland, ME': 'https://everpresent.com/our-locations/portland-me/'
		}
	}

	/* New Menu UL container*/
	$('<ul class="da_menu" style="display: none;"></ul>').appendTo('#mega-menu-item-11235');

	Object.values(da).forEach((el, i) => {
		Object.entries(el).forEach((element, j) => {
			if (j == 0) {
				$(`<li><div class="da_sub-section" state="${element[0]}">${element[0]}</div><ul style="display: none" list-item="${i+1}"></ul></li>`).appendTo('.da_menu');	
				return;
			}
			$(`<li><a href="${element[1]}">${element[0]}</a>`).appendTo(`ul[list-item="${i+1}"]`);	
		});
	});

	/* Hover effect for desktop menu */
	if (window.innerWidth >= 681) {
		$('#mega-menu-item-11235').hover(function() { 
			$('.da_menu').fadeIn();
		}, function() {
			$('.da_menu').fadeOut(0);
		});
		Object.values(da).forEach((el, i) => {
			Object.entries(el).forEach((element, j) => {
				if (j == 0) {
					$(`.da_sub-section[state="${element[0]}"]`).click(() => {
						location.href = element[1];
					});
					return;
				}
			});
		});
	}

	/*  */
	if (window.innerWidth < 681) {
		$('#mega-menu-item-11235 > a').addClass('da_rotate-arrow');
		$('#mega-menu-item-11235 > a').addClass('da_rotate-arrow-temp');
		$('#mega-menu-item-11235 > a').click(() => {
			event.preventDefault();
			$('.da_menu').slideToggle();
			$('#mega-menu-item-11235 > a').removeClass('da_rotate-arrow-temp');
			$('#mega-menu-item-11235 > a').toggleClass('da_rotate-arrow');
		});
		$('.da_menu > li').click(function() {
		});

		Object.values(da).forEach((el, i) => {
			Object.entries(el).forEach((element, j) => {
				if (j == 0) {
					$(`.da_sub-section[state="${element[0]}"]`).click(function() {
						if ($(this).hasClass('da_active-sub-section')) {
							console.log('click! 1');
							location.href = element[1];
						}
						else {
							console.log('click! 2');
							$(this).next().slideDown();
							$(this).addClass('da_active-sub-section');
						}
					});
					return;
				}
			});
		});
	}


});
