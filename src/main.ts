interface Person {
  firstName: string;
  lastName: string;
}

class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

function greeter(person: Person) {
  return "Hello " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Andita", lastName: "Fahmi" };
var stud = new Student("Si", "Kasep", "Tea");

// run the function here
window.onload = function (){
  console.log("test message");
  document.getElementById("canvas1").innerText = greeter(user);
  document.getElementById("canvas2").innerText = greeter(stud);
  
}

