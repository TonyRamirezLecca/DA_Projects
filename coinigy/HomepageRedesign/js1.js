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
whenExists('.footer, .da-form-wrap', function () {
	/* Assets */
	var da = {
		logo: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/coinigy/homepage-rebuild/logo.png',
		appstore: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/coinigy/homepage-rebuild/appstore.png',
		playstore: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/coinigy/homepage-rebuild/playstore.png',
		exchange247: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/coinigy/homepage-rebuild/247exchange.png',
		support247: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/coinigy/homepage-rebuild/247support.png',
		plus45: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/coinigy/homepage-rebuild/45plus.png',
		appsthirdparty: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/coinigy/homepage-rebuild/appsandthirdparty.png',
		automatictracking: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/coinigy/homepage-rebuild/automaticportfoliotracking.png',
		bigcoins: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/coinigy/homepage-rebuild/bigcoins.png',
		companybrands: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/coinigy/homepage-rebuild/companybrands.jpg',
		computer: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/coinigy/homepage-rebuild/computer.png',
		curved1: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/coinigy/homepage-rebuild/curved1.jpg',
		curved2: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/coinigy/homepage-rebuild/curved2.png',
		curved3: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/coinigy/homepage-rebuild/curved3.jpg',
		face: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/coinigy/homepage-rebuild/face.png',
		historicallysecure: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/coinigy/homepage-rebuild/historicallysecure.png',
		itsworking: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/coinigy/homepage-rebuild/itsworking.png',
		knowledgebase: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/coinigy/homepage-rebuild/knowledgebase.png',
		nowithdrawlimits: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/coinigy/homepage-rebuild/nowithdrawlimits.png',
		quote: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/coinigy/homepage-rebuild/quote.png',
		smartandsimple: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/coinigy/homepage-rebuild/smartandsimple.png',
		tailleft: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/coinigy/homepage-rebuild/tail-left.png',
		tailright: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/coinigy/homepage-rebuild/tail-right.png'
	}
	/* Move Form and Footer*/
	$('.footer').addClass('da_footer').appendTo('html');
	$('.da-form-wrap').addClass('da_form').appendTo('html');
	$('#desktop-menu').appendTo('html');
	$('.slicknav_menu').appendTo('html');
	/* Clear Body and add new sections*/
	$('body').html(`
			<div class="da_nav"></div>
			<div class="da_header"></div>
			<div class="da_why-choose-coinigy"></div>
			<div class="da_we-make-managing"></div>
			<div class="da_pricing-section"></div>
			<div class="da_and-its-working"></div>
			<div class="da_rule-the-exchange"></div>
			<div class="da_footer-section"></div>
		`);
	/* Navbar */
	$('#navigation').appendTo('html');
	$('#desktop-menu').html('<div class="da_desktop-menu"><div class="da_desktop-menu_left"></div><div class="da_desktop-menu_middle"></div><div class="da_desktop-menu_right"></div></div>')
	$(`<a href="https://www.coinigy.com/"><img src="${da.logo}"/></a>').appendTo('.da_desktop-menu_left`);
	$('#navigation').appendTo('.da_desktop-menu_middle');
	$('#navigation > li:last-child').addClass('da_sign-up').appendTo('.da_desktop-menu_right');
	$('#navigation > li:last-child').addClass('da_login').prependTo('.da_desktop-menu_right');
	$('#desktop-menu').appendTo('.da_nav');
	$('.slicknav_menu').appendTo('.da_nav');
	$('.slicknav_menu > img').attr('src', da.logo);
	/* Header */
	$(`
		<div class="da_header-wrapper">
			<div class="da_header-left"><div class="da_header-text"><h1>Take your portfolio</br> to the next level</h1><p>with the ultimate cryptocurrency</br> portfolio management suite.</p></div><div class="da_header-form"></div><div class="da_header-apps"><a class="da_header-apps-left" href="https://apps.apple.com/us/app/coinigy/id1317482120"><img src="${da.appstore}"/></a><a class="da_header-apps-right" href="https://play.google.com/store/apps/details?id=com.coinigy"><img src="${da.playstore}"/></a></div></div>
			<div class="da_header-right"><img src="${da.computer}"/></div>
		</div>`).appendTo('.da_header');
	$('.da_form').appendTo('.da_header-form')
	$('#mainEmail').attr('placeholder', 'Your email address');
	$('#startTrial').html('Get Started for Free');
	$('<p class="da_step-1-of-2">Step 1 of 2</p>').insertAfter('#startTrial');
	/* Company Brands*/
	$(`<div class="da_brand-logo-wrapper"><div class="da_brand-logo-ctn"></div><div class="da_big-coins-ctn"><img class="da_big-coins" src="${da.bigcoins}"/></div></div>`).appendTo('.da_header');
	//
	/* Why Choose Coinigy*/
	$(`<div class="da_why-choose-wrapper">
				<div class="da_why-choose-title"><h2>Why Choose Coinigy?</h2><p>We offer a variety of features that make us different</p></div>
				<div class="da_why-choose-reasons-ctn">
					<div class="da_why-choose-reasons-left">
						<div class="da_why-choose-reason"><div class="da_why-choose-reason-img"><img src="${da.plus45}"/></div><div class="da_why-choose-reason-text"><h5>Trade on 45+ Exchanges</h5><p>We offer access to more than 40 exchanges. Coinigy's connectivity across the cryptocurrency universe enables the firm to provide real-time-access to pricing data, full-featured spot trading, Arbitrage Matrix and portfolio management/aggregation tools.</p></div></div>
						<div class="da_why-choose-reason"><div class="da_why-choose-reason-img"><img src="${da.exchange247}"/></div><div class="da_why-choose-reason-text"><h5>24/7 Exchange and Wallet Portfolio Monitoring</h5><p>Coinigy is your one-stop-shop for your portfolio management. We offer SMS & email price and trade alerts to help you stay ahead of the game. Coinigy OS, the ultimate anti-theft device for crypto because you can monitor all your exchanges and wallets in one place.</p></div></div>
					</div>
					<div class="da_why-choose-reasons-right">
						<div class="da_why-choose-reason"><div class="da_why-choose-reason-img"><img src="${da.appsthirdparty}"/></div><div class="da_why-choose-reason-text"><h5>Apps and Third-Party Integrations and Alerts</h5><p>Coinigy is the most comprehensive bitcoin and cryptocurrency trading and portfolio tool available. With extensive charting tools and real-time market data, no other cryptocurrency app can match Coinigy in its scope, detail, and performance.</p></div></div>
						<div class="da_why-choose-reason"><div class="da_why-choose-reason-img"><img src="${da.nowithdrawlimits}"/></div><div class="da_why-choose-reason-text"><h5>No Trading Limits</h5><p>There are no additional exchange fees when trading through Coinigy. We only charge you based on the subscription you would sign up for after your trial period has expired.</p></div></div>
					</div>
				</div>
		</div>		`).appendTo('.da_why-choose-coinigy');
	/* We make managing your cryptocurrency portfolio effortless*/
	$(`
			<div class="da_we-make-managing-title"><h2>We make managing your </br>cryptocurrency portfolio effortless</h2></div>
			<div class="da_we-make-managing-vp-ctn">
				<div class="da_we-make-managing-vp"><div class="da_we-make-managing-vp-img-ctn"><img class="da_we-make-managing-vp-img-ctn" src="${da.smartandsimple}"/></div><div class="da_we-make-managing-vp-text-ctn"><h6>Smart & Simple Account Management</h6><p>One account for all of the world\'s top exchanges. Access any exchange, anytime, anywhere.</p></div></div>
				<div class="da_we-make-managing-vp"><div class="da_we-make-managing-vp-img-ctn"><img class="da_we-make-managing-vp-img-ctn" src="${da.historicallysecure}"/></div><div class="da_we-make-managing-vp-text-ctn"><h6>Historically Secure</h6><p>Coinigy is safe to use. We never store your funds, and you always have full control.</br> <a class="da_security-pledge" href="https://www.coinigy.com/security/">Our Security Pledge</a></p></div></div>
				<div class="da_we-make-managing-vp"><div class="da_we-make-managing-vp-img-ctn"><img class="da_we-make-managing-vp-img-ctn" src="${da.automatictracking}"/></div><div class="da_we-make-managing-vp-text-ctn"><h6>Automatic Portfolio Tracking</h6><p>Say goodbye to manual edits. We monitor your accounts 24/7 so you don't have to. High-def charting you can trade on.</p></div></div>
			</div>
		`).appendTo('.da_we-make-managing');
	/* Pricing Section*/
	$(`<div class="da_pricing-wrapper">
				<div class="da_pricing"><h2 class="da_pricing-title">Starter Account</h2><div class="da_pricing-price"><h1>Free</h1></div>
					<div class="da_pricing-info">
						<div class="da_pricing-info-section">Attach Your Exchange Accounts for Unlimited, No-Added-Fee Trading</div>
						<div class="da_pricing-info-section">24/7 Automatic Portfolio Monitoring</div>
						<div class="da_pricing-info-section">High-Definition Charting w/ 75+ Technical Indicators</div>
						<div class="da_pricing-info-section">24/7/365 Security & Stability</div>
						<div class="da_pricing-info-section">Mobile App Access</div>
						<div class="da_pricing-info-section">Email Support</div>
						<div class="da_pricing-info-section"><span>*</span> 30 Day Full-Featured Free Trial</div>
					</div>
				</div>
				<div class="da_pricing"><h2 class="da_pricing-title">Pro Trader</h2><div class="da_pricing-price"><h1>$18.66<span>/m</span></h1><p>WHEN PURCHASED ANNUALLY</p></div>
					<div class="da_pricing-info">
						<div class="da_pricing-info-section">Attach Your Exchange Accounts for Unlimited, No-Added-Fee Trading</div>
						<div class="da_pricing-info-section">24/7 Automatic Portfolio Monitoring</div>
						<div class="da_pricing-info-section">High-Definition Charting w/ 75+ Technical Indicators</div>
						<div class="da_pricing-info-section">24/7/365 Security & Stability</div>
						<div class="da_pricing-info-section">Unlimited API Accounts</div>
						<div class="da_pricing-info-section">Unlimited Chart Layouts</div>
						<div class="da_pricing-info-section">Advanced Order Types</div>
						<div class="da_pricing-info-section">Mobile App Access</div>
						<div class="da_pricing-info-section">Email Support</div>
						<div class="da_pricing-info-section"><strong>ArbMatrix App, </br>Unlimited Session Length</strong></div>
					</div>
				</div>
				<div class="da_pricing"><h2 class="da_pricing-title">API Developer Pro</h2><div class="da_pricing-price"><h1>$99.99<span>/m</span></h1><p>PROFESSIONAL API ACCESS</p></div>
					<div class="da_pricing-info">
						<div class="da_pricing-info-section"><strong>Coinigy CryptoFeed&trade; & Enterprise API Access</strong></div>
						<div class="da_pricing-info-section">Attach Your Exchange Accounts for Unlimited, No-Added-Fee Trading</div>
						<div class="da_pricing-info-section">24/7 Automatic Portfolio Monitoring</div>
						<div class="da_pricing-info-section">High-Definition Charting w/ 75+ Technical Indicators</div>
						<div class="da_pricing-info-section">24/7/365 Security & Stability</div>
						<div class="da_pricing-info-section">Unlimited API Accounts</div>
						<div class="da_pricing-info-section">Unlimited Chart Layouts</div>
						<div class="da_pricing-info-section">Advanced Order Types</div>
						<div class="da_pricing-info-section">Mobile App Access</div>
						<div class="da_pricing-info-section">Email Support</div>
						<div class="da_pricing-info-section">Priority Support</div>
						<div class="da_pricing-info-section"><strong>ArbMatrix App, </br>Unlimited Session Length</strong></div>
					</div>
				</div>
			</div>
			<a class="da_pricing-section-link" href="https://www.coinigy.com/auth/signup">Get Started For Free</a><img class="da_curved2" src="${da.curved2}"/>
		`).appendTo('.da_pricing-section');
	/* ...And it's working section*/
	$(`
			<div class="da_and-its-working-left">
			<img class="da_its-working-img" src="${da.itsworking}"/>
			<img class="da_its-working-face-img" src="${da.face}"/>
			</div>
			<div class="da_and-its-working-right">
				<div class="da_and-its-working-quote"><img class="da_and-its-working-quote-img" src="${da.quote}"/></div>
				<div class="da_and-its-working-quote-text"><p>Coinigy's tools are first rate, their data is second to none and they're committed to delivery the highest quality user experience possible. In short, they are passionate about what they do and it shows.</p><h2>Brian Beamish</h2><p>The Rational Investor</p></div>
			</div>
		`).appendTo('.da_and-its-working');
	/* Rule the exchange section */
	$(`
		<img class="da_curved3" src="${da.curved3}"/>
		<h2 class="da_rule-the-exchange-title">Rule The Exchange</h2>
		<div class="da_rule-the-exchange-vp-ctn">
			<a href="https://support.coinigy.com/hc/en-us" class="da_rule-the-exhange-vp">
				<div class="da_rule-the-exhange-vp-img-ctn"><img class="da_rule-the-exchange-vp-img" src="${da.knowledgebase}"/></div>
				<div class="da_rule-the-exhange-vp-text"><p>Knowledge Base</br></br>Sharpen up your trading know-how with our comprehensive Knowledge Base containing helpful instructions and tutorials</p></div>
			</a >
			<a href="https://support.coinigy.com/" class="da_rule-the-exhange-vp">
				<div class="da_rule-the-exhange-vp-img-ctn"><img class="da_rule-the-exchange-vp-img" src="${da.support247}"/></div>
				<div class="da_rule-the-exhange-vp-text"><p>24/7 Support</br></br>We\'re here for you when you need us with 24/7 Support via both live chat and help desk.</p></div>
			</a >
		</div>
		<div class="da_youll-wonder-how"><img src="${da.tailleft}"/><div class="da_youll-wonder-how-text-ctn"><h2>You\'ll wonder how you ever lived without us</h2><a class="da_youll-wonder-how-link" href="https://www.coinigy.com/auth/signup">Get Started for Free</a></div><img class="da_tail-right" src="${da.tailright}"/></div>
		`).appendTo('.da_rule-the-exchange');
	/* Footer */
	$('.da_footer').appendTo('.da_footer-section');
	$('.da_footer-section > div > div > .col-sm-3:nth-child(1) img').attr('src', da.logo);
	$('.da_footer-section > div > div > .col-sm-3:nth-child(4)').insertBefore('.da_footer-section > div > div > .col-sm-3:nth-child(3)')
	//
});
