
var apiURL = "http://api.brewerydb.com/v2/menu/styles?key=92c47b29f6f153a5c5cd51dd1e610a75"


$.ajax({

	url:apiURL,
	success:function(d){

		console.log("API successfully loaded!");
		var data = d.data;
		data.forEach(function(el){
			var name = el.name;
			var description = el.description;
			$("ol").append("<li><strong>"+name+"</strong>: "+description+"</li>");
		});

	},
	error:function(){
		console.log("Sorry, this doesn't work quite right..");
	}


});