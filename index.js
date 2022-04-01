var form = document.querySelector("#form");

form.addEventListener("submit", loginHandle);
function loginHandle(event) {
  event.preventDefault();
var firstName=document.querySelector('.firstName').value
var lastName=document.querySelector('.lastName').value
var userEmail=document.querySelector('.userEmail').value
console.log(firstName,lastName,userEmail);

$.ajax({
    type:"POST",
    url:"ajax.php",
    data:"fisrtName="+firstName+"&lastName="+lastName+"&userEmail="+userEmail,
})
// $.post("ajax.php",{firstName:firstName,lastName:lastName,userEmail:userEmail},(data)=>{
//     console.log(data)
// })
}
  