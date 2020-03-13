/*** JS 2 ***/
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
whenExists('.pricingbox.no-image-bg.signup-box form', function () {

	//ADD FONTAWESOME
	vwo_$('head').append('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />');
	//ADD NEW FAQ CONTENT
	vwo_$('.pricingbox.no-image-bg.signup-box').before('<div class="da_banner-sec"><h1>Checkout our FAQs</br> to <a>learn more</a></h1></div>')
	vwo_$('body').append('<div id="da-faq" style="display: none;"><div class="da_close-btn"><i class="fa fa-times"></i></div><h2>FAQs</h2><hr><div class=da-list><div class="da_left"><p class=da-q>What coins do you have?<div class=da-a><p>We currently provide data for 6,743 currencies across 39 exchanges and 3,103 markets all powered by <a href=/bitcoin-api/ target=_blank>Coinigy CryptoFeed™</a></div><p class=da-q>What are the limits of withdraws?<div class=da-a><p>We do not charge any fees for use of our platform, nor do we implement any withdrawal limits. We only charge you based on the subscription you would sign up for after your trial period has expired.</div><p class=da-q>How reputable is your company?<div class=da-a><p>- Named #1 Multi-Exchange Trading Platform by AltXpert<p>- Milwaukee Business Journal ​<a href=https://www.bizjournals.com/milwaukee/news/2019/01/03/coinigy-young-enterprising-society-votedmost.html target=_blank>Most Promising Startup 2019</a><p>- Wisconsin Inno <a href=https://www.americaninno.com/wisconsin/tech-news-wisconsin/meet-wisconsin-innos-2018-50-on-fire/ target=_blank>​50 on Fire 2018</a></div><p class=da-q>Can I see what the trading terminal looks like?<div class=da-a><p>Yes! You can start your free trial at coinigy.com to experience it firsthand, or you can check out our <a href=https://www.youtube.com/channel/UCdaJtMEVnuhTXSsSwA93sGA/videos target=_blank>​Youtube channel</a>​ for our educational videos where we use Coinigy.</div></div><div class="da_right"><p class=da-q>What country does this platform work in?<div class=da-a><p>Coinigy is world wide! V2 now offers over a dozen of languages for our users around the world.</div><p class=da-q>What makes you different from other platforms?<div class=da-a><p>We offer access to more than 40 exchanges. Coinigy’s connectivity across the cryptocurrency universe enables the firm to provide real-time access to pricing data, full-featured spot trading, Arbitrage Matrix and portfolio management/aggregation tools.</div><p class=da-q>What is your privacy policy?<div class=da-a><p>Privacy means a lot to us. Check out our privacy policy here for more information: <a href=https://www.coinigy.com/privacy/ target=_blank>https://www.coinigy.com/privacy/</a></div><p class=da-q>Are you GDPR compliant?<div class=da-a><p>As we do not allow advertising or sponsored posts on the platform and partake in minimal e-mail marketing, material changes to our policies were not necessary, however we have updated our ​<a href=https://www.coinigy.com/privacy/ target=_blank>Privacy Policy</a>​ to better outline our data retention policies and include some GDPR-specific language.</div></div></div></div>');
	vwo_$('body').append('<div class="da_popup-background" style="display: none;"></div>');
	//WRAP FORM
	//DRAWERS
	vwo_$('#da-faq .da-q').click(function(){
		var $this = vwo_$(this);
		if ( $this.hasClass('da-open') ) {
			vwo_$('#da-faq .da-q').removeClass('da-open');
		} else {
			vwo_$('#da-faq .da-q').removeClass('da-open');
			$this.addClass('da-open');
		}
	});

	document.querySelector('.da_banner-sec a ').addEventListener("click", () => {
		event.preventDefault();
		vwo_$('#da-faq').fadeIn();
		vwo_$('.da_popup-background').fadeIn();
	});

	document.querySelector('.da_popup-background').addEventListener("click", () => {
		vwo_$('.da_popup-background').fadeOut();
		vwo_$('#da-faq').fadeOut();
	});

	document.querySelector('.da_close-btn').addEventListener("click", () => {
		vwo_$('.da_popup-background').fadeOut();
		vwo_$('#da-faq').fadeOut();
	});

});
