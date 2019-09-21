function defer(callback) {
	if (window.jQuery) {
		callback();
	} else {
		setTimeout(function () { defer(callback); }, 50);
	}
}
defer(function () {
	jQuery(function () {        
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

		whenExists('#product-options-wrapper > .last', function () {
			var newTitles = [];
			var newContentSection = [];
			var newContent = [];

			var labels = document.querySelectorAll('#product-options-wrapper > .last > dt > label');
			labels.forEach((el, i, arr) => {
				newTitles.push(el.innerHTML);
			});
			var dropDownContent = document.querySelectorAll('#product-options-wrapper > .last > dd > div > select');
			dropDownContent.forEach((el, i, arr) => {
				el.querySelectorAll('option').forEach((el, i, arr) => {
					if (i == 0) return;
					newContent.push(el.innerHTML);
				});
				newContentSection.push(newContent);
				newContent = [];
			});

			jQuery('<div class="newValuesCtn"></div>').insertAfter('#product-options-wrapper > .last');
			for (var i = 0; i < newTitles.length; i++) {
				jQuery(`<div class="newValuesSection"><h1>${newTitles[i]}</h1><div class="sectionFlexCtn"></div></div>`).appendTo('.newValuesCtn');
				for (var j = 0; j < newContentSection[i].length; j++) {
					jQuery(`<div class="newContent"><p>${newContentSection[i][j]}</p></div>`).appendTo('.sectionFlexCtn');
				}
			}

			//Removes the copies for the container --BUG-- GOOD ENOUGH
			if (newTitles.length > 1) {
				document.querySelectorAll('.newValuesSection:nth-child(1) > .sectionFlexCtn > .newContent').forEach((el, i, arr) => {
					if (i < arr.length/2) return;
					el.remove();
				});
			}

			//fake clicks the real form
			document.querySelectorAll('.newValuesSection').forEach((el, index, arr) => {
				el.querySelectorAll('.sectionFlexCtn > .newContent').forEach((el, subIndex, arr) => {
					el.addEventListener("click", () => {
						document.querySelector(`#product-options-wrapper > .last > dd:nth-child(${(index * 2)+2}) > div > select > option:nth-child(${subIndex + 2})`).selected = true;

					});
				});
			});

			document.querySelectorAll('.newValuesSection').forEach((el, i, arr) => {
				el.querySelectorAll('.sectionFlexCtn > .newContent').forEach((el, i, arr) => {
					if (i == 0) el.classList.add('activeGift');
				});
			});

			document.querySelectorAll('.newContent').forEach((el, i, arr) => {
				el.addEventListener("click", () => {
					arr.forEach((subEl, subI) => {
						subEl.classList.remove('activeGift');
					});
					el.classList.add('activeGift');
				});
			});

		});

	});
});

