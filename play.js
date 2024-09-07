let name = "Ej";
let age = 19;
let hasHobbies = true;
let address = "San Pascual";

const nameThatCannotChange = "Ej";

if(hasHobbies){
    console.log("I have hobbies");
}

if(age > 19){
    console.log("You are older than 19.");
}else if(age < 19){
    console.log("You are not older than 19.");
}else if(age = 19){
    console.log("You are 19 years old.");
}else console.log("You are months old");

switch(name) {
    case "Ej":
        console.log("You are Ej");
        break;
        default:
        console.log("You are not Ej");
}

console.log(name);
console.log(age);
console.log(hasHobbies);

console.log(nameThatCannotChange);

console.log('My name is ${name} and I am ${age} years old.');

let hobbies = ["Playing Games","Riding Motorcycle","Dancing"];

console.log(hobbies);

console.log(hobbies[2]);

for (let hobby of hobbies) {
    console.log(hobby);
}

hobbies.push("Programming");

console.log*(hobbies);

hobbies.map((hobby) => {
    hobby = hobby + "is fun";
});

console.log(hobbies);

let person = {
    name: "Ej",
    age: 19,
    address: "San Pascual",
    hasHobbies: true,
    greet(){
        console .log("Hello, I am "+ this.name);
    }
};

console.log(person.name);
console.log(person.age);
console.log(person.hasHobbies);
person.greet();

function myFunction(){
    console.log("Hello my name is"+name+"i love"+hobbies);
}

myFunction();

const myFunctions = () => {
    return  "Hello my name is"+name+"i love "+hobbies+" from "+address+" to school";
};

console.log(myFunctions());

function describeStudent(name, age){
    console.log("This person is " + name + " and is " + age+ "years old");
}
 
describeStudent(name, age);

const describestudent = (name, age) => {
    return 'This person is ${name} and is ${age} years old and lives in ${address} and who love ${hobbies[1]}';
};

console.log(describeStudent(name,age,address));