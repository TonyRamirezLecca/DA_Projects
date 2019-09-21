//JS3

//when jquery exists
function defer(callback) {
	if (window.jQuery) {
		callback();
	} else {
		setTimeout(function () { defer(callback); }, 50);
	}
}
defer(function () {
	jQuery(function () {        
			//BUTTON LINKS CODE
			if(window.location.href === 'https://www.stickergiant.com/'){
				var main = document.querySelector('#main').innerHTML = '';

				var main = $('#main').html('<div class="headerCtn"></div><div class="stickerSection"></div>');

				$('.headerCtn').html('<h1>WELCOME TO STICKER GIANT!</h1><h2>Print custom stickers & labels fast. Shipping is Free.</h2><div class="redUnderline"></div>');

				$('.stickerSection').html('<p>First things first, do you need a <Strong>STICKER</strong> or a <strong>LABEL</strong>?</p><div class="stickerContentWrapper"><div class="stickerContent" id="sticker1"></div><div class="stickerContent" id="sticker2"></div></div><a class="showStickerBtn" href="https://stickergiant.com/type">BUILD MY STICKER</a>')

				$('#sticker1').html('<div class="stickerText"><h1>STICKERS</h1><ul><li>Best for outdoor use</li><li>Customizable shapes</li><li>Outdoor Durable</li></ul><a href="https://www.stickergiant.com/type?type=stickers">GET STICKERS</a></div><div class="stickerImgWrapper"><div class="stickerImgCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/sticker-giant/HomepageFullRedesign/Screen+Shot+2019-08-15+at+11.23.22+PM.png"/></div><div class="imgSubWrapper"><div class="stickerImgCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/sticker-giant/HomepageFullRedesign/Screen+Shot+2019-08-15+at+11.20.54+PM.png"/></div><div class="stickerImgCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/sticker-giant/HomepageFullRedesign/Screen+Shot+2019-08-15+at+11.20.36+PM.png"/></div></div></div>')

				$('#sticker2').html('<div class="stickerText"><h1>LABELS</h1><ul><li>Best for product labeling</li><li>Customizable shapes</li><li>More economical</li></ul><a href="https://www.stickergiant.com/type?type=labels">GET LABELS</a></div><div class="stickerImgWrapper"><div class="stickerImgCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/sticker-giant/HomepageFullRedesign/Screen+Shot+2019-08-15+at+11.20.47+PM.png"/></div><div class="imgSubWrapper"><div class="stickerImgCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/sticker-giant/HomepageFullRedesign/Screen+Shot+2019-08-15+at+11.26.48+PM.png"/></div><div class="stickerImgCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/sticker-giant/HomepageFullRedesign/Screen+Shot+2019-08-15+at+11.26.48+PM.png"/></div></div></div>')
			}   
			else if (window.location.href === 'https://www.stickergiant.com/type?type=stickers') {
				document.querySelectorAll('.choose-type__title').forEach((element) => {
					if (element.innerHTML.includes('Labels')) {
						element.parentElement.parentElement.parentElement.parentElement.remove();
					}
				});	
			} 
			else if (window.location.href === 'https://www.stickergiant.com/type?type=labels') {
				document.querySelectorAll('.choose-type__title').forEach((element) => {
					if (element.innerHTML.includes('Stickers')) {
						element.parentElement.parentElement.parentElement.parentElement.remove();
					}
				});	
			}
	});
});
