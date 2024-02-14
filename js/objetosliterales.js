let nombre = "Erick";
edad = 7;


const hombre= {
    nombre: nombre,
    edad: edad,
    ladrar: function () {
       console.log("guau guau") 
    }
};

console.log(hombre);
hombre.ladrar();


const persona ={
    nombre,
    edad,
    nacionalidad:"Mexicana",
    idioma(){
        console.log('en Mexico se habla Español')
    }
};

console.log(persona.nombre)
persona.idioma();