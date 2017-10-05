document.getElementsByTagName("button")[0].onclick = getHoroscope;


function getHoroscope(){

  // define variables that get values from the month and day inputs
  var userMonth = document.getElementById("month").value,
      userDay = document.getElementById("day").value;

   // define variables that parse the month and day strings into floats
  var parsedDay = parseFloat(userDay),
      parsedMonth = parseFloat(userMonth)

  // define inner HTML connection for horoscope message display


  var horoscopeSigns = {
        'aquarius': 'Aquarius, you won\'t find love again, fucking loser.',
        'pisces': 'Pisces, be more confident. Everyone can tell you are antisocial.',
        'aries': 'Aries, Your partner is cheating on you. How could you not have known?',
        'taurus': 'Taurus, you chased after that person because you wanted love. You NEED to be chasing that paper because that bank account lookin sadder than a clown.',
        'gemini': 'Gemini, pick up a book every once in a while. You can\'t even speak correctly.',
        'cancer': 'Cancer, time to go shoppping.. If you actually want to NOT look homeless like you typically do.',
        'leo': 'Leo, we know you\'re a social butterfly, but not everything revolves around you.',
        'virgo': 'Virgo, your wavering self-confidence is prompted by someone else’s questionable behavior',
        'libra': 'Libra, you\'re so level-headed. Keep it up!',
        'scorpio': 'Scorpio, get some friends! You\'re so awkward!!!',
        'sagittarius':'Sag, geez, you can\'t even walk in a straight line. What are you? Three years old?',
        'capricorn': 'Capricorn, you lie through your teeth everyday and expect people to believe the shit you say?'
      }

  // determine horoscope with if statements depending on month and day
  if(parsedMonth == 1 && parsedDay >= 20 || parsedMonth == 2 && parsedDay <= 18) {
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.aquarius;
  }
  else if(parsedMonth == 2 && parsedDay >= 19 || parsedMonth == 3 && parsedDay <= 20){
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.pisces;
  }
  else if(parsedMonth == 3 && parsedDay >= 21 || parsedMonth == 4 && parsedDay <= 19){
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.aries;
  }
  else if(parsedMonth == 4 && parsedDay >= 20 || parsedMonth == 5 && parsedDay <= 20){
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.taurus;
  }
  else if(parsedMonth == 5 && parsedDay >= 21 || parsedMonth == 6 && parsedDay <= 20){
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.gemini;
  }
  else if(parsedMonth == 6 && parsedDay >= 21 || parsedMonth == 7 && parsedDay <= 22){
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.cancer;
  }
  else if(parsedMonth == 7 && parsedDay >= 23 || parsedMonth == 8 && parsedDay <= 22){
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.leo;
  }
  else if(parsedMonth == 8 && parsedDay >= 23 || parsedMonth == 9 && parsedDay <= 22){
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.virgo;
  }
  else if(parsedMonth == 9 && parsedDay >= 23 || parsedMonth == 10 && parsedDay <= 22){
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.libra;
  }
  else if(parsedMonth == 10 && parsedDay >= 23 || parsedMonth == 11 && parsedDay <= 21){
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.scorpio;
  }
  else if(parsedMonth == 11 && parsedDay >= 22 || parsedMonth == 12 && parsedDay <= 21){
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.sagittarius;
  }
  else if(parsedMonth == 12 && parsedDay >= 22 || parsedMonth == 1 && parsedDay <= 19){
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.capricorn;
  }
  else{
    console.log("So... your birthday must not exist..? Try again.")
  }
  // clear out input logs
  document.getElementById('month').value = "";
  document.getElementById('day').value = "";
}
