/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - this is located in the global scope and in Javascript this is refered to as the window.
* 2. Implicit Binding - this occurs when dot notation is used to invoke a function
* 3. New Binding - occurs during the use of a constructor function which created a new object and when we call it we have to use the "new" keyword
* 4. Explicit Binding - occurs when you use .call(), .apply(), or .bind() you are passing "this" context through those
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function exampleGlobal(ex1) {
    console.log(this);
    return ex1;
}
exampleGlobal("window");

// Principle 2
// code example for Implicit Binding
const myDog = {
    breed: "Weimaraner",
    greeting: function (name){
        console.log(`My dog's name is ${name} and she is a ${this.breed}.`);
        console.log(this);
    }
};
myDog.greeting("Kiana");


// Principle 3
// code example for New Binding
function NicePerson(person) {
    this.greeting = 'Hi';
    this.person = person;
    this.spaek = function() {
        console.log(this.greeting + this.person);
        console.log(this);
    };
}

const Benny = new NicePerson('John');
const John = new NicePerson('Benny');

Benny.spaek();
John.spaek();

// Principle 4

// code example for Explicit Binding
Benny.spaek.call(John);