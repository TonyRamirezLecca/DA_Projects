function whenExists(element, callback) {
	var interval = setInterval(function () {
		if (document.querySelectorAll(element).length) {
			callback();
			clearInterval(interval);
		}
	}, 100);
}

whenExists('.pricingbox.no-image-bg.signup-box', function() {

	document.querySelectorAll(".row")[1].querySelector(".col-sm-3").querySelectorAll("p")[1].querySelector("a > img").src = "https://disruptive-advertising.s3-us-west-2.amazonaws.com/Coinigy/landing-page-followUp/quote-mobile.png"
	document.querySelectorAll(".row")[1].querySelector(".col-sm-3").querySelectorAll("p")[3].remove();

	var sideBar = document.querySelectorAll(".row")[1].querySelector(".col-sm-3");

	var TEXT1 = document.createElement("h1"); TEXT1.innerHTML = "<i class=\"fa-check fa iconClass\"></i> Easy";
	var TEXTCONTAINER1 = document.createElement("div"); TEXTCONTAINER1.append(TEXT1);
	var TEXTIMGWRAPPER1 = document.createElement("div"); TEXTIMGWRAPPER1.append(TEXTCONTAINER1);

	var TEXT2 = document.createElement("h1"); TEXT2.innerHTML = "<i class=\"fa-check fa iconClass\"></i> Automatically manages your exchanges and wallets";
	var TEXTCONTAINER2 = document.createElement("div"); TEXTCONTAINER2.append(TEXT2);
	var TEXTIMGWRAPPER2 = document.createElement("div"); TEXTIMGWRAPPER2.append(TEXTCONTAINER2);

	var TEXT3 = document.createElement("h1"); TEXT3.innerHTML = "<i class=\"fa-check fa iconClass\"></i> Trusted by hundreds of thousands since 2014";
	var TEXTCONTAINER3 = document.createElement("div"); TEXTCONTAINER3.append(TEXT3);
	var TEXTIMGWRAPPER3 = document.createElement("div"); TEXTIMGWRAPPER3.append(TEXTCONTAINER3);

	var TEXTIMGCONTAINER = document.createElement("div"); TEXTIMGCONTAINER.classList.add("TEXTIMGCONTAINER");
	TEXTIMGCONTAINER.append(TEXTIMGWRAPPER1); TEXTIMGCONTAINER.append(TEXTIMGWRAPPER2); TEXTIMGCONTAINER.append(TEXTIMGWRAPPER3);

	sideBar.querySelectorAll("p")[1].parentNode.insertBefore(TEXTIMGCONTAINER, sideBar.querySelectorAll("p")[1]);

	var lineSpacer = document.createElement("div"); lineSpacer.classList.add("lineSpacer");

	TEXTIMGCONTAINER.parentNode.insertBefore(lineSpacer, TEXTIMGCONTAINER);

});
