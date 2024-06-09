import renderRegistration from "./src/modules/renderRegistration.js"
import renderLogin from "./src/modules/renderLogin.js";
import render from "./src/modules/render.js";
import registration from "./src/modules/registration.js";
import logIn from "./src/modules/login.js";

document.querySelector("#registerButton").addEventListener("click", function(event){
    event.preventDefault();
    render(".renderPage", renderRegistration());
    registration();
})

document.querySelector("#loginButton").addEventListener("click", function(event){
    event.preventDefault();
    render(".renderPage", renderLogin());
    logIn();
})