/*** JS 1 ***/

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

whenExists('#ajax-content-wrap > div.container-wrap > div > div > div > div > div > section.elementor-element.elementor-element-fa728fd.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default.elementor-section.elementor-top-section > div > div > div.elementor-element.elementor-element-6204ba1.elementor-column.elementor-col-33.elementor-top-column > div > div > section > div > div > div > div > div > div.elementor-element.elementor-element-662b82a.elementor-widget.elementor-widget-text-editor > div > div > p', function () {

	$('<div class="da_bullet-container"><ul><li>Biblical content, expert insight, and practical application</li><li>In-depth video lessons for a one-day or weekend event</li><li>Workbook content and projects keep couples engaged during large group events</li><li>Free promotional materials and host guide make event execution easy</li></ul></div>').insertAfter('#ajax-content-wrap > div.container-wrap > div > div > div > div > div > section.elementor-element.elementor-element-fa728fd.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default.elementor-section.elementor-top-section > div > div > div.elementor-element.elementor-element-6f9d821.elementor-column.elementor-col-33.elementor-top-column > div > div > section > div > div > div > div > div > div.elementor-element.elementor-element-77610a0.elementor-widget.elementor-widget-text-editor > div > div > p');

	$('<div class="da_bullet-container"><ul><li>Biblical content, expert insight, and practical application</li><li>6-week small group study with 30-minute video lessons and discussion questions</li><li>Workbooks include projects, assessments, and reflection for couples to apply what they  learn</li><li>Free promotional materials and leader guide make inviting and leading easy</li></ul></div>').insertAfter('#ajax-content-wrap > div.container-wrap > div > div > div > div > div > section.elementor-element.elementor-element-fa728fd.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default.elementor-section.elementor-top-section > div > div > div.elementor-element.elementor-element-6204ba1.elementor-column.elementor-col-33.elementor-top-column > div > div > section > div > div > div > div > div > div.elementor-element.elementor-element-662b82a.elementor-widget.elementor-widget-text-editor > div > div > p');

	$('<div class="da_bullet-container"><ul><li>Biblical Content</li><li>Practical Application</li><li>Seven biblically-centered lessons</li><li>Each booklet teaches one principle designed to strengthen participants\' marriage</li><li>Suited for teaching in a group setting</li></ul>').insertAfter('#ajax-content-wrap > div.container-wrap > div > div > div > div > div > section.elementor-element.elementor-element-fa728fd.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default.elementor-section.elementor-top-section > div > div > div.elementor-element.elementor-element-caabab7.elementor-column.elementor-col-33.elementor-top-column > div > div > section > div > div > div > div > div > div.elementor-element.elementor-element-0443938.elementor-widget.elementor-widget-text-editor > div > div > p');


});
