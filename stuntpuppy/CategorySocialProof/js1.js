/*** JS 1 ***/
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
whenExists('.section-header.text-center', function () {
	if (window.location.href.includes('https://www.stuntpuppy.com/collections/collar')) {
		var textNode = '"My husband was super skeptical since our pup would find a way to destroy collars within months. Well, Max has lived in this collar for years with no abrasion, snags or stain wear on it at all. It is still super soft and does not pull at his fur. It also cleans up to new after washing it and is incredibly adjustable. Continues to fit great!"';
		var reviewer = 'Lisa, Stunt Puppy Customer';
		var imgSrc = 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/stunt-puppy/category-social-proof/collardog.png" class="da_img da_collar"';
	}

	else if (window.location.href.includes('https://www.stuntpuppy.com/collections/leashes')) {
		var textNode = '"I’ve owned a Stunty Puppy leash for years...it’s that well made! The hardware is still in great condition as well - no rust even in salt air! Is also a perfect length for my dog. Thank you Stunt Puppy!"'
		var reviewer = 'Roxie, Stunty Puppy Customer';
		var imgSrc = 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/stunt-puppy/category-social-proof/leashesdog.png" class="da_img da_leashes"';
	}

	else if (window.location.href.includes('https://www.stuntpuppy.com/collections/ids')) {
		var textNode = '“My dog is super sensitive to sounds so collar tags don’t work well for him. We were so happy when we found Stunt Puppy ID – such a great product! Our dog’s information is printed right on his collar and he doesn’t hear a thing! BRILLIANT!”'
		var reviewer = 'Tina, Stunt Puppy Customer';
		var imgSrc = 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/stunt-puppy/category-social-proof/iddog.png" class="da_img da_ids"';
	}

	else if (window.location.href.includes('https://www.stuntpuppy.com/collections/outerwear')) {
		var textNode = '"Great design, materials, and construction. We’ve been using a Puff Doggy for our older dog for many years and just recently bought a second one for our new puppy. They’re a must-have for small dogs in cold climates."'
		var reviewer = 'Jesse, Stunt Puppy Customer';
		var imgSrc = 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/stunt-puppy/category-social-proof/outerweardog.png" class="da_img da_outerwear"';
	}

	$(`<div class="da_banner"><div class="da_text-ctn"><div class="da_text">${textNode}</div><div class="da_reviewer">${reviewer}</div></div><div class="da_img-ctn"><img src="${imgSrc}/></div></div>`).insertAfter('.section-header.text-center');
});
