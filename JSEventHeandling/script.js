// document.getElementById("redbox").addEventListener("mouseover",fillRedColor);

// document.getElementById("redbox").addEventListener("mouseover",fillRedColor);

// document.getElementById("redbox").addEventListener("mouseout",fillBaseColor);


// document
// .getElementById("greenbox")
// .addEventListener("mouseover",fillGreenColor)

// document.getElementById("greenbox").addEventListener("mouseover",fillBaseColor);

// document.getElementById("bluebox").addEventListener("mouseover",fillBlueColor);

// document.getElementById("bluebox").addEventListener("mouseover",fillBaseColor);



// function fillRedColor(){
//     document.getElementById("bulb1").style.background ="red"
// }
// function fillGreenColor(){
//     document.getElementById("bulb1").style.background ="green"
// }
// function fillBlueColor(){
//     document.getElementById("bulb1").style.background ="blue"
// }
// function fillBaseColor(){
//     document.getElementById("bulb1").style.background ="white"
// }
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const fn = document.getElementById("FullName").value;
  const em = document.getElementById("email").value;
  const ps = document.getElementById("password").value;

  const dataPacket = {
    FullName: fn,
    Email: em,
    Password: ps,
  };

  console.log(dataPacket);

  document.getElementById("FullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});

document.querySelector("form").addEventListener("reset", (event) => {
  event.preventDefault();

  confirm("Are Your Sure") && window.location.reload();
});


document.addEventListener("keydown",(event)=>{
  let keyPress = event.altKey;
  keyPress === "Escape"&&



)