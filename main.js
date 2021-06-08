const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 1000); 
}

const form = document.getElementById('form');
const password = document.getElementById('password');
const error = document.getElementById('error');

///const regex = /\d/;
//const doesItHaveNumber = regex.test(pass.value);
form.addEventListener('submit', (e) => {

    let meessages = [];
    if (password.value.length !== 8) {
        meessages.push("password must be 8 charactars")
    }
    if (((/[a-zA-Z]/.test(password.value.substring(0, 1))) != true)) {
        meessages.push("password must start with letter");
    }
    if (password.value.substring(0, 1) !== (password.value.substring(0, 1)).toUpperCase()) {
        meessages.push("First letter must be Upper case");
    }
    if ((/\d/.test(password.value) != true)) {
        meessages.push("password must include at least one number");
    }
    if ((/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password.value) != true)) {
        meessages.push("password must include at least one special charactar");
    }
    if (((/\s/.test(password.value)) == true)) {
        meessages.push("password mus't include spaces");
    }
    if (meessages.length > 0) {
        e.preventDefault()
        error.innerText = meessages.join(" _ ")
    }
})