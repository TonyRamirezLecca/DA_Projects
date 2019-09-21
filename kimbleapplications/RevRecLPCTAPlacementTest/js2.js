function createPopUp() {
	var popUpBackground = document.createElement("div"); popUpBackground.classList.add("popUpBackground", "displayNone");
	var popUp = document.createElement("div"); popUp.classList.add("popUp", "displayNone");
		popUp.innerHTML = '<div class="darkFilter"></div><h1>See how Professional Services Automation can impact your service organization.</h1><a href="https://www.kimbleapps.com/product/">Learn More</a><i class="fa fa-times-circle closePopUp"/>';

	document.querySelector('body').append(popUpBackground);
	document.querySelector('body').append(popUp);

	popUpBackground.addEventListener("click", () => {
		popUpBackground.classList.add("displayNone");
		popUp.classList.add("displayNone");
	});
	document.querySelector('.closePopUp').addEventListener("click", () => {
		popUpBackground.classList.add("displayNone");
		popUp.classList.add("displayNone");
	});
}

createPopUp();

setTimeout(() => {

	document.querySelector('.popUpBackground').classList.remove("displayNone");
	document.querySelector('.popUp').classList.remove("displayNone");

}, 15000);
