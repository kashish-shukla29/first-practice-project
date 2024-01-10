
function sub(){
  const  name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const number = document.getElementById("number").value
  const password = document.getElementById("password").value
  const conformpassword = document.getElementById("conpassword").value
  if( name==" " || email==" " || number == '' || password==" " ||conformpassword==" ")
  {
     alert('All fields are required')
     return false
  }
  else if (number.length < 10 || number.length > 10){
    alert("fill 10 digit")
    return false
  }
  else if(password != conformpassword){

    alert("password not match")
    return false
  }
}
//  else {
//   // You can add more complex validation logic here if needed
//   // For example, check if the email has a valid format
//   // For simplicity, this example just shows a success message
//   errorMsg.textContent = ('Form submitted successfully!');
// }
