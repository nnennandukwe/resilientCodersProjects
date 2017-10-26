// get data from weather api
// print into console the temperature in Fahrenheit

// api key = 4fc6d8d8c9db36644103ba39a9d11368

// ask for city and state
// show temperature of that city to user

var apiKey = "4fc6d8d8c9db36644103ba39a9d11368"

$.ajax({

	url:"http://api.openweathermap.org/data/2.5/weather?id=524901&APPID="+apiKey,
	success:function(){
		console.log("Application loaded successfully!");
		
		// add EventListener for clicking the weather button
		$("#getWeather").on("click",function(){

		// gather input values to plug into apiURL
  		var userCity = $("#userCity").val();
  		var userState = $("#userState").val();

  		var apiURL = "http://api.openweathermap.org/data/2.5/weather?q="+userCity+","+userState+"&id=524901&APPID="+apiKey

  		// log api object properties in console
  		$.get(apiURL, function(d){
  			console.log(d);

  			convertedTemp = (9/5) * (d.main.temp-273) + (32);
  			$("span").text(convertedTemp+" degrees Fahrenheit");
  		});
});
},
	error:function(){
		console.log("Error loading application...");
	}
});