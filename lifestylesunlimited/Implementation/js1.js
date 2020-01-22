/* DA Swap Image */
<script>
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
if (window.location.origin + "/" == window.location.href) {
	whenExists('.homepage-section-new > a:nth-child(2) > figure > img', function () {
		document.querySelector('.homepage-section-new > a:nth-child(2) > figure > img').setAttribute('src','https://lifestylesunlimited.com/wp-content/uploads/2020/01/lifestyles-1.jpg');
	});
}
</script>
