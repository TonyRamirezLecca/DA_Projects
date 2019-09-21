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

whenExists('.sqs-announcement-bar-text > p', function () {
	document.querySelector('.sqs-announcement-bar-text > p').innerHTML = '<strong>Purchase from an authorized retailer to ensure your Eustachi is new</strong> <span>|</span> <div class="desktopIconCtn"><div><img class="targetImg" src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/eustachi/SiteWideEbayNotice/target_long.png"/></div><div><img class="walmartImg" src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/eustachi/SiteWideEbayNotice/walmart_long.png"/></div><div><img class="walgreensImg" src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/eustachi/SiteWideEbayNotice/walgreens_long.png"/></div><div><img class="riteAidImg" src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/eustachi/SiteWideEbayNotice/riteaid_icon.png"/></div><div><img class="cvsImg" src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/eustachi/SiteWideEbayNotice/cvs_long.png"/></div></div> <div class="mobileIconCtn"><div><img class="targetImg" src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/eustachi/SiteWideEbayNotice/target_icon.png"/></div><div><img class="walmartImg" src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/eustachi/SiteWideEbayNotice/walmart_icon.png"/></div><div><img class="walgreensImg" src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/eustachi/SiteWideEbayNotice/walgreens_icon.png"/></div><div><img class="riteAidImg" src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/eustachi/SiteWideEbayNotice/riteaid_icon.png"/></div><div><img class="cvsImg" src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/eustachi/SiteWideEbayNotice/cvs_icon.png"/></div></div>';
});


