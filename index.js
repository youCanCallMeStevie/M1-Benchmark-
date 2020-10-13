// JS EXERCISES


//Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
const x = "John";
const y = "Doe";
console.log(x + " <> " + y);




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

let anotherArray = []
for (let i = 1; i <= 10; i++) {
    anotherArray.push('element n' + i)
}
console.log(anotherArray);

//use "while" when you dont know the length
let number = 0
while (number < 50) {
    console.log(number)
    number = Math.floor(Math.random() * 100)
}

// Print in the console every string in the previous array
for (i = 0; i < myArray.length; i++)
    console.log(myArray[i]);  // this prints the string individually

// let string = "";
// for (i = 0; i < myArray.length; i++)
//     string += myArray[i] + " "
// console.log(string) //this prints the string in one line

// Stefano's MAX and the MIN from the previously created array

const minAndMax = function (array) {
    let min;
    let max;

    for (let x = 0; x > array.length; x++) {
        if (!min || array[x] < min) {
            min = array[x]
        }
        if (!max || array[x] > max) {
            min = array[x]
        }
    }
}

//Create an array with 100 random numbers in it

const randomNumber = [];
for (let i = 1; i < 101; i++) {
    let random = Math.round(Math.random() * 100);
    randomNumber.push(random);
}
console.log(randomNumber)
minAndMax(randomNumber)

// Wrote a function to get the MAX and the MIN from the previously created array

const max = Math.max.apply(null, randomNumber);
console.log('max is', max);

const min = Math.min.apply(null, randomNumber);
console.log('min is', min);



// Create an array in which every array has 10 random numbers

function giveMeRandom(n) {
    let array = []
    for (let x = 0; x < n; x++) {
        array.push(Math.floor(Math.random() * 11));
    }
    return array;
}
console.log(giveMeRandom(10));

// Create an array of arrays, in which every array has 10 random numbers

const arrayOfArrays = function () {
    let biggerArray = []
    for (let x = 0; x < 5; x++) {
        let smallerArray = [] // this is going to be filled with 10 number
        for (let y = 0; y < 10; y++) {
            smallerArray.push(Math.floor(Math.random() * 10 + 1))
        }
        // at this point smallerArray has 10 elements
        biggerArray.push(smallerArray)
    }
    console.log(biggerArray)
}

// Create a function that gets 2 arrays and returns the longest one
let array1 = ["1", "2", "3", "4", "5"];
let array2 = ["1", "3"];

function whoIsLonger() {
    return array1.length > array2.length ? array1 : array2
}
//     if (array1.length > array2.length) {
//         return ("array 1: " + array 1)
//     } else {
//         return ("array 2: " +array 2)
//     }
// }

// Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

let array3 = [1, 2, 3, 4, 5];
let array4 = [1, 3];

function reducer() {
    if (array3.reduce < array4.reduce) {
        return ("array 4")
    } else {
        return ("array 3")
    }
}

// const higherValueArray = function (arr1, arr2) {
//     let sum1 = 0
//     let sum2 = 0
//     for (let i = 0; i < arr1.length; i++) {
//         sum1 += arr1[i]
//         // sum1 = sum1 +arr1[i] / same thing as a above, just longer
//     }
//     for (let y = 0; y < arr2.length; y++) {
//         sum2 += arr2[y]
//     }
//     return sum1 > sum2 ? arr1 : arr2
// }
// console.log(higherValueArray([array4], [array3]));

// Get element with ID "container" from the pag
let containerElement = document.querySelector("#container");
// let containerElement = document.getElementById("container"); //faster

//Get every "td" from the page

// let tds = document.getElementsByTagName('td)' // faster
let tds = document.querySelectorAll('td')

//Create a cycle that prints the text inside every td of the page
function textTD() {
    let tds = document.querySelectorAll("td");
    result = [];
    for (let i = 0; i < tds.length; i++) {
        result.push(tds[i].textContent);
    }
    return result;
}

// let tds = document.getElementsByTagName('tds') << Stefano's way
// for (let i = 0; i < tds.length; i++) {
//     console.log(tds[x].innerText)
// }


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

// Stefano's answer for "Write a function to add an extra row to the table" (not working for me)
// const insert_Row = function () {
//     let newRow = document.createElement('tr')
//     for (let i = 0; i < 5; i++) {
//         let newCell = document.createElement('td')
//         newCell.innerText = x + 1
//         newRow.appendChild(newCell)
//     }
//     //the row has been filled with 5 cells, but t's not in the page yet
//     let table = document.querySelector('table')
//     table.appendChild(newRow)
// }


//Write a function to add the class "test" to each row in the table
function rowChange() {
    let addClass = document.querySelectorAll("tr")
    for (let i = 0; i < addClass.length; i++) {
        addClass[i].className += "test" // dont need if as the for is checking for me
    }
};
// Stefano's answer for "Write a function to add the class "test" to each row in the table" (not working for me)
// const rowChange = function () {
//     let allTheRows = document.getElementsByTagName('tr')
//     for (let i = 0; i < allTheRows.length; i++) {
//         allTheRows[x].classList.add('.test')
//     }
// }

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

//  Stefano's answer for "Write a function to add new items to a UL"
// const addUL = function () {
//     let myUl = document.querySelector('ul')
//     let newLi = document.createElement('li')
//     newLi.innerText = "this text will be always the same"
//     myUl.appendChild(newLi)
// }


//Write a function to empty a list

// function removeLI() {
//     let OL = document.querySelector("li")
//     document.querySelector('ol').removeChild(OL)
// };
//the above removed but not the LAST of the list, as I had wanted. the below work for the last


function removeLI() {
    let menu = document.getElementById('menu');
    menu.removeChild(menu.lastElementChild);
};
//removes the last in the list, one at a time with a button

//  Stefano's answer for "Write a function to empty a list"
const emptyList = function () {
    let listToEmpty = document.getElementsByTagName("ul")[0]
    listToEmpty.innerHTML = " "
}