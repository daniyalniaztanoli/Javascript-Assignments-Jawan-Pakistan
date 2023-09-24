//________________________Chapter no 20 t0 30______________________________//

//________________________Chapter no 21_______________________//

//-----------------------Q no 1-----------------------------//

// var userInput = prompt("Please enter your name ");

// var allLowercase = userInput.toLocaleLowerCase();

// alert(allLowercase);

//-----------------------Q no 2-----------------------------//

// var x = "HELLO WORLD";

// x = x.toLowerCase();

// alert(x);

//-----------------------Q no 3-----------------------------//

// var y = "hello world";

// y = y.toUpperCase();

// alert(y);

//-----------------------Q no 4-----------------------------//

// var originalString = "Hello World";

// finalString = originalString.toLowerCase();

// alert(finalString);
//-----------------------Q no 5-----------------------------//

// var arr = ["KARACHI"];

// var lowerCase = arr[0].toLowerCase();

// alert(lowerCase);
//-----------------------Q no 6-----------------------------//

// var arr = ["karachi"];

// var upperCase = arr[0].toUpperCase();

// alert(upperCase);

//-----------------------Q no 7-----------------------------//

// var cityName = "KaRacHi";

// var firstChar = cityName.slice(0,1).toUpperCase();

// var remainChar = cityName.slice(1).toLowerCase();

// finalChar = firstChar + remainChar ;

// alert(finalChar);

//__________________ Chapter 22 to 25 (Strings)_____________//


//-----------------------Q no 1-----------------------------//

// var samewords = "captain";

// cutwords = samewords.slice(1,3);

// alert(cutwords);
//-----------------------Q no 2-----------------------------//

// var cityName = "karachi";

// var charNumbers = cityName.length;

// console.log(charNumbers);


//-----------------------Q no 3-----------------------------//

// var animal = "elephant";

// var seg = animal.slice(1,5);

// alert("seg" + seg);

//-----------------------Q no 4-----------------------------//

// var numbers = prompt("please enter any string i provide the numbers");

// var charCount = numbers.length;

// alert("Numbers Of Characters : " +charCount);
//-----------------------Q no 5-----------------------------//

// var string = "This is Example string."

// var charCount = string.length;

// var char = string.slice(1,20);

// document.write("the number of charcters is :" + charCount + "</br>" + "And the slice of strings is :" + char);
//-----------------------Q no 6-----------------------------//

// var text = "My Name is Daniyal. ";
// var indx = text.indexOf("Daniyal");

// console.log(indx);  // the index value "be" is "11"
//-----------------------Q no 7-----------------------------//

// var text = "how are you are you still fine.";
// var indx = text.lastIndexOf("are");
// console.log(indx);  // the value is '20'
//-----------------------Q no 8-----------------------------//

// var text = "This is a good day to go for a walk.";

// var lastIndex = text.lastIndexOf("go");

// console.log("index of the first character of the last 'go' :"  + lastIndex);

//-----------------------Q no 9-----------------------------//

// simplify the question
  
//-----------------------Q no 10-----------------------------//

// var string = "abcde";

// var position = string.charAt(2);

// alert(position);
//-----------------------Q no 11-----------------------------//

// var text = "hello world. ";
// var cha = text.charAt(10);
// alert(cha);

//-----------------------Q no 12-----------------------------//

// var str = "Pakistan is a beautiful country";

// var x = str.charAt(str.length -1);

// alert("last character is : " + x);
//-----------------------Q no 13-----------------------------//

// var word = prompt("please enter any word up to 6 characters");

// var x = word.charAt(4);

// alert("the 5th word is :" + x);

//-----------------------Q no 14-----------------------------//

// var inputString = "hello world.";

// var charArray = [];

// for (var i=0;i< inputString.length;i++){
//     charArray.push(inputString.charAt(i));
// }
// console.log("Array of characters : ", charArray);

//-----------------------Q no 15-----------------------------//

// var text = ("no body,no probelm,no mistakes");

// alert(text.replaceAll("no","yes"));


//-----------------------Q no 16-----------------------------//

// var str = "Pakistan Is number 1 odi team in the world and Babar Azam number 1 Batsman";

// var newstr = str.replaceAll("1","one");

// alert(newstr);

//-----------------------Q no 17-----------------------------//

// var x = "are you raedy";
// var y = x.replace(/a/g, "z");
// alert(y);


//_______________Chapter NO 26 (Rounding Numbers)________________//
//-----------------------Q no 1-----------------------------//

// var originalNumber = 4.6;
// var roundedNumber = Math.round(originalNumber);

// console.log("Rounded number:" + roundedNumber); // Outputs: Rounded number: 5

//-----------------------Q no 2-----------------------------//

// var originalNumber = +prompt("enter any number in points");
// var roundnumber = Math.ceil(originalNumber);

// console.log("Rounded number :" + roundnumber);
//-----------------------Q no 3-----------------------------//

// var originalNumber = 4.2;

// var roundnumber = Math.floor(originalNumber);

// console.log("the round number is : " + roundnumber);
//-----------------------Q no 4-----------------------------//

// var numberToRound = 3.3;

// var roundResult = Math.round(numberToRound);

// console.log("Rounded number:", roundResult);


//-----------------------Q no 5-----------------------------//

// var numberToRound = 0.5;

// var roundResult = Math.round(numberToRound);

// console.log("Rounded number : ", roundResult);

// __________________Chapter no 27 (Randoms Numbers)_____________________//

//------------------Q no 1---------------------//

// var randomNumber =  Math.random();

// var randomRange = Math.floor(randomNumber * 50);

// console.log(randomRange);

//------------------Q no 2---------------------//

// var randomNumber = Math.random();

// var generateNum = randomNumber;

// console.log(generateNum);


//------------------Q no 3---------------------//

// var randomDice = Math.random();

// var dice = Math.floor(randomDice * 6) ;

// document.write( "<center>" + dice + "</center>");
//------------------Q no 4---------------------//

// var headUser = prompt("Enter head username");

// var tailUser = prompt("Enter tail username");

// var toss = Math.random() * 2;

// var floor = Math.floor(toss);

// if (floor === 1) {
//   alert(headUser + " win the toss");
// } else {
//   alert(tailUser + " win the toss");
// }

//___________________Chapter no 28,29(converting strings)__________________//

//---------------Q no 1--------------//

// var str = 12;
// var integer = parseInt(str);

// console.log(str);

//---------------Q no 2--------------//

// var str = "123";
// console.log(typeof str);

//---------------Q no 3--------------//

// var str = "3.14";
// var floatingPoint = parseFloat(str);

// console.log(floatingPoint);

//---------------Q no 4--------------//

// var str = 12;

// var number = "daniyal";

// console.log(typeof str);
// console.log(typeof number);
//---------------Q no 5--------------//

// var num = 42;
// var str = num.toString();
// console.log(str);
//---------------Q no 6--------------//

// var number = 12;
// var str = number.toString();
// console.log(str);

//---------------Q no 7--------------//
// var str = "3.14";
// var integer = parseInt(str); 
// console.log(integer);


//___________________Chapter no 30(Controlling the length of decimals)__________________//

//---------------Q no 1--------------//
// var num = Math.random(); 
// var newNum = num.toFixed(4);
// alert(newNum);
//---------------Q no 2--------------//

// var num = Math.random();
// num = parseFloat(num.toFixed(2));

// alert(num);
//---------------Q no 3--------------//

// if (num.toFixed(2).toString().length > 4) {
//
//   }
  
//---------------Q no 4--------------//
// var decimal = 7.123456789;
// var roundedString = decimal.toFixed(2).toString();

// alert("Rounded to decimal places: " + roundedString);
