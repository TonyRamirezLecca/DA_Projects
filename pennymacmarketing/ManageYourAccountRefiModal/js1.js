/*** JS 1 ***/
function createPopUp() {
	//creates popup background and popup 
		var popUpBackground = document.createElement("div"); popUpBackground.classList.add("popUpBackground", "displayNone");
		var popUp = document.createElement("div"); popUp.classList.add("popUp", "displayNone");
			popUp.innerHTML = '<div class=da_pop-up-header><h2>Get Approved to Refinance Your Home</h2></div><div class=da_pop-up-underline></div><div class=da_pop-up-subheader><h6>See expert-recommended refinance<span class=da_br-mb><br></span> options and<span class=da_br-desktop><br></span> customize them to<span class=da_br-mb><br></span> fit your budget</h6></div><div class=da_pop-up-icons><div class=da_desktop-icons><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/penny-mac-marketing/manage-your-account-refi-modal/takecashout.png><h6>Take Cash Out</h6></div><div class=da_bottom-row><div class=da_desktop-icons><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/penny-mac-marketing/manage-your-account-refi-modal/shortenloanterm.png><h6>Shorten Loan Term</h6></div><div class=da_desktop-icons><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/penny-mac-marketing/manage-your-account-refi-modal/lowerpayments.png><h6>Lower Payments</h6></div></div></div><div class=da_pop-up-cta><a href=https://quote.pennymacusa.com/refinance/value>Start My Application</a></div><div class=closePopUp><i class="fas fa-times"></i></div>';

	//appends popup background and pop up to body
		document.querySelector('body').append(popUpBackground);
		document.querySelector('body').append(popUp);

	//click background or close button to close popup
		popUpBackground.addEventListener("click", () => {
			popUpBackground.classList.add("displayNone");
			popUp.classList.add("displayNone");
		});

	//make sure close button has class name "closePopUp"
		document.querySelector('.closePopUp').addEventListener("click", () => {
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

