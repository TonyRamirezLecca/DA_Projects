function changeButton(){

	var parentNode = document.querySelector("[data-product-role='addtocart']");
	parentNode.setAttribute("class", "parentNode");
		
}

if (document.readyState != "loading") changeButton();
else if (document.addEventListener) document.addEventListener("DOMContentLoaded", changeButton);
else document.attachEvent("onreadystatechange", () => {
	if (document.readyState == "complete") {
		changeButton();
	}
})
