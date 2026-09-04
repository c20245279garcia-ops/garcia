console.log ("Hello world.");
console.log("From script.js file.");

const myName = "Franz";
let age = 21;
let number = "09936063268";
let address = "Brgy 2, Manapla"
let addnumber = 67;


console.log (`Name : ${myName}`); 
console.log (`age : ${age} `);
console.log (`number : ${number}`);
console.log (`address : ${address} `);
console.log (addnumber);

function greet(greetings,names=[]) {
    if(Array.isArray(names)){
     names = names.join([","]);
}
     return `${greetings}  sa emu, ${names}` ;
}
console.log(greet("mayong aga",["franz","bai","soy","tol","Baby" ]));

