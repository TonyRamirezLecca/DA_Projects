/* Js 2 */

function ready(elem, callback) {
    var loaded = setInterval(function(){
        if ( document.querySelectorAll(elem).length ) {
            clearInterval(loaded);
            callback();
        }
    }, 100);
}
ready('div[data-gateway-group="offsite"] label', function(){
    //VANILLA MOUSE CLICK EVENT
    var simulateClick = function (elem) {
        // Create our event (with options)
        var evt = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        // If cancelled, don't dispatch our event
        var canceled = !elem.dispatchEvent(evt);
    };
    var label = document.querySelectorAll('div[data-gateway-group="offsite"] label')[0];
    simulateClick(label);




	/* Tony Edits */
	document.querySelector('div[data-payment-subform="required"] > fieldset').prepend(document.querySelector('div[data-payment-subform="required"] > fieldset > div:last-child'))

		document.querySelector('div[data-payment-subform="required"] > fieldset').prepend(document.querySelector('div[data-gateway-group="offsite"]'));




});
