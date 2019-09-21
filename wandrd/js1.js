
/* When exists for single element */
function whenExists(element, callback) {
	var interval = setInterval(function () {
		if (document.querySelectorAll(element).length) {
			callback();
			clearInterval(interval);
		}
	}, 100);
}

whenExists(".product-details__blocks", function () {

	

	setInterval(() => {
		if (window.location.href.includes("variant=12704988397591")) {
			if (document.querySelector(".logoContainer")) {
				document.querySelector(".logoContainer").remove();
				var cnt1 = $(".wrapper").contents();
				$(".wrapper").replaceWith(cnt1);
				var cnt2 = $(".subWrapper").contents();
				$(".subWrapper").replaceWith(cnt2);
			}
			return;
		}

		if (document.querySelector(".logoContainer")) {
				return;
		}

		var logoContainer = document.createElement("div");
		logoContainer.setAttribute("class", "logoContainer");

		var logoImg = document.createElement("img");
		var logoImgContainer = document.createElement("div");
		logoImgContainer.setAttribute("class", "logoImgContainer");
		logoImg.src = "https://disruptive-advertising.s3-us-west-2.amazonaws.com/Wandrd/pdp-carry-on-emphasis/airplane-icon.png";
		logoImg.setAttribute("class", "logoImg");
		logoImgContainer.append(logoImg);

		var logoText = document.createElement("h5");
		logoText.innerHTML = "INTERNATIONAL CARRY-ON COMPATIBLE";
		logoText.setAttribute("class", "logoText");

		logoContainer.appendChild(logoImgContainer);
		logoContainer.appendChild(logoText);

		document.querySelector("div[id$=\"-dims\"]").append(logoContainer);
			
	}, 100);


});
