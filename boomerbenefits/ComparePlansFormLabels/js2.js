/*** JS 2 ***/

var jq = setInterval(function(){
    if ( jQuery ) {
        clearInterval(jq);
        jQuery(function(){
            //PAGE ONE
            //MOVE EXISTING LABELS INTO PLACE
            jQuery('label[for="input_11_1_3"]')
                .html('First Name')
                .addClass('da-label')
                .insertBefore('#input_11_1_3');
        
            jQuery('label[for="input_11_1_6"]')
                .html('Last Name')
                .addClass('da-label')
                .insertBefore('#input_11_1_6');
        
            //CREATE LABELS THAT DON'T EXIST YET
            jQuery('#input_11_3').before('<label class="da-label" for="input_11_3">Age</label>');
            jQuery('#input_11_15').before('<label class="da-label" for="input_11_15">State</label>');
        
            //REMOVE PLACEHOLDERS
            jQuery('#input_11_1_3, #input_11_1_6, #input_11_3, #input_11_10, #input_11_2, #input_11_8, #input_11_15').removeAttr('placeholder');

						//Remove State placeholder
						jQuery('#input_11_15 > option.gf_placeholder').html('');
        
            //PAGE TWO
            //CREATE LABELS FOR SELECTS AND ADJUST DEFAULT
            jQuery('#input_11_4').before('<label class="da-label" for="input_11_4">Select Gender</label>');
            jQuery('#input_11_11').before('<label class="da-label" for="input_11_11">Tobacco Use?</label>');
            jQuery('#input_11_2').before('<label class="da-label" for="input_11_2">Phone</label>');
            jQuery('#input_11_8').before('<label class="da-label" for="input_11_8">Email</label>');
        
            jQuery('#input_11_4 > option:first-child, #input_11_11 > option:first-child').html('--');
        });
    }
}, 100);
