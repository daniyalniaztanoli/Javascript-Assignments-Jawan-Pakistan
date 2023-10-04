//_________________Assignment no 06_____________________//

//_________________Functions_____________________//

//-------------Q no 1 --------------//

// var date = new Date();
// console.log(date);
//-------------Q no 2 --------------//

// function name (firstName ,lastName){
//     var fullName = firstName + " " + lastName;
//     console.log(fullName);
// }
// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your Last name");

// name(firstName,lastName);
//-------------Q no 3 --------------//

// function sum (num1,num2){
//     var add = num1 + num2;
//     console.log(add);
//     return sum;
// }

// var num1 = +prompt("enter your number to sum");
// var num2 = +prompt("enter your number to sum");

// sum(num1,num2);

//-------------Q no 4 --------------//

// function calc (num1,operator,num2){

//     if(operator === "+"){
//         return num1 + num2;
//     }else if(operator === "-"){
//         return num1 - num2;
//     }else if(operator === "*"){
//         return num1 * num2;
//     }else if(operator === "/"){
//         return num1 / num2;
//     }
// }

// var num1 = +prompt("please enter first number");
// var operator = prompt("please enter any operator");
// var num2 = +prompt("please enter second number");
// var result = calc(num1,operator,num2);

// alert(result);
//-------------Q no 5 --------------//

// function square (num){
//     return num;
// }
// var num = +prompt("please enter any number i provide a sqaure of it");
// alert(num * 2);
// square(num);

//-------------Q no 6 --------------//

// function factorial(num){
//     if(num < 0){
//         return "this is not factorial number";
//     }else if(num === 0 || num === 1){
//         return 1;
//     }else{
//         var result = 1;
//         for(var i=2;i<=num;i++){
//             result *= i;
//         } return result
//     }
// }

// var number = +prompt("enter");

// const result = factorial(number);

// alert(result);
//-------------Q no 7 --------------//

// function counting(start,end){
//     if(start >= end )
//     {
//         return "invalid number";
//     }else{
//         for(var i=start;i<=end;i++){
//             document.write(i + "<br>");
//         }
//     }
// }
// var start = +prompt("please enter start number");
// var end = +prompt("please enter ending number");
// counting(start,end);

//-------------Q no 8 --------------//  

// function calchypo (base,perpen){
//     function calcSquare(number){
//         return number * number;
//     }
//     var basesquare = calcSquare(base);
//     var perpensquare = calcSquare(perpen);

//     var hypo = Math.sqrt(basesquare + perpensquare);

//     return hypo;
// }

//   var baseLen = 4;
//   var perpenLen = 5;
//   var hypoLen = calchypo(baseLen ,perpenLen);
//   console.log(hypoLen);
//-------------Q no 9 --------------//

// function calculateRecArea(width, height) {
//     return width * height;
//   }
  
// var height = prompt("enter the heigth");
// var width = prompt("enter the width");

//   const area1 = calculateRecArea(height,width);
//   console.log("Area (Arguments as values):" + area1);

//-------------Q no 10 --------------//

// function palindrome(reverse){
//     for(var i = value.length - 1;i<=0;i--){
//         reverse = reverse + value[i];
//     }
//     if(value === reverse){
//         alert("this is palindrome");
//     }else{
//         alert("this is not palindrome");
//     }
// }

// var value = prompt("please write a text");
// var reverse = "";
// palindrome(value);

//-------------Q no 11 --------------//

//   sir nai nahi karwaya

//-------------Q no 12 --------------//

  //   sir nai nahi karwaya


//-------------Q no 13 --------------//

// function lettercount (str,letter){
//     var count = 0;
//     for(var i=0;i<=str.length;i++){
//         if(str[i] === letter){
//             count++;
//         }
//     } return count;
// }

// var str = prompt("enter any senteence");
// var letter = prompt("enter any one word i find which times it used");

// var result = lettercount(str,letter);

// console.log(result);
  
//-------------Q no 14 --------------//


// function calcCircumference (radius){
//     var circum = 2 * Math.PI * radius;
//     console.log(circum.toFixed(2));
// }
// function areaofCircle(radius){
//     var circle = Math.PI * Math.pow(radius , 2);
//     console.log(circle.toFixed(2));
// }
// const radius = 6;

// calcCircumference(radius);

// areaofCircle(radius);

