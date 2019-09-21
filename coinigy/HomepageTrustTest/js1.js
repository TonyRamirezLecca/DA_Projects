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

	$('<div id="banner1" class="DA_Banner"><div class="bannerHeader"><h1>24<span> </span>/<span> </span>7<span> </span>/<span> </span>365 </br><span id="headerSpan">Security & Stability</span></h1></div><div class="textImgWrapper"><div><div class="imgCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/Coinigy/HomepageTrust/lock.png"/></div><h1>Encrypted Use Accounts</br> Two-Factor Authentication, </br>And More</h1></div><div><div class="imgCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/Coinigy/HomepageTrust/key.png"/></div><h1>Strong API</br> Key Security</h1></div><div><div class="imgCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/Coinigy/HomepageTrust/layer.png"/></div><h1>Multi-tiered</br> System Security</h1></div><div><div class="imgCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/Coinigy/HomepageTrust/employee.png"/></div><h1>Employee Access Is </br>Limited And Regulated</h1></div></div><a href="https://www.coinigy.com/security/">View More</a><div class="whiteBackground"></div></div>').insertAfter('#mainimage > div > div');

	$('<div class="DA_Banner" id="banner2"><div class="bannerHeader"><h1>24<span> </span>/<span> </span>7<span> </span>/<span> </span>365 </br><span id="headerSpan">Security & Stability</span></h1></div><div class="textImgWrapper"><div><div class="imgCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/Coinigy/HomepageTrust/lock.png"/></div><h1>Encrypted Use Accounts</br> Two-Factor Authentication, </br>And More</h1></div><div><div class="imgCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/Coinigy/HomepageTrust/key.png"/></div><h1>Strong API</br> Key Security</h1></div><div><div class="imgCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/Coinigy/HomepageTrust/layer.png"/></div><h1>Multi-tiered</br> System Security</h1></div><div><div class="imgCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/Coinigy/HomepageTrust/employee.png"/></div><h1>Employee Access Is </br>Limited And Regulated</h1></div></div><a href="https://www.coinigy.com/security/">View More</a><div class="whiteBackground"></div></div>').insertAfter('#mainimage > div > div.col-sm-12 > div.da-hero-txt > h2');
});
