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

whenExists('#hs_cos_wrapper_widget_1960551200 > p:nth-child(10)', function () {
	//jQuery('#hs_cos_wrapper_widget_1960551200 > h2:nth-child(5),#hs_cos_wrapper_widget_1960551200 > p:nth-child(6),#hs_cos_wrapper_widget_1960551200 > ol').wrapAll('<div class="DA_Wrapper"/>');
	jQuery('div[id*="hs_cos_wrapper_widget').wrapAll('<div class="DA_Wrapper"/>');
	jQuery('.DA_Wrapper').wrapAll('<div class="SuperDA_Wrapper"/>');
	jQuery('<div class="DA_Banner"><div class="textWrapper"><h1>TAKE CONTROL</br> OF YOUR BUSINESS</h1><h6>Have your Accounts</br> Reconiciled by Ignite Spot</h6><a href="https://offers.ignitespot.com/bookkeeping-services-fees">DOWNLOAD OUR</br> PRICING SHEET</a><div id="fireguyCtn"><img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/ignitespot/ReconcileAccountsPage/fireguy.png"/></div></div></div>').appendTo('.SuperDA_Wrapper');
});
