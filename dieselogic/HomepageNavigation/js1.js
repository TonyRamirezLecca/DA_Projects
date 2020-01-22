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

if ( (window.location.pathname == '/') || window.location.href.includes('/m-') || window.location.href.includes('/c-') || window.location.href.includes('/p-')) {
	whenExists('.mainNavItem.shopProducts', function () {

		/* Desktop */
		$('<div class="da_shop-product-dropdown"><div class="da_drop-down-ctn"><div class="da_left-side"><a class="da_dropdown-object" href="https://www.dieselogic.com/products.aspx"><h6>ALL PRODUCTS</h6><div class="da_dropdown-img-wrap"><img class="da_dropdown-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/allproducts.jpg"/></div></a><a class="da_dropdown-object" href="https://www.dieselogic.com/c-2-fuel-injectors.aspx"><h6>FUEL INJECTORS</h6><div class="da_dropdown-img-wrap"><img class="da_dropdown-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/fuelinjectors.jpg"/></div></a><a class="da_dropdown-object" href="https://www.dieselogic.com/c-3-fuel-injection-pumps.aspx"><h6>FUEL INJECTION PUMPS</h6><div class="da_dropdown-img-wrap"><img class="da_dropdown-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/fuelinjectionpumps.jpg"/></div></a><a class="da_dropdown-object" href="https://www.dieselogic.com/c-5-turbo-chargers.aspx"><h6>TURBO CHARGERS</h6><div class="da_dropdown-img-wrap"><img class="da_dropdown-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/turbochargers.jpg"/></div></a></div><div class="da_right-side"><a class="da_dropdown-object" href="https://www.dieselogic.com/c-40-on-sale-now.aspx"><h6>ON SALE</h6><div class="da_dropdown-img-wrap"><img class="da_dropdown-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/onsale.jpg"/></div></a><a class="da_dropdown-object" href="https://www.dieselogic.com/c-15-tools.aspx"><h6>TOOLS</h6><div class="da_dropdown-img-wrap"><img class="da_dropdown-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/tools.jpg"/></div></a><a class="da_dropdown-object" href="https://www.dieselogic.com/c-4-parts.aspx"><h6>PARTS</h6><div class="da_dropdown-img-wrap"><img class="da_dropdown-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/parts.jpg"/></div></a></div></div><div class="da_grey-bar"></div></div>').appendTo('.mainNavItem.shopProducts');



		/* Mobile */


		/* Shop By vehicle */
		$('<ul class="da_shop-by-vehicle-mobile"><li><a href="https://www.dieselogic.com/m-14-gmc-chevy.aspx">GMC/CHEVY</a></li><li><a href="https://www.dieselogic.com/m-4-ford.aspx">FORD</a></li><li><a href="https://www.dieselogic.com/m-3-dodge.aspx">DODGE</a></li><li><a href="https://www.dieselogic.com/m-6-mercedes.aspx">MERCEDES</a></li><li><a href="https://www.dieselogic.com/m-40-caterpillar.aspx">CATERPILLAR</a></li><li><a href="https://www.dieselogic.com/m-43-detroit-diesel.aspx">DETROIT</a></li><li><a href="https://www.dieselogic.com/m-7-volkswagen.aspx">VOLKSWAGEN</a></li><li><a href="https://www.dieselogic.com/m-2-audi.aspx">AUDI</a></li><li><a href="https://www.dieselogic.com/m-36-hummer.aspx">HUMMER</a></li></ul>').appendTo('#MainNav > div.mainNavContent > div.mobileMainNavContent.mean-container > div.mean-bar > nav > div > ul > li:nth-child(1)');

		$('#MainNav > div.mainNavContent > div.mobileMainNavContent.mean-container > div.mean-bar > nav > div > ul > li:nth-child(1) > a').click(() => {
			event.preventDefault();
			$('.da_shop-by-vehicle-mobile').toggleClass('da_shop-by-vehicle-slide-down');
		});


		/* Shop by product */
		$('#MainNav > div.mainNavContent > div.mobileMainNavContent.mean-container > div.mean-bar > nav > div > ul > li:nth-child(3)').remove();
		$('#MainNav > div.mainNavContent > div.mobileMainNavContent.mean-container > div.mean-bar > nav > div > ul > li:nth-child(3)').remove();
		$('#MainNav > div.mainNavContent > div.mobileMainNavContent.mean-container > div.mean-bar > nav > div > ul > li:nth-child(3)').remove();
		$('#MainNav > div.mainNavContent > div.mobileMainNavContent.mean-container > div.mean-bar > nav > div > ul > li:nth-child(3)').remove();
		$('#MainNav > div.mainNavContent > div.mobileMainNavContent.mean-container > div.mean-bar > nav > div > ul > li:nth-child(3)').remove();
		$('#MainNav > div.mainNavContent > div.mobileMainNavContent.mean-container > div.mean-bar > nav > div > ul > li:nth-child(3)').remove();


		$('<li class="da_mobile-shop-by-product"><a>SHOP BY PRODUCTS</a><div class="da_shop-product-dropdown" style="display: none"><div class="da_drop-down-ctn"><div class="da_left-side"><a class="da_dropdown-object" href="https://www.dieselogic.com/products.aspx"><h6>ALL PRODUCTS</h6><div class="da_dropdown-img-wrap"><img class="da_dropdown-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/allproducts.jpg"/></div></a><a class="da_dropdown-object" href="https://www.dieselogic.com/c-2-fuel-injectors.aspx"><h6>FUEL INJECTORS</h6><div class="da_dropdown-img-wrap"><img class="da_dropdown-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/fuelinjectors.jpg"/></div></a><a class="da_dropdown-object" href="https://www.dieselogic.com/c-3-fuel-injection-pumps.aspx"><h6>FUEL INJECTION PUMPS</h6><div class="da_dropdown-img-wrap"><img class="da_dropdown-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/fuelinjectionpumps.jpg"/></div></a><a class="da_dropdown-object" href="https://www.dieselogic.com/c-5-turbo-chargers.aspx"><h6>TURBO CHARGERS</h6><div class="da_dropdown-img-wrap"><img class="da_dropdown-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/turbochargers.jpg"/></div></a></div><div class="da_right-side"><a class="da_dropdown-object" href="https://www.dieselogic.com/c-4-parts.aspx"><h6>ON SALE</h6><div class="da_dropdown-img-wrap"><img class="da_dropdown-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/onsale.jpg"/></div></a><a class="da_dropdown-object" href="https://www.dieselogic.com/c-40-on-sale.aspx"><h6>TOOLS</h6><div class="da_dropdown-img-wrap"><img class="da_dropdown-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/tools.jpg"/></div></a><a class="da_dropdown-object" href="https://www.dieselogic.com/c-15-tools.aspx"><h6>PARTS</h6><div class="da_dropdown-img-wrap"><img class="da_dropdown-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/parts.jpg"/></div></a></div></div></div></li>').insertAfter('#MainNav > div.mainNavContent > div.mobileMainNavContent.mean-container > div.mean-bar > nav > div > ul > li:nth-child(2)');


		$('.da_mobile-shop-by-product').click(() => {
			event.preventDefault();
			$('.da_shop-product-dropdown').toggle();
		});

		if (window.innerWidth < 902) {

			window.onresize = function(event) {
				/* Shop By vehicle */
				$('<ul class="da_shop-by-vehicle-mobile"><li><a href="https://www.dieselogic.com/m-14-gmc-chevy.aspx">GMC/CHEVY</a></li><li><a href="https://www.dieselogic.com/m-4-ford.aspx">FORD</a></li><li><a href="https://www.dieselogic.com/m-3-dodge.aspx">DODGE</a></li><li><a href="https://www.dieselogic.com/m-6-mercedes.aspx">MERCEDES</a></li><li><a href="https://www.dieselogic.com/m-40-caterpillar.aspx">CATERPILLAR</a></li><li><a href="https://www.dieselogic.com/m-43-detroit-diesel.aspx">DETROIT</a></li><li><a href="https://www.dieselogic.com/m-7-volkswagen.aspx">VOLKSWAGEN</a></li><li><a href="https://www.dieselogic.com/m-2-audi.aspx">AUDI</a></li><li><a href="https://www.dieselogic.com/m-36-hummer.aspx">HUMMER</a></li></ul>').appendTo('#MainNav > div.mainNavContent > div.mobileMainNavContent.mean-container > div.mean-bar > nav > div > ul > li:nth-child(1)');

				$('#MainNav > div.mainNavContent > div.mobileMainNavContent.mean-container > div.mean-bar > nav > div > ul > li:nth-child(1) > a').click(() => {
					event.preventDefault();
					$('.da_shop-by-vehicle-mobile').toggleClass('da_shop-by-vehicle-slide-down');
				});


				/* Shop by product */
				$('#MainNav > div.mainNavContent > div.mobileMainNavContent.mean-container > div.mean-bar > nav > div > ul > li:nth-child(3)').remove();
				$('#MainNav > div.mainNavContent > div.mobileMainNavContent.mean-container > div.mean-bar > nav > div > ul > li:nth-child(3)').remove();
				$('#MainNav > div.mainNavContent > div.mobileMainNavContent.mean-container > div.mean-bar > nav > div > ul > li:nth-child(3)').remove();
				$('#MainNav > div.mainNavContent > div.mobileMainNavContent.mean-container > div.mean-bar > nav > div > ul > li:nth-child(3)').remove();
				$('#MainNav > div.mainNavContent > div.mobileMainNavContent.mean-container > div.mean-bar > nav > div > ul > li:nth-child(3)').remove();
				$('#MainNav > div.mainNavContent > div.mobileMainNavContent.mean-container > div.mean-bar > nav > div > ul > li:nth-child(3)').remove();


				$('<li class="da_mobile-shop-by-product"><a>SHOP BY PRODUCTS</a><div class="da_shop-product-dropdown" style="display: none"><div class="da_drop-down-ctn"><div class="da_left-side"><a class="da_dropdown-object" href="https://www.dieselogic.com/products.aspx"><h6>ALL PRODUCTS</h6><div class="da_dropdown-img-wrap"><img class="da_dropdown-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/allproducts.jpg"/></div></a><a class="da_dropdown-object" href="https://www.dieselogic.com/c-2-fuel-injectors.aspx"><h6>FUEL INJECTORS</h6><div class="da_dropdown-img-wrap"><img class="da_dropdown-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/fuelinjectors.jpg"/></div></a><a class="da_dropdown-object" href="https://www.dieselogic.com/c-3-fuel-injection-pumps.aspx"><h6>FUEL INJECTION PUMPS</h6><div class="da_dropdown-img-wrap"><img class="da_dropdown-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/fuelinjectionpumps.jpg"/></div></a><a class="da_dropdown-object" href="https://www.dieselogic.com/c-5-turbo-chargers.aspx"><h6>TURBO CHARGERS</h6><div class="da_dropdown-img-wrap"><img class="da_dropdown-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/turbochargers.jpg"/></div></a></div><div class="da_right-side"><a class="da_dropdown-object" href="https://www.dieselogic.com/c-4-parts.aspx"><h6>ON SALE</h6><div class="da_dropdown-img-wrap"><img class="da_dropdown-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/onsale.jpg"/></div></a><a class="da_dropdown-object" href="https://www.dieselogic.com/c-40-on-sale.aspx"><h6>TOOLS</h6><div class="da_dropdown-img-wrap"><img class="da_dropdown-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/tools.jpg"/></div></a><a class="da_dropdown-object" href="https://www.dieselogic.com/c-15-tools.aspx"><h6>PARTS</h6><div class="da_dropdown-img-wrap"><img class="da_dropdown-img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/parts.jpg"/></div></a></div></div></div></li>').insertAfter('#MainNav > div.mainNavContent > div.mobileMainNavContent.mean-container > div.mean-bar > nav > div > ul > li:nth-child(2)');


				$('.da_mobile-shop-by-product').click(() => {
					event.preventDefault();
					$('.da_shop-product-dropdown').toggle();
				});

			}

		}

	});
}
