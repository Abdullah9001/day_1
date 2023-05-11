// This is my Javascript practise part

// First lession

// Javascript Function

function sleep(names, time) {
  console.log(names + " is sleeping from " + time);
}
console.log("hello, this is abdullah jubayer");

sleep("Akram", "10 PM");

sleep("Jasim", "12 PM");
sleep("Kawsar", "9 AM");

function myFunction(a, b) {
  return a * b;
}

let x = myFunction(5, 10);

console.log(x);

function toSelcius(farenheit) {
  return (5 / 9) * (farenheit - 32);
}

console.log(toSelcius(77));

let t = "the temparatur is " + toSelcius(104) + " selcius";
console.log(t);

let otherName = "Let's have some fun";

function otherFunction(names2) {
  return names2 + "this is awesome " + otherName;
}

otherFunction("Hey Jubayer");

let y = otherFunction("Abdullah ");
console.log(y);

let car2 = "maruti";

function carName() {
  let car = "volbo";
  console.log(car2);
  console.log(car + " & " + car2);
}

carName();

function personDetails(name, state, age, job) {
  console.log(
    "Name: " + name + " State: " + state + " Age: " + age + " Job: " + job
  );
  return;
}

personDetails("Jasim", "Dhaka", "32", "Kamla");
personDetails("Karim", "Dhaka", "32", "Kamla");
personDetails("Abdullah", "Sirajganj", "23", "Front-end Developer");

// First lession done

// Second lession

// Javascrip Objects

const cars = {
  name: "volbo",
  model: 500,
  price: "30 lakh",
  weight: "600kg",
  start: function () {
    this.drive();
    console.log("Cars is start now");
  },
  drive: function () {
    console.log("Cars is driving by aj");
  },
};

cars.start();
console.log(cars["weight"]);
console.log(cars.model);
console.log(cars.name);

const person = {
  firstName: "Abdullah",
  LastName: "Jubayer",
  id: 49876954,
  fullName: function () {
    return this.firstName + " " + this.LastName;
  },
};

console.log(person.fullName());
