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
whenExists('#hs_cos_wrapper_module_153367322673462_', function () {

	$('<style>#hs_cos_wrapper_module_153367322673462_>p>span>span:first-child{line-height:10px}#da_timer{display:inline-flex;justify-content:center;align-items:center;width:100%;max-width:200px;margin:0 auto;height:50px;margin-top:5px;line-height:20px}#da_timer br{display:none}.da_days{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center}.da_days-label{font-size:12px}.da_hours{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center}.da_hours-label{font-size:12px}.da_minutes{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center}.da_minutes-label{font-size:12px}.da_seconds{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center}.da_seconds-label{font-size:12px}</style>').appendTo('body');

	$('<div id="da_timer"><div class="da_days"><span id="da_days"></span></br><span class="da_days-label">DAYS</span></div><div class="da_hours"><span id="da_hours"></span><br/><span class="da_hours-label">HRS</span></div><div class="da_minutes"><span id="da_minutes"></span></br><span class="da_minutes-label">MIN</span></div><div class="da_seconds"><span id="da_seconds"></span><br/><span class="da_seconds-label">SEC</span></div></div>').appendTo('#hs_cos_wrapper_module_153367322673462_ > p > span > span:first-child');

	var year = 2020;
	var month = 2;
	const day = 1;
	var deadline = `${year}-${month}-${day}`;

	function getTimeRemaining(endtime){
		var t = Date.parse(endtime) - Date.parse(new Date());
		var seconds = Math.floor( (t/1000) % 60 );
		var minutes = Math.floor( (t/1000/60) % 60 );
		var hours = Math.floor( (t/(1000*60*60)) % 24 );
		var days = Math.floor( t/(1000*60*60*24) );
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function initializeClock(endtime){
		var timeinterval = setInterval(function(){
			var t = getTimeRemaining(endtime);
			document.querySelector('#da_days').innerText = t.days;
			document.querySelector('#da_hours').innerText = t.hours;
			document.querySelector('#da_minutes').innerText = t.minutes;
			document.querySelector('#da_seconds').innerText = t.seconds;

			if(t.total<=0){
				clearInterval(timeinterval);
				month += 1;
				if (month > 12) {
					month = 1;
				}
				year
				initializeClock(deadline);
			}
		},1000);
	}

	initializeClock(deadline);

});


</script>
