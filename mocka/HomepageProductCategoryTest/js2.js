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
whenExists('.home-category-tiles-container', function () {
	jQuery('.home-category-tiles-container').html('<div class="da_row da_desktop"><li id="da_1" class="item da_1"><a href="https://www.mocka.com.au/baby.html">SHOP FOR</br><span>Baby</span></a></li><li id="da_2" class="item da_2"><a href="https://www.mocka.com.au/kids.html">SHOP FOR</br><span>Kids</span></a></li><li id="da_3" class="item da_3"><a href="https://www.mocka.com.au/home-furniture.html">SHOP FOR</br><span>Home</span></a></li></div><div class="da_row da_desktop"><li id="da_4" class="item da_4"><a href="https://www.mocka.com.au/decor.html">SHOP FOR</br><span>Decor</span></a></li><li id="da_5" class="item da_5"><a href="https://www.mocka.com.au/new-to-mocka.html">SHOP FOR</br><span>New to Mocka</span></a></li><li id="da_6" class="item da_6"><a href="https://www.mocka.com.au/sale.html">SHOP FOR</br><span></span>Sale Items</a></li></div>');


	jQuery('<div class="da_row da_mobile"><li class="item da_1"><a href="https://www.mocka.com.au/baby.html">SHOP FOR</br><span>Baby</span></a></li><li class="item da_2"><a href="https://www.mocka.com.au/kids.html">SHOP FOR</br><span>Kids</span></a></li><li class="item da_3"><a href="https://www.mocka.com.au/home-furniture.html">SHOP FOR</br><span>Home</span></a></li><li class="item da_4"><a href="https://www.mocka.com.au/decor.html">SHOP FOR</br><span>Decor</span></a></li><li class="item da_5"><a href="https://www.mocka.com.au/new-to-mocka.html">SHOP FOR</br><span>New to Mocka</span></a></li><li class="item da_6"><a href="https://www.mocka.com.au/sale.html">SHOP FOR</br><span></span>Sale Items</a></li></div>').appendTo('.home-category-tiles-container');

	jQuery('.da_1').click(() => {
		location.href = "https://www.mocka.com.au/baby.html";
	});
	jQuery('.da_2').click(() => {
		location.href = "https://www.mocka.com.au/kids.html";
	});
	jQuery('.da_3').click(() => {
		location.href = "https://www.mocka.com.au/home-furniture.html";
	});
	jQuery('.da_4').click(() => {
		location.href = "https://www.mocka.com.au/decor.html";
	});
	jQuery('.da_5').click(() => {
		location.href = "https://www.mocka.com.au/new-to-mocka.html";
	});
	jQuery('.da_6').click(() => {
		location.href = "https://www.mocka.com.au/sale.html";
	});

});
