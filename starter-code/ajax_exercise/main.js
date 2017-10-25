/*

- Refactor the codealong to work with user interaction. In the index.html file
there is a "Get Consumer Finance Data" button. When the user clicks the button,
pull data from the provided link above (http://data.consumerfinance.gov/api/views.json).
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.

- Separate your logic so that you can use your functions for another user button
click of "Get Custom Data". Interact with an API of your choice and handle both
success and error scenarios.
*/

$("#getDataButton").on("click",function(){
	$.get("http://data.consumerfinance.gov/api/views.json", function(r){
		console.log(r)
	});
	});
$("#getCustomDataButton").on("click", function(){
	$.get("http://data.consumerfinance.gov/api/views.json", function(r){
		$("h1").text(r[0].name)

});
});

// 'use strict';
// (function() {
//   $.get("http://data.consumerfinance.gov/api/views.json", function(r)
//   {
//     r.forEach(function(el){
//       $("ol").append("<li>"+el.name+"</li>")
//     })
//   })
//   // Alternate data source1: https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD
// })();


// get data from weather api
// print into console the temperature in Fahrenheit

// ask for city and state
// show temperature of that city to user
