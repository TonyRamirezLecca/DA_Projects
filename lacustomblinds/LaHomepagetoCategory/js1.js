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
whenExists('.vc_row[data-section="11"]', function () {
	console.log('da_test');
	/* JSON OBJECTS */
		var categories = {
			shades : {
				category : 'shades',
				link : 'https://lacustomblinds.com/products/shades/', 
				img : 'https://c8r3p6k7.stackpathcdn.com/wp-content/uploads/2019/04/featured-shades-bg-with-badge.jpg'
			},
			blinds : {
				category : 'blinds',
				link : 'https://lacustomblinds.com/products/blinds/',
				img : 'https://c8r3p6k7.stackpathcdn.com/wp-content/uploads/2019/04/featured-blinds-bg.jpg'
			},
			motorized : {
				category : 'motorized',
				link : 'https://lacustomblinds.com/products/motorization/',
				img : 'https://c8r3p6k7.stackpathcdn.com/wp-content/uploads/2019/04/featured-motorized-bg.jpg'
			},
			shutters : {
				category : 'shutters',
				link : 'https://lacustomblinds.com/products/shutters/',
				img : 'https://c8r3p6k7.stackpathcdn.com/wp-content/uploads/2019/04/featured-shutters-bg.jpg'
			},
			drapery : {
				category : 'drapery',
				link : 'https://lacustomblinds.com/products/drapery/',
				img : 'https://c8r3p6k7.stackpathcdn.com/wp-content/uploads/2019/04/featured-drapery-bg.jpg'
			},
			panels : {
				category : 'panels',
				link : 'https://lacustomblinds.com/products/panels/',
				img : 'https://c8r3p6k7.stackpathcdn.com/wp-content/uploads/2019/04/featured-panels-bg.jpg'
			},
			cordless : {
				category: 'cordless',
				link : 'https://lacustomblinds.com/products/',
				img : 'https://c8r3p6k7.stackpathcdn.com/wp-content/uploads/2019/04/featured-cordless-bg.jpg'
			}
		}
		var darkBackground = '<div class="da_dark-background"></div>';

	jQuery('.vc_row[data-section="8"]').html('<div class="da_category-ctn"><h1 class="da_category-header">SHOP BY CATEGORY</h1><div class="da_categories da_desktop"><div class="da_row1"></div><div class="da_row2"></div></div><div class="da_categories da_mobile"><div class="da_row1"></div><div class="da_row2"></div></div></div>');
	jQuery('.vc_row[data-section="9"]').remove();
	jQuery('.vc_row[data-section="10"]').remove();
	jQuery('.vc_row[data-section="11"]').remove();
	jQuery('.vc_row[data-section="13"]').remove();
	jQuery('.vc_row[data-section="14"]').remove();

	const category = Object.values(categories);

	/* Desktop */
	category.forEach((el, i, arr) => {
		if (i < 4) {
			jQuery(`<a href="${el.link}" class="da_category"><div class="da_category-img">${darkBackground}<img src="${el.img}"/></div><h4>${el.category}</h4></a>`).appendTo('.da_desktop .da_row1');
		}
		else {
			jQuery(`<a href="${el.link}" class="da_category"><div class="da_category-img">${darkBackground}<img src="${el.img}"/></div><h4>${el.category}</h4></a>`).appendTo('.da_desktop .da_row2');
		}
	});

	/* Mobile */
	category.forEach((el, i, arr) => {
		if ((i+1) % 2 == 1) {
			jQuery(`<a href="${el.link}" class="da_category"><div class="da_category-img">${darkBackground}<img src="${el.img}"/></div><h4>${el.category}</h4></a>`).appendTo('.da_mobile .da_row1');
		}
		else {
			jQuery(`<a href="${el.link}" class="da_category"><div class="da_category-img">${darkBackground}<img src="${el.img}"/></div><h4>${el.category}</h4></a>`).appendTo('.da_mobile .da_row2');
		}
	});

});



