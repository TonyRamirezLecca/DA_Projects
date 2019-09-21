console.log("DA_Script");
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

whenExists('#content > div > div > blockquote > p:nth-child(11)', function () {
	jQuery('<a class="DA_CTA" href="http://www.lifestylesunlimited.com/workshops/">FIND A WORKSHOP NEAR YOU</a>').insertAfter('#content > div > div > p:nth-child(8)');
	jQuery('<a class="DA_CTA" href="http://www.lifestylesunlimited.com/workshops/">FIND A WORKSHOP NEAR YOU</a>').insertAfter('#content > div > div > p:nth-child(31)');
	jQuery('<a class="DA_CTA" href="http://www.lifestylesunlimited.com/workshops/">FIND A WORKSHOP NEAR YOU</a>').insertAfter('#content > div > div > blockquote > p:nth-child(11)');
});
