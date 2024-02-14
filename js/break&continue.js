const numeros =[1,2,3,4,5,6,7,8,9,10];

for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    if (index === 5) {
        break;
    }
    console.log(element);
    
}

for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    if (index === 5) {
        continue;
    }
    console.log(element);
    
}