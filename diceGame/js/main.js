
$("#getAnswer").on("click",function(){
  var userDiceSides = $("#diceSides").val()
  var userNumberOfDice = $("#numberOfDice").val()
  
  while(userNumberOfDice > 0){
     var answer = Math.floor((Math.random() * userDiceSides)+1)
     console.log(answer)
     userNumberOfDice --;
  }
})

function rollDice(numOfDice,numOfSides){
  
  while(numOfDice>0){
    var answer = Math.floor(Math.random()*numOfSides+1)
    console.log(answer)
    numOfDice--;
  }
}