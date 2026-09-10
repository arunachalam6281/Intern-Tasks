// const numbers = [10, 20, 30];
// function add([a,b,c]) {
//     return a + b + c;
// }
// console.log(add(numbers));

// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }
// let {name : n, age : a, city : c} = person;
// console.log(a);
// a = 15;
// console.log(a);
// person.age = a;
// console.log(person);

// const numbers = [1, 2, 3];
// const newNumbers = [...numbers];
// console.log(newNumbers);
// console.log(numbers);

// const arr = [1, 2, 3, 4, 5];
// // const arr1 = arr;
// // arr1.push(6);
// // console.log(arr);

// const arr1 = [...arr];
// arr1.push(6);
// console.log(arr);
// console.log(arr1);


const library = [
    {
        title: "JavaScript Basics",
        author: "John",
        available: true
    },
    {
        title: "HTML & CSS",
        author: "David",
        available: false
    },
    {
        title: "Learning JavaScript",
        author: "Sarah",
        available: true
    }
];

// Destructuring
const { title, author } = library[0];

console.log(`Book: ${title}`);
console.log(`Author: ${author}`);

// Destructuring + map
library.forEach(({ title, author }) => {
    console.log(`${title} - ${author}`);
});

// Spread
const newBook = {
    title: "JavaScript Advanced",
    author: "Arun",
    available: true
};

// const updatedLibrary = [...library, newBook];
// console.log(updatedLibrary);

const updatedLibrary = library.map(function(book) {

    if (book.title === "JavaScript Basics") {
        return {
            ...book,
            available: false
        };
    }
});

console.log(updatedLibrary);

// Spread to update
const borrowedBook = {
    ...library[0],
    available: false
};

console.log(borrowedBook);