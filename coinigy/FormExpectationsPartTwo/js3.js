/*** JS 3 ***/
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
var jQuery_script = document.createElement("script");
jQuery_script.type = 'text/javascript';
jQuery_script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
document.querySelector("head").appendChild(jQuery_script);


function defer(callback) {
	if (window.jQuery) {
		callback();
	} else {
		setTimeout(function () { defer(callback); }, 50);
	}
}
defer(function () {
	jQuery(function () {        
		whenExists('.card > .logo-wrapper, .card > aside.active, .card > section', function () {
			$('<p class="da_text">Initially all you have to do is signup. When it gets close to the end of your 30-day free trial, we will send an email reminding you that your time is almost up! If you decide to stick around, we will help you activate your subscription. </br></br>If you don\'t, email us and we will delete your account and data right away. </p>').appendTo('.card');
		});

	});
});
