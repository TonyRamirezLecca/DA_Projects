/*** JS 2 ***/

function defer(callback) {
	if (window.jQuery) {
		callback();
	} else {
		setTimeout(function () { defer(callback); }, 50);
	}
}
defer(function () {
	jQuery(function () {        
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
		whenExists('.main-container.col1-layout', function () {

			jQuery('<div class=da_faq><div class=da_header><h1>Frequently Asked Questions</h1></div><div class=da_accordian><div class=da_accordian-item><div class=da_accordian-header><span class=da_plus>+</span><span class=da_minus>-</span><h5>Why buy on AeroGarden.com?</h5></div><div class=da_accordian-answer><p>AeroGarden.com is the only place to find our full selection of indoor gardens, seed pod kits and accessories. Every garden comes with a choice of seed pod kit, and our Customer Service team will be happy to provide a price adjustment if an item you bought on AeroGarden.com goes down in price within a week of your purchase.</div></div><div class=da_accordian-item><div class=da_accordian-header><span class=da_plus>+</span><span class=da_minus>-</span><h5>What is the return policy?</h5></div><div class=da_accordian-answer><p>You can <a href=https://www.aerogarden.com/aerogarden-customer-service-support/orders-returns-and-warranty/1HowDoIReturnMyAeroGarden.html>view our return policy here</a> on our site. Please call AeroGrow Customer Service at 1-800-476-9669 if you have additional questions.</div></div><div class=da_accordian-item><div class=da_accordian-header><span class=da_plus>+</span><span class=da_minus>-</span><h5>When can I expect my order to be delivered?</h5></div><div class=da_accordian-answer><p>If in stock, your order will ship per your selected method within 48 business hours of receipt.</div></div><div class=da_accordian-item><div class=da_accordian-header><span class=da_plus>+</span><span class=da_minus>-</span><h5>How do I check the status of my order?</h5></div><div class=da_accordian-answer><p>You can check the status of your order by calling AeroGrow Customer Service at 1-800-476-9669. You can track an order that has already shipped by clicking here to log into your account or to register as a new customer.</div></div><div class=da_accordian-item><div class=da_accordian-header><span class=da_plus>+</span><span class=da_minus>-</span><h5>How do I track shipping?</h5></div><div class=da_accordian-answer><p>You can get more information about tracking shipments <a href=https://www.aerogarden.com/aerogarden-customer-service-support/orders-returns-and-warranty/im-having-trouble-tracking-my-order.html>here on our site.</a> Or, you can log in to your account to get more information on your order.</div></div></div></div>').insertAfter('body > div.wrapper > div > div.main-container.col1-layout > div > div > div > div.col-md-7.col-lg-7.left-col > div.row.crosssell-wrapper > div');

			jQuery('.da_minus').addClass('hide_plus_minus');

			//Create Accordian Sections
			document.querySelectorAll('.da_accordian-header').forEach((element, index, array) => {
				element.addEventListener("click", function(){
					jQuery('.da_accordian-answer').eq(index).slideToggle();
					jQuery('.da_plus').eq(index).toggleClass('hide_plus_minus');
					jQuery('.da_minus').eq(index).toggleClass('hide_plus_minus');

					array.forEach((el, i, arr) => {
						if (i == index) {}
						else {
							jQuery('.da_accordian-answer').eq(i).slideUp();
							jQuery('.da_plus').eq(i).removeClass('hide_plus_minus');
							jQuery('.da_minus').eq(i).addClass('hide_plus_minus');
						}
					});

				});
			});
		});
	});
});



