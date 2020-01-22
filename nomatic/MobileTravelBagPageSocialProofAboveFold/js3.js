/*** JS 3 ***/

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
console.log('da script');
whenExists('div[data-section-type="product"] > div > div.col-lg-30.product-description > div > div.product-head > div > div:nth-child(1) > h2', function () {
	const reviews = [
		'"Amazing! Fits so much stuff and many compartments makes my life so much easier."',
		'"Best backpack I\'ve ever had."',
		'"I love everything about this bag!!!"',
	];
	const reviewers = [
		'SARAH S.',
		'VICTOR B.',
		'DURAN J.'
	];

	//Randomly Selects a review and reviewer
	const randomIndex = Math.round(Math.random() * 2) ;
	const randomReview = reviews[randomIndex];
	const randomReviewer = reviewers[randomIndex];

	const numReviewsString = document.querySelector('.ts-reviews-rating-options > a').innerHTML;
	var numReviews = numReviewsString.match(/\d+/g).map(Number);

	const reviewsLink = "#trustspot-widget-wrapper";

	$(`<div class="da_review-ctn"><div class="da_review-line1"><h6>${randomReviewer}</h6><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/nomatic/mobile-travel-bag-page-social-proof-above-fold/verifiedbuyer.png"/></div><div class="da_review"><p>${randomReview}</p></div><a class="da_link" href="${reviewsLink}">See what ${numReviews} other organized travelers think</a></div>`).insertBefore('div[data-section-type="product"] > div > div.col-lg-30.product-description > div > div:nth-child(5) > div > div.product-social > div');

	//prepend stars to da_reviews-ctn
	$('.ts-reviews-rating > .ts-stars-1').addClass('da_stars').prependTo('.da_review-line1');

	$(`<div class="da_review-ctn"><div class="da_review-line1"><h6>${randomReviewer}</h6><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/nomatic/mobile-travel-bag-page-social-proof-above-fold/verifiedbuyer.png"/></div><div class="da_review"><p>${randomReview}</p></div><a class="da_link" href="${reviewsLink}">See what ${numReviews} other organized travelers think</a></div>`).insertBefore('div[data-section-type="product"] > div > div.col-60.d-lg-none.d-block > div.product-description.d-lg-block.d-block > div.product-social');
});






