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
whenExists('.white > .container', function () {
	/* JSON OBJECTS */
	var da = {
	}

	$('.white > .container').eq(0).addClass('da_form');
	$('.white').eq(0).addClass('da_form-ctn');

	$('.da_form > .row > .text-center').addClass('da_description').html('Contact us to learn how we can help your organization with its leadership development and management training.');


	/* Placeholders */
	$('.da_form .form-group input').eq(0).attr('placeholder','First Name*');
	$('.da_form .form-group input').eq(1).attr('placeholder','Last Name*');
	$('.da_form .form-group input').eq(2).attr('placeholder','Company Name*');
	$('.da_form .form-group input').eq(3).attr('placeholder','Title*');
	$('.da_form .form-group input').eq(4).attr('placeholder','Email*');
	$('.da_form .form-group select').eq(0).find('option:nth-child(1)').html('Country*');
	$('.da_form .form-group input').eq(6).attr('placeholder','Zip/Postal Code*');
	$('.da_form .form-group input').eq(7).attr('placeholder','Phone*');
	$('.da_form .form-group select').eq(1).find('option:nth-child(1)').html('Total Employees Organization-Wide*');
	$('.da_form .form-group select').eq(2).find('option:nth-child(1)').html('Department*');
	$('.da_form .form-group textarea').attr('placeholder','What information can we provide you?*');

	document.querySelectorAll('.da_form .form-group select').forEach((el, i, arr) => {
		el.classList.add('da_light');
		el.addEventListener("change", () => {
			console.log(el.querySelector('option'))
			if (el.querySelectorAll('option')[0].selected) {
				el.classList.add('da_light');
			}
			else {
				el.classList.remove('da_light');
			}
		});
	});

	/* Left  */
	$('<div class="da_left"></div>').prependTo('.da_form');
	$('.da_form > div').appendTo('.da_left');
	$('.da_form > script').appendTo('.da_left');

	/* Right */
	$('<div class="da_right"><div class="da_right-top">"Ken Blanchard taught me that in order to create loyal customers a company must have highly engaged and competent teammates and that leadership is the key to sustainable success."</br></br><span>- Joel Rood, LORD Corporation</span></div><div class="da_right-bottom"><h4>FOR YOUR TRAINING NEEDS</br> <a href="tel:760-233-6725">CALL US AT 760.233.6725</a></h4><h4>FOR ALL OTHER INQUIRES</br> <a href="tel:760-489-5005">CALL US AT 760.489.5005</a></h4></div></div>').appendTo('.da_form');
});
