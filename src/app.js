// import renderRegistration from "./modules/renderRegistration";
import test from "./modules/test";

console.log("hello")

document.querySelector("#registerButton").addEventListener("click", function(event){
    event.preventDefault();
    console.log("hello")
    const pageContents = document.querySelector(".renderPage");
    pageContents.innerHTML = renderRegistration();
})
console.log(renderRegistration());

test();