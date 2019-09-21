function whenExists(element, callback) {
	var interval = setInterval(function () {
		if (document.querySelectorAll(element).length) {
			callback();
			clearInterval(interval);
		}
	}, 100);
}

whenExists('.pricingbox.no-image-bg.signup-box', function() {

	var grayBackground = document.createElement("div"); grayBackground.classList.add("grayBackground");
	var testimonial1 = document.createElement("div");
	var testimonial2 = document.createElement("div");
	var testimonial3 = document.createElement("div");
	var testimonialContainer = document.createElement("div"); testimonialContainer.append(testimonial1); testimonialContainer.append(testimonial2); testimonialContainer.append(testimonial3);
	testimonialContainer.classList.add("testimonialContainer");

	grayBackground.append(testimonialContainer);

	document.querySelector(".pricingbox.no-image-bg.signup-box").parentNode.insertBefore(grayBackground, document.querySelector(".pricingbox.no-image-bg.signup-box"))

});
