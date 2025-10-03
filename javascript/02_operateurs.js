let a = 10, b = 5;
let somme = a + b;
let difference = a - b;
let produit = a * b;
let quotient = a / b;

let init = null;
let final;
let start = undefined;

init == final; // true
console.log(final== start); // true
console.log(init === final); // false
console.log(start === final); // true
console.log(final); // undefined

if(produit > quotient) {
    console.log("produit est plus grand que quotient")
} else {
    console.log("quotient est plus grand que produit")
}

let nom = "Barry";
switch(nom) {
    case "Barry":
        console.log("Bonjour Barry");
        break;
    case "John":
        console.log("T'es là John?");
        break;
    default:
        console.log("Je ne vous connais pas");
        break;
}

// même chose moins performant
if(nom === "Barry")
    console.log("Bonjour Barry");
else if(nom === "John")
    console.log("T'es là John?");
else console.log("Je ne vous connais pas");

for(let i = 0; i < 10; i++) {
    console.log(i);
}

let iterator = 10;
while(iterator >= 0) {
    console.log(iterator);
    --iterator;
}



