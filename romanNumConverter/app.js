
var inputElement = document.getElementById('myInput');
function intToRoman(num) {
  let result = "";
  while(num){
     if(num>=1000){
        result += "M";
        num -= 1000;
     }else if(num>=500){
        if(num>=900){
           result += "CM";
           num -= 900;
        }else{
           result += "D";
           num -= 500;
        }
        }else if(num>=100){
           if(num>=400){
              result += "CD";
              num -= 400;
           }else{
              result += "C";
              num -= 100;
           }
        }else if(num>=50){
           if(num>=90){
              result += "XC";
              num -= 90;
           }else{
              result += "L";
              num -= 50;
           }
        }else if(num>=10){
           if(num>=40){
              result += "XL";
              num -= 40;
           }else{
              result += "X";
              num -= 10;
           }
        }else if(num>=5){
           if(num>=9){
              result += "IX";
              num -= 9;
          }else{
              result += "V";
              num -= 5;
           }
        }else{
           if(num>=4){
              result += "IV";
              num -= 4;
        }else{
           result += "I";
           num -= 1;
        }
     }
  }
  return result;
};

// var numByUser = parseInt(input).value;
let submit = document.getElementById("submit");
submit.onclick = () => {
var numByUser = inputElement.value;
var result = intToRoman(numByUser);
var li = document.createElement("li");
li.innerText = `${numByUser} = ${result};`
if (numByUser == ""){
   alert("Please write a number to convert to Roman number..")
} else
var ul = document.getElementById("myUl");
ul.appendChild(li);

myInput.value = "";

}


   
   
   
   
   // console.log(intToRoman(inputElement.value))}


// let input = document.getElementById("myInput");
// let userInput = document.createTextNode(input);
// let numByUser = parseInt(userInput);







  