//showing hello world on console screen 
console.log('hello world');


// Prints the sum of 2 float numbers 
function addition(number_1, number_2)
{
  intsum = number_1 + number_2
document.write(sum)
}

var number_1 = parseFloat(prompt("First Number"));
var number_2 = parseFloat(prompt("Second Number"));
addition(number_1, number_2);
// multiplying of number
function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}
//division of number
function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}
