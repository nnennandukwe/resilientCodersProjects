
var apiKey = "https://data.nasa.gov/resource/gvk9-iz74.json"

$.ajax({

	url:apiKey,
	success:function(){
		console.log("Success! Your application has loaded...");

		$.get(apiKey, function(d){
			console.log(d);

			d.forEach(function(el){
				$("ol").append("<li>"+el.facility+"</li>");
			})

		});

	},
	error:function(){

		console.log("error loading. try again...");
	}


});