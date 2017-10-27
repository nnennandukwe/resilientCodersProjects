

$.ajax({

	url:"https://stream.twitter.com/1.1/statuses/filter.json?follow=blackgirlhacker",
	success:function(d){

		console.log(d);
	},
	error:function(){

		console.log("error loading...");
	}

})