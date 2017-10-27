
var baseAPI = "https://api.census.gov/data/2013/language?get=NAME,EST,LANLABEL&for=state:*&LAN=625"

$.ajax({

	url:baseAPI,
	success:function(d){
	
	$("#getSpanish").on("click", function(){
		d.forEach(function(el){
			$("ul").append("<li>In the state of "+el[0]+", about "+el[1]+" people speak "+el[2]+"</li>");

		});
	});
	},
	error:function(){
		console.log("Doesn't work.");
	}
});