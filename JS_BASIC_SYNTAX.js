let name = "Max";
let age = 29;
let hasHobbies = true;

const nameThatCannotChange = "Max";

if(hasHobbies){
    console.log("I have hobbies");
}

if(age > 19){
    console.log("You are older than 25.");
}else if(age < 19){
    console.log("You are not older than 25.");
}else{
    console.log("You are 25 years old.");
}

switch(name) {
    case "Ej":
        console.log("You are Max");
        break;
        default:
        console.log("You are not Max");
}

console.log(name);
console.log(age);
console.log(hasHobbies);

console.log(nameThatCannotChange);

console.log('My name is ${name} and I am ${age} years old.');

let hobbies = ["Sports","Cokking"];

console.log(hobbies);

console.log(hobbies[0]);

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
    name: "Max",
    age: 29,
    hasHobbies: true,
    greet(){
        console .log("Hello, I am "+ this.name);
    }
};

console.log(person.name);
console.log(person.age);
console.log(person.hasHobbies);

function myFunction(){
    console.log("Hello");
}

myFunction();

const myFunction = () => {
    return  "Hello";
};

console.log(myFunction());

function describeStudent(name, age){
    console.log("This person is " + name + " and is " + age+ "years old");
}

describeStudent(name, age);

const describeStudent = (name, age) => {
    return 'This person is ${name} and is ${age} years old';
};

console.log(describeStudent(name,age));