/*** JS 1 ***/

console.log("DA_SCRIPT");
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
whenExists('.page-width > header', function () {
	if (window.location.href.includes('/collections/clothing') || window.location.href.includes('/collections/men') || window.location.href.includes('/collections/hats') || window.location.href.includes('/collections/t-shirts') || window.location.href.includes('/collections/tank-top') || window.location.href.includes('/collections/hoodies-1')) {
		var gallery = $('<div class="shopGallery"><div><a href="https://dieselpowergear.com/collections/t-shirts"><div class="galleryImgCtn"><div class="darkenImg"></div><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/Diesel+Power+Gear/PLPSubcategories/shopshirts.jpg"/></div><h1>Shop T-Shirts</h1></a></div><div><a href="https://dieselpowergear.com/collections/hats"><div class="galleryImgCtn"><div class="darkenImg"></div><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/Diesel+Power+Gear/PLPSubcategories/shophats.jpg"/></div><h1>Shop Hats</h1></a></div><div><a href="https://dieselpowergear.com/collections/tank-top"><div class="galleryImgCtn"><div class="darkenImg"></div><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/Diesel+Power+Gear/PLPSubcategories/shoptanktops.jpg"/></div><h1>Shop Tank-Tops</h1></a></div><div><a href="https://dieselpowergear.com/collections/hoodies-1"><div class="galleryImgCtn"><div class="darkenImg"></div><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/Diesel+Power+Gear/PLPSubcategories/shophoodies.jpg"/></div><h1>Shop Hoodies</h1></a></div></div>')
		gallery.insertAfter('.page-width > header');
		if (window.location.href.includes('/t-shirts')) {
			$('.shopGallery > div:nth-child(1)').addClass('addBorder');
		}
		else if (window.location.href.includes('/hats')) {
			$('.shopGallery > div:nth-child(2)').addClass('addBorder');
		}
		else if (window.location.href.includes('/tank-top')) {
			$('.shopGallery > div:nth-child(3)').addClass('addBorder');
		}
		else if (window.location.href.includes('/hoodies-1')) {
			$('.shopGallery > div:nth-child(4)').addClass('addBorder');
		}
	}
	else if (window.location.href.includes('/collections/gear') || window.location.href.includes('/collections/accessories') || window.location.href.includes('/collections/sunglasses') || window.location.href.includes('/collections/decals-1') || window.location.href.includes('/beard-care') ) {
		var gallery = $('<div class="shopGallery"><div><a href="https://dieselpowergear.com/collections/accessories"><div class="galleryImgCtn"><div class="darkenImg"></div><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/Diesel+Power+Gear/PLPSubcategories/accessories.png"/></div><h1>Shop Accessories</h1></a></div><div><a href="https://dieselpowergear.com/collections/sunglasses"><div class="galleryImgCtn"><div class="darkenImg"></div><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/Diesel+Power+Gear/PLPSubcategories/sunglasses.png"/></div><h1>Shop Sunglasses</h1></a></div><div><a href="https://dieselpowergear.com/collections/decals-1"><div class="galleryImgCtn"><div class="darkenImg"></div><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/Diesel+Power+Gear/PLPSubcategories/Decal.jpg"/></div><h1>Shop Decals</h1></a></div><div><a href="https://dieselpowergear.com/search?q=beard"><div class="galleryImgCtn"><div class="darkenImg"></div><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/Diesel+Power+Gear/PLPSubcategories/beard.jpg"/></div><h1>Shop Beard Care Products</h1></a></div></div>')
		gallery.insertAfter('.page-width > header');
		if (window.location.href.includes('/accessories')) {
			$('.shopGallery > div:nth-child(1)').addClass('addBorder');
		}
		else if (window.location.href.includes('/sunglasses')) {
			$('.shopGallery > div:nth-child(2)').addClass('addBorder');
		}
		else if (window.location.href.includes('/decals-1')) {
			$('.shopGallery > div:nth-child(3)').addClass('addBorder');
		}
		else if (window.location.href.includes('/beard-care')) {
			$('.shopGallery > div:nth-child(4)').addClass('addBorder');
		}
	}
});

