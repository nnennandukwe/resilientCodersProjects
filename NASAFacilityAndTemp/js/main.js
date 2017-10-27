

var nasaAPI = "https://data.nasa.gov/resource/gvk9-iz74.json"

$.ajax({

	url: nasaAPI,
	success:function(d){
		console.log("Application loaded successfully!");


		d.forEach(function(el){

			var facilityTitle = el.facility;
			var facilityCity = el.city;

			var apiKey = "&APPID=4fc6d8d8c9db36644103ba39a9d11368";
			var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + facilityCity + apiKey;

		// second api request for async calls
		$.ajax({

			url: weatherURL,
			success:function(r){
				console.log("Congrats! You've successfully nested your APIs...");
				var initialTemp = r.main.temp;
				var conversion = (9/5) * (initialTemp-273) + 32;
				var temperature = parseInt(conversion);

				$("ol").append("<li>Facility Name: "+facilityTitle+", Current Temperature: "+temperature+" degrees Fahrenheit.</li>");
			},
			error:function(){
				console.log("Could not connect to embedded API requests...");
			}

		});

	}); 

	},
	error:function(){
		console.log("Application broke, error somewhere...");
	}
	});