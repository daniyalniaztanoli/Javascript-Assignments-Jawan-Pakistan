//___________________________Assignmnet No 3 _____________________//

//---------------------chapter No 14 & 16 -----------------------//

//____________________ ARRAYS ________________________//

//____________________Q NO 1___________________// 

// var StudentName = [];  //same q no 1,2
//____________________Q NO 2___________________// 

// var StudentName = [];  //same q no 1,2
//____________________Q NO 3___________________// 

// var string = ["karachi","islamabad","multan"];

//____________________Q NO 4___________________// 

// var number = [1,2,3,4,5,6,7,8,9,0];

//____________________Q NO 5___________________// 

// var boolean = ["true","false","true","false","true","false","true"];

//____________________Q NO 6___________________// 

// var mixed = ["pakistan","true",12,2.34];

//____________________Q NO 7___________________// 

// var qual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PHIL", "PHD"];

// document.write("QUALIFICATION" + "</br>" + "1)" + qual[0] + "</br>" +"2)" + qual[1] + "</br>"+ "3)" + qual[2] + "</br>"+ "4)" + qual[3] + "</br>"+ "5)" + qual[4] + "</br>"+ "6)" + qual[5] + "</br>"+ "7)" + qual[6] + "</br>");
//____________________Q NO 8___________________//

// var students = [];

// var score = [];

// for (var i = 1; i <=3; i++){
//     var studentsName = prompt("enter the students name");
//     var marks = +prompt ("enter the marks of students");

//     students.shift(studentsName);
//     score.shift(marks);

//     document.write( "the score of " + studentsName + " is " + marks + "." +  "Percentage = " + (marks / 500) * 100  + "% ." + "</br>");
// }

//____________________Q NO 9___________________//

// var colors = ["red","green","blue","yellow","purple"];

// colors.pop();
// colors.push("sky");
// colors.shift();
// colors.unshift("grey");
// colors.splice(1,2,"dark blue");
// colors.slice(0,2);

// console.log(colors);




//____________________Q NO 10___________________//

// var studentsScore = [98,1,45,57,90];

// studentsScore.sort((a,b) => a-b);

// console.log("this is the ascending order = " + studentsScore);

//____________________Q NO 11___________________//

// Initialize an array with city names
// var cities = ["karachi", "peshawar", "quetta", "islamabad", "Multan"];

// var selectedCities = [];

// for (var i = 0; i < 3; i++) {
//   if (cities[i] !== undefined) {
//     selectedCities.push(cities[i]);
//   }
// }

// console.log(cities); 
// console.log(selectedCities); 


//____________________Q NO 12___________________//

// var arr = ["this","is","my","cat."];

// var singlestring = arr.join("");

// console.log(singlestring);
//____________________Q NO 13___________________//

// var fifo = ["keybord","mouse","printer","moniter"];

// fifo.push("keyboard");
// fifo.push("mouse");
// fifo.push("printer");
// fifo.push("moniter");

// var firstvalue = fifo.shift()
// var secondvalue = fifo.shift()
// var thirdvalue = fifo.shift()
// var fourthvalue = fifo.shift()

// console.log(fifo);

// console.log(firstvalue);
// console.log(secondvalue);
// console.log(thirdvalue);
// console.log(fourthvalue);


//____________________Q NO 14___________________//

// var lifo = ["keybord","mouse","printer","moniter"];


// lifo.push("keyboard");
// lifo.push("mouse");
// lifo.push("printer");
// lifo.push("moniter");

// var lastValue = lifo.pop()
// var secondlastvalue = lifo.pop()
// var thirdlastvalue = lifo.pop()
// var fourthlastvalue = lifo.pop()

// console.log(lifo);

// console.log(lastValue);
// console.log(secondlastvalue);
// console.log(thirdlastvalue);
// console.log(fourthlastvalue);


//____________________Q NO 15___________________// 

// var mobiles = ["apple","samsung","motorola","nokia","sony","haier"];

// document.write("<select>" + "<option>" + "nokia" + "</option>"  + "<option>" + "apple" + "</option>" + + "<option>" + "samsung" + "</option>" + "<option>" + "motorola" + "</option>" + "<option>" + "sony" + "</option>" + "<option>" + "haier" + "</option>" + "</select>");