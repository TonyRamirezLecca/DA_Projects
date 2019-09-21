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

whenExists('#shopify-section-1522779748898', function () {
	console.log("DA_Script");

	//Gets slick code with callback function
	$.getScript('//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', function(){
	
			//Gets slick styling
				$('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>').appendTo('head');
				$('<link rel="stylesheet" type="text/css" href="https://disruptive-advertising.s3-us-west-2.amazonaws.com/common/Slick+JS/slick-1.8.1/slick/slick-theme.css"/>').appendTo('head');
	
			//Create Slides | Make sure to remove slides being appended 12 lines down if not using all 6 slides
				var slide1 = $('<div class="slide1"><a href="/pages/search-results-page?collection=new-arrivals-updated"></a></div>');
				var slide2 = $('<div class="slide2"><a href="https://shop.theredclosetdiary.com/pages/search-results-page?collection=plus-size"></a></div>');
				var slide3 = $('<div class="slide3"><a href="https://shop.theredclosetdiary.com/pages/search-results-page?collection=grab-bags"></a></div>');
				
				
				
	
			//Deletes contents in current hero
				var slideCtn = $('#shopify-section-1522779748898');
					slideCtn.html('');
					slideCtn.append(slide1,slide2,slide3);
	
			//Calls the slick function to create slider
				$('#shopify-section-1522779748898').slick({
					dots: false,
					arrows: false,
					infinite: true,
					speed: 300,
					autoplay: true,
					autoplaySpeed: 5000,
					slidesToShow: 1
				});
	});
	

});
