/*** JS 3***/

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
function defer(callback) {
	if (window.jQuery) {
		callback();
	} else {
		setTimeout(function () { defer(callback); }, 50);
	}
}

defer(function () {
	jQuery(function () {        
		whenExists('.related-products-module .related-product-item:nth-child(3), .related-article-module, .node-title.block-ctools-block.block-label-title.block--problem-name', function () {
			console.log("da_script");

			var fontAwesome5 = document.createElement("link");
			fontAwesome5.type = "text/css"; fontAwesome5.rel = "stylesheet";
			fontAwesome5.href="https://use.fontawesome.com/releases/v5.4.0/css/all.css";
			document.querySelector("head").appendChild(fontAwesome5);

			/* Create Container */
			jQuery('<div class="da_ctn"><div class="da_header">Our Top Picks for Rodent Removal</div><div class="da_section-ctn da_section-ctn1"></div><div class="da_section-ctn da_section-ctn2"></div></div>').insertBefore('.related-article-module');

			jQuery('<div class="da_banner"><a class="da_link">In a hurry? Check out our top </br>picks to get the job done.<i class="fas fa-angle-right da_angle-right"></i></a></div>').insertAfter('.node-title.block-ctools-block.block-label-title.block--problem-name')
			jQuery('.da_banner').click(function() {
				event.preventDefault();
				jQuery([document.documentElement, document.body]).animate({
					scrollTop: jQuery('.da_ctn').offset().top
				}, 600);
			});

			if (window.location.href.includes('https://www.tomcatbrand.com/en-us/library/tips-and-strategies/how-get-rid-rats')) {
				jQuery('<a class="da_inner-ctn" href="https://www.tomcatbrand.com/en-us/products/rats/tomcat-glue-traps-rat-size"><div class="da_img"><img src="https://www.tomcatbrand.com/sites/g/files/oydgjc146/files/styles/scotts_product_image/public/asset_images/CFLs/036141005_0.jpg?itok=QBPgv_SO"/></div><div class="da_title">Tomcat® Glue Traps Rat Size</div><div class="da_rating"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-callout-on-blog-articles/4.1.png"/></div><div class="da_shop-now">Shop Now</div></a>').appendTo('.da_section-ctn1');
				jQuery('<a class="da_inner-ctn" href="https://www.tomcatbrand.com/en-us/products/rats/tomcat-rat-snap-trap"><div class="da_img"><img src="https://www.tomcatbrand.com/sites/g/files/oydgjc146/files/styles/scotts_product_image/public/asset_images/036170405_1-rat-snap-trap_0.png?itok=SzgwdmnA"/></div><div class="da_title">Tomcat® Rat Snap® Trap</div><div class="da_rating"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-callout-on-blog-articles/3.9.png"/></div><div class="da_shop-now">Shop Now</div></a>').appendTo('.da_section-ctn1');
				jQuery('<a class="da_inner-ctn" href="https://www.tomcatbrand.com/en-us/products/mouse-baits/tomcat-rat-mouse-killer-child-dog-resistant-disposable-station"><div class="da_img"><img src="https://www.tomcatbrand.com/sites/g/files/oydgjc146/files/styles/scotts_product_image/public/asset_images/CFLs/Tomcat_RatMouseKillerCDR_Disposable.jpg?itok=sRqifONM"/></div><div class="da_title">Tomcat® Rat & Mouse Killer Child & Dog Resistant, Disposable Station</div><div class="da_rating"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-callout-on-blog-articles/4.5.png"/></div><div class="da_shop-now">Shop Now</div></a>').appendTo('.da_section-ctn1');
			}
			else if (window.location.href.includes('https://www.tomcatbrand.com/en-us/library/identifying-mice-rats/identifying-mouse-or-rat-problem-your-house')) {
				jQuery('<a class="da_inner-ctn" href="https://www.tomcatbrand.com/en-us/products/mice/tomcat-press-n-set-mouse-trap"><div class="da_img"><img src="https://www.tomcatbrand.com/sites/g/files/oydgjc146/files/styles/scotts_product_image/public/asset_images/Press%20N%20Set.png?itok=4H8qTn--"/></div><div class="da_title">Tomcat® Press \'N Set® Mouse Trap</div><div class="da_rating"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-callout-on-blog-articles/4.png"/></div><div class="da_shop-now" >Shop Now</div></a>').appendTo('.da_section-ctn1');
				jQuery('<a class="da_inner-ctn" href="https://www.tomcatbrand.com/en-us/products/mice/tomcat-glue-boards-eugenol-enhanced-stickiness"><div class="da_img"><img src="https://www.tomcatbrand.com/sites/g/files/oydgjc146/files/styles/scotts_product_image/public/asset_images/EU/products/TOMCAT/2016_Packshots/TOMCAT_Glueboards_Lrg.jpg?itok=cmnJZZXO"/></div><div class="da_title">Tomcat® Glue Boards with Eugenol For Enhanced Stickiness</div><div class="da_rating"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-callout-on-blog-articles/4.png"/></div><div class="da_shop-now" >Shop Now</div></a>').appendTo('.da_section-ctn1');
				jQuery('.da_ctn').addClass('da_2-items');
				jQuery('.da_banner').addClass('da_move-down1');
			}
			else if (window.location.href.includes('https://www.tomcatbrand.com/en-us/library/identifying-mice-rats/telltale-signs-rodent-infestation-do-you-have-rats-or-mice')) {
				jQuery('<a class="da_inner-ctn" href="https://www.tomcatbrand.com/en-us/products/mouse-baits/tomcat-mouse-killer-child-dog-resistant-disposable-station"><div class="da_img"><img src="https://www.tomcatbrand.com/sites/g/files/oydgjc146/files/styles/scotts_product_image/public/asset_images/037061005_0.png.Tomcat.png?itok=SZtfoMkc"/></div><div class="da_title">Tomcat® Mouse Killer Child & Dog Resistant, Disposable Station</div><div class="da_rating"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-callout-on-blog-articles/3.4.png"/></div><div class="da_shop-now" >Shop Now</div></a>').appendTo('.da_section-ctn1');
				jQuery('<a class="da_inner-ctn" href="https://www.tomcatbrand.com/en-us/products/mouse-baits/tomcat-rat-mouse-killer-child-dog-resistant-disposable-station"><div class="da_img"><img src="https://www.tomcatbrand.com/sites/g/files/oydgjc146/files/styles/scotts_product_image/public/asset_images/CFLs/Tomcat_RatMouseKillerCDR_Disposable.jpg?itok=sRqifONM"/></div><div class="da_title">Tomcat® Rat & Mouse Killer Child & Dog Resistant, Disposable Station</div><div class="da_rating"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-callout-on-blog-articles/4.5.png"/></div><div class="da_shop-now" >Shop Now</div></a>').appendTo('.da_section-ctn1');
				jQuery('<a class="da_inner-ctn" href="https://www.tomcatbrand.com/en-us/products/rats/tomcat-secure-kill-rat-trap"><div class="da_img"><img src="https://www.tomcatbrand.com/sites/g/files/oydgjc146/files/styles/scotts_product_image/public/asset_images/036082010_1.jpg?itok=3HgXCQ5F"/></div><div class="da_title">Tomcat® Secure-Kill® Rat Trap</div><div class="da_rating"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-callout-on-blog-articles/3.4.png"/></div><div class="da_shop-now" >Shop Now</div></a>').appendTo('.da_section-ctn1');
				jQuery('<a class="da_inner-ctn" href="https://www.tomcatbrand.com/en-us/products/mice/tomcat-kill-contain-mouse-trap"><div class="da_img"><img src="https://www.tomcatbrand.com/sites/g/files/oydgjc146/files/styles/scotts_product_image/public/asset_images/EU/products/TOMCAT/2016_Packshots/TOMCAT_KillContain_Mousetrap_Lrg.png?itok=v_FOgwq0"/></div><div class="da_title">Tomcat® Kill & Contain® Mouse Trap</div><div class="da_rating"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-callout-on-blog-articles/3.5.png"/></div><div class="da_shop-now" >Shop Now</div></a>').appendTo('.da_section-ctn2');
				jQuery('<a class="da_inner-ctn" href="https://www.tomcatbrand.com/en-us/products/mice/tomcat-press-n-set-mouse-trap"><div class="da_img"><img src="https://www.tomcatbrand.com/sites/g/files/oydgjc146/files/styles/scotts_product_image/public/asset_images/Press%20N%20Set.png?itok=4H8qTn--"/></div><div class="da_title">Tomcat® Press \'N Set® Mouse Trap</div><div class="da_rating"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-callout-on-blog-articles/4.png"/></div><div class="da_shop-now" >Shop Now</div></a>').appendTo('.da_section-ctn2');
				jQuery('<a class="da_inner-ctn" href="https://www.tomcatbrand.com/en-us/products/mice/tomcat-multi-catch-mouse-trap"><div class="da_img"><img src="https://www.tomcatbrand.com/sites/g/files/oydgjc146/files/styles/scotts_product_image/public/asset_images/tomcat_multicatch_packshot_2018.jpg?itok=jl-IF2J9"/></div><div class="da_title">Tomcat® Multi-Catch Mouse Trap</div><div class="da_rating"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-callout-on-blog-articles/3.5.png"/></div><div class="da_shop-now" >Shop Now</div></a>').appendTo('.da_section-ctn2');

				jQuery('.da_ctn').addClass('da_6-items');
				jQuery('.da_banner').addClass('da_move-down2');
			}
			else if (window.location.href.includes('https://www.tomcatbrand.com/en-us/library/using-baits/using-bait-station')) {
				jQuery('<a class="da_inner-ctn" href="https://www.tomcatbrand.com/en-us/products/mouse-baits/tomcat-mouse-killer-child-dog-resistant-disposable-station"><div class="da_img"><img src="https://www.tomcatbrand.com/sites/g/files/oydgjc146/files/styles/scotts_product_image/public/asset_images/037061005_0.png.Tomcat.png?itok=SZtfoMkc"/></div><div class="da_title">Tomcat® Mouse Killer Child & Dog Resistant, Disposable Station</div><div class="da_rating"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-callout-on-blog-articles/3.5.png"/></div><div class="da_shop-now" >Shop Now</div></a>').appendTo('.da_section-ctn1');
				jQuery('<a class="da_inner-ctn" href="https://www.tomcatbrand.com/en-us/products/mouse-baits/tomcat-rat-mouse-killer-child-dog-resistant-disposable-station"><div class="da_img"><img src="https://www.tomcatbrand.com/sites/g/files/oydgjc146/files/styles/scotts_product_image/public/asset_images/CFLs/Tomcat_RatMouseKillerCDR_Disposable.jpg?itok=sRqifONM"/></div><div class="da_title">Tomcat® Rat & Mouse Killer Child & Dog Resistant, Disposable Station</div><div class="da_rating"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-callout-on-blog-articles/4.5.png"/></div><div class="da_shop-now" >Shop Now</div></a>').appendTo('.da_section-ctn1');
				jQuery('<a class="da_inner-ctn" href="https://www.tomcatbrand.com/en-us/products/mouse-baits/tomcat-mouse-killer-child-dog-resistant-refillable-station"><div class="da_img"><img src="https://www.tomcatbrand.com/sites/g/files/oydgjc146/files/styles/scotts_product_image/public/asset_images/US-Tomcat-Mouse-Killer-Child-And-Dog-Resistant-Refillable-Station-I-Main-0371710-Xxl.png?itok=yjqPsosJ"/></div><div class="da_title">Tomcat® Mouse Killer Child & Dog Resistant, Refillable Station</div><div class="da_rating"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-callout-on-blog-articles/4.5.png"/></div><div class="da_shop-now" >Shop Now</div></a>').appendTo('.da_section-ctn2');
				jQuery('<a class="da_inner-ctn" href=""><div class="da_img"><img src="https://www.tomcatbrand.com/sites/g/files/oydgjc146/files/styles/scotts_product_image/public/asset_images/CFLs/037091010.jpg?itok=Iik2HnZU"/></div><div class="da_title">Tomcat® Rat & Mouse Killer Child & Dog Resistant, Refillable Station</div><div class="da_rating"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-callout-on-blog-articles/4.5.png"/></div><div class="da_shop-now" >Shop Now</div></a>').appendTo('.da_section-ctn2');
				jQuery('.da_ctn').addClass('da_4-items');
				jQuery('.detail-article-page img').eq(0).css({'max-width':'100% !important'});
			}
			else if (window.location.href.includes('https://www.tomcatbrand.com/en-us/library/tips-moles-and-gophers/how-get-rid-moles-your-yard')) {
				jQuery('<a class="da_inner-ctn" href="https://www.tomcatbrand.com/en-us/products/moles/tomcat-mole-gopher-repellent-granules"><div class="da_img"><img src="https://www.tomcatbrand.com/sites/g/files/oydgjc146/files/styles/scotts_product_image/public/asset_images/034830410_0.png?itok=uTtxGMGm"/></div><div class="da_title">Tomcat® Mole & Gopher Repellent Granules</div><div class="da_rating"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-callout-on-blog-articles/4.5.png"/></div><div class="da_shop-now" >Shop Now</div></a>').appendTo('.da_section-ctn1');
				jQuery('<a class="da_inner-ctn" href="https://www.tomcatbrand.com/en-us/products/moles/tomcat-mole-gopher-repellent-ready-spray"><div class="da_img"><img src="https://www.tomcatbrand.com/sites/g/files/oydgjc146/files/styles/scotts_product_image/public/asset_images/034820610_F_0.png?itok=kI71iQP5"/></div><div class="da_title">Tomcat® Mole & Gopher Repellent Ready-To-Spray</div><div class="da_rating"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-callout-on-blog-articles/3.9.png"/></div><div class="da_shop-now" >Shop Now</div></a>').appendTo('.da_section-ctn1');
				jQuery('<a class="da_inner-ctn" href="https://www.tomcatbrand.com/en-us/products/mole-traps/tomcat-mole-trap"><div class="da_img"><img src="https://www.tomcatbrand.com/sites/g/files/oydgjc146/files/styles/scotts_product_image/public/asset_images/CFLs/US-Tomcat-Mole-Trap-Main-0363210-Lrg.png?itok=N7qf5GYB"/></div><div class="da_title">Tomcat® Mole Trap</div><div class="da_rating"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-callout-on-blog-articles/3.9.png"/></div><div class="da_shop-now" >Shop Now</div></a>').appendTo('.da_section-ctn1');
				jQuery('<a class="da_inner-ctn" href="https://www.tomcatbrand.com/en-us/products/mole-baits/tomcat-mole-killer"><div class="da_img"><img src="https://www.tomcatbrand.com/sites/g/files/oydgjc146/files/styles/scotts_product_image/public/asset_images/EU/products/TOMCAT/2016_Packshots/TOMCAT_Molekiller_worms_Lrg.jpg?itok=nlp-B7_I"/></div><div class="da_title">Tomcat® Mole Killer</div><div class="da_rating"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-callout-on-blog-articles/4.png"/></div><div class="da_shop-now" >Shop Now</div></a>').appendTo('.da_section-ctn2');
				jQuery('<a class="da_inner-ctn" href="https://www.tomcatbrand.com/en-us/products/mole-baits/tomcat-mole-killer-grubs"><div class="da_img"><img src="https://www.tomcatbrand.com/sites/g/files/oydgjc146/files/styles/scotts_product_image/public/asset_images/037241005_r0.eps_Transparent_png.png?itok=wa9oTb9U"/></div><div class="da_title">Tomcat® Mole Killer Grubs</div><div class="da_rating"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/scotts/tomcat/product-callout-on-blog-articles/4.5.png"/></div><div class="da_shop-now" >Shop Now</div></a>').appendTo('.da_section-ctn2');
				jQuery('.da_ctn').addClass('da_5-items');
				jQuery('.da_banner').addClass('da_move-down3');
			}

		});
	});
});

