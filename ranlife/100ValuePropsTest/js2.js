
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
function insertAfter(el, referenceNode) {
	referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

whenExists('#quickForm > p', function () {

	var textImgCtn = document.createElement("div"); textImgCtn.classList.add("textImgCtn");
		textImgCtn.innerHTML = '<div><div class="imgCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/ran-life/100ValueProps/lowestRatesIcon.png"/></div><h1>LOWEST RATES</h1></div><div><div class="imgCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/ran-life/100ValueProps/customerForLifeIcon.png"/></div><h1>CUSTOMER FOR LIFE</h1></div><div><div class="imgCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/ran-life/100ValueProps/mortgageIcon.png"/></div><h1>MORTGAGE PROGRAM OPTIONS</h1></div>';

	insertAfter(textImgCtn, document.querySelector('#quickForm > p'));

});

