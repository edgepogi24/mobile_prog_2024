// ? Desturcturing objects and arrays   
// Seot 2024

const person = {
    name: 'John',
    age: 25, 
    hobbies: ['reading','cooking'],
    greet: function() {
        console.log('Hello, my name is '+ this.name+'and I am'+this.age+'years old.');
    }
};

// When to use destructing?
// Destricturing is useful when you omly need a specific property of an object

// regular function
// regular passing of object
// even though we are passing the whole object, we are only using the name property
//const printName = (personData) => {
//console.log(personData.name);
//}

// ! DESTRUCTURING OBJECT
// if we are only interested in the name property of the object, we can use destructuring
const printName = ({name}) => {
    console.log(name);
}

// we pass the object as an argument to the function
printName(person);

// ! WITHOUT FUNCTION DESTRUCTURING
const {name, age} = person;
console.log(name, age);

//DESTRUCTURING ARRAYS
const hobbies = ['reading','cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

/* Reminders when using destructuring:
-The property name must match the object proper name.*/