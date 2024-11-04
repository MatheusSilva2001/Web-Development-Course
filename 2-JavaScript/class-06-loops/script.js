//flag
let count = 0;

while (count < 100) {
  count += 1;

  if (count >= 30 && count <= 79) {
    continue;
    break;
  }

  if (count % 2 == 0) {
    console.log(count);
    
  }
}

for (let count = 0; count <= 10; count ++ ) {
    console.log(count);
    
}

const students = [
    { name: "Pelé" , n1: 7, n2: 8},
    { name: "Vini Jr" , n1: 8, n2: 6},
    { name: "Mané Garrincha" , n1: 5, n2: 6},
]

for (let i = 0; i < students.length; i++) {
    const avg = (students[i].n1 + students[i].n2) / 2;

    if (avg >= 7) {
        console.log (`${students[i].name} aprovado por média ${avg}`);   
    }
    else {
        console.log (`${students[i].name} reprovado por média ${avg}`);   
    }
}

console.log("End");
