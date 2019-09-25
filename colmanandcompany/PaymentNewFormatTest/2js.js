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

whenExists('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.cim-ocst-estimated-shipping-methods-wrapper.active > div > a', function () {
	console.log("da-test");
	//Change Payment Info Text
	$('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > h2').html('Payment Information');
	//moves red text below title
	$('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.ocst-page-card-not-yet-billed-message').insertAfter('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > h2');

	//Bill to this card step
	$('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.form-group.cim-form-button-row > button').html('Next Step >');
	$('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.form-group.cim-form-button-row').appendTo('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side');

	//Shipping Section
	var wrapperLength = $('.bask-items-wrapper').length + 1;
	$('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.cim-ocst-estimated-shipping-methods-wrapper.active').insertAfter(`.bask-items-wrapper:nth-child(${wrapperLength})`);

	//Button


	document.querySelector('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.cim-ocst-basket-contents-wrapper.active > div.bask-container > div.cim-ocst-estimated-shipping-methods-wrapper.active > div > a').addEventListener("click", () => {
		event.preventDefault();
		document.querySelector('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.cim-ocst-basket-contents-wrapper.active > div.bask-container > div.cim-ocst-estimated-shipping-methods-wrapper.active > h2').classList.add('showTable');
		document.querySelector('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.cim-ocst-basket-contents-wrapper.active > div.bask-container > div.cim-ocst-estimated-shipping-methods-wrapper.active > div > table > tbody').classList.add('showTable');
		document.querySelector('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.cim-ocst-basket-contents-wrapper.active > div.bask-container > div.cim-ocst-estimated-shipping-methods-wrapper.active > div').classList.add('restoreMargin');

		//PopUp
		$('.cim-ocst-shipping-method-disclaimer').appendTo('.showTable');
		$('<p>Estimated Shipping</p>').prependTo('.showTable');
		$('<div class="closePopUpBtn">&#10005;</div>').prependTo('.showTable');
		$('<div id="backgroundClose"></div>').appendTo('body');

		$('.cim-ocst-shipping-method-disclaimer').addClass("show");

		document.querySelector('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.cim-ocst-basket-contents-wrapper.active > div.bask-container > div.cim-ocst-estimated-shipping-methods-wrapper.active > div > table > tbody').classList.remove('closePopUp');
		document.querySelector('#backgroundClose').classList.remove('closePopUp');

		document.querySelector('#backgroundClose').addEventListener("click", () => {
			document.querySelector('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.cim-ocst-basket-contents-wrapper.active > div.bask-container > div.cim-ocst-estimated-shipping-methods-wrapper.active > div > table > tbody').classList.add('closePopUp');
			document.querySelector('#backgroundClose').classList.add('closePopUp');
		});

		$('.closePopUpBtn').click(function() {
			$('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.cim-ocst-basket-contents-wrapper.active > div.bask-container > div.cim-ocst-estimated-shipping-methods-wrapper.active > div > table > tbody').addClass('closePopUp');
			$('#backgroundClose').addClass('closePopUp');
		});

		$('<p id="newOpenPopUp">Show All Shipping Methods</p>').insertAfter(`#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.cim-ocst-basket-contents-wrapper.active > div.bask-container > div.bask-items-wrapper:nth-child(${wrapperLength})`);
		document.querySelector('#newOpenPopUp').addEventListener("click", () => {
			document.querySelector('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.cim-ocst-basket-contents-wrapper.active > div.bask-container > div.cim-ocst-estimated-shipping-methods-wrapper.active > div > table > tbody').classList.remove('closePopUp');
			document.querySelector('#backgroundClose').classList.remove('closePopUp');

			document.querySelector('#backgroundClose').addEventListener("click", () => {
				document.querySelector('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.cim-ocst-basket-contents-wrapper.active > div.bask-container > div.cim-ocst-estimated-shipping-methods-wrapper.active > div > table > tbody').classList.add('closePopUp');
				document.querySelector('#backgroundClose').classList.add('closePopUp');
			});

			$('.closePopUpBtn').click(function() {
				$('#ocst_form > div.cim-payment-section > div.cim-payment-section-right-side > div.cim-ocst-basket-contents-wrapper.active > div.bask-container > div.cim-ocst-estimated-shipping-methods-wrapper.active > div > table > tbody').addClass('closePopUp');
				$('#backgroundClose').addClass('closePopUp');
			});

		});
	});

	//Billing Section
	$('#ocst_form > div.cim-payment-section > div.cim-payment-section-left-side > h2').html('Billing Address');


	//style
	$('<style id="billingStyle">#ocst_form>div.cim-payment-section{max-width:2000px}#ocst_form>div.cim-payment-section>div.cim-payment-section-right-side>div.form-group.cim-form-button-row{display:flex;justify-content:flex-end;width:100%;margin-top:0;padding-top:0}#ocst_form>div.cim-payment-section>div.cim-payment-section-right-side>div.cim-ocst-basket-contents-wrapper.active>div.bask-container>div.bask-totals{border:none;margin-bottom:0}#ocst_form>div.cim-payment-section>div.cim-payment-section-right-side{width:50%}#ocst_form>div.cim-payment-section>div.cim-payment-section-right-side>h2{margin-bottom:0}#ocst_form>div.cim-payment-section>div.cim-payment-section-right-side>div.ocst-page-card-not-yet-billed-message{font-size:13px}#ocst_form>div.cim-payment-section>div.cim-payment-section-left-side{margin-right:30px}h2.cim-ocst-cart-summary-title,h2.cim-ocst-shipping-methods-summary-title{background:0 0;text-align:left;font-family:Poppins,sans-serif;color:#42494f;font-size:25px;font-weight:600;margin-bottom:0;padding-bottom:8px}#ocst_form>div.cim-payment-section>div.cim-payment-section-right-side>div.cim-ocst-basket-contents-wrapper.active{margin-top:60px}#ocst_form>div.cim-payment-section>div.cim-payment-section-right-side>div.cim-ocst-basket-contents-wrapper.active>div.bask-container>div.cim-ocst-estimated-shipping-methods-wrapper.active>h2{font-size:14px;color:#008bcc;font-weight:400;padding:8px;margin-top:0;padding-top:0;padding-bottom:0;margin-left:8px}#ocst_form>div.cim-payment-section>div.cim-payment-section-right-side>div.cim-ocst-basket-contents-wrapper.active>div.bask-container>div.cim-ocst-estimated-shipping-methods-wrapper.active>div>table>thead{display:None}#ocst_form>div.cim-payment-section>div.cim-payment-section-right-side>div.cim-ocst-basket-contents-wrapper.active>div.bask-container>div.cim-ocst-estimated-shipping-methods-wrapper.active>h2{display:none}#ocst_form>div.cim-payment-section>div.cim-payment-section-right-side>div.cim-ocst-basket-contents-wrapper.active>div.bask-container>div.cim-ocst-estimated-shipping-methods-wrapper.active>div>table>tbody{display:none}#ocst_form>div.cim-payment-section>div.cim-payment-section-right-side>div.cim-ocst-basket-contents-wrapper.active>div.bask-container>div.cim-ocst-estimated-shipping-methods-wrapper.active>p{margin-top:0;font-size:13px}#ocst_form>div.cim-payment-section>div.cim-payment-section-right-side>div.cim-ocst-basket-contents-wrapper.active>div.bask-container>div.cim-ocst-estimated-shipping-methods-wrapper.active>div{border-bottom:solid 1px #c4c4c4;padding:8px;margin-top:-34px}.showTable{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);max-width:460px;padding:20px!important;display:block!important;width:90%;z-index:100;background:#fff;box-shadow:0 0 10px #222;margin:0 auto}.showTable:nth-child(1){display:none!important}.showTable p{font-size:14px;color:#008bcc;font-weight:400;padding:8px;margin-top:0;padding-top:0;padding-bottom:0}.restoreMargin{margin:0!important}#ocst_form>div.cim-payment-section>div.cim-payment-section-right-side>div.cim-ocst-basket-contents-wrapper.active>div.bask-container>div.cim-ocst-estimated-shipping-methods-wrapper.active>div>table>tbody>tr:nth-child(1){border:none!important}#ocst_form>div.cim-payment-section>div.cim-payment-section-right-side>div.cim-ocst-basket-contents-wrapper.active>div.bask-container>div.cim-ocst-estimated-shipping-methods-wrapper.active>div{border:none}#ocst_form>div.cim-payment-section>div.cim-payment-section-right-side>div.cim-ocst-basket-contents-wrapper.active>div.bask-container>div.cim-ocst-estimated-shipping-methods-wrapper.active>div>table>tbody>tr:nth-child(1)>td:nth-child(1){border-top:none}#ocst_form>div.cim-payment-section>div.cim-payment-section-right-side>div.cim-ocst-basket-contents-wrapper.active>div.bask-container>div.cim-ocst-estimated-shipping-methods-wrapper.active>div>table>tbody>tr:nth-child(1)>td:nth-child(2){border-top:none}#ocst_form>div.cim-payment-section>div.cim-payment-section-right-side>div.cim-ocst-basket-contents-wrapper.active>div.bask-container>div.cim-ocst-estimated-shipping-methods-wrapper.active>div>table>tbody>tr:nth-child(8)>td:nth-child(1){border-bottom:1px solid #ddd}#ocst_form>div.cim-payment-section>div.cim-payment-section-right-side>div.cim-ocst-basket-contents-wrapper.active>div.bask-container>div.cim-ocst-estimated-shipping-methods-wrapper.active>div>table>tbody>tr:nth-child(8)>td:nth-child(2){border-bottom:1px solid #ddd}#ocst_form>div.cim-payment-section>div.cim-payment-section-right-side>div.cim-ocst-basket-contents-wrapper.active>div.bask-container>div.cim-ocst-estimated-shipping-methods-wrapper.active>div>table>tbody>tr>td:nth-child(2){width:30px}#ocst_form>div.cim-payment-section>div.cim-payment-section-left-side>div:nth-child(7){display:none}#ocst_form>div.cim-payment-section>div.cim-payment-section-left-side>div:nth-child(8){display:none}#ocst_form>div.cim-payment-section>div.cim-payment-section-left-side>div:nth-child(10){display:none}#ocst_form>div.cim-payment-section>div.cim-payment-section-left-side>div:nth-child(13){display:none}.form-group label{color:#888!important}#ocst_form>div.cim-payment-section>div.cim-payment-section-right-side>div.cim-ocst-basket-contents-wrapper.active>div.bask-container>div.cim-ocst-estimated-shipping-methods-wrapper.active>div>table>tbody>p.cim-ocst-shipping-method-disclaimer{color:#c4343b;padding-top:10px}.closePopUpBtn{font-size:30px;position:absolute;top:-10px;right:-10px;background:#42494f;color:#fff;height:27px;width:27px;text-align:center;border-radius:50%;font-size:17px;cursor:pointer}.closePopUp{display:none!important}#backgroundClose{height:120vh;width:100vw;position:fixed;top:-10vh;background:#aaa;opacity:.2}.cim-ocst-shipping-method-disclaimer{display:none}.show{display:block!important}#newOpenPopUp{font-size:14px;color:#008bcc;font-weight:400;padding:8px;margin-top:0;padding-top:0;padding-bottom:0;cursor:pointer}#ocst_form>div.cim-payment-section>div.cim-payment-section-right-side>div.cim-ocst-basket-contents-wrapper.active>h2{padding-top:0;margin-top:0}#ocst_form>div.cim-payment-section>div.cim-payment-section-right-side>div.cim-ocst-basket-contents-wrapper.active{margin-top:31px}@media screen and (max-width:991px){#ocst_form>div.cim-payment-section>div.cim-payment-section-right-side{width:100%}}</style>').appendTo('head');

	// when multiple elements are removed
	function whenRemoved(elements, callback) {
		var elements_array = elements.split(',');
		var interval = setInterval(function() {
			for (var i = 0; i < elements_array.length; i++) {
				if (document.querySelectorAll(elements_array[i]).length === 0) {
					elements_array.splice(i,1);
					i--;
				}
			}
			if (elements_array.length === 0) {
				callback();
				clearInterval(interval);
			}
		}, 100);
	}
	
	whenRemoved('#step-3.active', function() {
		$('#billingStyle').remove();
		console.log("Removed");
	});
});
