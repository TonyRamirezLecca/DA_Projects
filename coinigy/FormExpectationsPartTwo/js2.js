/*** JS 2 ***/
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

var fontAwesome5 = document.createElement("link");
fontAwesome5.type = "text/css"; fontAwesome5.rel = "stylesheet";
fontAwesome5.href="https://use.fontawesome.com/releases/v5.4.0/css/all.css";
document.querySelector("head").appendChild(fontAwesome5);

function defer(callback) {
	if (window.jQuery) {
		callback();
	} else {
		setTimeout(function () { defer(callback); }, 50);
	}
}
defer(function () {
	jQuery(function () {        
		whenExists('.card > aside.active > h1', function () {

			$('<div class="da_text-ctn"><p class="da_header">By Completing this form, you will benefit from:</p><div class="da_list"><p><i class="fas fa-check da_check"></i>Unlimited, No-Added-Fee Trading</p><p><i class="fas fa-check da_check"></i>24/7 Automatic Portfolio Monitoring</p><p><i class="fas fa-check da_check"></i>High-Definition Charting w/75+ Technical Indicators</p><p><i class="fas fa-check da_check"></i>E-mail Support</p></br><p><i class="fas fa-check da_check"></i>24/7/365 Security & Stability</p></br><p><i class="fas fa-check da_check"></i>Mobile App Access</p></div></div>').insertAfter('.card > aside.active > h1');
			
		});
	});
});
