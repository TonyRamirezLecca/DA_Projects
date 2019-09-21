
function makeChanges() {


	var wrapperForDescription = document.querySelector("[data-product-role='image']");
	wrapperForDescription.setAttribute("class", "wrapperForDescription");

	document.querySelector("[data-product-role='image']").append(document.querySelector(".dsproductdetails > .dsproductdetailsmallcontainer"));

	var wrapperForAddToCart = document.querySelector("[data-product-role='addtocart']");
	wrapperForAddToCart.setAttribute("class", "wrapperForAddToCart");

	wrapperForAddToCart.prepend(document.querySelector("#tbQuantity"));

	var newText = document.createElement("div");
	newText.setAttribute("class", "newText");
	newText.innerHTML = "Art of Marriage&#174; brings together over 30 years of gospel-centered marriage training into six dynamic lessons. These companion manuals for the Art of Marriage&#174; video event are designed to help couples live what they are learning. Conveniently packaged in sets of two.";

	document.querySelector(".wrapperForAddToCart").parentNode.insertBefore(newText, document.querySelector(".wrapperForAddToCart"));

}


if (document.readyState != "loading") makeChanges();
else if (document.addEventListener) document.addEventListener("DOMContentLoaded", makeChanges);
else document.attachEvent("onreadystatechange", () => {
	if (document.readyState == "complete") {
		makeChanges();
	}
})
