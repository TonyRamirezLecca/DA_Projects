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

var fontAwesome5 = document.createElement("link");
fontAwesome5.type = "text/css"; fontAwesome5.rel = "stylesheet";
fontAwesome5.href="https://use.fontawesome.com/releases/v5.4.0/css/all.css";
document.querySelector("head").appendChild(fontAwesome5);

whenExists('.content-side-form.style-color-682075-bg.vc_custom_1547770183194.row-internal.row-container', function () {
	console.log("DA SCRIPT");

	/* Give Elements DA classes */
	$('.content-side-form.style-color-682075-bg.vc_custom_1547770183194.row-internal.row-container').addClass('da_form');

	/* Hero */
	$('.post-content > .vc_row.row-container:nth-child(2)').addClass('da_hero');

		$('<div class="da_hero-content da_mobile-version"><img class="da_sticker" src="https://e2n8i3a5.stackpathcdn.com/wp-content/uploads/2019/01/we-beat-lowes-and-home-depot-badge.png"/><h1>WE BRING THE STORE </br>TO YOUR DOOR!</h1><div class="da_vp-ctn"><div class="da_vp"><i class="fas fa-pencil-ruler"></i>FREE DESIGN</div><div class="da_vp"><i class="fas fa-clipboard-check"></i>FREE ESTIMATES</div><div class="da_vp"><i class="fas fa-hammer"></i>FREE INSTALL</div></div><div class="da_line"></div><p class="da_sub-header">SCHEDULE YOUR COMPLIMENTARY</br> DESIGN CONSULTATION TODAY!</p><a class="da_cta" href="https://18004blinds.com/products/">Schedule Now</a></div>').appendTo('.da_hero');

		$('<div class="da_hero-content da_desktop-version"><div class="da_left"><img class="da_sticker" src="https://e2n8i3a5.stackpathcdn.com/wp-content/uploads/2019/01/we-beat-lowes-and-home-depot-badge.png"/><h1>WE BRING THE STORE </br>TO YOUR DOOR!</h1><p class="da_sub-header">SCHEDULE YOUR COMPLIMENTARY</br> DESIGN CONSULTATION TODAY!</p><a class="da_cta" href="https://18004blinds.com/products/">Schedule Now</a></div><div class="da_line"></div><div class="da_vp-ctn"><div class="da_vp"><i class="fas fa-pencil-ruler"></i>FREE DESIGN</div><div class="da_vp"><i class="fas fa-clipboard-check"></i>FREE ESTIMATES</div><div class="da_vp"><i class="fas fa-hammer"></i>FREE INSTALL</div></div></div>').appendTo('.da_hero');

	$('.heading-text.el-text.free-text-block').addClass('da_vp-remove').appendTo('.da_hero');
	$('<div class="da_dark-background"></div>').appendTo('.da_hero');



});

