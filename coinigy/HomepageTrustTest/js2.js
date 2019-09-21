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

whenExists('#mainimage > div > div', function () {

	$('<div id="banner1" class="DA_Banner"><div class="bannerHeader"><h1>At Coinigy, Security Is Our Top Priority</h1></div><div class="textImgWrapper"><div><div class="imgCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/Coinigy/HomepageTrust/computerlock.png"/></div><h1>We have taken a multitude of steps to help ensure your data is safe and secure. We recognize that in order to provide a secure platform in the digital currency space, security is an interminable effort. Our security team works perpetually to combat the latest in cyber threats in a proactive manner. While we cannot disclose all of our defense techniques, we\'re happy to provide our policy and guidelines.</h1></div></div><a href="https://www.coinigy.com/security/">View More</a><div class="whiteBackground"></div></div>').insertAfter('#mainimage > div > div');

	$('<div id="banner2" class="DA_Banner"><div class="bannerHeader"><h1>At Coinigy, Security Is Our Top Priority</h1></div><div class="textImgWrapper"><div><div class="imgCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/Coinigy/HomepageTrust/computerlock.png"/></div><h1>We have taken a multitude of steps to help ensure your data is safe and secure. We recognize that in order to provide a secure platform in the digital currency space, security is an interminable effort. Our security team works perpetually to combat the latest in cyber threats in a proactive manner. While we cannot disclose all of our defense techniques, we\'re happy to provide our policy and guidelines.</h1></div></div><a href="https://www.coinigy.com/security/">View More</a><div class="whiteBackground"></div></div>').insertAfter('#mainimage > div > div.col-sm-12 > div.da-hero-txt > h2');

});
