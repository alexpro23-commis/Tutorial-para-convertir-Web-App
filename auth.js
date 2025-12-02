function login() {
const user = document.getElementById("usuario").value;
const pass = document.getElementById("password").value;


const userSaved = localStorage.getItem("user");
const passSaved = localStorage.getItem("pass");


if (user === userSaved && pass === passSaved) {
localStorage.setItem("logged", "true");
window.location.href = "home.html";
} else {
alert("Usuario o contraseña incorrectos");
}
}


function registrar() {
const user = prompt("Nuevo usuario:");
const pass = prompt("Nueva contraseña:");


localStorage.setItem("user", user);
localStorage.setItem("pass", pass);
alert("Usuario registrado. Ya puedes iniciar sesión.");
}


function verificarLogin() {
if (localStorage.getItem("logged") !== "true") {
window.location.href = "index.html";
}
}


function logout() {
localStorage.removeItem("logged");
window.location.href = "index.html";
}