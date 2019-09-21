function whenExists(element, callback) {
	var interval = setInterval(function () {
		if (document.querySelectorAll(element).length) {
			callback();
			clearInterval(interval);
		}
	}, 100);
}

whenExists('.pricingbox.no-image-bg.signup-box', function() {

	var testimonial = document.createElement("div"); 
	var testimonalContainer = document.createElement("div"); testimonalContainer.classList.add("testimonalContainer"); testimonalContainer.append(testimonial);


	document.querySelector(".pricingbox.no-image-bg.signup-box").parentNode.insertBefore(testimonalContainer, document.querySelector(".pricingbox.no-image-bg.signup-box"))

});
