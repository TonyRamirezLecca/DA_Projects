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

whenExists('div[itemprop="offers"] > div:nth-child(4)', function () {


	$('<div class="da_vp-ctn1"><div class="da_vp"> <img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/stunt-puppy/product-page-add-vp-above-fold/running+Dog.png"/><p><span>Thoughtfully Built</br> With Your Dog In Mind</span></br>Because every dog makes the</br> world a better place</p></div><div class="da_vp"> <img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/stunt-puppy/product-page-add-vp-above-fold/Dog+Heeart.png"/><p><span>We Love Our Dogs</br> As Much As You Do</span></br>Made by dog lovers</br> for dog lovers</p></div><div class="da_vp"> <img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/stunt-puppy/product-page-add-vp-above-fold/Box+Icon.png"/><p><span>Free Shipping</br> & Returns*</span></br>*Custom items are not</br> eligible for return/exchange</p></div></div>').insertAfter('div[itemprop="offers"] > div:nth-child(4)');

	$('<div class="da_vp-ctn2"><div class="da_vp"> <img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/stunt-puppy/product-page-add-vp-above-fold/running+Dog.png"/><p><span>Thoughtfully Built</br> With Your Dog In Mind</span></br>Because every dog makes the</br> world a better place</p></div><div class="da_vp"> <img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/stunt-puppy/product-page-add-vp-above-fold/Dog+Heeart.png"/><p><span>We Love Our Dogs</br> As Much As You Do</span></br>Made by dog lovers</br> for dog lovers</p></div><div class="da_vp"> <img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/stunt-puppy/product-page-add-vp-above-fold/Box+Icon.png"/><p><span>Free Shipping</br> & Returns*</span></br>*Custom items are not</br> eligible for return/exchange</p></div></div>').prependTo('.grid__item.product-single__photos');
	
});

