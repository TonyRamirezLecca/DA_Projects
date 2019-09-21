jQuery(document).ready(function() {


if (window.location.href.includes('app')) {
	var headerImg = document.querySelector("#lp-pom-image-115 > div > img");
		headerImg.src = "https://disruptive-advertising.s3-us-west-2.amazonaws.com/sun-wise-capital/HomepageTopSection/v2v4HeroNew.jpg";
		headerImg.setAttribute("data-src-desktop-1x", "https://disruptive-advertising.s3-us-west-2.amazonaws.com/sun-wise-capital/HomepageTopSection/v2v4HeroNew.jpg");
		headerImg.setAttribute("data-src-desktop-2x", "https://disruptive-advertising.s3-us-west-2.amazonaws.com/sun-wise-capital/HomepageTopSection/v2v4HeroNew.jpg");
		headerImg.setAttribute("data-src-mobile-1x", "https://disruptive-advertising.s3-us-west-2.amazonaws.com/sun-wise-capital/HomepageTopSection/v2v4HeroNew.jpg");
		headerImg.setAttribute("data-src-mobile-2x", "https://disruptive-advertising.s3-us-west-2.amazonaws.com/sun-wise-capital/HomepageTopSection/v2v4HeroNew.jpg");
		headerImg.setAttribute("data-src-mobile-3x", "https://disruptive-advertising.s3-us-west-2.amazonaws.com/sun-wise-capital/HomepageTopSection/v2v4HeroNew.jpg");
		headerImg.setAttribute("srcset", "https://disruptive-advertising.s3-us-west-2.amazonaws.com/sun-wise-capital/HomepageTopSection/v2v4HeroNew.jpg");
	


}

else {
	jQuery('#master-slider-main-widget-3').html('<div class="headerContainer"><div class="subHeaderContainer"><div class="headerText"><h1><span>Don\'t Get Discouraged</span><br/><span>If You Just Miss The Cut <span class="displayWordMB">For</span></span><br/><span><span class="displayWordDesk">For</span> Traditional Bank Loans</span></h1><h4>Qualify For The Small Business Loan You Deserve To Build Your Business</h4></div><a class="headerBtn" href="https://app.sunwisecapital.com/">Check Eligibility</a><div class="iconsContainer"><div class="iconTextWrapper"><div class="iconWrapper"> <img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/sun-wise-capital/HomepageTopSection/dollarsign.png" alt=""></div><h2>No Cost</h2></div><div class="iconTextWrapper"><div class="iconWrapper"> <img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/sun-wise-capital/HomepageTopSection/handshake.png" alt=""></div><h2>No Obligation</h2></div><div class="iconTextWrapper"><div class="iconWrapper"> <img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/sun-wise-capital/HomepageTopSection/clock.png" alt=""></div><h2>24 Hour Approvals</h2></div></div></div><div class="featuredBannerContainer"><div class="featuredBannerWrapper"> <img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/sun-wise-capital/HomepageTopSection/loans-in-color.png" alt=""></div></div><div class="headerImgFilter"></div><div class="headerImg"></div></div>');

	document.querySelector("#master-slider-main-widget-2").remove();

}


});
