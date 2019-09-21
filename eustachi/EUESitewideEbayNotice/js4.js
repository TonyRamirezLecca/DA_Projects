
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

whenExists('.sqs-announcement-bar-dropzone', function () {
	document.querySelector('.sqs-announcement-bar-dropzone').remove();

	var popUpBackground = document.createElement("div"); popUpBackground.classList.add("popUpBackground");

	var popUp = document.createElement("div"); popUp.classList.add("popUp");

	var popUpText = document.createElement("div"); popUpText.classList.add("popUpText");
		popUpText.innerHTML = '<div><h1><strong>THE EUSTACHI<br/> IS AVAILABLE<br/> FOR PURCHASE<br/> ONLINE AND<br/><span class="switchText1">IN-STORE</span></strong></h1><div><div class="underline"></div><h2><span class="switchText2">in-store</span> at all major <br id="switchTextBreak"/>drugstores</h2></div></div><div><h2>Please don\'t risk buying a used or stolen unit on eBay or elsewhere</h2></div>';

	var ctaButton = document.createElement("a"); ctaButton.classList.add("ctaButton");
		ctaButton.innerHTML = 'FIND EUSTACHI NEAR ME';
		ctaButton.href = "https://www.eustachiunclogsears.com/locator-stores";

	var logoSection = document.createElement("div"); logoSection.classList.add("logoSection");
		logoSection.innerHTML = '<div class="desktopIconCtn"><div><img class="targetImg" src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/eustachi/SiteWideEbayNotice/target_long.png"/></div><div><img class="walmartImg" src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/eustachi/SiteWideEbayNotice/walmart_long.png"/></div><div><img class="walgreensImg" src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/eustachi/SiteWideEbayNotice/walgreens_long.png"/></div><div><img class="riteAidImg" src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/eustachi/SiteWideEbayNotice/riteaid_long.png"/></div><div><img class="cvsImg" src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/eustachi/SiteWideEbayNotice/cvs_long.png"/></div></div> <div class="mobileIconCtn"><div><img class="targetImg" src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/eustachi/SiteWideEbayNotice/target_icon.png"/></div><div><img class="walmartImg" src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/eustachi/SiteWideEbayNotice/walmart_icon.png"/></div><div><img class="walgreensImg" src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/eustachi/SiteWideEbayNotice/walgreens_icon.png"/></div><div><img class="riteAidImg" src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/eustachi/SiteWideEbayNotice/riteaid_icon.png"/></div><div><img class="cvsImg" src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/eustachi/SiteWideEbayNotice/cvs_icon.png"/></div></div>';

	var closePopUp = document.createElement("div"); closePopUp.classList.add("closePopUp");
		closePopUp.innerHTML = '&#9587;';

	popUp.append(popUpText); popUp.append(ctaButton); popUp.append(logoSection); popUp.append(closePopUp);

	document.querySelector('body').append(popUpBackground);
	document.querySelector('body').append(popUp);

	document.querySelector('.closePopUp').addEventListener("click", () => {
		document.querySelector('.popUpBackground').remove();
		document.querySelector('.popUp').remove();
	});
	document.querySelector('.popUpBackground').addEventListener("click", () => {
		document.querySelector('.popUpBackground').remove();
		document.querySelector('.popUp').remove();
	});


});

