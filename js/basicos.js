 // Funcion DECLARADA

 function estoesunanFuncion() {
    console.log('uno');
    console.log('dos');
    console.log('tres');
}

function unaFuncionquedevuelveValor() {
    console.log('uno');
    return 19;
    console.log('dos');
    console.log('tres');
    return "la funcion ha retornado un valor";
}

function saludar(nombre,edad){
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`);
}

// funcion expresada 

const Funcionexpresada = function(){
console.log('esta es una funcion expresada')
}
// Invocacion de funciones

saludar('kenay',7)
Funcionexpresada();
let valor = unaFuncionquedevuelveValor();

console.log(valor)