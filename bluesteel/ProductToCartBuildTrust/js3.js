/*** JS 3 ***/

//Product Page
jQuery(function () {
    if (jQuery('#da-new-rev-price').length > 0) return;
    function whenExists(element, callback) {
        var interval = setInterval(function () {
            if (document.querySelectorAll(element).length) {
                callback();
                clearInterval(interval);
            }
        }, 100);
    }
    jQuery.when(
        jQuery.getScript("https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"),
    ).done(function () {
        jQuery('<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"/>').appendTo('head');
        // Slick Slider Mobile
        // jQuery('#product-page > div.row > div.product-left.col-md-7.col-sm-6 > div > div.mobile > div.product-thumbs').slick({
        //     infinite: true,
        //     slidesToShow: 4,
        //     SlidesToScroll: 4
        // });
        // Slick Slider Desktop
        whenExists('#gallery_01 > div > div.bx-viewport > ul', function () {
            jQuery('#gallery_01 > div > div.bx-viewport > ul').slick({
                infinite: true,
                slidesToShow: 5,
                SlidesToScroll: 5,
                draggable: true
            });
            jQuery('#gallery_01 > div > div.bx-controls.bx-has-controls-direction > div > a.bx-next').click();
        });
    });
    jQuery('<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400&display=swap" rel="stylesheet">').appendTo('head');
    // PRODUCT NAME AND DESCRIPTION MOVE
    jQuery('#product-page > div.row > div.product-left.col-md-7.col-sm-6 > div.product-head').clone().prependTo('#product-page > div.row > div.product-right.col-md-5.col-sm-6 > div');
    jQuery('#product-page > div.row > div:nth-child(1) > div.product-head').addClass('da-new-title');
    // PRICE AND REVIEWS    
    jQuery('<div id=da-new-rev-price></div>').prependTo('#product-page > div.row > div.product-right.col-md-5.col-sm-6 > div > div.product-option');
    jQuery('#product-page > div.row > div.product-right.col-md-5.col-sm-6 > div > div.product-option > div.option-wrap.price-wrap.tc').prependTo('#da-new-rev-price');
    whenExists('#product-page > div.row > div.product-right.col-md-5.col-sm-6 > div > div.review-rating', function () {
        jQuery('#product-page > div.row > div.product-right.col-md-5.col-sm-6 > div > div.review-rating').clone().appendTo('#da-new-rev-price');
        jQuery('#product-page > div.row > div.product-right.col-md-5.col-sm-6 > div > div:nth-child(2)').replaceWith(jQuery('#da-new-rev-price > div.review-rating').clone().insertAfter('#product-page > div.row > div.product-right.col-md-5.col-sm-6 > div > div.review-rating'));
    });
    // ICONS SECTION
    jQuery('<div id=da-new-icons><div><img alt=""src=https://static.disruptive.co/blue-steel/bbs-product-page/sync-alt-solid+copy.png><p>Free<br>Exchanges</div><div><img alt=""src=https://static.disruptive.co/blue-steel/bbs-product-page/Truck.svg><p>Free<br> Shipping</div><div><a href=tel:8002562981><img alt=""src=https://static.disruptive.co/blue-steel/bbs-product-page/phone-solid+copy.png><p>Live<br>Customer<br>Service<div><p>Shop with confidence<br>- we make returns and<br>exchanges quick and<br>easy.</div></a></div></div>').appendTo('#product-page > div.row > div.product-right.col-md-5.col-sm-6 > div > div.prodcut-assurance.tc');
    // FIND YOUR SIZE RING
    jQuery('<div id=da-find-size><p>Size</p></div>').insertAfter('#product-page > div.row > div.product-right.col-md-5.col-sm-6 > div > div.product-option > p.promotional_price.mobile');
    jQuery('#add-item-form > div.variant-list > a').appendTo('#da-find-size');
    // NEW TABS SECTION
    whenExists('#product > main > div > limespot-box', function () {
        jQuery('<div id=da-new-tabs><div class=da-tabs><p>Description <span>▼</span><p>Shipping + Returns <span>▼</span><p>Contact Us <span>▼</span></div><div class=da-boxes><div></div><div><p>We offer FREE shipping on all U.S. orders. On weekdays, in-stock orders with approved payment received by 3 pm PST will be shipped same day (excluding national holidays). <a href=https://www.buybluesteel.com/pages/shipping-and-delivery>Click here for more information.</a><p>We offer returns and exchanges 30 days from the date of delivery. Our free exchange and easy return process is simple. <a href=https://www.buybluesteel.com/pages/returns-and-exchanges>Click here to access our return portal and to view our full policy</a></div><div><div><a href=https://www.buybluesteel.com/pages/contact-us>Contact US</a></div><div><a href=tel:8002562981>Call Customer Service</a></div></div></div></div>').insertAfter('#product-page');
        jQuery('#description').appendTo('#da-new-tabs > div.da-boxes > div:nth-child(1)');
        // REVIEW SECTION
        jQuery('#reviews').clone().insertBefore('#product > main > div > limespot-box').addClass('new-reviews');
        // TAB FUNCTIONALITY
        jQuery('#da-new-tabs > div.da-tabs > p:nth-child(1)').click(function () {
            if (jQuery('#da-new-tabs > div.da-boxes > div:nth-child(2)').css('display') === 'block') {
                jQuery('#da-new-tabs > div.da-boxes > div:nth-child(2)').toggle();
            }
            if (jQuery('#da-new-tabs > div.da-boxes > div:nth-child(3)').css('display') === 'block') {
                jQuery('#da-new-tabs > div.da-boxes > div:nth-child(3)').toggle();
            }
            jQuery('#da-new-tabs > div.da-tabs > p').removeClass('da-new-white');
            if (jQuery('#da-new-tabs > div.da-boxes > div:nth-child(1)').css('display') === 'none') {
                jQuery(this).addClass('da-new-white');
            } else {
                jQuery(this).removeClass('da-new-white');
            }
            jQuery('#da-new-tabs > div.da-boxes > div:nth-child(1)').slideToggle();
        });
        jQuery('#da-new-tabs > div.da-tabs > p:nth-child(2)').click(function () {
            if (jQuery('#da-new-tabs > div.da-boxes > div:nth-child(1)').css('display') === 'block') {
                jQuery('#da-new-tabs > div.da-boxes > div:nth-child(1)').toggle();
            }
            if (jQuery('#da-new-tabs > div.da-boxes > div:nth-child(3)').css('display') === 'block') {
                jQuery('#da-new-tabs > div.da-boxes > div:nth-child(3)').toggle();
            }
            jQuery('#da-new-tabs > div.da-tabs > p').removeClass('da-new-white');
            if (jQuery('#da-new-tabs > div.da-boxes > div:nth-child(2)').css('display') === 'none') {
                jQuery(this).addClass('da-new-white');
            } else {
                jQuery(this).removeClass('da-new-white');
            }
            jQuery('#da-new-tabs > div.da-boxes > div:nth-child(2)').slideToggle();
        });
        jQuery('#da-new-tabs > div.da-tabs > p:nth-child(3)').click(function () {
            if (jQuery('#da-new-tabs > div.da-boxes > div:nth-child(1)').css('display') === 'block') {
                jQuery('#da-new-tabs > div.da-boxes > div:nth-child(1)').toggle();
            }
            if (jQuery('#da-new-tabs > div.da-boxes > div:nth-child(2)').css('display') === 'block') {
                jQuery('#da-new-tabs > div.da-boxes > div:nth-child(2)').toggle();
            }
            jQuery('#da-new-tabs > div.da-tabs > p').removeClass('da-new-white');
            if (jQuery('#da-new-tabs > div.da-boxes > div:nth-child(3)').css('display') === 'none') {
                jQuery(this).addClass('da-new-white');
            } else {
                jQuery(this).removeClass('da-new-white');
            }
            jQuery('#da-new-tabs > div.da-boxes > div:nth-child(3)').slideToggle();
        });
    });
});

//Cart Page
function ready(elem, callback) {
    var loaded = setInterval(function(){
        if ( document.querySelectorAll(elem).length ) {
            clearInterval(loaded);
            callback();
        }
    }, 100);
}
ready('.cart-right', function(){
    var $ = jQuery;
    //PULL IN FONT AWESOME 4
    //$('head').append('<script src="https://use.fontawesome.com/e7251909c3.js"><\/script>');
    //ADD MARKUP
    $('.cart-right').prepend('<div class=da-faqs><h2>Common FAQs</h2><div class=da-faq><h3>How much is shipping?</h3><p>We offer fast and FREE shipping on all U.S. orders. Economical shipping options to the rest of the world, too.</div><div class=da-faq><h3>Can I exchange my ring if it doesn\'t fit?</h3><p>Shop with confidence and ease - FREE exchanges and easy returns.</div><div class=da-faq><h3>Does my purchase come with a warranty?</h3><p>All items we sell are backed by our sterling One-Year Warranty.</div></div>');
    //SET INITIAL DRAWER HEIGHT FUNCTIONALITY
    var drawerH;
    function setDrawerH() {
        $('.da-faq').each(function(){
            var $this = $(this),
                drawerH = $this.find('h3:first-child').height();
    
            $this.css('max-height', (drawerH + 20) + 'px');
        });
    }setDrawerH();
    $(window).resize(setDrawerH);
    //DRAWER FUNCITON
    $('.da-faq h3').click(function(){
        var $this = $(this).closest('.da-faq');
        //CHECK IF OPEN
        if ( !$this.hasClass('da-open') ) {
            //CLOSE ALL DRAWERS
            $('.da-faq').removeClass('da-open');            
            
            //SCROLL TO CLICKED DRAWER ON MOBILE
            if ( window.innerWidth <= 767 ) {
                console.log('is mobile');
                $('html, body').animate({
                    scrollTop: $this.offset().top - 100
                }, 'fast');
                //WAIT TO OPEN THE DRAWER
                setTimeout(function(){
                    $this.addClass('da-open');
                }, 500);
                
            } else {
                console.log('is desktop');
                $this.addClass('da-open');
            }
        } else {
            $this.removeClass('da-open');
        }
    });
});
