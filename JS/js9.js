// Personal Information Variables
const myName = "John Doe";
const myAge = 25;
const myCity = "Mumbai";
const myCountry = "India";
const myProfession = "Full Stack Developer";
const yearsOfExperience = 2;

// Calculated values
const birthYear = 2024 - myAge;
const nextAge = myAge + 1;
const yearsUntilRetirement = 65 - myAge;

// Using template literals to create formatted sentences
console.log("=== PERSONAL INTRODUCTION ===");
console.log(`Hello! My name is ${myName}.`);
console.log(`I am ${myAge} years old and I live in ${myCity}, ${myCountry}.`);
console.log(`I was born in ${birthYear}.`);
console.log(`Next year, I will be ${nextAge} years old.`);

console.log("\n=== PROFESSIONAL INFO ===");
console.log(`I work as a ${myProfession}.`);
console.log(`I have ${yearsOfExperience} years of experience in web development.`);
console.log(`I have worked on ${yearsOfExperience * 5} projects.`);

console.log("\n=== LIFE GOALS ===");
console.log(`I will retire in ${yearsUntilRetirement} years.`);
console.log(`That means I will be ${myAge + yearsUntilRetirement} years old when I retire.`);

// Type checking
console.log("\n=== DATA TYPES ===");
console.log(`Type of myName: ${typeof myName}`);
console.log(`Type of myAge: ${typeof myAge}`);
console.log(`Type of true: ${typeof true}`);

// Type conversion examples
console.log("\n=== TYPE CONVERSION ===");
const ageAsString = String(myAge);
const yearAsNumber = Number("2024");
console.log(`Age as string: "${ageAsString}" (type: ${typeof ageAsString})`);
console.log(`Year as number: ${yearAsNumber} (type: ${typeof yearAsNumber})`);

// String methods
console.log("\n=== STRING METHODS ===");
console.log(`Name in uppercase: ${myName.toUpperCase()}`);
console.log(`Name in lowercase: ${myName.toLowerCase()}`);
console.log(`Name length: ${myName.length} characters`);
console.log(`First letter: ${myName.charAt(0)}`);

// Operators
console.log("\n=== OPERATORS ===");
console.log(`Age > 18: ${myAge > 18}`);
console.log(`Experience == 2: ${yearsOfExperience == 2}`);
console.log(`Age >= 25: ${myAge >= 25}`);
console.log(`Experience + 3: ${yearsOfExperience + 3}`);

// Summary
console.log("\n=== SUMMARY ===");
const summary = `${myName} is a ${myAge}-year-old ${myProfession} from ${myCity}. With ${yearsOfExperience} years of experience, I am passionate about building web applications.`;
console.log(summary);
