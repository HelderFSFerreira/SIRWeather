var speak=0;
console.log("Inicio" + speak);

$(document).ready(function(){
	$('#ilocal').on('focus', function() {
		$(this).autocomplete({
			source: function(request, response) {
		        $.ajax({
				    url: "http://autocomplete.wunderground.com/aq?query=" + $("#ilocal").val() + "&format=json",
		        	dataType: "jsonp",
				    jsonp: "cb",

				    success: function(data) {
				    	var noob = [];
			        	data.RESULTS.forEach(function(res) {
			        		noob.push(res.name);
			        	});
			        	//console.log(noob);
			        	response(noob);
				    }
		        });
			},
			select: function (a, b) {
				todayForecast(b.item.value);
    	}
		});
	});
});
