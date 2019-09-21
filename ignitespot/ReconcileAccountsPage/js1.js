	function whenExists(elements, callback) {
		elements = elements.split(',');
		var interval = setInterval(function() {
			for (var i = 0; i < elements.length; i++) {
				if (document.querySelectorAll(elements[i]).length) {
					callback();
					clearInterval(interval);
					break;
				}
			}
		}, 100);
	}
	
	whenExists('#hs_cos_wrapper_widget_1960551200 > p:nth-child(4),#hs_cos_wrapper_widget_1960551200 > p:nth-child(10)', function () {
		var banner1 = jQuery('<div id="banner1"><div class="textCtn"><h1>TAKE CONTROL </br>OF YOUR BUSINESS</h1><h6>Have Your Accounts </br>Reconciled by Ignite Spot!</h6><a href="https://offers.ignitespot.com/bookkeeping-services-fees">DOWNLOAD OUR </br>PRICING SHEET</a><div id="fireguyCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/ignitespot/ReconcileAccountsPage/fireguy.png"/></div></div><div class="bannerBackground"></div></div>')
		var banner2 = jQuery('<div id="banner2"><div class="textCtn"><h1>TAKE CONTROL </br>OF YOUR BUSINESS</h1><h6>Have Your Accounts </br>Reconciled by Ignite Spot!</h6><a href="https://offers.ignitespot.com/bookkeeping-services-fees">DOWNLOAD OUR </br>PRICING SHEET</a></div><div id="manwomanCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/ignitespot/ReconcileAccountsPage/manwoman.jpg"/></div><div class="bannerBackground"></div></div>')

			banner1.insertAfter('#hs_cos_wrapper_widget_1960551200 > p:nth-child(4)');
			banner2.insertAfter('#hs_cos_wrapper_widget_1960551200 > p:nth-child(11)');
	});
