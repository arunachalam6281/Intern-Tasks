/* 
// Implict conversion
console.log('2' + '2'); // Output: '22' (string concatenation)
console.log('2' - '2'); // Output: 0 (numeric subtraction)
console.log('2' * '2'); // Output: 4 (numeric multiplication)
console.log('2' / '2'); // Output: 1 (numeric division)

// In the console.log all things are considered as string Implictly.
// for '/', '*', '-', JavaScript converts the string operands to numbers and performs the arithmetic operation. 
// for the '+' operator, if either operand is a string, JavaScript performs string concatenation instead of numeric addition. */

/* // Explicit conversion

// Any -> String

let num = 1;
console.log("Explicit Conversion : ",typeof num);

num = String(num);
console.log("Explicit Conversion : ",typeof num); // Output: Explicit Conversion :  string

let bool = true;
console.log("Explicit Conversion : ",typeof bool);

bool = String(bool);
console.log("Explicit Conversion : ",typeof bool); // Output: Explicit Conversion :  string

// Values are Same for Any Data Type to String. */

/* // String -> Number

If it is a valid number string then it will convert to the number but if it is not a valid number string then it will convert to NaN (Not-a-Number).

let strNum = "123.4";
console.log(strNum + 4); // Output: "1234" (string concatenation)

strNum = Number(strNum);
console.log(strNum + 4); // Output: 127 (numeric addition) */

/* // Boolean -> Number

// true(Boolean)    -> 1
// false(Boolean)   -> 0

let boolValue = true;
console.log(boolValue);         // Output: true
console.log(typeof boolValue);  // Output: boolean

boolValue = Number(boolValue);
console.log(boolValue);         // Output: 1 (true is converted to 1)

let boolvalue1 = 'false';       // It does not understand the string 'false' as a boolean value, so it remains a string.
console.log(boolvalue1);        // Output: 'false'
console.log(typeof boolvalue1); // Output: string

boolvalue1 = Number(boolvalue1);
console.log(boolvalue1);        // Output: NaN (non-numeric string is converted to NaN) */

// Any -> Number

// true(Boolean)    -> 1
// false(Boolean)   -> 0
// null             -> 0
// undefined        -> NaN
// 'true'(String)   -> NaN
// 'false'(String)  -> NaN
// '123'            -> 123
// '123.45'         -> 123.45
// 'abc'            -> NaN
// '123k'           -> NaN

// In this Explict Conversion all are converted to Number "Data type" but the value can be incorrect if it does not understand.

/* // Number -> Boolean

// Any Number   -> true (except 0 and NaN)
// 0 and NaN    -> false

let a = 0;
console.log(Boolean(a)); // Output: false

let b = NaN;
console.log(Boolean(b)); // Output: false

let c = 1;
console.log(Boolean(c)); // Output: true

let d = -1;
console.log(Boolean(d)); // Output: true */

/* // String -> Boolean

// Non-empty String     -> true
// Empty String         -> false

let str1 = "Hello";
console.log(Boolean(str1)); // Output: true

let str2 = "";
console.log(Boolean(str2)); // Output: false

let str3 = " ";
console.log(Boolean(str3)); // Output: true (a string with a space is considered non-empty)

let str4 = "0";  // Zero is stored as String Answer is true because string contains Elements so it is true if it is a empty string then only the boolean of empty string is false((str4 = "").
console.log(Boolean(str4)); // Output: true (a string with '0' is considered non-empty). */


// Summary 

/*
    Number     ->  String : String(num)
    Boolean    ->  String : String(bool)
    No Problem for the String the output are shown as their type.
    
    String    ->  Number : Number(str)  - If the string is a valid number, it will be converted to that number. If the string is not a valid number, it will be converted to NaN (Not-a-Number).
    Boolean   ->  Number : Number(bool) - True is 1 ,False is 0 and null is 0. Any other value will be converted to NaN.
    If it does not understand then it is NaN (Not-a-Number).

    String    ->  Boolean : Boolean(str) - Any non-empty string is considered true, while an empty string is considered false.
    Number    ->  Boolean : Boolean(num) - Any number that is not 0 or NaN is considered true, while 0 and NaN are considered false.

*/

/* let a = 0;
console.log(typeof a); // number

a = String(a);
console.log(typeof a); // string
console.log(a); // 0

a = Boolean(a); // true
console.log(typeof a);
console.log(a);

a = Number(a); // 1
console.log(a); */

// Number zero is converted into one only by conversion not any addition.