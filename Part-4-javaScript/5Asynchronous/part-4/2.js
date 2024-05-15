// var vs let vs const:
// Introduction
// In JavaScript, var, let, and const are keywords used to declare variables, each with its own characteristics and scope rules. Understanding the differences between them is crucial for writing clean and maintainable code. These keywords were introduced in different versions of JavaScript, and they serve specific purposes in controlling the behavior of variables.
// Detailed Explanation
// var	let	const
// Scope	function	block	block
// re-declaration	allowed ✅	not-allowed❌	not-allowed❌
// accessibility before declaration	accessible ✅	not accessible ❌	not accessible ❌
//-----------------------------------------------------------------------------
// let vs const vs var
function scopeTest() {
    var outerVar = "outer var";
    let outerLet = "outer let";
  
    if (true) {
      var innerVar = "inner var"; // function scoped
      let innerLet = "inner let"; // block scoped
    }
  
    console.log(innerVar); // inner var
    console.log(innerLet); // Uncaught ReferenceError: innerLet is not defined
  }
  
  scopeTest();
  

//-----------------------------------------------------------------------------
//Code Implementation | Examples
function forWithVar() {
    for (var i = 0; i < 5; i++) {
      console.log(i);
      setTimeout(() => {
        console.log(i); // by the time this runs, i = 5 & there is just one i
      }, 1000);
    }
  }
  
  forWithVar();
  
  function forWithLet() {
    for (let i = 0; i < 5; i++) {
      console.log(i);
      setTimeout(() => {
        console.log(i);
        // because of block scope, every iteration gets a separate i
        // let automatically creates a new i for each iteration
        // instead of creating one i for the whole loop,
        // we have brand new i's for each iteration. Thanks to block scope.
      }, 1000);
    }
  }
  
  forWithLet();
  const name = "Vivek";
name = "Akash"; // Uncaught TypeError: Assignment to constant variable.

const user = {
  name: "Vivek",
};

user.name = "Akash";
console.log(user); // {name: 'Akash'}

const users = ["a", "b", "c"];
users.push("d");
console.log(users); // ['a', 'b', 'c', 'd']

//-----------------------------------------------------------------------------
// Step by step example
// 1. the varaibles declared using the let keyword,
// can not be accessed before the place they are declared.

// guess the output
console.log(x); // undefined
var x = 5;
console.log(x); // 5

console.log(x); // ReferenceError: x is not defined
let x = 5;
console.log(x); // 5

// 2. variables declared using the let keyword can not be re-declared

var x = 1;
var x = 2;
console.log(x); // 2

let y = 1;
let y = 2; // SyntaxError: Identifier 'y' has already been declared
console.log(y);

// 3. Variables declared using var are scoped by functions only, not other blocks.

function fun() {
  if (true) {
    var x = 2;
    console.log("x inside if block ", x); // 2
  }

  console.log("x inside fun function", x); // 2
}

fun();
console.log("x outside fun function", x); // ReferenceError: x is not defined

