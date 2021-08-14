//undefined is value,represents the concept of an unintentionally missing value

let person = undefined;
console.log(person.mood); // TypeError!

let bandersnatch;
console.log(bandersnatch); // undefined


//null 
//it doesnt behave like an object but the type is object because its bug in js

console.log(typeof(null)); // "object" (a lie!)


//boolean value

//true or false

let isSad = true;
console.log(isSad); //true 

let isHappy = !isSad; 
console.log(isHappy); //false

let isFeeling = isSad || isHappy; 
console.log(isFeeling); //true

let isConfusing = isSad && isHappy;
console.log(isConfusing); //false