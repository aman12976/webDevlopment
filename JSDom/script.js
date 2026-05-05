// function Submit() {
//   console.log("Submit button clicked");

//   const fn = document.getElementById("fullName").value;
//   console.log(fn);
//   document.getElementById("myData").innerText =fn;
//    document.getElementById("fullName").value = " ";

// }



function Submit() {
  console.log("Submit Button Click");
  const fn = document.getElementById("fullName").value;
  const City = document.getElementById("city").value;
  const Email = document.getElementById("email").value;
  const Passward = document.getElementById("Passward").value;

  console.log(fn);
  document.getElementById("myData").innerText = fn;
  document.getElementById("myData2").innerText = City;
  document.getElementById("myData3").innerText = Email;
  document.getElementById("myData4").innerText = Passward;
  document.getElementById("myData").value = " ";

  document.getElementById("dataCard").classList.add("divShow");
   document.getElementById("dataCard").classList.remove("divHide");
}