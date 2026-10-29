var userPic = document.getElementById("pic");
var userName = document.getElementById("name");
var userGender = document.getElementById("gender");

function toggleUser() {
  if(userName.textContent == "John Doe") {
    userName.textContent = "Jane Doe";
    userGender.textContent = "Female";
    userPic.setAttribute("src", "jane.png");
  } 
  else {
    userName.textContent = "John Doe";
    userGender.textContent = "Male";
    userPic.setAttribute("src", "john.png");
  }
}
