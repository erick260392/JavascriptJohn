let numeros = [1,2,3];

let uno = numeros[0];
dos = numeros[1];
tres = numeros[2];

console.log(uno,dos,tres);

// destructuracion

const [one,two,three] = numeros;

console.log(one,two,three);

let persona = {
    nombre: "Erick",
    apellido: "Licona",
    edad: 31
}

let {nombre, apellido,edad } = persona;
 console.log(nombre,apellido,edad);
