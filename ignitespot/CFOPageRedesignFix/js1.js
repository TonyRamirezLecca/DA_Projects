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

var fontAwesome5 = document.createElement("link");
fontAwesome5.type = "text/css"; fontAwesome5.rel = "stylesheet";
fontAwesome5.href="https://use.fontawesome.com/releases/v5.3.1/css/all.css";
document.querySelector("head").appendChild(fontAwesome5);

//<i class="far fa-check-square da_check"></i>

whenExists('body > .body-container-wrapper > .body-container > .row-fluid-wrapper.row-depth-1.row-number-1 ', function () {

	/* Add Classes */
		/* Header */
			$('.fixed-header').addClass('da_header');
		/* Hero Section */
			$('body > .body-container-wrapper > .body-container > .row-fluid-wrapper.row-depth-1.row-number-1').addClass('da_hero');
		/* What is a CFO of a Company?*/
			$('body > .body-container-wrapper > .body-container > .row-fluid-wrapper.row-depth-1.row-number-2').addClass('da_section2');
		/* Examples of What You'll Get as a CFO client*/
			$('body > .body-container-wrapper > .body-container > .row-fluid-wrapper.row-depth-1.row-number-5').addClass('da_section3');
		/* How can a CFO help your company */
			$('body > .body-container-wrapper > .body-container > .row-fluid-wrapper.row-depth-1.row-number-10').addClass('da_section4'); 
		/* Why Ignite Spot?*/
			$('body > .body-container-wrapper > .body-container > .row-fluid-wrapper.row-depth-1.row-number-11').addClass('da_section5'); 
		/* Chris Section (Who I thought was CEO*/
			$('body > .body-container-wrapper > .body-container > .row-fluid-wrapper.row-depth-1.row-number-12').addClass('da_section6'); 

	/* Hide FAQ sections */
		$('body > .body-container-wrapper > .body-container > .row-fluid-wrapper.row-depth-1.row-number-6 ').hide();

	/* HERO SECTION */
		$('.da_hero').html('<div class=da_hero><div class="da_hero-blue"></div><div class=da_hero-content-wrapper><h1 class=da_hero-header><span>Leading</span> CFO<br><span>Services</span> for <span><br></span><span class=da_header-underline>Small Business</span></h1><p>Ignite Spot offers the best virtual CFO services you’ll find, providing the expertise you need at a reasonable cost. Our chief financial officer services start at just $750 a month and are designed to help businesses scale to real wealth. We focus on profit protection, cash flow management, projections, and business planning. Work with a trusted CFO to grow your company wealth today.</p><a class=da_hero-cta href="http://offers.ignitespot.com/virtual-cfo-consult?hsCtaTracking=c7a91948-fd2a-4991-b5c6-609302886801%7Cbddd8e9a-bb53-4d23-a36d-580b49e80ba5">Get a FREE CFO Session</a></div><div class=da_hero-img></div></div>');

	/* WHAT IS A CFO SECTION */
		$('.da_section2').html('<div class=da_section2><div class=da_section2-top-section><h2>What Is a CFO of a Company?</h2><div class=da_section2_underline></div><p>“CFO” stands for “<strong>chief financial officer.</strong>” A CFO manages all financial actions for a company, which means financial planning, cash flow tracking, and financial analysis. A CFO has specialized knowledge, so it’s not uncommon to not have one on staff. That’s where <strong>outsourced</strong> CFO services for small business can be a <strong>big asset</strong>. A small-business CFO from our team can handle all of the tasks someone on your staff would. By using our outsourced CFO services, you’ll be able to <strong>bundle CFO services</strong> with other accounting and bookkeeping needs for <strong>greater value</strong>. If you’re in the process of actively growing your company, <strong>a virtual CFO can keep your business on financial track</strong>.</div><div class=da_section2-bottom-section><div class=da_section2-bottom-section-text><h4>If you\'re in the process of actively growing your company,<br>a Virtual CFO will keep your business on financial track.</h4><p>Our outsourced CFO services start at <strong>just $500</strong> a month and will help you:<div class=da_section2-bottom-section-list><div class=da_section2-list-item><i class="da_check fa-check-square far"></i>Understand your cash flow and projections</div><div class=da_section2-list-item><i class="da_check fa-check-square far"></i>Develop real wealth for you company</div><div class=da_section2-list-item><i class="da_check fa-check-square far"></i>Protect profits, hire at the right time, and control costs</div><div class=da_section2-list-item><i class="da_check fa-check-square far"></i>Build a financial plan that works</div><div class=da_section2-list-item><i class="da_check fa-check-square far"></i>Minimize your business risk and get better ROIs</div><div class=da_section2-list-item><i class="da_check fa-check-square far"></i>Avoid major financial disasters</div></div></div><div class=da_section2-bottom-section-img-ctn><div class=da_section2-bottom-section-img></div></div></div></div>');

	/* EXAMPLES OF WHAT YOULL GET AS A CFO CLIENT */
		/* Change Icons */
			$('.da_section3 .ignite-icon-text-box:nth-child(1) > img').attr('src', 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/ignite-spot/cfo-page-redesign-fix/cash-flow.png').css({'height': '110px', 'object-fit':'contain'});
			$('.da_section3 .ignite-icon-text-box:nth-child(2) > img').attr('src', 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/ignite-spot/cfo-page-redesign-fix/budget-to-actual.png').css({'height': '110px', 'object-fit':'contain'});
			$('.da_section3 .ignite-icon-text-box:nth-child(3) > img').attr('src', 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/ignite-spot/cfo-page-redesign-fix/break-even.png').css({'height': '110px', 'object-fit':'contain'});
			$('.da_section3 .ignite-icon-text-box:nth-child(4) > img').attr('src', 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/ignite-spot/cfo-page-redesign-fix/labor-cost.png').css({'height': '110px', 'object-fit':'contain'});
			$('.da_section3 .ignite-icon-text-box:nth-child(5) > img').attr('src', 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/ignite-spot/cfo-page-redesign-fix/variable-vs-fixed.png').css({'height': '110px', 'object-fit':'contain'});
			$('.da_section3 .ignite-icon-text-box:nth-child(6) > img').attr('src', 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/ignite-spot/cfo-page-redesign-fix/debt-planning.png').css({'height': '110px', 'object-fit':'contain'});
		/* Insert new text */
			$('.da_section3 .ignite-icon-text-header p').html('Depending on the goals of your business, your CFO may suggest several different tactics to help make your operations</br> more profitable. An entrepreneur that wants to attract investors will need a different focus from their CFO when </br>compared to an entrepeneur that\'s trying to add more products to their offering');
			$('<p>Ignite Spot Outsourced CFO Services<span></br></span> are not cookie cutter.</br> We customize them to meet your needs.</p>').insertAfter('.da_section3 .ignite-icon-text-header h2');
			$('.da_section3 .ignite-icon-text-header h2').html('Examples of What You\'ll Get as a CFO Client');

	/* HOW CAN A CFO HELP YOUR COMPANY */
		$('.da_section4').html('<div class=da_section4><div class=da_section4-text-ctn><h2>How can a CFO help Your Company</h2><p>A CFO has a single focus: make your organization more valuable to all shareholders and increase the return on your business. This means more cash, more profit, and more opportunity throughout your organization. They do this by forecasting cash, optimizing cost centers, managing corporate capital accounts, and other high-value processes.<h6>The Qualifications of our CEOs</h6><ul><li>Understand your cash flow and projections<li>Develop real wealth for your company<li>Protect profits, hire at the right time, and control costs<li>Build a financial plan that works<li>Minimize your business risk and get better ROIs<li>Avoid major financial disasters</ul></div><div class=da_section4-img-ctn><div class=da_section4-img></div></div></div>');

	/* Why IGNITE SPOT*/
		$('.da_section5').html('<div class=da_section5><h6>Why Ignite Spot</h6><div class=da_section5-vp-ctn><div class=da_section5-vp><div class=da_section5-img-header><div class=da_section5-img><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/ignite-spot/cfo-page-redesign-fix/no-long-term-contract.png></div><h6>No Long-Term Contract</h6></div><p>With ignite Spot, our services are month-to-month, so you aren\'t locked into a contract. We value performance, and our goal is to make your company bigger and more profitable over time.</div><div class=da_section5-vp><div class=da_section5-img-header><div class=da_section5-img><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/ignite-spot/cfo-page-redesign-fix/experience.png></div><h6>Experience</h6></div><p>We are a certified, full-service firm that has been in business for over 10 years.</div><div class=da_section5-vp><div class=da_section5-img-header><div class=da_section5-img><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/ignite-spot/cfo-page-redesign-fix/our-clients-love-us.png></div><h6>Our Clients Love Us</h6></div><p>Our customers have given us a 4.8 rating on Google as we provide value and grow each one of their businesses</div></div></div>');

	/* CFO LAST SECTION */
	$('.da_section6').html('<div class=da_section6><div class=da_section6-img-ctn><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/ignite-spot/cfo-page-redesign-fix/ceo.png></div><div class=da_section6-subheader>"The experience with our CFO is highly focused, organized, and consistent. I now genuinely understand my business."</div><h6>-Chris</h6><p><em>Joffe Emergency Services</em><div class=da_section6-stars><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/ignite-spot/cfo-page-redesign-fix/stars.png></div></div>');


});


