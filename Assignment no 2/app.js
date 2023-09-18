//_____________________________Assignment no 2 _________________________________________//

//-------------------------------chaper 9 10 11------------------------------------------//

//-------------------------------javascript---------------------------------------------//

//-----------------------Q no 1 -------------------------//

// var city = prompt("enter your city name");

// if(city === "karachi"){
//     console.log("welcome to the city of lights " +  city);
// }else {
//     console.log("please enter correct city");
// }

//-----------------------Q no 2 -------------------------//

// var gender = prompt("enter your gender");
// var message;
// if (gender === "male") {
//     message = ("Welcome Sir Hope You Well");
// } else if (gender === "female") {
//     message = ("Welcome Madam Have A Nice Day");
// } else {
//     message = ("okk...")
// }
// alert(message)

//-----------------------Q no 3 -------------------------//

// var trafficLight = prompt("Enter Traffic color");

//     if(trafficLight === "red"){
//         console.log("Must Stop");
//     }if(trafficLight === "yellow"){
//         console.log("Ready to Move");
//     }if(trafficLight === "green"){
//         console.log("Move Now");
//     }

//-----------------------Q no 4 -------------------------//

// var fuelCar = prompt("enter your fuel capacity");

// if(fuelCar <= "0.25liters"){
//     console.log("“Please refill the fuel in your car");
// }

//-----------------------Q no 5 -------------------------//

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

//-----------------------Q no 6 -------------------------//


// var sub1 = +prompt("enter your first subject marks");
// var sub2 = +prompt("enter your second subject marks");
// var sub3 = +prompt("enter your third subject marks");

// var totalMarks = +prompt("enter total marks of your all subjects");



// var obtMarks = sub1 + sub2 + sub3 ;
// var percentage = (obtMarks / totalMarks ) * 100;

// var grade;
// var remarks;
// {
//     if(percentage >= 90){
//         grade = "A+";
//         remarks = "Excellent";
//     }else if(percentage >= 80){
//         grade = "A+";
//         remarks = "Excellent";
//     }else if (percentage >= 70){
//         grade = "A";
//         remarks = "good"
//     }else if(percentage >= 60){
//         grade = "B";
//         remarks = "Good";
//     }else if (percentage >= 50){
//         grade = "C";
//         remarks = "you need to improve";
//     }else if (percentage >= 40){
//         grade = "D";
//         remarks = "Fail";
//     }else {
//         "no result";
//     }
// }

// document.write("<h1>" + "MARKS SHEET" + "</h1>" + "</br>" + "Obtained marks =" + obtMarks + "</br>" + "Total marks =" + totalMarks + "</br>" +"percentage = " + percentage + "%" + "</br>" + "Grade =" + grade + "</br>" + "Remarks =" + remarks );

//-----------------------Q no 7 -------------------------//

// var secNum = +prompt("enter your secret number");

// if(secNum === 2 ){
//     alert("Bingo!");
// }else{
//     alert("try again");
// }



//-----------------------Q no 8 -------------------------//

// var number = +prompt("enter the number");

// if(number % 3 === 0 ){
//     alert(number + " is divide by 3");
// }else {
//     alert(number + " this is not divided by 3");
// }

//-----------------------Q no 9 -------------------------//

// var number = +prompt("Enter Number");

// if(number % 2 === 0){
//     alert("this number is even")
// }else if(number % 1 === 0 ){
//     alert("this number is odd");
// }else{
//     alert("please enter number");
// }

//-----------------------Q no 10 -------------------------//

// var temp = +prompt("enter your city tempertaure");

// if(temp >= 40){
//     alert("To Hot");
// }else if(temp >= 35){
//     alert("Sunny Day");
// }else if(temp >= 30){
//     alert("Normal Day");
// }else if(temp >= 25){
//     alert("cold Day");
// }else if(temp <= 25){
//     alert("Very cold Day");
// }
//-----------------------Q no 11 -------------------------//

// var firstNum = +prompt("enter your firts number");
// var secondNum = +prompt("enter your second number");
// var operation = prompt("enter your maths operator + , - , / , *, % ");

// var result;


// if(operation === "+"){
//     result = firstNum + secondNum ;
// }else if(operation === "-"){
//     result = firstNum - secondNum ;
// }else if(operation === "*"){
//     result = firstNum * secondNum ;
// }else if(operation === "/"){
//     result = firstNum / secondNum ;
// }else if(operation === "%"){
//     result = firstNum % secondNum ;
// }

// alert   ( "result = " + result);

// ___________________________chapter 12 & 13 ______________________________//
//-----------------------Q no 1 -------------------------//


// var char = prompt("enter the charcter");

// if(char >= 'a' && char <= 'z'){
//     alert(char + " = this is a small letter");
// } else if(char >= 'A' && char <= 'Z'){
//     alert(char + " = this is capatile letter");
// }else {
//     alert("this is number not a small and capatile letter");
// }

//-----------------------Q no 2 -------------------------//

// var num1 = prompt("please enter first number");
// var num2 = prompt("please enter second number");

// if(num1 > num2){
//     document.write(num1 + " number is graeter than..." + num2);
// }else if(num1 < num2){
//     document.write(num2 + " number is greater than..." + num1);
// }else if(num1 = num2){
//     document.write(num1 + num2 + "  boths numbers are equals..");
// }

//-----------------------Q no 3 -------------------------//

// var num1 = prompt("plaese enter the number");


// if(num1 < 0){
//     alert("the number is negative");
// }else if(num1 > 0){
//     alert("the number is positive");
// }else{
//     alert("the given number is zero");
// }

//-----------------------Q no 4 -------------------------//

// var vowels = prompt("please enter alphabets");
// if(vowels === "a" || vowels === "e" || vowels === "i" || vowels === "o" || vowels === "u" || vowels === "A" || vowels === "E" || vowels === "I" || vowels === "O" || vowels === "U"){
//     alert("this is vowel = " + vowels);
// }else{
//     alert("please enter a single charcter");
// }

//-----------------------Q no 5 -------------------------//

// var password = prompt("enter your password");

// if(password === "daniyaltanoli"){
//     alert("Correct! The password you entered matches the original password");
// }else {
//     alert("this is not correct password");
// }

//-----------------------Q no 6 -------------------------//

// var greeting ;
// var hour = 24;
//  if(hour <= 8){
//     greeting = "good day";
//  }else if(hour >= 12){
//     greeting = "good afternoon"
//  }else if(hour >= 19){
//     greeting = "good evening"
//  }
//  alert(greeting);

//-----------------------Q no 7 -------------------------//

// var time = prompt("enter the time like = 1700 is 5:pm");

// if(time >= 0 && time < 499){
//     alert("good night");
// }else if(time >= 500 && time < 1299){
//     alert("good morning");
// }else if(time >= 1300 && time < 1699){
//     alert("goodafter noon");
// }else if(time >= 1700 && time < 1999){
//     alert("good evening");
// }else if(time >= 2399){
//     alert("good night");
// }


//___________________________________The End _________________________________//