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
	}, 40);
}

var fontAwesome5 = document.createElement("link");
fontAwesome5.type = "text/css"; fontAwesome5.rel = "stylesheet";
fontAwesome5.href="https://use.fontawesome.com/releases/v5.4.0/css/all.css";
document.querySelector("head").appendChild(fontAwesome5);

whenExists('.js-username, #site-launch-modal-email', function () {
	//If .js-username is empty, then you're not logged in.
	if ($('.js-username').html() == '') {
		//Hide original popup
		$('#site-launch-modal-email').hide();
		$('html').removeClass('no-scroll');

		//Insert new banner popup
		$(`<div class="da_banner"><div class="da_banner-top-wrapper"><div class="da_banner-top"><div class="da_banner-top-left"><p class="da_orange-text">Who doesn't like saving money?</p><div class="da_5-dollars-off"><p class="da_new-members">New members get</p><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/big-lots/email-capture-timing/Layer+7.png"/><p>your Next $15+ purchase</p></div></div><div class="da_banner-top-middle"><p class="da_youll-also-get">You'll also get</p><ul class="da_ul"><li class="da_li"><i class="fas fa-circle da_circle"></i>$5 Reward every 3 purchases</li><li class="da_li"><i class="fas fa-circle da_circle"></i>Furniture Bonus</li><li class="da_li"><i class="fas fa-circle da_circle"></i>Exclusive Coupons & VIP Shopping Days</li><li class="da_li"><i class="fas fa-circle da_circle"></i>Birthday Surprise!</li></ul></div><div class="da_banner-top-right"><p class="da_join-big-rewards-today">Join BIG Rewards today</p><div class="da_input-wrapper"><input type="text" class="da_email" placeholder="Email Adress"/><input type="text" class="da_zip-code" placeholder="ZIP Code"/></div><button type="submit" class="da_sign-up">Sign Up</button><label class="da_checkbox-wrapper"><input type="checkbox" class="da_checkbox"/>Keep me up-to-date with promotions</label></div><i class="fas fa-times da_times da_desktop"></i></div><i class="fas fa-times da_times da_mobile"></i></div><div class="da_banner-bottom-wrapper"><div class="da_banner-bottom">By creating an account you agree to the <a class="da_bottom-links" href="https://www.biglots.com/page/user-agreement">User Agreement</a>, <a class="da_bottom-links" href="https://www.biglots.com/page/user-agreement#privacy">Privacy Policy</a>, and Big Rewards <a class="da_bottom-links" href="https://www.biglots.com/bigrewards/bigrewards-membership-agreement">Membership Agreement</a>. *Must be a new BIG Rewards member. Email offer will arrive within 48 hours of sign up.</div></div></div>`).appendTo('body');

		//Default to checked
		document.querySelector('.da_checkbox').checked = true;

		//Pseudo form fills out real form
		$('.da_sign-up').click(() => {
			event.preventDefault();
			document.querySelector('#siteModalSubscribeInput').value = document.querySelector('.da_email').value;
			document.querySelector('#siteModalZipCodeInput').value = document.querySelector('.da_zip-code').value;
			document.querySelector('#emailOptionInput').checked = document.querySelector('.da_checkbox').checked;

			document.querySelector('#subscribeFormNewForm').submit();
			$('.da_banner').hide();
		});

		$('.da_times').click(() => {
			$('.da_banner').hide();
		});
	}
});

