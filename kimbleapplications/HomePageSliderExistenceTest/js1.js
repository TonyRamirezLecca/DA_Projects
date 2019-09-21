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

whenExists('#page-row-1 > div > div.owl-stage-outer > div > div > div > div > div', function () {
	$.getScript('//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', function(){

		$('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>').appendTo('head');
		$('<link rel="stylesheet" type="text/css" href="https://disruptive-advertising.s3-us-west-2.amazonaws.com/common/Slick+JS/slick-1.8.1/slick/slick-theme.css"/>').appendTo('head');

		//Create Slides
			var slide1 = document.createElement("div"); slide1.classList.add("slick_slide", "slideImg1");
				slide1.innerHTML = '<div class="slideTextCtn"><h1>Fuel Your Business Growth with Kimble PSA Software</h1><h4>Kimble Professional Services Automation drives business efficiency and resource optimization, delivering growth and profitability</h4><a href="https://www.kimbleapps.com/product/">VIEW THE PRODUCT</a><div class="darkenBackground"></div></div>';

			var slide2 = document.createElement("div"); slide2.classList.add("slick_slide", "slideImg2");
				slide2.innerHTML = '<div class="slideTextCtn"><h1>Business Foresight</h1><h4>Kimble diagnostics give instant insight into the current and future health of your business, helping you keep one step ahead</h4><a href="https://www.kimbleapps.com/product/">VIEW THE PRODUCT</a><div class="darkenBackground"></div></div>';

			var slide3 = document.createElement("div"); slide3.classList.add("slick_slide", "slideImg3");
				slide3.innerHTML = '<div class="slideTextCtn"><h1>Resource Optimization</h1><h4>Kimble\'s intelligent resourcing matches supply and demand to optimize utilization across your teams</h4><a href="https://www.kimbleapps.com/product/">VIEW THE PRODUCT</a><div class="darkenBackground"></div></div>';

			var slide4 = document.createElement("div"); slide4.classList.add("slick_slide", "slideImg4");
				slide4.innerHTML = '<div class="slideTextCtn"><h1>Delivery Effectiveness</h1><h4>Kimble drives consistency and protects profitability by surfacing risks and supporting all your project delivery centrally</h4><a href="https://www.kimbleapps.com/product/">VIEW THE PRODUCT</a><div class="darkenBackground"></div></div>';

			var slide5 = document.createElement("div"); slide5.classList.add("slick_slide", "slideImg5");
				slide5.innerHTML = '<div class="slideTextCtn"><h1>Customer Collaboration</h1><h4>Kimble drives collaboration by putting customers at the heart of service delivery and enriching your customers\' experiences</h4><a href="https://www.kimbleapps.com/product/">VIEW THE PRODUCT</a><div class="darkenBackground"></div></div>';

		var hero = document.querySelector("#page-row-1");
			hero.innerHTML = '';
			hero.append(slide1); hero.append(slide2); hero.append(slide3); hero.append(slide4); hero.append(slide5);

		$('#page-row-1').slick({
			dots: true,
			infinite: true,
			speed: 300,
			autoplay: true,
			autoplaySpeed: 5000,
			slidesToShow: 1
		});

		/*
		document.querySelectorAll('.slick-dots li').forEach((element, index, array) => {
			$('<i class="fa fa-circle dot"></i>').appendTo(element);
			$('<i class="fa fa-circle-o hideDot "></i>').appendTo(element);
		});
		*/

		var rightBtn = $('<i class="fa fa-angle-right rightBtn" aria-hidden="true"></i>')
		var leftBtn = $('<i class="fa fa-angle-left leftBtn" aria-hidden="true"></i>')

		rightBtn.appendTo('.slick-dots');
		leftBtn.prependTo('.slick-dots');

		rightBtn.click(function() {
			$('#page-row-1 > button.slick-next.slick-arrow').click();
		});
		leftBtn.click(function() {
			$('#page-row-1 > button.slick-prev.slick-arrow').click();
		});

		$('.slideTextCtn').wrap('<div class="superSlideTxtCtn"></div>')

	});
});
