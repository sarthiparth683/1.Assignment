// Resources - Official Documentation and Other Resources
// Inheritance and the prototype chain

// How are factory functions linked to objects in Javascript:
// Introduction
// In JavaScript, functions are not only blocks of code but also first-class objects. Understanding how functions are linked to objects, particularly in terms of prototypal inheritance, is crucial. In this discussion, we'll explore this relationship, focusing on how prototypal inheritance works with objects created by functions.
// Detailed Explanation

///--------------------------------

// 1. Factory Functions :
// Understand that every object has a __proto__ property which is used to link it to another object. But what about functions? How is prototypal inheritance handled in objects created by constructor functions via new keyword?

// Functions are first-class objects in JavaScript which means they can have their own properties and methods like any other plain object could.

// This prototype property of a function itself is not used in the prototype chain look-up. The .prototype property object lives in every function
//-------------------------------------------------------------------------------------------------------
// Code Implementation | Examples
// Solving the problem using the functions prototype object & linking our objects to it
// Task 1
Person.prototype.increaseAge = function () {
  this.age = this.age + 1;
  console.log(this.age);
};

Person.prototype.sleep = function () {
  console.log(`${this.firstName} is sleeping.`);
};

Person.prototype.eat = function () {
  console.log(`${this.firstName} is eating.`);
};

Person.prototype.introduceSelf = function () {
  console.log(this.firstName, this.lastName, this.age);
};

function Person(firstName, lastName, age) {
  let obj = {};
  Object.setPrototypeOf(obj, Person.prototype);

  obj.firstName = firstName;
  obj.lastName = lastName;
  obj.age = age;

  return obj;
}

let person1 = Person("Bruce", "Wayne", 26);
console.log(person1);
//------------------------------------------------------------------------------------------
// If you observe the person1 object now ( You’d observe that eat increaseAge .. are all added to prototypes of person1 object )

// Task 2:
function Person(firstName, lastName, age) {
  let obj = {};
  Object.setPrototypeOf(obj, Person.prototype);

  obj.firstName = firstName;
  obj.lastName = lastName;
  obj.age = age;

  return obj;
}

Person.prototype.increaseAge = function () {
  this.age = this.age + 1;
  console.log(this.age);
};

Person.prototype.sleep = function () {
  console.log(`${this.firstName} is sleeping.`);
};

Person.prototype.eat = function () {
  console.log(`${this.firstName} is eating.`);
};

Person.prototype.introduceSelf = function () {
  console.log(this.firstName, this.lastName, this.age);
};

function Employee(firstName, lastName, age, department, salary) {
  let obj = Person(firstName, lastName, age); // a new object which has some properties of object that is returned from Person factory function
  Object.setPrototypeOf(obj, Employee.prototype); // the object we are gonna return will have Employee.prototype as its prototype;
  obj.department = department;
  obj.salary = salary;

  return obj;
}

Object.setPrototypeOf(Employee.prototype, Person.prototype); // Employee prototype object's prototype will be set to Person.prototype;

Employee.prototype.work = function () {
  console.log(`${this.firstName} is working.`);
};

Employee.prototype.getSalary = function () {
  console.log(`${this.firstName} is getting Salary.`);
};

let e1 = Employee("John", "Doe", 25, "engineering", 200000);

console.log(e1);
// e1.work() // This should work now.
//--------------------------------------------------------------------------------------------------------------------------
// Student Activities
// Task 1
// convert below code and and add all methods to prototype object.
// write a factory function iPhone1 to create iPhone objects in bulk quantity
// iPhone1 takes in ASIN, color, display, camera
// the object it creates has the following
// properties: ASIN, color, display, camera
// methods:
// dial - console logs "tring.. tring..."
// sendMessage - console logs "Sending message..."
// cameraClick - "Camera clicked"

function iPhoneGen1(ASIN, color, display, camera) {
  let obj = {};

  obj.ASIN = ASIN;
  obj.color = color;
  obj.display = display;
  obj.camera = camera;

  obj.dial = function () {
    console.log("tring.. tring...");
  };

  obj.sendMessage = function () {
    console.log("Sending message...");
  };

  obj.cameraClick = function () {
    console.log("Camera clicked");
  };

  return obj;
}

let iphone1 = iPhoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP");
iphone1.dial(); // "tring.. tring..."
iphone1.sendMessage(); // "Sending message..."
iphone1.cameraClick(); // "Camera clicked"
////soluction

function iPhoneGen1(ASIN, color, display, camera) {
  let obj = {};
  Object.setPrototypeOf(obj, iPhoneGen1.prototype); // set the prototype of the object that we are returning here to iPhoneGen1 prototype;

  obj.ASIN = ASIN;
  obj.color = color;
  obj.display = display;
  obj.camera = camera;

  return obj;
}

iPhoneGen1.prototype.dial = function () {
  console.log("tring.. tring...");
};

iPhoneGen1.prototype.sendMessage = function () {
  console.log("Sending message...");
};

iPhoneGen1.prototype.cameraClick = function () {
  console.log("Camera clicked");
};

let iphone1 = iPhoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP");

console.log(iphone1);

iphone1.dial(); // "tring.. tring..."
iphone1.sendMessage(); // "Sending message..."
iphone1.cameraClick(); // "Camera clicked"

// Conclusion
// Factory functions offer a flexible approach to object creation in JavaScript, allowing developers to produce objects with shared properties and methods efficiently. By leveraging factory functions, developers can create modular and reusable code, promoting code organization and enhancing maintainability. Understanding the linkage between factory functions and objects, particularly in terms of prototypal inheritance, empowers developers to build scalable applications with ease. Mastery of factory functions facilitates efficient development practices, enabling the creation of adaptable and scalable software solutions in JavaScript.