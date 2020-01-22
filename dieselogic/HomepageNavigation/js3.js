/*** JS 3 ***/
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

if ( (window.location.pathname == '/') || window.location.href.includes('/m-') || window.location.href.includes('/c-') || window.location.href.includes('/p-')) {
	whenExists('.mainNavItem.shopBrands', function () {

		$('.mainNavItem.shopBrands').hide();

		$('<li class="da_dodge mainNavItem"><a href="https://www.dieselogic.com/m-3-dodge.aspx">DODGE</a><ul><li><a href="https://www.dieselogic.com/m-38-1998-2002-59l.aspx">1998-2002 5.9L</a></li><li><a href="https://www.dieselogic.com/m-25-2003-2004-59l.aspx">2003-2004 5.9L</a></li><li><a href="https://www.dieselogic.com/m-26-20045-2007-59l.aspx">2004.5-2007 5.9L</a></li><li><a href="https://www.dieselogic.com/m-24-20075-2014-67l.aspx">2007.5-2014 6.7L</a></li></ul></li>').insertBefore('.mainNavItem.shopBrands');

		$('<li class="da_chevy mainNavItem"><a href="https://www.dieselogic.com/m-14-gmc-chevy.aspx">CHEVY/GMC</a><ul><li><a href="https://www.dieselogic.com/m-39-1994-2001-65l.aspx">1994-2001 6.5L</a></li><li><a href="https://www.dieselogic.com/m-23-2001-2004-66l-lb7.aspx">2001-2004 6.6L</a></li><li><a href="https://www.dieselogic.com/m-19-20045-2005-66l-lly.aspx">2004.5-2005 6.6L LLY</a></li><li><a href="https://www.dieselogic.com/m-21-2006-66l-lbz.aspx">2006 6.6L LBZ</a></li><li><a href="https://www.dieselogic.com/m-20-2007-2010-66l-lmm.aspx">2007-2010 6.6L LMM</a></li><li><a href="https://www.dieselogic.com/m-52-2011-2016-66l-lml.aspx">2011-2016 6.6L LML</a></li><li><a href="https://www.dieselogic.com/m-53-2017-to-current-gmc-chevy-66l-l5p.aspx">2017 to Current  GMC/ CHEVY 6.6L L5P</a></li></ul></li>').insertBefore('.mainNavItem.shopBrands');

		$('<li class="da_ford mainNavItem"><a href="https://www.dieselogic.com/m-4-ford.aspx">FORD</a><ul><li><a href="https://www.dieselogic.com/m-37-1983-1994-69l-73l-idi.aspx">1983-1994 6.9L & 7.3L IDI</a></li><li><a href="https://www.dieselogic.com/m-27-1994-1997-73l.aspx">1994-1997 7.3L</a></li><li><a href="https://www.dieselogic.com/m-28-1997-1999-73l.aspx">1997-1999 7.3L</a></li><li><a href="https://www.dieselogic.com/m-29-1999-2003-73l.aspx">1999-2003 7.3L</a></li><li><a href="https://www.dieselogic.com/m-30-2003-2004-60l.aspx">2003-2004 6.0L</a></li><li><a href="https://www.dieselogic.com/m-31-20045-2007-60l.aspx">2004.5-2007 6.0L</a></li><li><a href="https://www.dieselogic.com/m-32-2008-2010-64l.aspx">2008-2010 6.4L</a></li><li><a href="https://www.dieselogic.com/m-54-2011-2014-ford-67l-power-stroke.aspx">2011-2014 Ford 6.7L</a></li><li><a href="https://www.dieselogic.com/m-55-2015-up-67l-ford-ps-scorpion.aspx">2015 - UP 6.7L FORD PS Scorpion</a></li></ul></li>').insertBefore('.mainNavItem.shopBrands');


	});
}
