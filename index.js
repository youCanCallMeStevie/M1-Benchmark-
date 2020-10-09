// JS EXERCISES

//Create an array with 10 strings in it
// 25) Print in the console every string in the previous array
// 26) 
// 27) Wrote a function to get the MAX and the MIN from the previously created array
// 28) Create an array of arrays, in which every array has 10 random numbers
// 29) Create a function that gets 2 arrays and returns the longest one
// 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
//Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
const x = "John";
const y = "Doe";
console.log(x, y);

//Create an object with properties such name, surname, email
let myObject = {
    name: "Stephanie",
    surname: "Flanagan",
    email: "flanagan.stephanie@gmail.com"
};

//Delete Email from the previously created object
delete myObject.email;
console.log(myObject);


// Create an array with 10 strings in it
let myArray = ["yellow", "pink", "black", "white", "orange", "teal", "blue", "green", "hot pink", "burgundy"];

// Print in the console every string in the previous array
console.log(myArray.toString);

//Create an array with 100 random numbers in it
let randomNumber = [];
for (let i = 1; i < 101; i++) {
    let random = Math.round(Math.random() * 1000);
    randomNumber.push(random);
}
console.log(randomNumber)
