$(document).ready(function(){

// see one image at a time
// when user clicks skip button,
// next image in array displays
// when user clicks back button,
// the previous image in the array displays
// when last element image in array is approached,
// user clicks on skip button and first element displays
// when user clicks back button when on first element image,
// the last element image in array displays

var photoArr = ['images/food1.jpg', 'images/food2.jpg', 'images/food3.jpg', 'images/food4.jpg', 'images/food5.jpg', 'images/food6.jpg', 'images/food7.jpg', 'images/food8.jpg'];
var reversedArr = photoArr.reverse();
index = 1;

$("#skip").on("click", function(){
  $("#image-to-vote-on").attr("src", photoArr[index]);

  index++;

  if (index == photoArr.length){
    index = 0;
  };
});
$("#back").on("click", function(){
  $("#image-to-vote-on").attr("src", reversedArr[index]);

  index++;

  if (index == reversedArr.length){
    index = 0;
  };
});

  });
