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

whenExists('#ajax-content-wrap > div.container-wrap > div > div > div > div > div > section.elementor-element.elementor-element-fa728fd.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default.elementor-section.elementor-top-section > div > div > div.elementor-element.elementor-element-6204ba1.elementor-column.elementor-col-33.elementor-top-column > div > div > section > div > div > div > div > div > div.elementor-element.elementor-element-662b82a.elementor-widget.elementor-widget-text-editor > div > div > p', function () {

	jQuery('#ajax-content-wrap > div.container-wrap > div > div > div > div > div > section.elementor-element.elementor-element-fa728fd.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default.elementor-section.elementor-top-section > div > div > div.elementor-element.elementor-element-6f9d821.elementor-column.elementor-col-33.elementor-top-column > div > div > section > div > div > div > div > div > div.elementor-element.elementor-element-77610a0.elementor-widget.elementor-widget-text-editor > div > div > p').html('This six session, one-day or weekend event weaves together expert teaching, biblical content, humorous stories, and much more to teach event participants how they can create a beautiful, thriving marriage using God’s flawless design.</br></br>This video event is crafted for use in church or community and is highly recommended. In fact, 97% of former participants agree they would recommend the event to other couples.');

	jQuery('#ajax-content-wrap > div.container-wrap > div > div > div > div > div > section.elementor-element.elementor-element-fa728fd.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default.elementor-section.elementor-top-section > div > div > div.elementor-element.elementor-element-caabab7.elementor-column.elementor-col-33.elementor-top-column > div > div > section > div > div > div > div > div > div.elementor-element.elementor-element-0443938.elementor-widget.elementor-widget-text-editor > div > div > p').html('Each title focuses on a real-life marriage issue and delivers biblically-centered truth and practical application in a small-group study format to make marriages strong. The Art of Marriage Connect Series Sample Pack includes one copy of each title, allowing you to review each before making a selection for your group.</br></br>We also include a copy of Starting an Art of Marriage Connect Group which contains helpful information on how to host a group study.');

	jQuery('#ajax-content-wrap > div.container-wrap > div > div > div > div > div > section.elementor-element.elementor-element-fa728fd.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default.elementor-section.elementor-top-section > div > div > div.elementor-element.elementor-element-6204ba1.elementor-column.elementor-col-33.elementor-top-column > div > div > section > div > div > div > div > div > div.elementor-element.elementor-element-662b82a.elementor-widget.elementor-widget-text-editor > div > div > p').html('This small group study takes participants through six dynamic, biblically-centered lessons designed to strengthen their marriage using God’s flawless design. This course covers the same content as the Video Event but is designed for a six-week study rather than a one-day event.</br></br>The included leader guide ensures that with minimal preparation you can make a lasting impact on the marriages in your church or community.');



});

