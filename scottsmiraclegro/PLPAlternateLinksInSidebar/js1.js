/*** JS 1 ***/

/* When one element exists OR the other element exists */
function whenExists(elements, callback) {
	elements = elements.split(',');
	var interval = setInterval(function() {
		for (var i = 0; i < elements.length; i++) {
			if (document.querySelectorAll(elements[i]).length) {
				callback();
				clearInterval(interval);
				break;
			}
		}
	}, 100);
}
function defer(callback) {
	if (window.jQuery) {
		callback();
	} else {
		setTimeout(function () { defer(callback); }, 50);
	}
}
defer(function () {
	jQuery(function () {        
		whenExists('body > div.wrapper > div > div.main-container.container.with-filter.col2-left-layout > div > div.col-main.col-lg-9.col-md-9.col-sm-12.col-xs-12 > div.container.product-container > div.category-products > div.toolbar, body > div.wrapper > div > div.main-container.container.with-filter.col2-left-layout > div > div.col-left.sidebar.col-left-first.col-lg-3.col-md-3.col-sm-12.col-xs-12 > div > div', function () {

			jQuery('<div class="da_links-container"><a href="https://www.aerogarden.com/deals-of-the-day.html"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/miracle-grow/plp-alternate-links-in-sidebar/Vector+Smart+Object.png"/><h6>Deals of the day</h6></a><a href="https://www.aerogarden.com/best-sellers.html"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/miracle-grow/plp-alternate-links-in-sidebar/Vector+Smart+Object_1.png"/><h6>Best Sellers</h6></a><a href="https://www.aerogarden.com/catalog/product_compare/index/"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/miracle-grow/plp-alternate-links-in-sidebar/Vector+Smart+Object_2.png"/><h6>Compare gardens</h6></a><a href=""><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/miracle-grow/plp-alternate-links-in-sidebar/Vector+Smart+Object_3.png"/><h6>Gift ideas</h6></a></div>').insertBefore('body > div.wrapper > div > div.main-container.container.with-filter.col2-left-layout > div > div.col-left.sidebar.col-left-first.col-lg-3.col-md-3.col-sm-12.col-xs-12 > div > div');

			jQuery('<div class="da_links-container2"><a href="https://www.aerogarden.com/deals-of-the-day.html"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/miracle-grow/plp-alternate-links-in-sidebar/Vector+Smart+Object.png"/><h6>Deals of</br> the day</h6></a><a href="https://www.aerogarden.com/best-sellers.html"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/miracle-grow/plp-alternate-links-in-sidebar/Vector+Smart+Object_1.png"/><h6>Best </br>Sellers</h6></a><a href="https://www.aerogarden.com/catalog/product_compare/index/"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/miracle-grow/plp-alternate-links-in-sidebar/Vector+Smart+Object_2.png"/><h6>Compare</br> gardens</h6></a><a href=""><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/miracle-grow/plp-alternate-links-in-sidebar/Vector+Smart+Object_3.png"/><h6>Gift</br> ideas</h6></a></div>').insertAfter('body > div.wrapper > div > div.main-container.container.with-filter.col2-left-layout > div > div.col-main.col-lg-9.col-md-9.col-sm-12.col-xs-12 > div.container.product-container > div.category-products > div.toolbar');
		});
	});
});
