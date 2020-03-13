/*** JS 2 ***/
/* Function Declarations */
function hashChanged() {
  if (location.hash === "#lawn-details") {
    /* JSON OBJECTS */
    var da = {
      container: ".sp-quiz__question.sp-container.sp-mb-8",
      noHelp: ".sp-quiz__manual-entry.sp-mt-12",
      needHelp: ".sp-quiz__manual-entry.sp-mb-4"
    };

    jQuery(da.container).hide();

    jQuery(`
	<div class="da_new-section">
	<h1 class="da_title">What size is your lawn?</h1>
	<p class="da_subtitle">We'll make sure to send you the right</br> amount of products.</p>
	<div class="da_button-ctn">
			<button class="da_no-help">I know the size of my lawn</button>
			<button class="da_need-help">I need help sizing up my lawn</button>
		</div></div>`).insertAfter(da.container);

    jQuery(".da_no-help").click(() => {
      jQuery(da.noHelp).click();
      jQuery(da.container).show();
    });

    jQuery(".da_need-help").click(() => {
      jQuery(da.needHelp).click();
    });
  }
}
function whenExists(elements, callback) {
  elements = elements.split(",");
  var interval = setInterval(function() {
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
    setTimeout(function() {
      defer(callback);
    }, 50);
  }
}

defer(function() {
  jQuery(function() {
    whenExists(".sp-quiz__question-title", function() {
      window.addEventListener("hashchange", hashChanged);
    });
  });
});
