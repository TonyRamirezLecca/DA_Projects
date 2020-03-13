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
whenExists('.mobileMenuWrap > a:nth-child(3), .homeRotateWrap', function () {

var da = { 
	heroImgV2: "https://static.disruptive.co/dieselogic/pdp-hero-image-mobile/heroImgV2.png",
	heroImgV3: "https://static.disruptive.co/dieselogic/pdp-hero-image-mobile/heroImgV3.png",
	lightning: "https://static.disruptive.co/dieselogic/pdp-hero-image-mobile/lightning.png",
	searchIcon: "https://static.disruptive.co/dieselogic/pdp-hero-image-mobile/searchIcon.png"
}


//homepage
$('.homeRotateWrap > div:first-child').html(`

<div class="da_hero-text-ctn">
	<h2 class="da_black-text">REMANUFACTURING DIESEL</h2>
	<h2 class="da_yellow-text">FUEL INJECTION SYSTEMS</h2>
	<h2 class="da_white-text">AND TEST EQUIPMENT DESIGN</h2>
</div>

`);



});
