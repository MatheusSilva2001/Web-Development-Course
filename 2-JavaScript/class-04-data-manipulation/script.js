// strings

console.log("test");

let concept = "prototypes (chain)";
let myName = "Matheus Rian";

console.log(myName.__proto__);
console.log(myName.toLocaleLowerCase());
console.log(myName.toLocaleUpperCase());
console.log(myName.slice(2));
console.log(myName.slice(-3));
console.log(myName.slice(2, -3));

console.log(concept.length);
console.log(concept.indexOf("("));

// numbers

let num1 = 2423432343254234324392489;
let num2 = 5.44350934285023485;

console.log(String(num1).length);
console.log(num2);
console.log(num2.toFixed(2));

console.log(Math.sqrt(81));
console.log(Math.pow(2, 10));

console.log(Math.abs(num2));
console.log(Math.trunc(num2));

console.log(Math.round(5.5));
console.log(Math.ceil(5.001));
console.log(Math.floor(5.999));

console.log(Math.ceil(Math.random() * 100));

const times = [
  "Corinthians",
  "Flamengo",
  "Vasco",
  "Fortaleza",
  "Ceará",
  "São Paulo",
];

const randomNumber = Math.floor(Math.random() * times.length);
console.log(times[randomNumber]);

//array

const city = ["Jucás", "Iguatu", "Cariús", "Fortaleza", "Salvador"];
console.log(city.length);
console.log(city[1]);
console.log(city);

let a = "Matheus";
a[1] = "B";
console.log(a);

console.log(city.join("-"));
console.log("Bem vindo à aula".replaceAll(" ", "-"));

console.log(city.includes("Iguatu"));
console.log("Matheus Rian da Silva Duarte".split(" "));

console.log(city.reverse());
console.log("Matheus".split("").reverse().join(""));

function wordCount(text) {
  const count = text.split(" ").length;
  return count;
}

console.log(wordCount("Matheus Rian"));
