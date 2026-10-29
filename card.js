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
// JSON Array
// JSON:  Javascript Object Notation
var users = [
  { name: "John Doe", gender: "Male", pic: "john.png" },
  { name: "Jane Doe", gender: "Female", pic: "jane.png" },
  { name: "Ishan Das", gender: "Male", pic: "ishan.png" },
  { name: "Akshaj", gender: "Male", pic: "akshaj.png" },
  { name: "Riaan", gender: "Male", pic: "riaan.png" },
];

var currentUserIndex = 0;
function toggleUserUsingIndex() {
  currentUserIndex = (currentUserIndex + 1) % users.length;
  var currentUser = users[currentUserIndex];
  userName.textContent = currentUser.name;
  userGender.textContent = currentUser.gender;
  userPic.setAttribute("src", currentUser.pic);
}
