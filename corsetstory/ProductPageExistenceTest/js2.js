(function() {
    function whenExists(element, callback) {
        var interval = setInterval(function() {
            if (document.querySelectorAll(element).length) {
                callback();
                clearInterval(interval);
            }
        }, 100);
    }
    whenExists(".product-icon", function() {
        $('.feefo-container, #before-after, .product-icon').wrapAll('<div class="da_wrap">');
    });
})();