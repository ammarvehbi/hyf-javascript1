//8.1
let a = "Let's make peace in the world.";
let b = 11;
let c = ["cats", "dogs", "birds"];
let d = { name: "Ammar", age: 28, surname: "Merakli" };
let e = true;
let f = null;
let g = undefined;

//8.2
console.log("The value of my variable a is: " + a);
console.log("The value of my variable b is: " + b);
console.log("The value of my variable c is: " + c);
console.log("The value of my variable d is: " + d);
console.log("The value of my variable d is: " + e);
console.log("The value of my variable d is: " + f);
console.log("The value of my variable d is: " + g);

//8.3
console.log("The type of my variable a is: string");
console.log("The type of my variable b is: number");
console.log("The type of my variable c is: object");
console.log("The type of my variable d is: object");
console.log("The type of my variable d is: boolean");
console.log("The type of my variable d is: object");
console.log("The type of my variable d is: undefined");

//8.4
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

//8.5
console.log(typeof a === typeof b);
console.log(typeof a === typeof c);
console.log(typeof a === typeof d);
console.log(typeof a === typeof e);
console.log(typeof a === typeof f);
console.log(typeof a === typeof g);
console.log(typeof b === typeof c);
console.log(typeof b === typeof d);
console.log(typeof b === typeof e);
console.log(typeof b === typeof f);
console.log(typeof b === typeof g);
console.log(typeof c === typeof d);
console.log(typeof c === typeof e);
console.log(typeof c === typeof f);
console.log(typeof c === typeof g);
console.log(typeof d === typeof e);
console.log(typeof d === typeof f);
console.log(typeof d === typeof g);
console.log(typeof e === typeof f);
console.log(typeof e === typeof g);
console.log(typeof f === typeof g);

//8.6
if (typeof a === typeof b) {
  console.log('SAME TYPE');
} else {
  console.log('DIFFERENT TYPE');
  alert('You can change the type of your variables to make them same type.');
}





