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

whenExists('#shopify-section-bv-embed-code-pdp > div, #shopify-section-app-section > div, #bv-grid .vjs-poster img', function () {

	//Move grid out of container
	jQuery('#bv-grid').insertBefore('#shopify-section-app-section > div');

	//Move Container
	jQuery('#shopify-section-bv-embed-code-pdp > div').insertBefore('#bv-grid');

	//Move grid back into container
	jQuery('#bv_grid').insertBefore('.bv-curations-cleanslate.bv-grid-wrapper bv-minimalist');

/* ---------------------------------- */

	jQuery('.app-page-section.app-page-section-info').insertAfter('#shopify-section-pdp-the-basics');
	 

});


/*** CSS 2 ***/
div.fm-timestamp {
    display: none;
}
.app-page-section.app-page-section-info {
    margin-top: 0px !important;
    background: black;
}
.app-page-section.app-page-section-info h2 {
    color: white;
}
.app-page-section.app-page-section-info .app-description {
    color: white;
}





.app-page-section.app-page-section-info {
    height: 200px
}
.app-page-section-info-content {
    height: 200px;
    max-width: 80% !important;
}
.app-info-image {
    left: -30px;
}
.app-info-content {
    position: absolute;
    right: 0;
}
.app-description {
    padding-right: 35%;
}


@media screen and (max-width: 1000px) {
    .app-description {
        padding-right: 10%;
    }
}

@media screen and (max-width:850px) {
    .app-description {
        padding-right: 5%;
    }
}



@media screen and (max-widtH: 767px) {
    .app-info-image {
        left: 0px;
    }
    .app-info-content {
        position: relative;
        right: 0;
    }
    .app-page-section.app-page-section-info {
        height: 100%;
    }
    .app-page-section-info-content {
        height: 100%;
        max-width: 80% !important;
    }
    .app-description {
        padding-right: 0%;
    }
}
