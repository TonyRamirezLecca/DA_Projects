function whenExists(elements, callback) {
	elements = elements.split(',');
	var interval = setInterval(function() {
		for (var i = 0; i < elements.length; i++) {
			if (document.querySelectorAll(elements[i]).length) {
				callback();
				clearInterval(interval);
				break;
			}
		}
	}, 100);
}

whenExists('#ProductImageWrapper-11211761451094 > div > img,#CollectionSection > div > div:nth-child(5) > div > a', function () {
	if (window.location.href.includes('beard-oils')) {
		var PLPItems = document.querySelectorAll('#CollectionSection > div > div > div > a');
		var	PLPText = [
			"<em>Cool ocean breeze scent</em>",		
			"<em>Tree bark dipped in rosemary scent</em>",		
			"<em>Sweet vanilla scent</em>",		
			"<em>Pine forrest scent</em>",		
			"<em>Sweet honey blossom scent</em>",		
			"<em>Cuban tobacco scent</em>"		
		]

		PLPItems.forEach((element, index, array) => {
			var scentCtn = document.createElement("div"); scentCtn.classList.add("scentCtn");
			scentCtn.innerHTML = `<h6>${PLPText[index]}</h6>`;
			element.append(scentCtn);
		});
	}
	else if (window.location.href.includes('beard-balm')) {
		var PLPItems = document.querySelectorAll('#CollectionSection > div > div > div > a');
		var	PLPText = [
			"<em>Bourban vanilla lemon scent</em>",		
			"<em>Sweet vanilla scent</em>",		
			"<em>Coconut pineapple peach scent</em>",		
			"<em>Unscented</em>",		
			"<em>Pine forrest scent</em>",		
		]

		PLPItems.forEach((element, index, array) => {
			var scentCtn = document.createElement("div"); scentCtn.classList.add("scentCtn");
			scentCtn.innerHTML = `<h6>${PLPText[index]}</h6>`;
			element.append(scentCtn);
		});
	}
});
