var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');

function register() {
    x.style.left = '400px';
    y.style.left = '50px';
    z.style.left = '110px';
}

function login() {
    x.style.left = '50px';
    y.style.left = '450px';
    z.style.left = '0px';
}

var modal = document.getElementById('login-form');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function validate(){
    // var adhar=document.getElementById("adhar").value;
    // var password=document.getElementById("password").value;
    // if((adhar=="6376365442" && password=="divyansh") || (adhar=="9414045905" && password=="shreyansh") ){
    //     alert("Login Succesfully");
    // }
    // else{
    //     alert("Wrong Adhar Number Or Password");
    // }


      // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}