// function BulbON()
// {
//   document.getElementById("bulb1").style.background = "yellow";
// }
// function BulbOFF()
// {
//      document.getElementById("bulb1").style.background = "white";
      

// }

// function Bulb()
// {
//   document.getElementById("bulb1").style.background = "red";
// }
// function BulbAk()
// {
//      document.getElementById("bulb1").style.background = "green";
      

// }




// document.getElementById("bulbred").addEventListener("click",bulbred);



// // document
// // .getElementById("buld1Color")
// // .addEventListener("change",changeBulbColor);

// // function changeBulbColor(){
// //     const color = document.getElementById.("bulb1Color").style.background=color
// // }



const bgPicker = document.getElementById("bgPicker");
const headingPicker = document.getElementById("headingPicker");
const paraPicker = document.getElementById("paraPicker");

const contentArea = document.getElementById("contentArea");
const mainHeading = document.getElementById("mainHeading");
const mainPara = document.getElementById("mainPara");

const resetBtn = document.getElementById("resetBtn");




bgPicker.addEventListener("input", function () {
    contentArea.style.backgroundColor = bgPicker.value;
});




headingPicker.addEventListener("input", function () {
    mainHeading.style.color = headingPicker.value;
});




paraPicker.addEventListener("input", function () {
    mainPara.style.color = paraPicker.value;
});



resetBtn.addEventListener("click", function () {

    contentArea.style.backgroundColor = "white";
    mainHeading.style.color = "black";
    mainPara.style.color = "black";

    bgPicker.value = "#ffffff";
    headingPicker.value = "#000000";
    paraPicker.value = "#000000";

});