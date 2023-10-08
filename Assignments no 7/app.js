//____________________Assignmnet no 07________________________//

//--------------Chapter 46, 48 (Events)--------------//

//---------------------Q no 1--------------------//

 // answer no 1 in index file....

//---------------------Q no 2--------------------//

// var hidebutton = document.getElementById("hidebutton");
// var targetparagraph = document.getElementById("targetparagraph");

// hidebutton.addEventListener("click" , () =>{
//     targetparagraph.style.display = 'none';
// });
//---------------------Q no 3--------------------//

// var hoverlink = document.getElementById("hoverlink");

// hoverlink.addEventListener("mouseenter" ,()=>{
//     hoverlink.style.color = "orange";
// });

//---------------------Q no 4--------------------//

// var scrooltop = document.getElementById("scrooltop");

// scrolltop,addEventListener("scrool top" , (event) =>{
//     event.preventDefault ();
//     window.scrollTo({
//         top : 0,
//         behavior : "smooth",
//     })
// })
//---------------------Q no 5--------------------//

    // var playmusic = document.getElementById("playsound");
    // var spund = document.getElementById("sound");

    // playmusic.addEventListener("click", () =>{
    //     sound.play();
    // } );
//---------------------Q no 6--------------------//

// this answer in html file
//---------------------Q no 7--------------------//
// this answer in html file
//---------------------Q no 8--------------------//
// this answer in html file
//---------------------Q no 9--------------------//

// var playmusic = document.getElementById("playmusic");
// var sound  = document.getElementById("sound");

// playmusic.addEventListener("click" , () =>{
//     sound.play();
// });
//---------------------Q no 10--------------------//

// var mouseover = document.getElementById("mouseover");

// mouseover.addEventListener("mouseover", () =>{
//     alert("the cursor over the text");
// });
//---------------------Q no 11--------------------//

// var hideme = document.getElementById("hidepara");

// hideme.addEventListener("mouseout",() =>{
//     hideme.style.display = "none";
// });
//---------------------Q no 12--------------------//
// sir sawal smaj nahi aya

//______________________Chapter 49, 50-----------------------//
//---------------------Q no 1--------------------//
    
//    var userInput = document.getElementById('userInput');
//    var submitButton = document.getElementById('submitButton');
   
//    submitButton.addEventListener('click', () => {
//    var inputValue = userInput.value;
//    console.log('User input:', inputValue);
   
//    });

//---------------------Q no 2--------------------//

// var mycheck = document.getElementById("myCheckbox");

// mycheck.addEventListener("change", () =>{
//     var isChecked = mycheck.checked;
//     console.log("This is :" + isChecked)
// });

//---------------------Q no 3--------------------//

// var myselect = document.getElementById("myselect");

// myselect.addEventListener("change",()=>{
//     var newSelect = myselect.value;
//     console.log(newSelect); 
// });
//---------------------Q no 4--------------------//

// var userText = document.getElementById("textfield");
// var submitButton = document.getElementById("submit");

// submitButton.addEventListener("click",()=>{
//     var userComment = userText.value;

//     console.log("this is your text :" + userComment);
// });


//---------------------Q no 5--------------------//

// var martialstatus = document.getElementById("martialstatus");
// var statusField = document.getElementById("status");

// document.getElementById("checkStatus").addEventListener("click" , () =>{
//     var isMarried = martialstatus.value === "true";
//     if(!isMarried){
//         check.value = "avialable";
//     }else{
//         check.value = "not avialable";
//     }
// });
//---------------------Q no 6--------------------//

// var text = document.getElementById("userInput");
// var submitBtn = document.getElementById("submit");

// submitBtn.addEventListener("click", () =>{
//     if(text.value.trim() === ""  ){
//         text.value = "default input";;
//     }
// });
//---------------------Q no 7--------------------//

var userInput = document.getElementById("userInput");
var userInput1 = document.getElementById("userInput1");
var userInput2 = document.getElementById("userInput2");
var userInput3 = document.getElementById("userInput3");
var userInput4 = document.getElementById("userInput4");
var userInput5 = document.getElementById("userInput5");

var submitBtn = document.getElementById("submit");



submitBtn.addEventListener("click" , () =>{
    if(userInput1.value && userInput2.value && userInput3.value && userInput4.value && userInput5.value){
        alert("Your Form Has Been Submitted" );
    }else{
        alert("Form Not Submitted")
    }
});