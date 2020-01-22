/*** JS 1 ***/
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
		whenExists('#new-img-jo', function () {
			$('<p class="da_text">Once complete, you will receive an activation email that will provide a link to login. Your account security is important to us so two-factor authentication IS STRONGLY RECOMMENDED</p>').insertBefore('#new-img-jo');
		});
	});
});


