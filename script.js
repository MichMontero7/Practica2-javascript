console.log("Hola Mundo");

const nombre = "Isai";
let apellido = "Montero"; //Si se le puede cambiar el valor

console.log(nombre);
console.log(apellido);

//nombre = "Fernanda";
apellido = "Granados";

console.log(apellido);

//Objetos de JavaScript
const persona = {
    nombre : "Joan",
    apellidos : "Dominguez",
    edad : 19,
    apodos : [
        "Joan",
        "Entrenador",
        "Jugador"
    ]
};

console.log(persona.apellidos);
console.log("=========== FIN DE OBJETOS =====================");

//Funciones en JavaScript
/*function saludar (nombre) {
    return "Hola " + nombre;
}*/

/*const saludar = (nombre) => { ->Función de flecha
    return "Hola " + nombre;
}*/

const saludar = nombre =>   //Función Lambda
        "Hola " + nombre;

const saludo = saludar(persona.nombre); //Se almacena y se imprime la función
console.log(saludo);
console.log("======== FIN DE OBJETOS ==========");

console.log("======== LISTAS ==========");

const listaNumeros = [
    7, 27, 11, 77
];

console.log(listaNumeros);
listaNumeros[2] = 87;
console.log(listaNumeros);

const numerosMultiplicados = listaNumeros.map(
    (numeroEnElQueVoy) => {
        return numeroEnElQueVoy * 3;
    }
);

console.log(numerosMultiplicados);

const numerosObjetos = listaNumeros.map(
    (numeroEnElQueVoy) => {
        return{
            valor: numeroEnElQueVoy
        };
    }
);
console.log(numerosObjetos);

console.log("======= FUNCIÓN FILTER =======");
//Función filter
const numerosX = [90, 70, 30, 60, 5];
const numerosFiltrados = numerosX.filter(
    numX => numX > 50
);
console.log(numerosFiltrados);

//Función filter con objetos (Arrys)
const personas = [
    {
        nombre: "Isai", edad: 12
    }, //las {} representan un objeto del arreglo
    {
        nombre: "Joan", edad: 20
    },
    {
        nombre: "Fernanda", edad: 18
    }
];

const personasMayores = personas.filter(
    (personaX) => {
        return personaX.edad > 17;
    }
);
console.log(personasMayores);

console.log("======= FUNCIÓN REDUCE =======");
//Función reduce
const numerosY = [3,6,9,18,20,22];

const sumaNumeros = numerosY.reduce(
    (variablePersistente, elemento) =>
        variablePersistente + elemento //Un sumador/ contador
    ,
    0
);
/*La función reduce recibe dos argumentos, la función flecha y el valor inicial
que estará pendiente en cada vuelta de comparación*/
console.log(sumaNumeros);
