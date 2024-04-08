// Arrow functions do not have their own this keyword property.   

var obj = { // does not create a new scope
    i: 10,
    b: () => console.log(this.i, this),
    c: function() {
      console.log(this.i, this);
    }
  }

  obj.b(); // prints undefined, Window {...} (or the global object)
  obj.c(); // prints 10, Object {...}
