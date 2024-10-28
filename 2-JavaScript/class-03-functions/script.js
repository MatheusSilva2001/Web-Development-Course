function addNumbers(num1 , num2) {
    return num1 + num2;
}

console.log(addNumbers(255, 376));
console.log(addNumbers(23, 56));
console.log(addNumbers(98124, 9315876));

function calcAvg(n1 , n2) {
    const avg = (n1 + n2) / 2; 
    return avg;
}

console.log(calcAvg(7 , 8));
console.log(calcAvg(9 , 2));
console.log(calcAvg(1 , 4));
console.log(calcAvg(4 , 7));

const myName = prompt("Digite seu nome:"); //input

const grade1 = Number(prompt("Nota 1:"))
const grade2 = Number(prompt("Nota 2:"))
const studentAvg = calcAvg(grade1 , grade2); 
const sumGrades = addNumbers(grade1 , grade2); 


alert(`Oi, ${myName}, seja bem-vindo! A soma das notas é ${sumGrades} e sua média é ${studentAvg}!`) //output

