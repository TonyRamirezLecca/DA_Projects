
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
whenExists('.hello-banner', function () {

	document.querySelector('.hello-banner font:nth-child(1)').innerHTML = 'Free Custom Graphic or Digitized Design';
	document.querySelector('.hello-banner font:nth-child(2)').innerHTML = 'from Coldesi-Graphics with $100 Apparel Order <a href="/blanks">Learn more</a>';
	document.querySelector('#header-flex-container').append(document.querySelector('.global-mini-basket-wrapper')); 
	document.querySelector('#search').prepend(document.querySelector('.login-logout'));
	$('.mini-basket-icon.img-responsive').addClass('da_desktop-cart').attr('src', 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/colman-%26-company/nav-remove-distractions/Vector+Smart+Object.png');
	$('<div class="da_new-search-ctn"></div>').insertBefore('#search');
	$('#search .ng-scope.ng-pristine.ng-valid').appendTo('.da_new-search-ctn');
	$('<p class="da_cart-text">CART</p>').appendTo('#header-flex-container > .global-mini-basket-wrapper > a')

});
