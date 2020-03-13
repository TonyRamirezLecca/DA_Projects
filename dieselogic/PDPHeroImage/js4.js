/*** JS 4 ***/
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
whenExists('.mobileMenuWrap > a:nth-child(3), .yearMakeModelWrap', function () {

var da = { 
	heroImgV2: "https://static.disruptive.co/dieselogic/pdp-hero-image-mobile/heroImgV2.png",
	heroImgV3: "https://static.disruptive.co/dieselogic/pdp-hero-image-mobile/heroImgV3.png",
	lightning: "https://static.disruptive.co/dieselogic/pdp-hero-image-mobile/lightning.png",
	searchIcon: "https://static.disruptive.co/dieselogic/pdp-hero-image-mobile/searchIcon.png"
}

//Search Bar
	$(`<a class="menuItem" href="#"><img src="${da.searchIcon}"/></a>`).insertAfter('.mobileMenuWrap > a:nth-child(1)');

	$('.mobileMenuWrap > a:nth-child(2)').click(() => {
		event.preventDefault();
		$('#SearchWrap').slideToggle();
		$('#MainNav .mainNavContent').toggleClass('da_active');
	});

	$('<button class="da_close-search">X</button>').insertAfter('input[id$="ctrlSearch_SearchButton"]');
	$('.da_close-search').click(() => {
		event.preventDefault();
		$('#SearchWrap').slideToggle();
		$('#MainNav .mainNavContent').toggleClass('da_active');
	});


//CTA QUICK NAV
$('<div class="da_cta-section"><h2>QUICK NAV</h2><div class="da_cta-ctn"><a href="https://www.dieselogic.com/m-3-dodge.aspx">SHOP DODGE</a><a href="https://www.dieselogic.com/m-14-gmc-chevy.aspx">SHOP GM</a><a href="https://www.dieselogic.com/m-4-ford.aspx">SHOP FORD</a></div></div>').insertBefore('.yearMakeModelWrap');


//homepage
$('.homeRotateWrap > div:first-child').html(`

<div class="da_hero-text-ctn">
	<h2 class="da_black-text">REMANUFACTURING DIESEL</h2>
	<h2 class="da_yellow-text">FUEL INJECTION</br> SYSTEMS</h2>
	<h2 class="da_white-text">AND TEST EQUIPMENT DESIGN</h2>
</div>

<img class="da_lightning" src="${da.lightning}"/>

`);

});
