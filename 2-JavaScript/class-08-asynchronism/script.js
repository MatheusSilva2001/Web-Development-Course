// timeout and interval

console.log("Antes");

setTimeout(() => {
  console.log("Timeout");
}, 0);

setInterval(() => {
  console.log("Interval");
}, 0);

console.log("Depois");

// promises

const urlAPI = "https://jsonplaceholder.typicode.com";

fetch(urlAPI + "/users")
  .then((response) => response.json())
  .then((data) => console.log(data));

  console.log("Final");
  
