import renderRegistration from "./modules/renderRegistration.js"
import renderLogin from "./modules/renderLogin.js";
import render from "./modules/render.js";
import registration from "./modules/registration.js";
import logIn from "./modules/login.js";

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