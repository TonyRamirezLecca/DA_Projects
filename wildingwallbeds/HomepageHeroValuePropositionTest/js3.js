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

whenExists('.hero', function () {

	$('#slider-video').addClass('da_video').appendTo('body');

	$('.hero').html('<div class="da_slider"><div class="da_hero-overlay"><div class=da_hero1><div class=da_headline>Maximize and<span><br></span> Beautify<span><br></span> Your <span class=zigzag-wrapper><span class="zigzag-text zigzag-text-active">Space</span> <svg preserveAspectRatio=none viewBox="0 0 500 150"xmlns=http://www.w3.org/2000/svg><path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path></svg></span></div><div class=da_value-props><div class=da_value-props-img></div></div><a href=https://www.wallbedsbywilding.com/october-murphy-bed-specials/ >View Specials</a></div></div><div class="da_hero-overlay"><div class=da_hero2><div class=da_banner><div class=da_banner-img></div></div><div class=da_headline>Shipping	<span class=zigzag-wrapper><span class="zigzag-text zigzag-text-active">Sale</span> <svg preserveAspectRatio=none viewBox="0 0 500 150"xmlns=http://www.w3.org/2000/svg><path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path></svg></span></div><p>Order Now to Save up to<br> $400 on Shipping</p><a href="https://www.wallbedsbywilding.com/murphy-beds/" >View Murphy Beds</a></div></div><div class="da_hero-overlay"><div class=da_hero3><div class=da_headline>Transform</br> Your <span class=zigzag-wrapper><span class="zigzag-text zigzag-text-active">Space</span> <svg preserveAspectRatio=none viewBox="0 0 500 150"xmlns=http://www.w3.org/2000/svg><path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path></svg></span></div><p>"We are ecstatic about the <span><br></span>transformation Wilding Wallbeds</br><span></br></span> accomplished in our office/guest <span></br></span>room. The exceptional workmanship</br><span></br></span> and your attention to detail was<span></br></span> greatly appreciated."</p><h6>Mike and Pattie B.</h6><a href="https://www.wallbedsbywilding.com/murphy-beds/" >View Murphy Beds</a></div></div><div class=da_hero-overlay><div class=hero-text><h1>October Monthly <span class=zigzag-wrapper><span class="zigzag-text zigzag-text-active">Special</span> <svg preserveAspectRatio=none viewBox="0 0 500 150"xmlns=http://www.w3.org/2000/svg><path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path></svg></span></h1><a class="btn btn-large da_btn-v3"href=/current_special/ >View Specials</a></div></div></div>');

	$('#slider-video').appendTo('.hero');


	$('#slider-video').on('ended', () => {
		$('#slider-video').remove();
	});


	//Gets slick code with callback function
	$.getScript('//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', function(){

		//Gets slick styling
		$('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>').appendTo('head');
		$('<link rel="stylesheet" type="text/css" href="https://disruptive-advertising.s3-us-west-2.amazonaws.com/common/Slick+JS/slick-1.8.1/slick/slick-theme.css"/>').appendTo('head');

		//Deletes contents in current hero
		var slideCtn = document.querySelector('.da_slider');

		//Calls the slick function to create slider
		$('.da_slider').slick({
			pauseOnHover: false,
			pauseOnFocus: false,
			swipe: false,
			dots: false,
			arrows: false,
			infinite: true,
			speed: 1000,
			autoplay: true,
			fade: true,
			autoplaySpeed: 8000,
			slidesToShow: 1
		});
	});

});



