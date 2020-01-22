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

/* Add jQuery */
	var jQuery_script = document.createElement("script");
	jQuery_script.type = 'text/javascript';
	jQuery_script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
	document.querySelector("head").appendChild(jQuery_script);
/* Add font awesome 5 */
	var fontAwesome5 = document.createElement("link");
	fontAwesome5.type = "text/css"; fontAwesome5.rel = "stylesheet";
	fontAwesome5.href="https://use.fontawesome.com/releases/v5.4.0/css/all.css";
	document.querySelector("head").appendChild(fontAwesome5);

console.log('da script');
whenExists('.season__content', function () {
	function defer(callback) {
		if (window.jQuery) {
			callback();
		} else {
			setTimeout(function () { defer(callback); }, 50);
		}
	}
	defer(function () {
		jQuery(function () {        
			if (window.innerWidth > 959) {
				/* Create my content */
					$('<div class="da_tab-ctn da_desktop"><div class="da_tab-section"><div class="da_tab da_tab-active"><div class="da_tab-img"></div><h6>SPRING</h6><div class="da_tab-arrow"><i class="fas fa-angle-down da_angle-down"></i><i class="fas fa-angle-right da_angle-right"></i></div></div><div class="da_tab"><div class="da_tab-img"></div><h6>SUMMER</h6><div class="da_tab-arrow"><i class="fas fa-angle-down da_angle-down"></i><i class="fas fa-angle-right da_angle-right"></i></div></div><div class="da_tab"><div class="da_tab-img"></div><h6>FALL</h6><div class="da_tab-arrow"><i class="fas fa-angle-down da_angle-down"></i><i class="fas fa-angle-right da_angle-right"></i></div></div></div><div class="da_section-ctn"><div class="da_section da_section-active"><div class="da_section-wrapper"><div class="da_section-img"><img src="//cdn.shopify.com/s/files/1/0071/9192/0725/files/b1_300x.jpg?v=1554776786" alt="Spring" srcset="//cdn.shopify.com/s/files/1/0071/9192/0725/files/b1_300x.jpg?v=1554776786 1x, \/\/cdn.shopify.com/s/files/1/0071/9192/0725/files/b1_600x.jpg?v=1554776786 2x"></div><div class="da_section-text"><h6>NEXT IN BLOOM</h6><p>Goodbye Winter! Hello Spring. The Coleus Fairway Yellow and Bellissima Rose Bellis flowers are ready for warm weather and spring showers.</br> <strong>Shipping March through April!</strong></p></div></div><div class="da_pick-your-plan-ctn"><div class="da_pick-your-plan-btn">PICK YOUR PLAN</div></div></div><div class="da_section"><div class="da_section-wrapper"><div class="da_section-img"><img src="//cdn.shopify.com/s/files/1/0071/9192/0725/files/b2_300x.jpg?v=1554776799" alt="Summer" srcset="//cdn.shopify.com/s/files/1/0071/9192/0725/files/b2_300x.jpg?v=1554776799 1x,\/\/cdn.shopify.com/s/files/1/0071/9192/0725/files/b2_600x.jpg?v=1554776799 2x" ></div><div class="da_section-text"><p>This is your front door’s time to shine for guests. Petunias, Calibrachoa, and Verbanas will welcome the hot temps and show off for the neighbors.</p></div></div><div class="da_pick-your-plan-ctn"><div class="da_pick-your-plan-btn">PICK YOUR PLAN</div></div></div><div class="da_section"><div class="da_section-wrapper"><div class="da_section-img"><img "//cdn.shopify.com/s/files/1/0071/9192/0725/files/b3_300x.jpg?v=1554776827" alt="Fall" srcset="//cdn.shopify.com/s/files/1/0071/9192/0725/files/b3_300x.jpg?v=1554776827 1x, \/\/cdn.shopify.com/s/files/1/0071/9192/0725/files/b3_600x.jpg?v=1554776827 2x"></div><div class="da_section-text"><p>Prepare for the holidays with a crisp arrangement. The Pansy Frizzle Sizzle in Passionfruit, Yellow Blue Swirl and Raspberry can take the chilly weather and still look impressive.</br><strong>Shipping in September!</strong></p></div></div><div class="da_pick-your-plan-ctn"><div class="da_pick-your-plan-btn">PICK YOUR PLAN</div></div></div></div></div>').appendTo('body');
				/* Adds the Icon next to the tab text */
					$('#shopify-section-sub-step5-results > div > div > div > div.season__content > div.season__block:nth-child(1) > div > div.season__block-text > div > svg').appendTo('.da_tab-section > .da_tab:nth-child(1) > .da_tab-img');
					$('#shopify-section-sub-step5-results > div > div > div > div.season__content > div.season__block:nth-child(2) > div > div.season__block-text > div > svg').appendTo('.da_tab-section > .da_tab:nth-child(2) > .da_tab-img');
					$('#shopify-section-sub-step5-results > div > div > div > div.season__content > div.season__block:nth-child(3) > div > div.season__block-text > div > svg').appendTo('.da_tab-section > .da_tab:nth-child(3) > .da_tab-img');
				/* Delete content and replace with mine */
					$('.season__content').html('');
					$('.da_tab-ctn').appendTo('.season__content');
				/* CTA functionality */
					$('.da_pick-your-plan-btn').each(function() {
						$(this).click(() => {
							$('#shopify-section-sub-step5-results .btn.btn--small.btn--step').click();
						});
					});
				/* Tab Functionality */
					$('.da_tab').each(function(index) {
						$(this).click(() => {
							$('.da_tab').each(function(i) {
								if (i == index) {
									$(this).addClass('da_tab-active');
								}
								else {
									$(this).removeClass('da_tab-active');
								}
							});
							$('.da_section').each(function(i) {
								if (i == index) {
									$(this).addClass('da_section-active');
								}
								else {
									$(this).removeClass('da_section-active');
								}
							});
						});
					});
			}
			else {
				/* Create my content */
					$('<div class="da_tab-ctn"><div class="da_section-ctn"><div class="da_section da_section-active"><div class="da_tab da_tab-active"><div class="da_tab-img"></div><h6>SPRING</h6><div class="da_tab-arrow"><i class="fas fa-angle-down da_angle-down"></i><i class="fas fa-angle-right da_angle-right"></i></div></div><div class="da_section-wrapper"><div class="da_section-img"><img src="//cdn.shopify.com/s/files/1/0071/9192/0725/files/b1_300x.jpg?v=1554776786" alt="Spring" srcset="//cdn.shopify.com/s/files/1/0071/9192/0725/files/b1_300x.jpg?v=1554776786 1x, \/\/cdn.shopify.com/s/files/1/0071/9192/0725/files/b1_600x.jpg?v=1554776786 2x"></div><div class="da_section-text"><h6>NEXT IN BLOOM</h6><p>Goodbye Winter! Hello Spring. The Coleus Fairway Yellow and Bellissima Rose Bellis flowers are ready for warm weather and spring showers.</br> <strong>Shipping March through April!</strong></p></div></div></div><div class="da_section"><div class="da_tab"><div class="da_tab-img"></div><h6>SUMMER</h6><div class="da_tab-arrow"><i class="fas fa-angle-down da_angle-down"></i><i class="fas fa-angle-right da_angle-right"></i></div></div><div class="da_section-wrapper"><div class="da_section-img"><img src="//cdn.shopify.com/s/files/1/0071/9192/0725/files/b2_300x.jpg?v=1554776799" alt="Summer" srcset="//cdn.shopify.com/s/files/1/0071/9192/0725/files/b2_300x.jpg?v=1554776799 1x,\/\/cdn.shopify.com/s/files/1/0071/9192/0725/files/b2_600x.jpg?v=1554776799 2x" ></div><div class="da_section-text"><p>This is your front door’s time to shine for guests. Petunias, Calibrachoa, and Verbanas will welcome the hot temps and show off for the neighbors.</p></div></div></div><div class="da_section"><div class="da_tab"><div class="da_tab-img"></div><h6>FALL</h6><div class="da_tab-arrow"><i class="fas fa-angle-down da_angle-down"></i><i class="fas fa-angle-right da_angle-right"></i></div></div><div class="da_section-wrapper"><div class="da_section-img"><img "//cdn.shopify.com/s/files/1/0071/9192/0725/files/b3_300x.jpg?v=1554776827" alt="Fall" srcset="//cdn.shopify.com/s/files/1/0071/9192/0725/files/b3_300x.jpg?v=1554776827 1x, \/\/cdn.shopify.com/s/files/1/0071/9192/0725/files/b3_600x.jpg?v=1554776827 2x"></div><div class="da_section-text"><p>Prepare for the holidays with a crisp arrangement. The Pansy Frizzle Sizzle in Passionfruit, Yellow Blue Swirl and Raspberry can take the chilly weather and still look impressive.</br><strong>Shipping in September!</strong></p></div></div></div></div></div>').appendTo('body');
				/* Adds the Icon next to the tab text */
					$('#shopify-section-sub-step5-results > div > div > div > div.season__content > div.season__block:nth-child(1) > div > div.season__block-text > div > svg').appendTo('.da_section:nth-child(1) > .da_tab > .da_tab-img');
					$('#shopify-section-sub-step5-results > div > div > div > div.season__content > div.season__block:nth-child(2) > div > div.season__block-text > div > svg').appendTo('.da_section:nth-child(2) > .da_tab > .da_tab-img');
					$('#shopify-section-sub-step5-results > div > div > div > div.season__content > div.season__block:nth-child(3) > div > div.season__block-text > div > svg').appendTo('.da_section:nth-child(3) > .da_tab > .da_tab-img');
				/* Delete content and replace with mine */
					$('.season__content').html('');
					$('.da_tab-ctn').appendTo('.season__content');
				/* CTA functionality */
					$('.da_pick-your-plan-btn').each(function() {
						$(this).click(() => {
							$('#shopify-section-sub-step5-results .btn.btn--small.btn--step').click();
						});
					});
				/* Tab Functionality */
					$('.da_tab').each(function(index) {
						$(this).click(() => {
							$('.da_tab').each(function(i) {
								if (i == index) {
									$(this).toggleClass('da_tab-active');
								}
								else {
									$(this).removeClass('da_tab-active');
								}
							});
							$('.da_section').each(function(i) {
								if (i == index) {
									$(this).toggleClass('da_section-active');
								}
								else {
									$(this).removeClass('da_section-active');
								}
							});
						});
					});
				/* What you get */
					$('<div class="da_what-you-get">What you get:</div>').insertBefore('.season__content');
					//
				/* SUMMARY SECTION */
					$('.season__summary > h3').html('<div>YOUR FRONT DOOR SUMMARY</div><div><i class="fas fa-angle-down da_angle-down"></i><i class="fas fa-angle-right da_angle-right"></i></div>');
					$('.season__summary > h3').click(function() {
						$(this).find('.da_angle-right').toggle();
						$(this).find('.da_angle-down').toggle();
						$('#season__summary').slideToggle();
					});
			}
		});
	});
});


