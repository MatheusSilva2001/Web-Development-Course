let velocidade = 60;
let motorista = 20;

if(motorista > velocidade){
    console.log("Foi multado por alta velocidade");  
}
else if (motorista < velocidade/2){
    console.log("Foi multado por baixa velocidade");
    
}
else {
    console.log("Não foi multado");
    
}