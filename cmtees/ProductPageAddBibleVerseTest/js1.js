function whenExists(element, callback) {
	var interval = setInterval(function () {
		if (document.querySelectorAll(element).length) {
			callback();
			clearInterval(interval);
		}
	}, 100);
}

whenExists('.product-title', function() {

	var bibleVerse = document.createElement("h6"); 
	var colorBlock = document.createElement("div"); colorBlock.classList.add("colorBlock");
	var verseContainer = document.createElement("div"); verseContainer.classList.add("verseContainer");
		verseContainer.append(colorBlock); verseContainer.append(bibleVerse);

	if (window.location.href.includes("/products/god-is-good")) {
		bibleVerse.innerHTML = '<em>"Give thanks to the LORD, for he is good; his love endures forever." - Psalm 107:1</em>';
	}
	else if (window.location.href.includes("/products/dont-just-go-to-church")) {
		bibleVerse.innerHTML = '<em>"Let your light so shine before men...that they may see your good works, and glorify your Father which is in heaven." - Matthew 5:16</em>';
		document.querySelectorAll(".short-description > p")[0].remove();
	}
	else if (window.location.href.includes("/products/be-still-know")) {
		bibleVerse.innerHTML = '<em>"He says, \'Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.\'" - Psalms 46:10</em>';
		document.querySelectorAll(".short-description > p")[0].remove();
	}
	else if (window.location.href.includes("/products/he-is-risen-t-shirt")) {
		bibleVerse.innerHTML = '<em>"He is not here; for He is risen, as He said. Come, see the place where the Lord lay." - Matthew 28:6</em>';
		document.querySelectorAll(".short-description > p")[0].remove();
	}
	else if (window.location.href.includes("/products/proverbs-31-woman-jersey")) {
		bibleVerse.innerHTML = '<em>"Strength and honour are her clothing; and she shall rejoice in time to come." - Proverbs 31:25</em>';
		document.querySelectorAll(".short-description > h2")[0].remove();
	}
	else if (window.location.href.includes("/products/be-the-light")) {
		bibleVerse.innerHTML = '<em>"Let your light so shine before men...that they may see your good works, and glorify your Father which is in heaven." - Matthew 5:16</em>';
	}
	else if (window.location.href.includes("/products/created-with-a-purpose")) {
		bibleVerse.innerHTML = '<em>"For we are His workmanship, created in Christ Jesus for good works, which God prepared beforehand that we should walk in them." - Ephesians 2:10</em>';
	}
	else if (window.location.href.includes("/products/life-is-short-be-fearless")) {
		bibleVerse.innerHTML = '<em>"For God has not given us a spirit of fear, but of power and of love and of a sound mind." - 2 Timothy 1:7</em>';
		document.querySelectorAll(".short-description > p")[0].remove();
	}
	else if (window.location.href.includes("/products/believer")) {
		bibleVerse.innerHTML = '<em>"Let no one despise your youth, but be an example to the believers in word, in conduct, in love, in spirit, in faith, in purity." - 1 Timothy 4:12</em>';
	}
	else if (window.location.href.includes("/products/love-john-3-16")) {
		bibleVerse.innerHTML = '<em>"For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life." - John 3:16</em>';
		document.querySelectorAll(".short-description > p")[0].remove();
		document.querySelectorAll(".short-description > p")[0].remove();
	}

	document.querySelector(".loox-rating").style.margin = "8px 0";
	document.querySelector(".product-shop > a").parentNode.insertBefore(verseContainer, document.querySelector(".product-shop > a"));

});
