//_______________________Assignmnent No 4____________________//

//---------Home Assignment--------//

//__________chapter no 17-20___________//

//_____________Q no 1________________//

// for(var i=1;i<=10;i++)

// console.log(i);
//_____________Q no 2________________//

// for (var i=1;i<=11;i++)

// console.log(i);

//_____________Q no 3________________//

// What are the 5 characters missing from this code, excluding
// any spaces that are missing? Type them in order, with no
// spaces or commas between them.
// for var i = 0 i <= 4 i++
// Note: Complete this statement by yourself

// for(var i = 0;i<=4;i++)

// console.log(i);

// note;
//  In this question missing round open/closed brakets "()" , and semi colons ";"

//_____________Q no 4________________//

// for (var count = 1; count <100; count++)

// console.log("the loop line is " + count); 
  
//_____________Q no 5________________//

// for(var i=3;i>0;i--)

// console.log("the decrement is " + i);

//_____________Q no 6________________//

// var arr = [1,2,3,4,5,6,7,8,9,10];

// console.log(arr);

//_____________Q no 7________________//

// var flag = true;

//_____________Q no 8________________//

// var pets = ["dog","cat","rabbit","dove","horse"];

// for(var i = 0; i<pets.length;i++)
// {
//     console.log(`Pet  ${i + 1} : ${pets[i]}`);
// }
//_____________Q no 9________________//

// for(var i=1;i<10;i++)
// if(i === i) {
//     alert("the counter is : " + i );
// }

//_____________Q no 10________________//

// var userName = ["daniyal","noman","faraz","arsalan","mustafa"];

// var firstName = prompt("please enter first name");

// for(var i = 0 ; i < userName.length; i++)
// {
//     if(firstName === userName[i]){
//         alert("Welcome " + firstName + " !");

//     }if(i === userName.length - 1 ){
//         alert("please enter your correct user name");
//     }
// }

//_____________Q no 11________________//
// var List = [1,2,3,4,5,6,7,8,9,10];

// var matchFound = false ;

// for(var i =0; i<List.length; i++)
// {
//     if(userInput === list[i]){
//         alert("match found");
//         break;
//     }
// }

// var list = [1,2,3,4,5,6,7,8,9,0];

// var userInput = +prompt("please enter number");

// var matchFound = false;

// for (var i = 0; i < list.length; i++) {
//   if (userInput === list[i]) {
//     alert("Match found");
//     matchFound = true;
//     break;
//   }
// }

// if (!matchFound) {
//   alert("Match not found");
// }

//_____________Q no 12________________//

// var firstArr = ["a","b","c","d","e","f"];

// var secondArr = [1,2,3,4,5,6];

// for(var i = 0;i<firstArr.length;i++){

// for (var j = 0;j<secondArr.length;j++){
//     console.log(firstArr[i] + secondArr[j]);
// }

// }

//-------------------class work--------------//


//---------------Q no 1------------//
// var mutlidimensional = [];

// mutlidimensional.pop(["abc","xyz"]);
// mutlidimensional.pop([1,2,3,4,5]);
// mutlidimensional.pop([true,false]);

// console.log(mutlidimensional);

//---------------Q no 2------------//

//--------------------------------//

//---------------Q no 3------------//

// for(var i = 1 ;i<=10;i++)

// document.write(i + "<br>");

//---------------Q no 4------------//

// var enterNum = +prompt("enter the number of any table");
// var enterLen = +prompt("enter the lenght of table");

// for(var i=1;i<=enterLen;i++)

// document.write(enterNum + " X " + i + " = " + enterNum * i  + "<br>");

//---------------Q no 5------------//

// var fruits = ["apple","banana","mango","orange","strawberry"];

// for(var i=0;i<fruits.length;i++)
// {

// document.write(fruits[i] + "<br>" );

// }
// var fruit = ["apple","banana","mango","orange","strawberry"];

// for(var i = 0;i<fruit.length;i++)
// { 
// document.write("Element at index " + i + fruit[i] + "<br>");
// }


//---------------Q no 6------------//


// for(var i=1;i<=15;i++){
//     document.write(i + ",");
// } 


// for(var i=10;i>=1;i--)

// {
//     document.write(i);
// } 

// for(var i=0;i<=20;i+=2){
//     document.write(i);
// }

// for(var i=1;i<=19;i+=1){
//     document.write(i + ",");
// }

// for(var i=2;i<=20;i+=2){
//     document.write(i + "k,");
// }

//---------------Q no 7------------//

// var items = ["cake","apple pie","cookie","chips","patties"];

// var enterItems = prompt("enter your item name");

// var isavailable = false;

// for(var i = 0; i <items.length;i++)
// {
//     if(items[i] === enterItems){
//         isavailable = true;
//         break;
//     }
// }
// if(isavailable){
//     document.write("the item " + enterItems + "is <b> available </b> on index " + length );
// }else{
//     document.write("the item " + enterItems + " is not <b> available </b> in our bakery");
// }

//---------------Q no 8------------//

// var num = [12,29,90,100,129,998];

// var lnum = num[0];

// for(var i = 1;i<num.length;i++)
// {
//     if(num[i] > lnum){
//         lnum = num[i];
//     }
// }
// console.log("the largest number is " + lnum);
//---------------Q no 9------------//

// var num = [12,45,78,90,1];

// var smallest = num[0];

// for(var i=1 ; i<num.length;i++)
// {
//     if(num[i] < smallest)
//     {
//     smallest = num[i]
// }
// }
// console.log("the smallest number is " + smallest);
//---------------Q no 10------------//

// var number = +prompt("print the multiples of give the number");

// for(var i = 1; i<=20;i++)

// document.write(number * i + ",");