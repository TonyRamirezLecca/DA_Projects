/* JS 3 */

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

whenExists('.product-image-container', function () {
	console.log('DA_SCRIPT');
	/* JS1 Code */
		document.querySelectorAll('.products.list.items.product-items > li > div > a').forEach((el, i, arr) => {
			var href = el.getAttribute('href');
			var daHoverLink = document.createElement('div'); daHoverLink.classList.add('da_hover-link');
			var daHoverLinkAnchor = document.createElement('a'); daHoverLinkAnchor.href = href; daHoverLinkAnchor.innerHTML = "VIEW PRODUCT";
			daHoverLink.append(daHoverLinkAnchor);
			el.querySelector('span.product-image-container').append(daHoverLink);
		});
	if (window.location.href.includes('https://www.standupdeskstore.com/standing-desks/electric-adjustable-standing-desk')) {
		console.log('TEST');
		$('#maincontent > div.columns > div > div.products.wrapper.grid.products-grid > ol > li > div > div > strong > a').each(function() {
			var productName = $(this).html();
			productName = productName.trim();
			productName = productName.replace(/  +/g, ' ');
			var productDescription = "DEFAULT";
			switch (productName) {
				case "Electric Standing Desk with Programmable Memory":
					productDescription = "Standard-width height adjustable desk top is designed to accommodate a computer, monitor, and accessories, up to 155 pounds";
					break;
				case "Two-Tier Electric Standing Desk":
					productDescription = "Two-tier computer desk design perfectly places your keyboard for comfortable typing, and your monitors for easy viewing";
					break;
				case "71” Triple Motor Electric L-Shaped Desk / Standing Desk with EZ Assemble Frame":
					productDescription = "This L-desk is specially designed to assemble in minutes. Once put together, the L-shaped sit stand desk offers effortless electric push-button height adjustment and a programmable memory keypad that recalls your favorite positions";
					break;
				case "71” Triple Motor Electric L-Shaped Desk / Standing Desk with EZ Assemble Frame":
					productDescription = "This L-desk is specially designed to assemble in minutes. Once put together, the L-shaped sit stand desk offers effortless electric push-button height adjustment and a programmable memory keypad that recalls your favorite positions";
					break;
				case "Dual Motor Electric Standing Desk with Programmable Memory and EZ Assemble Frame":
					productDescription = "This sit stand desk is specially designed to assemble in minutes. Once put together, it offers effortless electric push button height adjustment, and a programmable memory keypad that stores your favorite positions";
					break;
				case "Electric Height-Adjustable Standing Desk Frame (Frame Only)":
					productDescription = "Simple button or paddle adjustment for one-touch operation";
					break;
				case "Artisan Grove™ 60\" Reclaimed Wood Standing Desk":
					productDescription = "Dual motors offer smooth, fast, and quiet height adjustment, and can lift 220 pounds, allowing this 60” wide, height adjustable desk to accommodate multiple oversized monitors, books, supplies, and more";
					break;
				case "60\" Solid Wood Standing Desk":
					productDescription = "Dual motors offer smooth, fast, and quiet height adjustment, and can lift 220 pounds, allowing this 60” wide, height-adjustable desk to accommodate multiple oversized monitors, books, supplies, and more";
					break;
				case "60\" Electric Stand Up Desk Starter Bundle":
					productDescription = "Spacious push button electric operated sit to stand desk helps you stay energized throughout the day";
					break;
				case "60\" Electric Stand Up Desk Deluxe Bundle - Ash Grey":
					productDescription = "Spacious push button dual-motor electric operated sit to stand desk helps you stay energized throughout the day";
					break;
				case "60\" Solid Wood Standing Desk":
					productDescription = "Dual motors offer smooth, fast, and quiet height adjustment, and can lift 220 pounds, allowing this 60” wide, height-adjustable desk to accommodate multiple oversized monitors, books, supplies, and more";
					break;
				case "Triple Motor Electric L-Shaped Standing Desk Frame + Programmable Memory (Frame Only)":
					productDescription = "This L-shaped adjustable desk frame is specially designed to assemble in minutes. Once put together, it offers effortless electric push-button height adjustment and a programmable memory keypad that recalls your favorite positions";
					break;
				case "60\" Electric Stand Up Desk Standard Bundle":
					productDescription = "Spacious push button electric operated sit to stand desk helps you stay energized throughout the day";
					break;
				case "60\" Solid Wood Standing Desk":
					productDescription = "Dual motors offer smooth, fast, and quiet height adjustment, and can lift 220 pounds, allowing this 60” wide, height-adjustable desk to accommodate multiple oversized monitors, books, supplies, and more";
					break;
				case "71” Triple Motor Electric L-Shaped Desk / Standing Desk with EZ Assemble Frame":
					productDescription = "This L-desk is specially designed to assemble in minutes. Once put together, the L-shaped sit stand desk offers effortless electric push-button height adjustment and a programmable memory keypad that recalls your favorite positions";
					break;
				case "Artisan Grove™ 60\" Reclaimed Wood Standing Desk":
					productDescription = "Dual motors offer smooth, fast, and quiet height adjustment, and can lift 220 pounds, allowing this 60” wide, height adjustable desk to accommodate multiple oversized monitors, books, supplies, and more";
					break;
				case "Deluxe Teachers Bundle":
					productDescription = "Locking storage for personal belongings and paperwork";
					break;
				case "Electric Standing Desk":
					productDescription = "Reliable electric motor with a simple paddle adjustment offers smooth, fast, and quiet height adjustment, and can lift desktop loads up to 132 pounds, allowing this electric height adjustable desk to accommodate dual monitors, books, and more.";
					break;
				case "60\" Electric Stand Up Desk Deluxe Bundle - Midnight Blue":
					productDescription = "Spacious push button dual-motor electric operated sit to stand desk helps you stay energized throughout the day";
					break;
				case "60\" Electric Stand Up Desk Deluxe Bundle - Cool Grey":
					productDescription = "Spacious push button dual-motor electric operated sit to stand desk helps you stay energized throughout the day";
					break;
				case "71” Triple Motor Electric L-Shaped Standing Desk with EZ Assemble Frame - White Frame / Black Top":
					productDescription = "Choose the Stand Up Desk Store 71” Triple Motor Electric L-Shaped Desk / Standing Desk with EZ Assemble Frame when you prefer the convenience of one-touch, push-button transitions from sitting to standing and require the maximum amount of usable work space.";
					break;
				case "71” Triple Motor Electric L-Shaped Standing Desk with EZ Assemble Frame - Black Frame / Black Top":
					productDescription = "Choose the Stand Up Desk Store 71” Triple Motor Electric L-Shaped Desk / Standing Desk with EZ Assemble Frame when you prefer the convenience of one-touch, push-button transitions from sitting to standing and require the maximum amount of usable work space.";
					break;
				case "71\" Triple Motor Electric L-Shaped Standing Desk with EZ Assemble Frame - Black Frame / Black Top":
					productDescription = "Choose the Stand Up Desk Store 71” Triple Motor Electric L-Shaped Desk / Standing Desk with EZ Assemble Frame when you prefer the convenience of one-touch, push-button transitions from sitting to standing and require the maximum amount of usable work space.";
					break;
				case "60\" Solid Wood Standing Desk - Charcoal Frame / Clear Birch Top":
					productDescription = "We took our most powerful, feature-packed standing desk frame and added a stunning solid wood top with a deep luster finish that brings out the natural character of the wood.";
					break;
				case "60\" Solid Wood Standing Desk - Charcoal Frame / Antique Birch Top":
					productDescription = "We took our most powerful, feature-packed standing desk frame and added a stunning solid wood top with a deep luster finish that brings out the natural character of the wood.";
					break;
				case "Artisan Grove™ 60\" Reclaimed Wood Standing Desk - Mocha":
					productDescription = "All the character and handcrafted quality of a genuine reclaimed wood top combined with our most powerful and feature-packed standing desk frame. For the very best in stand up desks, look no further than Artisan Grove™.";
					break;
				default:
					productDescription = "Premium quality standing desk helps you improve focus, enhance collaboration, increase productivity, and boost calorie burn";
					break;
			}
			if ($(this).parent().parent().children('.price-box.price-final_price').length) {
				$(`<div class="da_text-ctn"><p class="da_text">${productDescription}</p></div>`).insertBefore($(this).parent().parent().children('.price-box.price-final_price'));
			}
			else {
				$(`<div class="da_text-ctn"><p class="da_text">${productDescription}</p></div>`).insertBefore($(this).parent().parent().children('.normal-price'));
			}
		});
	}
	else if (window.location.href.includes('https://www.standupdeskstore.com/standing-desk-converters')) {
		$('#maincontent > div.columns > div > div.products.wrapper.grid.products-grid > ol > li > div > div > strong > a').each(function() {
			var productName = $(this).html();
			productName = productName.trim();
			productName = productName.replace(/  +/g, ' ');
			var productDescription = "DEFAULT";
			switch (productName) {
				case "AirRise™ Pro Standing Desk Converter":
					productDescription = "This sit stand desk converter lets you smoothly transition between a variety of ergonomic desk positions with an effortless pneumatic height adjustment";
					break;
				case "AirRise™ Pro 2.0 Adjustable Standing Desk Converter + Dual Monitor Mount":
					productDescription = "The AirRise™ Pro 2.0 is based on our top selling two-tier standing desk converter, which transforms any desk to a standing desk, helping you improve focus, enhance collaboration, increase productivity, and boost calorie burn";
					break;
				case "AirRise™ Adjustable Standing Desk Converter":
					productDescription = "Our fast and easy standing desk converter transforms any desk into a standing desk, helping you improve focus, enhance collaboration, increase productivity, and boost calorie burn";
					break;
				case "Power Pro Electric Adjustable Standing Desk Converter":
					productDescription = "Our stand up desk converter is designed to easily fit a laptop computer and a monitor, or two monitors (without a laptop), plus a keyboard, mouse, and accessories";
					break;
				case "AirRise™ Corner Pro Adjustable Standing Desk Converter":
					productDescription = "Generous, 36” wide stand up desk converter is designed to fit into cubicles, yet easily accommodates a laptop computer, dual monitors, keyboard, and accessories";
					break;
				case "36” AirRise™ AdaptX Adjustable Standing Desk Converter with Pop Up Monitor Shelf":
					productDescription = "Versatile pneumatic standing desk converter transforms any desk to a standing desk, helping you improve focus, enhance collaboration, increase productivity, and boost calorie burn";
					break;
				case "AirRise™ Executive Adjustable Standing Desk Converter":
					productDescription = "Extra wide sit stand desk converter is designed to easily fit a laptop computer, dual monitors, keyboard, and accessories, optimized for 24 pounds, with a max of 33 pounds";
					break;
				case "AirRise™ Plus Adjustable Standing Desk Converter":
					productDescription = "Effortless pneumatic height adjustment lets you smoothly transition between a wide range of ergonomic desk positions";
					break;
				case "28” PowerRise Electric Adjustable Standing Desk Converter with Dual Monitor Mount":
					productDescription = "Extra sleek sit stand desk converter is designed to maintain a small footprint, allowing for use on smaller work spaces";
					break;
				case "Power Corner Pro Electric Adjustable Standing Desk Converter":
					productDescription = "With the touch of a button, this electric sit stand desk converter lets you quickly and effortlessly adjust to any height between 5.3” to 19.2”";
					break;
				case "Adjustable-Height Standing Desk Converter":
					productDescription = "Available in three sizes, each supporting up to 50 pounds, you can choose the stand up desk converter which best suits your needs";
					break;
				case "42\" Folding Standing Desk Converter":
					productDescription = "Stand Up Desk Store's Adjustable-Height Standing Desk Converter is the perfect solution when you want an effortless, straightforward, economical way to turn your desk or table into a standing desk.";
					break;
				default:
					productDescription = "Premium quality standing desk helps you improve focus, enhance collaboration, increase productivity, and boost calorie burn";
					break;
			}
			if ($(this).parent().parent().children('.price-box.price-final_price').length) {
				$(`<div class="da_text-ctn"><p class="da_text">${productDescription}</p></div>`).insertBefore($(this).parent().parent().children('.price-box.price-final_price'));
			}
			else {
				$(`<div class="da_text-ctn"><p class="da_text">${productDescription}</p></div>`).insertBefore($(this).parent().parent().children('.normal-price'));
			}
		});
	}
	else if (window.location.href.includes('https://www.standupdeskstore.com/standing-desks/crank-adjustable-standing-desks')) {
		$('#maincontent > div.columns > div > div.products.wrapper.grid.products-grid > ol > li > div > div > strong > a').each(function() {
			var productName = $(this).html();
			productName = productName.trim();
			productName = productName.replace(/  +/g, ' ');
			var productDescription = "DEFAULT";
			switch (productName) {
				case "Crank Adjustable-Height Standing Desk":
					productDescription = "Sit to stand desk design lets you smoothly transition between a variety of ergonomic desk positions with an effortless crank-operated height adjustment";
					break;
				case "Crank Adjustable Sit to Stand Two-Tier Desk with Steel Frame":
					productDescription = "Two-tier computer desk design perfectly places your keyboard for comfortable typing and your monitors for easy viewing";
					break;
				case "Single Column Crank Adjustable-Height Student Desk / Classroom Desk":
					productDescription = "Handy classroom desk features include (depending on model) an integrated bag hook, pencil tray, bottle holder, space-saving single column design, removable crank, and a dry erase whiteboard top";
					break;
				case "Adjustable Height Standing Desk with Front or Side-Mounted Crank":
					productDescription = "Featuring a crank that can be mounted on the front, left, or right side, the adjustable standing desk accommodates virtually any workspace configuration";
					break;
				case "Two-Tier Crank Adjustable Stand Up Desk":
					productDescription = "Two-tier computer desk design perfectly places your keyboard for comfortable typing, and your monitors for easy viewing";
					break;
				case "72” Crank Adjustable Standing Conference Table / Meeting Table":
					productDescription = "This mid-sized meeting table also delivers the health benefits of a standing desk, but for group settings";
					break;
				case "Crank Adjustable-Height Two-Person Student Desk / Classroom Desk":
					productDescription = "Built for two, this full-featured classroom desk features a pair of integrated bag hooks, pencil trays, bottle holders, plus a footrest bar";
					break;
				case "60\" Crank Adjustable Stand Up Desk Starter Bundle":
					productDescription = "Spacious crank-operated sit to stand desk helps you stay energized throughout the day";
					break;
				case "L-Shaped Crank Adjustable Height Sit to Stand Up Desk":
					productDescription = "Effortlessly moves from sit to stand in sixty seconds; each section of the desk can be adjusted independently";
					break;
				case "60\" Crank Adjustable Stand Up Desk Standard Bundle":
					productDescription = "Spacious crank operated sit to stand desk helps you stay energized throughout the day";
					break;
				case "48\" and 60\" Crank Adjustable-Height Standing Desk Frame with Front or Side-Mounted Crank (Frame Only)":
					productDescription = "Hand crank can be mounted in front, enabling the installation of our ReFocus™ Desk Dividers, as well as making it easier to fit into tight workspaces. ";
					break;
				default:
					productDescription = "Premium quality standing desk helps you improve focus, enhance collaboration, increase productivity, and boost calorie burn";
					break;
			}
			if ($(this).parent().parent().children('.price-box.price-final_price').length) {
				$(`<div class="da_text-ctn"><p class="da_text">${productDescription}</p></div>`).insertBefore($(this).parent().parent().children('.price-box.price-final_price'));
			}
			else {
				$(`<div class="da_text-ctn"><p class="da_text">${productDescription}</p></div>`).insertBefore($(this).parent().parent().children('.normal-price'));
			}
		});
	}
	else if (window.location.href.includes('https://www.standupdeskstore.com/standing-desk-converters/electric-standing-desk-converter')) {
		$('#maincontent > div.columns > div > div.products.wrapper.grid.products-grid > ol > li > div > div > strong > a').each(function() {
			var productName = $(this).html();
			productName = productName.trim();
			productName = productName.replace(/  +/g, ' ');
			var productDescription = "DEFAULT";
			switch (productName) {
				case "Power Pro Electric Adjustable Standing Desk Converter":
					productDescription = "Our stand up desk converter is designed to easily fit a laptop computer and a monitor, or two monitors (without a laptop), plus a keyboard, mouse, and accessories";
					break;
				case "28” PowerRise Electric Adjustable Standing Desk Converter with Dual Monitor Mount":
					productDescription = "Extra sleek sit stand desk converter is designed to maintain a small footprint, allowing for use on smaller work spaces";
					break;
				case "Power Corner Pro Electric Adjustable Standing Desk Converter":
					productDescription = "Other highlights of this height adjustable desk converter include chamfered edges and a two-tiered design for typing and viewing comfort, a 10 foot power cord, plus a textured surface to hold items in place";
					break;
				default:
					productDescription = "Premium quality standing desk helps you improve focus, enhance collaboration, increase productivity, and boost calorie burn";
					break;
			}

			if ($(this).parent().parent().children('.price-box.price-final_price').length) {
				$(`<div class="da_text-ctn"><p class="da_text">${productDescription}</p></div>`).insertBefore($(this).parent().parent().children('.price-box.price-final_price'));
			}
			else {
				$(`<div class="da_text-ctn"><p class="da_text">${productDescription}</p></div>`).insertBefore($(this).parent().parent().children('.normal-price'));
			}
		});
	}
	else if (window.location.href.includes('https://www.standupdeskstore.com/standing-desks')) {
		$('#maincontent > div.columns > div > div.products.wrapper.grid.products-grid > ol > li > div > div > strong > a').each(function() {
			var productName = $(this).html();
			productName = productName.trim();
			productName = productName.replace(/  +/g, ' ');
			var productDescription = "DEFAULT";
			switch (productName) {
				case "Crank Adjustable-Height Standing Desk":
					productDescription = "High speed crank handle quickly moves the desk from the lowest to highest positions within seconds without requiring electric power.";
					break;
				case "Mobile Standing Computer Workstation - Keyboard Tray":
					productDescription = "Features 3 shelves for optimum space management";
					break;
				case "Electric Standing Desk with Programmable Memory":
					productDescription = "Sit stand desk design lets you smoothly transition between a variety of ergonomic desk positions with an effortless electric push button height adjustment";
					break;
				case "Crank Adjustable Sit to Stand Two-Tier Desk with Steel Frame":
					productDescription = "Two-tier computer desk design perfectly places your keyboard for comfortable typing and your monitors for easy viewing";
					break;
				case "Mobile Fixed-Height Two-Tier Stand Up Desk":
					productDescription = "This computer desk is designed to accommodate a computer, monitor, and accessories";
					break;
				case "Pneumatic Height Adjustable Lectern":
					productDescription = "Offering a 14.5” adjustment range, it also works well as an ultra compact laptop stand/sit stand desk, helping you improve focus, enhance collaboration, increase productivity, and boost calorie burn";
					break;
				case "Two-Tier Electric Standing Desk":
					productDescription = "Two-tier computer desk design perfectly places your keyboard for comfortable typing, and your monitors for easy viewing";
					break;
				case "Pneumatic Adjustable-Height Laptop Desk Cart":
					productDescription = "When used as a mobile lectern/podium, it’s great for presentations, offering plenty of room for notes, a laptop, and a projector";
					break;
				case "Single Column Crank Adjustable-Height Student Desk / Classroom Desk":
					productDescription = "Handy classroom desk features include (depending on model) an integrated bag hook, pencil tray, bottle holder, space-saving single column design, removable crank, and a dry erase whiteboard top";
					break;
				case "71” Triple Motor Electric L-Shaped Standing Desk with EZ Assemble Frame - White Frame / Black Top":
					productDescription = "This L-desk is specially designed to assemble in minutes. Once put together, the L-shaped sit stand desk offers effortless electric push-button height adjustment and a programmable memory keypad that recalls your favorite positions";
					break;
				case "71” Triple Motor Electric L-Shaped Standing Desk with EZ Assemble Frame - Black Frame / Black Top":
					productDescription = "This L-desk is specially designed to assemble in minutes. Once put together, the L-shaped sit stand desk offers effortless electric push-button height adjustment and a programmable memory keypad that recalls your favorite positions";
					break;
				case "Pneumatic Adjustable Height Student Desk":
					productDescription = "Handy classroom desk features include an integrated bag hook, bottle holder, and pencil tray";
					break;
				case "Pneumatic Adjustable Height Standing Desk":
					productDescription = "Medium width/shallow depth height adjustable desk top is designed to accommodate a computer, dual monitors, and accessories, up to 35 pounds";
					break;
				case "Height Adjustable Podium Lectern":
					productDescription = "Premium quality mobile lectern/podium is perfect for presentations and includes handy features like a paper stopper, a middle shelf to place a water glass, and ample room for notes";
					break;
				case "24” Single Column Standing Desk / Laptop Stand":
					productDescription = "When used as a mobile lectern/podium, it’s great for presentations, offering plenty of room for notes, a laptop, and a projector";
					break;
				case "Height-Adjustable Drawing and Drafting Table":
					productDescription = "This adjustable drawing and drafting table features up to 45 degrees of angle adjustment and 12 inches of height adjustment to accommodate a variety of users and tasks";
					break;
				case "Adjustable Height Standing Desk with Front or Side-Mounted Crank":
					productDescription = "Available in two widths, the sit stand desktop is roomy enough to accommodate a computer, monitor, and accessories, up to 154 pounds";
					break;
				case "Mobile Fixed-Height Two-Tier Stand Up Desk":
					productDescription = "Thanks to the dual-level ergonomic desk design with integrated monitor riser, your hands can stay at a comfortable height for typing while your screens are positioned at a level for easy viewing";
					break;
				case "Dual Motor Electric Standing Desk with Programmable Memory and EZ Assemble Frame":
					productDescription = "This sit stand desk is specially designed to assemble in minutes. Once put together, it offers effortless electric push button height adjustment, and a programmable memory keypad that stores your favorite positions";
					break;
				case "Adjustable Height Flip Top Table / Training Table":
					productDescription = "Extra-wide height adjustable desk/training table is designed to easily accommodate two students or workers - including computers, supplies, and more - up to 150 pounds";
					break;
				case "Electric Height-Adjustable Standing Desk Frame (Frame Only)":
					productDescription = "Sturdy telescoping legs enable the sit to stand desk frame to easily transition between a variety of ergonomic desk positions";
					break;
				case "Adjustable-Height Standing Desk Converter":
					productDescription = "This sit stand desk converter lets you select between six different ergonomic desk positions - in 1” increments - with its convenient telescoping legs";
					break;
				case "Two-Tier Crank Adjustable Stand Up Desk":
					productDescription = "Two-tier computer desk design perfectly places your keyboard for comfortable typing, and your monitors for easy viewing";
					break;
				case "Standing Desk Converter with Monitor Shelf":
					productDescription = "Economically priced, and taking up only a modest footprint, this two tier standing desk converter still delivers premium quality, smooth operation, and ease of use.";
					break;
				case "72” Fixed Height Standing Conference Table / Meeting Table":
					productDescription = "Standing height conference table helps enhance collaboration, ideation, and productivity";
					break;
				case "48” Fixed Height Solid Wood Standing Desk / Butcher Block Desk":
					productDescription = "Solid wood butcher block desk top looks great and assures this stand up desk will last for many years";
					break;
				case "Power Pro Electric Adjustable Standing Desk Converter":
					productDescription = "Our stand up desk converter is designed to easily fit a laptop computer and a monitor, or two monitors (without a laptop), plus a keyboard, mouse, and accessories";
					break;
				case "72” Crank Adjustable Standing Conference Table / Meeting Table":
					productDescription = " The perfect addition to any office, training room, or classroom, its user-friendly features include convenient hand crank adjustment that gives you the ability to quickly and easily alternate between tabletop heights for comfortable standing and sitting.";
					break;
				case "Artisan Grove™ 60\" Reclaimed Wood Standing Desk":
					productDescription = "Dual motors offer smooth, fast, and quiet height adjustment, and can lift 220 pounds, allowing this 60” wide, height adjustable desk to accommodate multiple oversized monitors, books, supplies, and more";
					break;
				case "60\" Solid Wood Standing Desk":
					productDescription = "This sit stand desk offers effortless electric push button height adjustment, a programmable memory keypad that stores your favorite positions, plus optional locking casters for easy movement and an additional 2”  of height";
					break;
				case "35” Pneumatic Adjustable-Height Cafe Table / Breakroom Table":
					productDescription = "With an easy pull of a lever, this cafe table delivers 15 inches of lightning fast adjustment, letting you alternate between a standard height and a “high top” table in moments";
					break;
				case "Crank Adjustable-Height Student Desk":
					productDescription = "Handy classroom desk features include an integrated bag hook, bottle holder, and pencil tray";
					break;
				case "60\" Electric Stand Up Desk Starter Bundle":
					productDescription = "Spacious push button electric operated sit to stand desk helps you stay energized throughout the day";
					break;
				case "32\" Pneumatic Adjustable-Height Cafe Table / Breakroom Table":
					productDescription = "With an easy pull of a lever, this cafe table delivers 15 inches of lightning fast adjustment, letting you alternate between a standard height and a “high top” table in moments";
					break;
				case "72” Crank Adjustable Standing Conference Table / Meeting Table":
					productDescription = "The boardroom table offers user friendly features like foot bars and a dry erase tabletop (white version)";
					break;
				case "24” Collapsible Kitchen Cart / Kitchen Island with Towel Bar":
					productDescription = "Works great as a kitchen island cart, and is also handy in an office or workshop setting";
					break;
				case "Adjustable-Height Standing Desk Converter":
					productDescription = "Chamfered edges enhance typing comfort";
					break;
				case "Crank Adjustable-Height Two-Person Student Desk / Classroom Desk":
					productDescription = "Built for two, this full-featured classroom desk features a pair of integrated bag hooks, pencil trays, bottle holders, plus a footrest bar";
					break;
				case "52” Standing Height Study Desk / Trestle Desk":
					productDescription = "Multi-functional A-frame design works great as a simple computer desk, or as a small standing height conference table";
					break;
				case "60\" Electric Stand Up Desk Deluxe Bundle - Ash Grey":
					productDescription = "Five customer-tested and approved products combine to deliver the ultimate standing work station with storage and privacy";
					break;
				case "Triple Motor Electric L-Shaped Standing Desk Frame + Programmable Memory (Frame Only)":
					productDescription = "This L-shaped adjustable desk frame is specially designed to assemble in minutes. Once put together, it offers effortless electric push-button height adjustment and a programmable memory keypad that recalls your favorite positions";
					break;
				case "60\" Electric Stand Up Desk Standard Bundle":
					productDescription = "Spacious push button electric operated sit to stand desk helps you stay energized throughout the day";
					break;
				case "60\" Solid Wood Standing Desk":
					productDescription = "Dual motors offer smooth, fast, and quiet height adjustment, and can lift 220 pounds, allowing this 60” wide, height-adjustable desk to accommodate multiple oversized monitors, books, supplies, and more";
					break;
				case "L-Shaped Crank Adjustable Height Sit to Stand Up Desk":
					productDescription = "Effortlessly moves from sit to stand in sixty seconds; each section of the desk can be adjusted independently";
					break;
				case "71” Triple Motor Electric L-Shaped Desk / Standing Desk with EZ Assemble Frame":
					productDescription = "3-stage telescoping legs enable this L-shaped adjustable desk to achieve a much wider range of heights, letting users of all sizes transition between a variety of ergonomic desk positions";
					break;
				case "Artisan Grove™ 60\" Reclaimed Wood Standing Desk":
					productDescription = "Dual motors offer smooth, fast, and quiet height adjustment, and can lift 220 pounds, allowing this 60” wide, height adjustable desk to accommodate multiple oversized monitors, books, supplies, and more";
					break;
				case "Manual Height-Adjustable Standing Desk / Standing Conference Table":
					productDescription = "Versatile design enables it to double as a standing meeting table or even an on-trend kitchen table";
					break;
				case "Round Storage Ottoman Stool":
					productDescription = "Convex wobble stool bottom adds a healthy rocking movement when sitting";
					break;
				case "60\" Crank Adjustable Stand Up Desk Standard Bundle":
					productDescription = "Comfortable drafting chair is perfect for sitting at a raised work surface";
					break;
				case "Deluxe Teachers Bundle":
					productDescription = "Three great products combined to make the perfect workstation for busy educators!";
					break;
				case "Electric Standing Desk":
					productDescription = "Telescoping leg design enables this electric sit stand desk to achieve a generous range of heights, letting you transition between a variety of ergonomic desk positions";
					break;
				case "72” Dual Motor Electric Adjustable Standing Conference Table / Meeting Table":
					productDescription = "This mid-sized meeting table also lets up to six people simultaneously enjoy the health benefits of a standing desk";
					break;
				case "60\" Electric Stand Up Desk Deluxe Bundle - Midnight Blue":
					productDescription = "Ergonomic standing desk floor mat provides cushion and support while standing at your desk";
					break;
				case "60\" Electric Stand Up Desk Deluxe Bundle - Cool Grey":
					productDescription = "Five customer-tested and approved products combine to deliver the ultimate standing work station with storage and privacy";
					break;
				case "48\" and 60\" Crank Adjustable-Height Standing Desk Frame with Front or Side-Mounted Crank (Frame Only)":
					productDescription = "Hand crank can be mounted in front, enabling the installation of our ReFocus™ Desk Dividers, as well as making it easier to fit into tight workspaces. ";
					break;
				case "Mobile Fixed-Height Standing Desk":
					productDescription = "Our height adjustable desk with optional monitor arm offers ample room for your computer, monitor, and accessories";
					break;
				case "Pneumatic Adjustable-Height Laptop Desk Cart":
					productDescription = "An ideal solution when you want a compact, mobile, simple, and versatile standing workstation. Fast and easy pneumatic height adjustment lets this laptop desk transition from sitting to standing in moments.";
					break;
				case "71\" Triple Motor Electric L-Shaped Standing Desk with EZ Assemble Frame - White Frame / Black Top":
					productDescription = "Choose the Stand Up Desk Store 71” Triple Motor Electric L-Shaped Desk / Standing Desk with EZ Assemble Frame when you prefer the convenience of one-touch, push-button transitions from sitting to standing and require the maximum amount of usable work space.";
					break;
				case "71\" Triple Motor Electric L-Shaped Standing Desk with EZ Assemble Frame - Black Frame / Black Top":
					productDescription = "Choose the Stand Up Desk Store 71” Triple Motor Electric L-Shaped Desk / Standing Desk with EZ Assemble Frame when you prefer the convenience of one-touch, push-button transitions from sitting to standing and require the maximum amount of usable work space.";
					break;
				case "24\" Mobile Standing Workstation":
					productDescription = "Stand Up Desk Store's Mobile Fixed-Height Two-Tier Stand Up Desks offer ergonomic dual-level design, casters for mobility, manually-adjustable-height, cable management, storage, and excellent value.";
					break;
				case "Power Pro - Electric Adjustable Standing Desk Converter (Teak)":
					productDescription = "The Stand Up Desk Store Power Pro Stand Up Desk Converter delivers the same ergonomics, features, simplicity, and assembly-free design of our top-selling AirRise™ Pro, while adding the convenience of electric push-button height adjustment.";
					break;
				case "42\" Folding Standing Desk Converter":
					productDescription = "Stand Up Desk Store's Adjustable-Height Standing Desk Converter is the perfect solution when you want an effortless, straightforward, economical way to turn your desk or table into a standing desk.";
					break;
				case "60\" Crank Adjustable Stand Up Desk Starter Bundle":
					productDescription = "The Stand Up Desk Store 60\" Crank Adjustable Standing Desk Starter Bundle includes everything you need to easily transition from sitting to standing while you work.";
					break;
				case "60\" Solid Wood Standing Desk - Charcoal Frame / Clear Birch Top":
					productDescription = "We took our most powerful, feature-packed standing desk frame and added a stunning solid wood top with a deep luster finish that brings out the natural character of the wood.";
					break;
				case "60\" Solid Wood Standing Desk - Charcoal Frame / Antique Birch Top":
					productDescription = "We took our most powerful, feature-packed standing desk frame and added a stunning solid wood top with a deep luster finish that brings out the natural character of the wood";
					break;
				case "Artisan Grove™ 60\" Reclaimed Wood Standing Desk - Mocha":
					productDescription = "All the character and handcrafted quality of a genuine reclaimed wood top combined with our most powerful and feature-packed standing desk frame. For the very best in stand up desks, look no further than Artisan Grove™.";
					break;
				default:
					productDescription  = "Premium quality standing desk helps you improve focus, enhance collaboration, increase productivity, and boost calorie burn";
			}

			if ($(this).parent().parent().children('.price-box.price-final_price').length) {
				$(`<div class="da_text-ctn"><p class="da_text">${productDescription}</p></div>`).insertBefore($(this).parent().parent().children('.price-box.price-final_price'));
			}
			else {
				$(`<div class="da_text-ctn"><p class="da_text">${productDescription}</p></div>`).insertBefore($(this).parent().parent().children('.normal-price'));
			}
		});
	}
});
