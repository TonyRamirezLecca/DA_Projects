/*** JS 1 ***/

function defer(callback) {
	if (window.jQuery) {
		callback();
	} else {
		setTimeout(function () { defer(callback); }, 50);
	}
}
defer(function () {
	jQuery(function () {        
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


		whenExists('body > div.wrapper > div > div.main-container.col1-layout > div > div > div > div:nth-child(3)', function () {
			console.log("DA_Script");

			jQuery('<div class="da_ctn"><div class="da_img-gallery"><div class="da_img-row"><div><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/miracle-grow/homepage-testimonials-ugc-gallery/tomatoes.jpg"/></div><div><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/miracle-grow/homepage-testimonials-ugc-gallery/shelf.jpg"/></div><div><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/miracle-grow/homepage-testimonials-ugc-gallery/salad.jpg"/></div></div><div class="da_img-row"><div><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/miracle-grow/homepage-testimonials-ugc-gallery/purple.jpg"/></div><div><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/miracle-grow/homepage-testimonials-ugc-gallery/green.jpg"/></div><div><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/miracle-grow/homepage-testimonials-ugc-gallery/red.jpg"/></div></div><div class="da_social"><span>@officialaerogarden</span><span>#showwhatyougrow</span></div></div><div class="da_reviews"><div class="da_review-section"><div class="da_stars"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/miracle-grow/homepage-testimonials-ugc-gallery/stars.png"/></div><div class="da_review-content">The AeroGarden is so amazing, I gave the Harvest to my sister, who has a "brown thumb", along with some herbs and even she\'s got herbs sprouting!</br><strong>Mom2MarPat</strong></div></div><div class="da_review-section"><div class="da_stars"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/miracle-grow/homepage-testimonials-ugc-gallery/stars.png"/></div><div class="da_review-content">Oh my goodness!! This thing was amazing. It was so easy to start herbs and get them growing. I highly recommend this to anyone who has a "brown thumb"</br><strong>Jmo1234</strong></div></div><div class="da_review-section"><div class="da_stars"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/miracle-grow/homepage-testimonials-ugc-gallery/stars.png"/></div><div class="da_review-content">This thing is a beast! It is so freaking AWESOME! This is the perfect addition to our household!</br><strong>Ms_Woman</strong></div></div><div class="da_cta-section"><a href="https://www.aerogarden.com/aerogardens.html">SHOP ALL GARDENS</a></div></div></div>').insertAfter('body > div.wrapper > div > div.main-container.col1-layout > div > div > div > div:nth-child(3)');


		});

	});
});

