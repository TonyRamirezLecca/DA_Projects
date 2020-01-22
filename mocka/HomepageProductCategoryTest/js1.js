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
whenExists('#frontpage-nosto-1', function () {

	jQuery('#frontpage-nosto-1').next().html('<div class="da_new-section"><div class="da_top-bar"></div><div class="da_header"><h2>LOOKING FOR SOMETHING IN PARTICULAR?</h2><p>Browse through our categories and top sellers</p></div><div class="da_catelogs-ctn"><div class="da_row"><a class="da_catelog" href="https://www.mocka.com.au/baby.html"><div class="da_img-ctn"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/mocka/au-homepage-product-category-test/Baby.jpg"/></div><h2>SHOP BABY</h2></a><a class="da_catelog" href="https://www.mocka.com.au/kids.html"><div class="da_img-ctn"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/mocka/au-homepage-product-category-test/Kids.jpg"/></div><h2>SHOP KIDS</h2></a><a class="da_catelog" href="https://www.mocka.com.au/home-furniture.html"><div class="da_img-ctn"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/mocka/au-homepage-product-category-test/Home.jpg"/></div><h2>SHOP HOME</h2></a></div></div><div class="da_bottom-bar"></div></div>')
	
});
