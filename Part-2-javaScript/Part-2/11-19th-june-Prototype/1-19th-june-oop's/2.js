// Inheritance using ES6 class
// Introduction
// Inheritance is a fundamental concept in object-oriented programming (OOP) where a class (subclass) can inherit properties and methods from another class (superclass). In ES6, the introduction of the class syntax made implementing inheritance more intuitive and concise, aligning JavaScript with traditional OOP languages like Java and C++.

// Detailed Explanation
// What is Inheritance using ES6 Class?
// Inheritance in ES6 involves creating a subclass that inherits properties and methods from a superclass. This allows for code reuse and promotes a hierarchical structure in programming.

// Why is it useful?
// Inheritance facilitates code organization, promotes code reuse, and simplifies maintenance. It allows for creating specialized classes based on existing ones, leading to more efficient and scalable codebases.

// Real-world examples or analogies
// Think of a hierarchy in an organization where employees inherit certain attributes (like salary structure, benefits) from their respective departments. Similarly, in programming, a subclass inherits attributes and behaviors from its superclass.

// Code Implementation | Examples
// Quickly solve using constructor function:
Code Implementation | Examples
Quickly solve using constructor function:
// Person
//   name
//   age
//   increaseAge() // will increase the age by 1
//   sayName() // return 'my name is <name>'

// Employee extends Person
//   salary
//   increaseSalary(amt)
//   decreaseSalary(amt)
//   introduce() // return `my name is <name>, I am <age> years old & my salary is <salary>`
- solution:
// Person
//   name
//   age
//   increaseAge() // will increase the age by 1
//   sayName() // return 'my name is <name> & age is <age>'

// Employee extends Person
//   salary
//   increaseSalary(amt)
//   decreaseSalary(amt)
//   introduce() // return `my name is <name>, I am <age> years old & my salary is <salary>`

Person.prototype.increaseAge = function () {
  this.age++;
};

Person.prototype.sayName = function () {
  return `my name is ${this.name} & age is ${this.age}`;
};

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// let p1 = new Person('Chatur', 25);
// console.log(p1)
// console.log(p1.sayName()) // my name is Chatur & age is 25
// p1.increaseAge()
// console.log(p1.sayName()) // my name is Chatur & age is 26

Object.setPrototypeOf(Employee.prototype, Person.prototype);

Employee.prototype.increaseSalary = function (amt) {
  this.salary += amt;
};

Employee.prototype.decreaseSalary = function (amt) {
  this.salary -= amt;
};

Employee.prototype.introduce = function () {
  return `my name is ${this.name}, I am ${this.age} years old & my salary is ${this.salary}`;
};

function Employee(name, age, salary) {
  Person.call(this, name, age);
  this.salary = salary;
}

let e1 = new Employee("Chatur", 25, 100);
console.log(e1);
console.log(e1.sayName()); // my name is Chatur & age is 25
e1.increaseAge();
console.log(e1.sayName()); // my name is Chatur & age is 26

console.log(e1.introduce());
e1.decreaseSalary(20);
console.log(e1.introduce());
e1.increaseSalary(20);
console.log(e1.introduce());
// Discuss difference between attaching methods to this vs attaching methods to the functions prototype object
//------------------------------------------------------------------------------------------------------


// Problem:
// Person
//   name
//   age
//   increaseAge() // will increase the age by 1
//   sayName() // return 'my name is <name> & age is <age>'
 

// Employee extends Person
// salary
// increaseSalary(amt)
// decreaseSalary(amt)
// introduce() // return `my name is <name>, I am <age> years old & my salary is <salary>`

Person.prototype.increaseAge = function(){
this.age++
}

Person.prototype.sayName = function() {
return `my name is ${this.name} & age is ${this.age}`
}

function Person(name, age) {
this.name = name;
this.age = age;
}

// let p1 = new Person('Chatur', 25);
// console.log(p1)
// console.log(p1.sayName()) // my name is Chatur & age is 25
// p1.increaseAge()
// console.log(p1.sayName()) // my name is Chatur & age is 26

Object.setPrototypeOf(Employee.prototype, Person.prototype)

Employee.prototype.increaseSalary = function(amt) {
this.salary += amt;
}

Employee.prototype.decreaseSalary = function(amt) {
this.salary -= amt;
}

Employee.prototype.introduce = function() {
return `my name is ${this.name}, I am ${this.age} years old & my salary is ${this.salary}`
}

function Employee(name, age, salary) {
Person.call(this, name, age);
this.salary = salary;
}

let e1 = new Employee('Chatur', 25, 100);
console.log(e1)
console.log(e1.sayName()) // my name is Chatur & age is 25
e1.increaseAge()
console.log(e1.sayName()) // my name is Chatur & age is 26

console.log(e1.introduce());
e1.decreaseSalary(20);
console.log(e1.introduce());
e1.increaseSalary(20);
console.log(e1.introduce());

// solution
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  increaseAge() {
    this.age++;
  }

  sayName() {
    return `my name is ${this.name} & age is ${this.age}`;
  }
}

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }

  increaseSalary(amt) {
    this.salary += amt;
  }

  decreaseSalary(amt) {
    this.salary -= amt;
  }

  introduce() {
    return `my name is ${this.name}, I am ${this.age} years old & my salary is ${this.salary}`;
  }
}

let e1 = new Employee("Chatur", 25, 100);
console.log(e1);
console.log(e1.sayName()); // my name is Chatur & age is 25
e1.increaseAge();
console.log(e1.sayName()); // my name is Chatur & age is 26

console.log(e1.introduce());
e1.decreaseSalary(20);
console.log(e1.introduce());
e1.increaseSalary(40);
console.log(e1.introduce());
//-----------------------------------------------------------------------------------------------------