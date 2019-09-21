
/* When exists for single element */
function whenExists(element, callback) {
	var interval = setInterval(function () {
		if (document.querySelectorAll(element).length) {
			callback();
			clearInterval(interval);
		}
	}, 100);
}

whenExists("div[id$=\"-dims\"]", function () {


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
		if (document.querySelector(".logoContainer")) return;

		function wrapElements(firstNode, lastNode, wrapper) {
			//adds the wrapper before the first node
			firstNode.parentNode.insertBefore(wrapper, firstNode);

			//adds the first node
			var sibling = firstNode.nextElementSibling;
			wrapper.appendChild(firstNode);

			//adds the sibling nodes until the last one.
			if (sibling) {
				while (sibling != lastNode) {
					var nextNode = sibling.nextElementSibling;
					wrapper.appendChild(sibling);
					sibling = nextNode;
				}
				wrapper.appendChild(lastNode);
			}
		}

		var firstElement = document.querySelector(".swatch_options").firstElementChild;
		var secondElement = firstElement.nextElementSibling;
		var wrapper = document.createElement("div");
		wrapper.setAttribute("class", "wrapper");
		wrapElements(firstElement, secondElement, wrapper);


		var logoContainer = document.createElement("div");
		logoContainer.setAttribute("class", "logoContainer");

		var logoImg = document.createElement("img");
		var logoImgContainer = document.createElement("div");
		logoImgContainer.setAttribute("class", "logoImgContainer");
		logoImg.src = "https://disruptive-advertising.s3-us-west-2.amazonaws.com/Wandrd/pdp-carry-on-emphasis/tsa-text-seal.png";
		logoImg.setAttribute("class", "logoImg");
		logoImgContainer.append(logoImg);
		logoContainer.appendChild(logoImgContainer);

		wrapper.append(logoContainer);

		var subWrapper = document.createElement("div");
		subWrapper.setAttribute("class", "subWrapper");
		wrapElements(firstElement, secondElement, subWrapper);
	}, 100);

});
