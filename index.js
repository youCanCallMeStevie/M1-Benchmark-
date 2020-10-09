// JS EXERCISES


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
const randomNumber = [];
for (let i = 1; i < 101; i++) {
    let random = Math.round(Math.random() * 1000);
    randomNumber.push(random);
}
console.log(randomNumber)

// Wrote a function to get the MAX and the MIN from the previously created array

const max = Math.max.apply(null, randomNumber);
console.log(max);

const min = Math.min.apply(null, randomNumber);
console.log(min);

// Create an array of arrays, in which every array has 10 random numbers

function giveMeRandom(n) {
    let array = []
    for (let x = 0; x < n; x++) {
        array.push(Math.floor(Math.random() * 11));
    }
    return array;
}
console.log(giveMeRandom(10));


// Create a function that gets 2 arrays and returns the longest one
let array1 = ["1", "2", "3", "4", "5"];
let array2 = ["1", "3"];

function whoIsLonger() {
    if (array1.length < array2.length) {
        return ("array 2: " + array2)
    } else {
        return ("array 1: " + array1)
    }
}

// Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

let array3 = ["1", "2", "3", "4", "5"];
let array4 = ["1", "3"];

function reducer() {
    if (array3.reduce < array4.reduce) {
        return ("array 4")
    } else {
        return ("array 3")
    }
}

// Get element with ID "container" from the pag
let containerElement = document.querySelector("#container");


function textTD() { //Get every "td" from the page & Create a cycle that prints the text inside every td of the page
    let tds = document.querySelectorAll("td");
    result = [];
    for (let i = 0; i < tds.length; i++) {
        result.push(tds[i].textContent);
    }
    return result;
}

//Write a function to change the heading of the page 
function ChangeHeader() {
    let myH1 = document.querySelector('h1')
    myH1.innerText = "You Need To Review!";
}
//Write a function to add an extra row to the table

function insert_Row() {
    let x = document.querySelector('tbody').insertRow(0);
    let one = x.insertCell(0);
    let two = x.insertCell(1);
    let three = x.insertCell(2);
    let four = x.insertCell(3);
    let five = x.insertCell(4);
    one.innerHTML = "New Cell1";
    two.innerHTML = "New Cell2";
    three.innerHTML = "New Cell1";
    four.innerHTML = "New Cell2";
    five.innerHTML = "New Cell2";

}


//Write a function to add the class "test" to each row in the table


function rowChange() {
    let addClass = document.querySelectorAll("tr")
    for (let i = 0; i < addClass.length; i++) {
        addClass[i].className += "test" // dont need if as the for is checking for me
    }
};

//Write a function to add a red background to every link in the page

function changeBg() {
    let allLinks = document.querySelectorAll("a")
    for (let i = 0; i < allLinks.length; i++) {
        allLinks[i].style.backgroundColor = "red" // dont need if as the for is checking for me
    }
};

//Console log "Page loaded" when the page is correctly loaded

window.onload = function () {
    console.log("Page has successfully loaded")
};
//Write a function to add new items to a UL
function addUL() {
    let UL = document.createElement("li");
    document.querySelector('ul').appendChild(UL);
};

//Write a function to empty a list

function removeLI() {
    let OL = document.querySelector("li")
    document.querySelector('ol').removeChild(OL)
};