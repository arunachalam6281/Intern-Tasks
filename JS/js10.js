// // ===== PROBLEM 1: Even/Odd Numbers =====
// console.log("=== EVEN/ODD NUMBERS ===");
// const numbers = [5, 12, 8, 23, 42, 7, 15, 30, 9, 18];

// for (let i = 0; i < numbers.length; i++) {
//     const num = numbers[i];
//     if (num % 2 === 0) {
//         console.log(`${num} is EVEN`);
//     } else {
//         console.log(`${num} is ODD`);
//     }
// }

// // ===== PROBLEM 2: Fibonacci Numbers =====
// console.log("\n=== FIRST 10 FIBONACCI NUMBERS ===");

// let fib1 = 0;
// let fib2 = 1;

// console.log(fib1);
// console.log(fib2);

// for (let i = 2; i < 10; i++) {
//     let next = fib1 + fib2;
//     console.log(next);
//     fib1 = fib2;
//     fib2 = next;
// }

// // ===== PROBLEM 3: FizzBuzz =====
// console.log("\n=== FIZZBUZZ (1-20) ===");

// for (let i = 1; i <= 20; i++) {
//     if (i % 15 === 0) {
//         console.log(i + ": FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log(i + ": Fizz");
//     } else if (i % 5 === 0) {
//         console.log(i + ": Buzz");
//     } else {
//         console.log(i);
//     }
// }

// // ===== PROBLEM 4: Prime Number Checker =====
// console.log("\n=== PRIME NUMBERS (2-30) ===");

// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num === 2) return true;
//     if (num % 2 === 0) return false;
    
//     for (let i = 3; i * i <= num; i += 2) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// for (let i = 2; i <= 30; i++) {
//     if (isPrime(i)) {
//         console.log(i + " is PRIME");
//     }
// }

// // ===== PROBLEM 5: Multiplication Table =====
// console.log("\n=== MULTIPLICATION TABLE (5x5) ===");

// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= 5; j++) {
//         row += (i * j).toString().padStart(3) + " ";
//     }
//     console.log(row);
// }

// // ===== PROBLEM 6: Sum and Average =====
// console.log("\n=== SUM & AVERAGE ===");

// const nums = [10, 20, 30, 40, 50];
// let sum = 0;

// for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
// }

// const average = sum / nums.length;
// console.log(`Numbers: ${nums}`);
// console.log(`Sum: ${sum}`);
// console.log(`Average: ${average}`);

// // ===== PROBLEM 7: Reverse Array =====
// console.log("\n=== REVERSE ARRAY ===");

// const arr = [1, 2, 3, 4, 5];
// console.log("Original:", arr);

// const reversed = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
// }

// console.log("Reversed:", reversed);

// // ===== PROBLEM 8: Count Vowels =====
// console.log("\n=== COUNT VOWELS ===");

// const text = "Hello World";
// let vowelCount = 0;

// for (let i = 0; i < text.length; i++) {
//     const char = text[i].toLowerCase();
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         vowelCount++;
//     }
// }

// console.log(`Text: "${text}"`);
// console.log(`Vowels: ${vowelCount}`);

// console.log("\n✅ All problems completed!");
