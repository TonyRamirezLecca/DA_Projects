/*** JS 4 ***/

vwo_$(function(){
    vwo_$('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">').appendTo('head');
    vwo_$('<section id=new-cons-jo><div><div><h1>FREE INSTALLATION!</h1><h3>"3 day installation available"</h3></div><div><h2>Schedule your <strong>Complimentary</strong> Design<br>Consultation today!</h2></div><div><button>SCHEDULE NOW</button></div></div></section>').insertAfter('#post-13 > div > div > div > div.vc_row.vc_custom_1556531737119.row-container > div.row.one-top-padding.one-bottom-padding.single-h-padding.limit-width.row-parent > div > div > div > div > div > div > div.row-internal.row-container');
    vwo_$('<div id=black-back-jo></div>').prependTo('body');
    vwo_$('#post-13 > div > div > div > div.vc_row.vc_custom_1556531737119.row-container > div.row.one-top-padding.one-bottom-padding.single-h-padding.limit-width.row-parent > div > div > div > div > div > div > div.row-internal.row-container > div > div > div.pos-top.pos-center.align_left.column_child.col-lg-5.banner-right.single-internal-gutter > div > div > div > div > div > div > div > div > div > div > div > div > div.uncode_text_column.form-header > p:nth-child(1)').replaceWith('<i id=close-btn-jo class="fas fa-times"></i>');
    vwo_$('<div id=form-container></div>').appendTo('body');
    vwo_$('#post-13 > div > div > div > div.vc_row.vc_custom_1556531737119.row-container > div.row.one-top-padding.one-bottom-padding.single-h-padding.limit-width.row-parent > div > div > div > div > div > div > div.row-internal.row-container > div > div > div.pos-top.pos-center.align_left.column_child.col-lg-5.banner-right.single-internal-gutter > div > div > div > div > div').appendTo('#form-container');
    vwo_$('#new-cons-jo > div > div:nth-child(3) > button').click(function(){
        vwo_$('#black-back-jo').css('display', 'initial');
        vwo_$('#form-container').css('display', 'block');
        vwo_$('html').css('overflow', 'hidden');
 
    });
    vwo_$('#close-btn-jo').click(function(){
        vwo_$('#black-back-jo').css('display', 'none');
        vwo_$('#form-container').css('display', 'none');
        vwo_$('html').css('overflow', 'auto');
    });
    
});
