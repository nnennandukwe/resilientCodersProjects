$(document).ready(function(){


// as animal is clicked, a random positioning occurs
// a sound emits when animal is clicked and random location is established

$("#chimps").on("click", function(){

	var noise = new Audio("http://animal-sounds.org/jungle/Monkey%20chatter%20animals059.wav");
	noise.play();
	noise.currentTime = 0;
	var x = Math.floor(Math.random() * 600) + 1;
	var y = Math.floor(Math.random() * 1000) + 1;

	$("#chimps").css("right", x);
	$("#chimps").css("bottom", y);

});

$("#lion").on("click", function(){

	var noise = new Audio("http://animal-sounds.org/jungle/Lion%20roar%20animals031.wav");
	noise.play();
	noise.currentTime = 0;
	var x = Math.floor(Math.random() * 600) + 1;
	var y = Math.floor(Math.random() * 1000) + 1;

	$("#lion").css("right", x);
	$("#lion").css("bottom", y);
});

$("#giraffe").on("click", function(){

	var noise = new Audio("http://animal-sounds.org/jungle/Rhinoceros%20animals134.wav");
	noise.play();
	noise.currentTime=0;

	var x = Math.floor(Math.random() * 600) + 1;
	var y = Math.floor(Math.random() * 1000) + 1;

	$("#giraffe").css("right", x);
	$("#giraffe").css("bottom", y);
});

$("#hippo").on("click", function(){

	var noise = new Audio("http://animal-sounds.org/jungle/Lioness%20growl%20animals109.wav");
	noise.play();
	noise.currentTime=0;

	var x = Math.floor(Math.random() * 600) + 1;
	var y = Math.floor(Math.random() * 1000) + 1;

	$("#hippo").css("right", x);
	$("#hippo").css("bottom", y);

});

$("#zebra").on("click", function(){
	var noise = new Audio("http://animal-sounds.org/jungle/Rhinoceros%20animals134.wav");
	noise.play();
	noise.currentTime=0;

	var x = Math.floor(Math.random() * 600) + 1;
	var y = Math.floor(Math.random() * 1000) + 1;

	$("#zebra").css("right", x);
	$("#zebra").css("bottom", y);
});


});
