// const person1 = {
//     name: "Arun",

//     greet: function() {
//         console.log("Hello " + this.name);
//     }
// };

// person1.greet();


const library = [
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        available: true
    },
    {
        title: "1984",
        author: "George Orwell",
        available: true
    },
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        available: false
    }
];

function borrowBook(title) {

    const book = library.find(book => book.title === title);

    if (book && book.available) {
        book.available = false;
        console.log(title + " has been borrowed.");
    } else {
        console.log("Book is not available.");
    }
}

borrowBook("The Alchemist");
borrowBook("The Alchemist");
borrowBook("Harry Potter");