import {navigation_bar, pieDePagina, elementodelObjeto} from "./utils.js";
import { registrarPersona, actualizarLista } from "./session.js"

const render = async () => {
  navigation_bar();
  pieDePagina();
  elementodelObjeto();
  await alimentarRopa();
}

window.onload = render;

let myUserName = "";

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let userNameLabel = document.getElementById("myUserName");
    userNameLabel.textContent = name;

    console.log("Imprimir nombre " + userNameLabel)
  
    let user = {
      name: name,
      email: email,
      password: password
    };

    myUserName = name;
 
    let userData = JSON.stringify(user);

    localStorage.setItem(email, userData);

    localStorage.setItem("userName", name);
  

    document.getElementById("message").innerHTML = "Registro exitoso. ¡Bienvenido, " + name + "!";

    setTimeout(function() {
        window.location.href = "./landing.html";
      }, 2000);

      console.log(myUserName)

  });

  if(myUserName !== ""){
    console.log("ha entrado la funcion")
    let userNameLabel = document.getElementById("myUserName");
    userNameLabel.textContent = myUserName;
  }

const render2 = async () => {
    actualizarLista();

    const formulario = document.querySelector("#formulario-registro");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const correo = event.target.correo.value;
        const contrasena = event.target.contrasena.value;

        registrarPersona(correo, contrasena);
        actualizarLista();
    })

}

window.onload = render2;

  
  
