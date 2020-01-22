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
whenExists('.vc_row[data-section="11"]', function () {
	/* JSON OBJECTS */
		var categories = {
			shades : {
				category : 'shades',
				link : 'https://lacustomblinds.com/products/shades/', 
				img : 'https://c8r3p6k7.stackpathcdn.com/wp-content/uploads/2019/04/featured-shades-bg-with-badge.jpg',
				text: 'We carry a wide range of window shades: Roller shades, roman shades, sheer horizontal shades, cellular shades, sheer vertical shades, and woven wood shades. LA Custom Blinds offers free in home consultations, free estimates, and free installation on window shades in Los Angeles, Orange County, and surrounding areas!',
			},
			blinds : {
				category : 'blinds',
				link : 'https://lacustomblinds.com/products/blinds/',
				img : 'https://c8r3p6k7.stackpathcdn.com/wp-content/uploads/2019/04/featured-blinds-bg.jpg',
				text: 'From the prosaic to the exceptional, at LA Custom Blinds we carry a comprehensive collection of window blinds. We carry the famous Hunter Douglas blinds, as well as our own private label. Our library of blinds goes from A to Z: classic aluminum, low priced faux wood, authentic wood, easy-maintenance verticals as well as the elegant sliding panel blinds. With an impressive range of styles, we have blinds to suit any room and decor.',
			},
			motorized : {
				category : 'motorized',
				link : 'https://lacustomblinds.com/products/motorization/',
				img : 'https://c8r3p6k7.stackpathcdn.com/wp-content/uploads/2019/04/featured-motorized-bg.jpg',
				text: 'We have partnered with leading motorization vendors to enhance your favorite L.A. Blinds products by adding state-of-the-art controls. With the addition of motorized blinds or shades in your home, safety will be improved exponentially for your children and pets.',
			},
			shutters : {
				category : 'shutters',
				link : 'https://lacustomblinds.com/products/shutters/',
				img : 'https://c8r3p6k7.stackpathcdn.com/wp-content/uploads/2019/04/featured-shutters-bg.jpg',
				text: 'With 40 years of experience serving our community, you can count on us for professional shutter service. Custom shutters are difficult to make as well as install, so it should be left to a professional. We can make the whole process a breeze, helping you measure windows, select a style, and even will install them for you.',
			},
			drapery : {
				category : 'drapery',
				link : 'https://lacustomblinds.com/products/drapery/',
				img : 'https://c8r3p6k7.stackpathcdn.com/wp-content/uploads/2019/04/featured-drapery-bg.jpg',
				text: 'Our LA Custom Blinds decorator will help you select from thousands of our beautiful fabrics sourced from around the world. Whether accenting with drapery panels or decorating with full custom drapery, our decorators will help you express your individual style. Wether you desire a traditional or contemporary look, the possibilites are endless.',
			},
			panels : {
				category : 'panels',
				link : 'https://lacustomblinds.com/products/panels/',
				img : 'https://c8r3p6k7.stackpathcdn.com/wp-content/uploads/2019/04/featured-panels-bg.jpg',
				text: 'Perfect for the large sliding doorwalls and even bigger living room windows. This product is perfect for oversized windows. Sliding panels are also used quite often for room dividers. We excel at customizing your slider to fit your needs',
			},
			cordless : {
				category: 'cordless',
				link : 'https://lacustomblinds.com/products/',
				img : 'https://c8r3p6k7.stackpathcdn.com/wp-content/uploads/2019/04/featured-cordless-bg.jpg',
				text: 'Shades are a simple and practical window treatment with product choices and features that range from the highly decorative to simply functional. Your LA Custom Blinds decorator will work with you to select from hundreds of fabrics, colors, prints and textures ranging from sunscreens and textures to blackout material. These are fit for your homes every need',
			}
		}
		var darkBackground = '<div class="da_dark-background"></div>';

	jQuery('.vc_row[data-section="8"]').html('<div class="da_category-ctn"><h1 class="da_category-header">SHOP BY CATEGORY</h1><div class="da_categories da_desktop"></div></div>');
	Object.values(categories).forEach((el, i, arr) => {
		if ((i+1) % 2 == 1) { //is odd
			jQuery(`<div class="da_category"><div class="da_category-inner-wrapper"><div class="da_category-img">${darkBackground}<img src="${el.img}"/></div><div class="da_category-text"><h4>${el.category}</h4><p>${el.text}</p><a href="${el.link}">VIEW COLLECTION</a></div></div></div>`).appendTo('.da_desktop');
		}
		else {
			jQuery(`<div class="da_category"><div class="da_category-inner-wrapper"><div class="da_category-text"><h4>${el.category}</h4><p>${el.text}</p><a href="${el.link}">VIEW COLLECTION</a></div><div class="da_category-img">${darkBackground}<img src="${el.img}"/></div></div></div>`).appendTo('.da_desktop');
		}
	});
});



