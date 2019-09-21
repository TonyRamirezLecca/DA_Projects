
function defer(callback) {
	if (window.jQuery) {
		callback();
	} else {
		setTimeout(function () { defer(callback); }, 50);
	}
}
defer(function () {
	jQuery(function () {        
		$('#main > div.splash-image--background > div > div > section > div.contentbox__col2').remove();
		$('.container.contentfoot.cf.contentfoot--nobackground').remove();

		var heroImg = $('<div class="heroImgCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/sticker-giant/HomepageFullRedesign/20190523_StickerGiant-DieCut_Matte_and_Gloss.png"/></div>')
		heroImg.insertAfter('.contentbox__col1');

		var reviewsSection = $('<div class="reviewsSection"><h1>CUSTOMER REVIEWS</h1><div class="reviewsWrapper"></div></div>');

		reviewsSection.insertAfter('#main');


		var review1 = $('<div class="review"><h6>“When your customer service experience is as good as it is with StickerGiant, you will go back to them for repeat busiiness. They have the quality."</br></br><strong>Jason Wolfe,</strong> Jason Wolfe Music</h6><div class="reviewImgCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/sticker-giant/HomepageFullRedesign/jason_wolfe_music__546274d8d6915.png"/></div></div>');

		var review2 = $('<div class="review"><h6>"I needed an emergency order done and sent. Tom and his team really came through both on quality and speed. The artwork I submitted was rendered perfectly - and even though I had made an error on the sticker dimensions, the work was done correctly and perfectly and FAST."</br></br><strong>Leila G.,</strong> ProvenceTable.com</h6><div class="reviewImgCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/sticker-giant/HomepageFullRedesign/ProvenceTable_StickerGiant__546274382f962.png"/></div></div>');

		var review3 = $('<div class="review"><h6>"I like that I can talk to a real person with any of the detailed questions I might have instead of just defaulting to a big impersonal e-system. Someone\'s always able to talk me through all of the options and the stickers turn out beautiful every time. Thanks Sticker Giant!"</br></br><strong>Shannon Perez-Darby,</strong></br>The NW Network</h6><div class="reviewImgCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/sticker-giant/HomepageFullRedesign/TheNWNetwork__53220c45026f8.png"/></div></div>');


		$('.reviewsWrapper').append(review1, review2, review3);
	});
});

