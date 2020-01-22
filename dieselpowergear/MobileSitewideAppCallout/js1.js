/*** JS 1 ***/

function getMobileOperatingSystem() {
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	if (/android/i.test(userAgent)) {
		return "Android";
	}

	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		return "iOS";
	}

	return "unknown";
}

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

function setCookie(name,value,days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days*24*60*60*1000));
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}


if ($(window).width() <= 749) {

	if (getMobileOperatingSystem() == "Android") {
		$('<div class=da_banner><div class=da_close-btn><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/diesel-power-gear/mobile-sitewide-app-callout/x.png></div><div class=da_logo><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/diesel-power-gear/mobile-sitewide-app-callout/logo.png></div><div class=da_text><h4>Diesel Power Gear</h4><h5>Make a purchase on the app to enter to win</h5><div class=da_stars><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/diesel-power-gear/mobile-sitewide-app-callout/star+star+star+star+star.png></div><h3>GET-- On the App Store</h3></div><div class=da_cta><a href="https://play.google.com/store/apps/details?id=co.tapcart.app.id_OWkM7HCrqV&hl=en_US">VIEW</a></div></div>').prependTo('body'); 
	}
	else if (getMobileOperatingSystem() == "iOS") {
		$('<div class=da_banner><div class=da_close-btn><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/diesel-power-gear/mobile-sitewide-app-callout/x.png></div><div class=da_logo><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/diesel-power-gear/mobile-sitewide-app-callout/logo.png></div><div class=da_text><h4>Diesel Power Gear</h4><h5>Make a purchase on the app to enter to win</h5><div class=da_stars><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/diesel-power-gear/mobile-sitewide-app-callout/star+star+star+star+star.png></div><h3>GET-- On the App Store</h3></div><div class=da_cta><a href=https://apps.apple.com/app/id1473830395>VIEW</a></div></div>').prependTo('body'); 
	}
	else {
		$('<div class=da_banner><div class=da_close-btn><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/diesel-power-gear/mobile-sitewide-app-callout/x.png></div><div class=da_logo><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/diesel-power-gear/mobile-sitewide-app-callout/logo.png></div><div class=da_text><h4>Diesel Power Gear</h4><h5>Make a purchase on the app to enter to win</h5><div class=da_stars><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/diesel-power-gear/mobile-sitewide-app-callout/star+star+star+star+star.png></div><h3>GET-- On the App Store</h3></div><div class=da_cta><a href="https://play.google.com/store/apps/details?id=co.tapcart.app.id_OWkM7HCrqV&hl=en_US">VIEW</a></div></div>').prependTo('body'); 
	}

	$('.da_close-btn').click(() => {
		$('.da_banner').hide();
		setCookie('da_closed-cookie', 'closed', 1);
	});

	if (getCookie('da_closed-cookie')) {
		$('.da_banner').hide();
	}


}

