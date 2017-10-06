document.getElementsByTagName("button")[0].onclick = add;
document.getElementsByTagName("button")[1].onclick = subtract;
document.getElementsByTagName("button")[2].onclick = multiply;
document.getElementsByTagName("button")[3].onclick = divide;

function add(){
  var firstNumber = parseFloat(document.getElementById("firstNumber").value),
      secondNumber = parseFloat(document.getElementById("secondNumber").value);

  document.getElementsByTagName("label")[0].innerHTML = firstNumber + secondNumber;

  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";
}

function subtract(){
  var firstNumber = document.getElementById("firstNumber").value,
      secondNumber = document.getElementById("secondNumber").value,
      firstNumber = parseFloat(firstNumber),
      secondNumber = parseFloat(secondNumber);

  document.getElementsByTagName("label")[0].innerHTML = firstNumber - secondNumber;

  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";
}

function multiply(){
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  var firstNumber = parseFloat(firstNumber);
  var secondNumber = parseFloat(secondNumber);

  document.getElementsByTagName("label")[0].innerHTML = firstNumber * secondNumber;

  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";
}

function divide(){
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  var firstNumber = parseFloat(firstNumber);
  var secondNumber = parseFloat(secondNumber);

  document.getElementsByTagName("label")[0].innerHTML = firstNumber / secondNumber;

  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";
}
