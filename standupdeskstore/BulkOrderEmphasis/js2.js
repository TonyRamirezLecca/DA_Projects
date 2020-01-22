/*** JS 2 ***/

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

whenExists('#product-addtocart-button', function () {
	

function createPopUp() {
	//creates popup background and popup 
		var popUpBackground = document.createElement("div"); popUpBackground.classList.add("popUpBackground", "displayNone");
		var popUp = document.createElement("div"); popUp.classList.add("popUp", "displayNone");
			popUp.innerHTML = '<div class="da_x">X</div><div class="da_white"></div><h1>Do You Qualify</br> For Bulk Pricing?</h1><div class="da_underline"></div><h4>Get a quote to find out.</h4><h2>Get A Quote</h2>';

	//appends popup background and pop up to body
		document.querySelector('body').append(popUpBackground);
		document.querySelector('body').append(popUp);

	//click background or close button to close popup
		popUpBackground.addEventListener("click", () => {
			popUpBackground.classList.add("displayNone");
			popUp.classList.add("displayNone");
		});

	document.querySelector('.popUp h2').addEventListener("click", () => {
		popUpBackground.classList.add("displayNone");
		popUp.classList.add("displayNone");
		location.href = "https://www.standupdeskstore.com/bulk-discount-form/";
	});
	document.querySelector('.da_x').addEventListener("click", () => {
		popUpBackground.classList.add("displayNone");
		popUp.classList.add("displayNone");
	});

}

//loads pop up into the dom, but it won't display
	createPopUp();

//will pop up after amount of time you set
	setTimeout(() => {
		document.querySelector('.popUpBackground').classList.remove("displayNone");
		document.querySelector('.popUp').classList.remove("displayNone");
	}, 100);



});

