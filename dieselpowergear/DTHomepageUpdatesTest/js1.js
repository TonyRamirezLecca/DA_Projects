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

whenExists('#Slideshow-slideshow,.featured-collection.section-padding,.cover-details-desktop.section-padding > p', function() {
	$('.hero-slideshow').slick('unslick');
	$('.hero-slideshow').slick({
		accessibility: true, speed: 500, 
		cssEase: 'ease-in', 
		dots: true,
		arrows: false, // this theme has custom arrows
		draggable: false,
		autoplay: true,
		autoplaySpeed: 5000 
	})

	document.querySelector(".hero__slide.hero__slide--1560362825326.slick-slide > .hero__text-wrap .hero__subtitle.big a").innerHTML = "Save Hundreds on Legion Tires today!";
	document.querySelector(".hero__slide.hero__slide--1566327903156.slick-slide > .hero__text-wrap .btn.red.medium.big.rounded.hero__cta_button").innerHTML = "Get Hundreds of Entries To the Giveaway When you purchase Legion Tires";

	var bannerTextCtn = document.createElement("div"); 
	bannerTextCtn.innerHTML = '<div><h1>Made in the USA<img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/Legion+Tires/hp-highlight/flag.png"/></h1></div><div><h2>American made, tested, and approved for extreme conditions</h2></div>';
	var usaBanner = document.createElement("div"); usaBanner.classList.add("usaBanner");
	usaBanner.append(bannerTextCtn);
	document.querySelector(".cover-details-desktop.section-padding").parentNode.insertBefore(usaBanner, document.querySelector(".cover-details-desktop.section-padding"));

	$('.featured-collection.section-padding').append('<a class="shopTiresBtn" src="#">Shop Tires</a>');
	$('.cover-details-desktop.section-padding > p').after('<a class="shopTiresBtn" src="#">Shop Tires</a>');

});










