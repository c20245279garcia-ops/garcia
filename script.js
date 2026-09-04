console.log ("Hello world.");
console.log("From script.js file.");

const myName = "Franz";
let age = 21;
let number = "09936063268";
let address = "Brgy 2, Manapla"
let addnumber = 67;


console.log (`Name : ${myName}`); 
console.log (`age : ${age} `);
console.log (`number : ${number}`)
console.log (`address : ${address} `);
console.log (addnumber);

function greet(greetings,names=[]) {
    if(Array.isArray(names)){
     names = names.join([","]);
}
     return `${greetings}  sa emu, ${names}` ;
}
console.log(greet("mayong aga",["franz","bai","soy","tol","Baby" ]));

const heading = document.querySelector("h1");
heading.textContent = "Joseph Garcia";
heading.style.color = "purple"
heading.style.backgroundColor = "yellow"
heading.style.fontSize = "60px";
console.log(heading.textContent);

heading.addEventListener("click", function(){
    heading.style.color = "red";
    console.log("Heading was clicked!");
});
const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const projectHeading = document.querySelector("#services h2");
console.log(projectHeading);

const toggleButton = document.querySelector(`#switch`);
const body = document.querySelector(`body`);
let isOff = false;

toggleButton.addEventListener("click",function () {
    isOff = !isOff;

    if (isOff){
        body.style.backgroundColor = "Black";
        body.style.color = "white";
} else {
        body.style.backgroundColor = "white";
        body.style.color = "black";

}
});



