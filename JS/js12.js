const arr = [1 , 2 , 3, 4];
console.log(arr);
// // // arr.push(5); // 1 2 3 4 5
// // // console.log(arr);
// // // arr.pop(); // 1 2 3 4
// // // console.log(arr);

arr.unshift(0,1); // 0 1 1 2 3 4
console.log(arr);
// arr.shift(); // 1 2 3 4
// console.log(arr);

// // const arr1 = arr.map(a => a * a);
// // console.log(arr1);

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(1,3);
// console.log(numbers);
// numbers.splice(1,0,2,3,4);
// console.log(numbers);

// const todos = [
//     { id: 1, text: "Learn JavaScript", completed: true },
//     { id: 2, text: "Practice Arrays", completed: false },
//     { id: 3, text: "Learn Functions", completed: true },
//     { id: 4, text: "Practice CSS", completed: false },
//     { id: 5, text: "Build Calculator", completed: true },
//     { id: 6, text: "Learn HTML", completed: false },
//     { id: 7, text: "Practice Objects", completed: true },
//     { id: 8, text: "Build Todo App", completed: false }
// ];

// const completedTodos = todos.filter(todo => todo.completed);
// console.log(completedTodos);

// const todoTexts = todos.map(todo => todo.text);
// console.log(todoTexts);

// console.log(todos.length);