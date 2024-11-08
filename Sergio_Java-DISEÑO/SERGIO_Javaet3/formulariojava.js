const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
//Validar si se describio el usuario y contraseña
var usuario = document.getElementById('username').value;
if (usuario.length==0){
    alert('No has escrito nada en el usuario')
return;
}
var clave = document.getElementById('password').value;
if(clave.length <3){
alert('La clave no es valida');
return;
}
//validar el usuario "furcio" y la contraseña "1234"
if(username.value==="furcio" && password.value ==="1234"){
    document.write("<center><h1>Inicio de sesion correctamente </h1><br><br>Bienvenido<");
    form.reset();
}
else{
    document.write("<center><h2>Usuario o contraseña incorrectos</h2><br><br>");
    password.value="";
    password.focus();
    document.write('<h3><a href="formulariojava.html">Regresar</a>');
}
});