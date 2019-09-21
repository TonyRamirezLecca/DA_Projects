function alternateBackground() {
	function wrapElements(firstNode, lastNode, wrapper) {
		firstNode.parentNode.insertBefore(wrapper,firstNode);
		var sibling = firstNode.nextElementSibling;
		wrapper.appendChild(firstNode);
		if (sibling) {
			while(sibling != lastNode) {
				var nextNode = sibling.nextElementSibling;
				wrapper.appendChild(sibling);
				sibling = nextNode;
			}
			wrapper.appendChild(lastNode);
		}
	}

	wrapElements(document.querySelector(".dsproductdescription").firstElementChild, document.querySelector(".dsproductdescription .responsivevideo").previousElementSibling, document.createElement("div"));
	wrapElements(document.querySelector(".responsivevideo"), document.querySelector(".responsivevideo").nextElementSibling, document.createElement("div"));
	wrapElements(document.querySelector(".dsproductdescription > .standardBlue"), document.querySelector(".dsproductdescription > .standardBlue").nextElementSibling, document.createElement("div")); 
	wrapElements(document.querySelector(".dsproductdescription > .standardBlue"), document.querySelector(".dsproductdescription > .standardBlue").nextElementSibling, document.createElement("div")); 

	document.querySelector(".dsproductdescription").append(document.querySelector("#relatedProducts"));
	document.querySelector(".dsproductdescription").append(document.querySelector("#bestSellers"));

 var sections = document.querySelectorAll(".dsproductdescription > div");
	sections.forEach((section, index) => {
		var backgroundDiv = document.createElement("div");
		backgroundDiv.setAttribute("class", "backgroundDiv");
			section.append(backgroundDiv);
	});

}


if (document.readyState != "loading") alternateBackground();
else if (document.addEventListener) document.addEventListener("DOMContentLoaded", alternateBackground);
else document.attachEvent("onreadystatechange", () => {
	if (document.readyState == "complete") {
		alternateBackground();
	}
})

	
