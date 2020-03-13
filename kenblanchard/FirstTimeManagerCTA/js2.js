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
whenExists('.setupsuccess > .container > .row:nth-child(7), .col-lg-6.erode-trust, .col-lg-6.green-form', function () {
	console.log('disruptive advertising');

	var fontAwesome5 = document.createElement("link");
	fontAwesome5.type = "text/css"; fontAwesome5.rel = "stylesheet";
	fontAwesome5.href="https://use.fontawesome.com/releases/v5.4.0/css/all.css";
	document.querySelector("head").appendChild(fontAwesome5);




	$('.col-lg-6.erode-trust').addClass('da_form');
	$('.col-lg-6.green-form').addClass('da_ready-to-get-started');

	$(`<div class="da_learn-more-section">

	<h1 class="da_learn-more-text">WANT TO LEARN MORE?</h1>
	<div class="da_learn-more-content">
		<div class="da_left">
			<a class="da_register" href="">REGISTER FOR A WORKSHOP</a>
			<div class="da_video"></div>
			<div class="da_link-ctn">
				<a class="da_link" href="https://www.kenblanchard.com/getattachment/Products-Services/First-Time-Manager/First-time-Manager-Overview-MK0807.pdf"><i class="fas fa-download da_download"></i>FIRST-TIME MANAGER OVERVIEW</a>
				<a class="da_link" href="https://www.kenblanchard.com/getattachment/Products-Services/First-Time-Manager/FM-PW.pdf"><i class="fas fa-download da_download"></i>SAMPLE PARTICIPANT WORKBOOK</a>
				<a class="da_link" href="https://www.kenblanchard.com/getattachment/Products-Services/First-Time-Manager/First-time-Manager-infographic.pdf"><i class="fas fa-download da_download"></i>FIRST-TIME MANAGER INFOGRAPHIC</a>
			</div>
			<div class="da_buy-book-ctn">
				<img class="da_book-img" src="https://www.kenblanchard.com/KBCPublic/media/Content/Products/new-manager-training-book.png"/><a class="da_book-download" href="">BUY FOR YOUR NEW MANAGERS</a>
				<div class="da_blue-background"></div>
			</div>
		</div>
		<div class="da_right">

		</div>
	</div>
	
		</div>`).insertAfter('.white.form')

	$('.managersvideo').appendTo('.da_video');

	$('.setupsuccess > .container > .row:last-child').remove();
	$('.setupsuccess > .container > .row:last-child').addClass('da_get-started-parent').html('<a class="da_get-started-cta" href="https://www.kenblanchard.com/Get-Started">GET STARTED</a>');



	$('.da_form').appendTo('.da_right');
	$('.footnotes > .footnote').addClass('da_footnote').appendTo('.da_form');
});
