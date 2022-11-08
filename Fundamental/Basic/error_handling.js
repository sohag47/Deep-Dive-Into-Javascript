// let countries = ['Bangladesh', 'India', 'Pakistan', "USA", "UK"];
let countries = 0;

//! only works for runtime errors
try{
    countries.forEach((Element) => {
        console.log(Element)
    });
}
//If we don’t need error details, catch may omit it:
catch {
}

try{
    countries.forEach((Element) => {
        console.log(Element)
    });
}
catch(error){
    console.log(error)
    console.log(error.name)
    console.log(error.message)
}


try{
    if (countries.length === undefined) {
        throw new SyntaxError("!!!");
    }
    
}
catch(error){
    console.log(error)
    console.log(error.name)
    console.log(error.message)
}



try{
    if (countries.length === undefined) {
        throw new Error("!!!");
    }
}
catch(error){
    console.log(error)
    console.log(error.name)
    console.log(error.message)
}
finally{
    console.log("Finally Done")
}


//! Custom errors, extending Error
class ValidationError extends Error {
    constructor(message) {
      super(message); // (1)
      this.name = "ValidationError"; // (2)
    }
}
  
function test() {
    throw new ValidationError("Whoops!");
}
  
try {
    test();
} catch(err) {
    console.log(err.message); // Whoops!
    console.log(err.name); // ValidationError
    console.log(err.stack); // a list of nested calls with line numbers for each
    
    if (err instanceof ValidationError) {
        console.log("Invalid data: " + err.message); // Invalid data: No field: name
    } else if (err instanceof SyntaxError) { // (*)
        console.log("JSON Syntax Error: " + err.message);
    } else {
        throw err; // unknown error, rethrow it (**)
    }
}

class MyError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
    }
  }
  
//   class ValidationError extends MyError { }
  
  class PropertyRequiredError extends ValidationError {
    constructor(property) {
      super("No property: " + property);
      this.property = property;
    }
  }
  
  // name is correct
  console.log( new PropertyRequiredError("field").name );
