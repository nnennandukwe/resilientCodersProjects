$(document).ready(function(){


// as animal is clicked, a random positioning occurs

$("#chimps").on("click", function(){

	var x = Math.floor(Math.random() * 600) + 1;
	var y = Math.floor(Math.random() * 1000) + 1;

	$("#chimps").css("right", x);
	$("#chimps").css("bottom", y);

});

$("#lion").on("click", function(){

	var x = Math.floor(Math.random() * 600) + 1;
	var y = Math.floor(Math.random() * 1000) + 1;

	$("#lion").css("right", x);
	$("#lion").css("bottom", y);
});

$("#giraffe").on("click", function(){

	var x = Math.floor(Math.random() * 600) + 1;
	var y = Math.floor(Math.random() * 1000) + 1;

	$("#giraffe").css("right", x);
	$("#giraffe").css("bottom", y);
});


});
