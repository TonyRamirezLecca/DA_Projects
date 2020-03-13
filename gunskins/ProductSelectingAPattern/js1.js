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
whenExists('.swatch.clearfix', function () {

	$( document ).ready(function() {
		if($('.da_swatch').length) return;
		var fontAwesome5 = document.createElement("link");
		fontAwesome5.type = "text/css"; fontAwesome5.rel = "stylesheet";
		fontAwesome5.href="https://use.fontawesome.com/releases/v5.4.0/css/all.css";
		document.querySelector("head").appendChild(fontAwesome5);


		var flag = [
			'Proveil Victory',
			'Proveil Victory Grey',
			'GS America',
			'GS America Grey',
			'GS Thin Blue Line',
			'GS Thin Red Line'
		]
		var tactical = [
			"A-TACS ATX",
			"A-TACS AU",
			"A-TACS AUX",
			"A-TACS FG",
			"A-TACS FGX",
			"A-TACS IX",
			"A-TACS GHOST",
			"A-TACS LE",
			"GS BattleWorn Dark Earth",
			"GS BattleWorn Snow Trooper",
			"GS Military OCP",
			"GS Military OCP Black",
			"GS Vietnam Tiger Stripe",
			"Kuiu Verde 2.0",
			"Kuiu Vias",
			"Prym1 Black Out",
			"PenCott BadLands",
			"PenCott Green Zone",
			"PenCott SnowDrift"
		];
		var hunting = [
			"Kryptek Highlander",
			"Kryptek Mandrake",
			"Kryptek Nomad",
			"Kryptek Typhon",
			"Kryptek Yeti",
			"Prym1 Firestorm",
			"Prym1 Multi-Purpose",
			"Prym1 Pink Out",
			"Prym1 Sand Storm",
			"Prym1 Woodlands",
			"Realtree Edge",
			"Realtree Max-1 XT",
			"Realtree Max-5",
			"Realtree Timber",
			"Realtree Xtra",
			"Realtree Xtra Snow",
			"Realtree Meteorite",
			"Realtree Paradise Pink",
			"Realtree Sea Glass",
			"Realtree Wild Orchid",
			"StalkLand Legacy",
			"StalkLand Lotus",
			"StalkLand Void",
			"TrueTimber DRT",
			"TrueTimber HTC Green",
			"TrueTimber Kanati",
			"TrueTimber Prarie",
			"TrueTimber Strata",
			"TrueTimber Viper Western"
		];

		flag.forEach((el, i, arr) => {
			if ($(`div[data-value="${el}"]`).length) {
				$(`div[data-value="${el}"]`).addClass('da_flag da_visible-swatch');
			}
		});

		tactical.forEach((el, i, arr) => {
			if ($(`div[data-value="${el}"]`).length) {
				$(`div[data-value="${el}"]`).addClass('da_tactical');
			}
		});

		hunting.forEach((el, i, arr) => {
			if ($(`div[data-value="${el}"]`).length) {
				$(`div[data-value="${el}"]`).addClass('da_hunting');
			}
		});

		$(`div[data-value]`).each(function() {
			$(this).addClass('da_all da_hide da_swatch');
		});

		/* Move Drop Down */
		$('.variant-select.clearfix.desktop-12').insertAfter('.swatch.clearfix');
		$('.variant-select.clearfix.desktop-12 h5').html('YOU\'VE SELECTED');

		/* Filter Buttons */
		$('<div class="da_box-ctn"><div class="da_box da_american-btn da_active-btn">American</div><div class="da_box da_military-btn">Military</div><div class="da_box da_hunting-btn">Hunting</div><div class="da_box da_view-all-btn">View All</div></div>').insertBefore('.swatch.clearfix');

		$('.da_american-btn').click(function() {
			$('.da_hide:not(.da_flag)').removeClass('da_visible-swatch');
			$('.da_box:not(.da_american-btn)').removeClass('da_active-btn');

			$(this).addClass('da_active-btn');
			$('.da_flag').addClass('da_visible-swatch');
		})

		$('.da_military-btn').click(function() {
			$('.da_hide:not(.da_tactical)').removeClass('da_visible-swatch');
			$('.da_box:not(.da_military-btn)').removeClass('da_active-btn');

			$(this).addClass('da_active-btn');
			$('.da_tactical').addClass('da_visible-swatch');
		})

		$('.da_hunting-btn').click(function() {
			$('.da_hide:not(.da_hunting)').removeClass('da_visible-swatch');
			$('.da_box:not(.da_hunting-btn)').removeClass('da_active-btn');

			$(this).addClass('da_active-btn');
			$('.da_hunting').addClass('da_visible-swatch');
		})

		$('.da_view-all-btn').click(function() {
			$('.da_hide:not(.da_all)').removeClass('da_visible-swatch');
			$('.da_box:not(.da_view-all-btn)').removeClass('da_active-btn');

			$(this).addClass('da_active-btn');
			$('.da_all').addClass('da_visible-swatch');
		})

		$('select[data-option="option1"]').change(function(e) {
			$(`.da_active-swatch`).removeClass('da_active-swatch');
			$(`.da_swatch[data-value="${e.currentTarget.value}"]`).addClass('da_active-swatch');


			if ($('.da_view-all-btn').hasClass('da_active-btn')) {}
			else if ($(`.da_active-swatch`).hasClass('da_flag')) {
				$('.da_hide:not(.da_flag)').removeClass('da_visible-swatch');
				$('.da_box:not(.da_american-btn)').removeClass('da_active-btn');

				$('.da_american-btn').addClass('da_active-btn');
				$('.da_flag').addClass('da_visible-swatch');
			}
			else if ($(`.da_active-swatch`).hasClass('da_tactical')) {
				$('.da_hide:not(.da_tactical)').removeClass('da_visible-swatch');
				$('.da_box:not(.da_military-btn)').removeClass('da_active-btn');

				$('.da_military-btn').addClass('da_active-btn');
				$('.da_tactical').addClass('da_visible-swatch');
			}
			else if ($(`.da_active-swatch`).hasClass('da_hunting')) {
				$('.da_hide:not(.da_hunting)').removeClass('da_visible-swatch');
				$('.da_box:not(.da_hunting-btn)').removeClass('da_active-btn');

				$('.da_hunting-btn').addClass('da_active-btn');
				$('.da_hunting').addClass('da_visible-swatch');
			}
			else {
				$('.da_hide:not(.da_all)').removeClass('da_visible-swatch');
				$('.da_box:not(.da_view-all-btn)').removeClass('da_active-btn');

				$('da_view-all').addClass('da_active-btn');
				$('.da_all').addClass('da_visible-swatch');
			}
		});
	});

});
