

var apiKey = "4fc6d8d8c9db36644103ba39a9d11368"

$.ajax({

	url:"http://api.openweathermap.org/data/2.5/weather?id=524901&APPID="+apiKey,
	success:function(d){
		console.log("Application loaded successfully!");

		$.ajax({
			url:"https://data.nasa.gov/resource/gvk9-iz74.json",
			success:function(d){
				console.log("Congrats! You've successfully nested your APIs...");


			},
			error:function(){
				console.log("Could not connect to embedded API request...");
			}

		});

	},
	error:function(){
		console.log("Application broke, error somewhere...");
	}

});