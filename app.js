//Declaraciones de variables
const estudiantes = [
  { id: 1, nombre: "Ana Lopez",    nota: 90 },
  { id: 2, nombre: "Carlos Ruiz",  nota: 55 },
  { id: 3, nombre: "Maria Torres", nota: 78 },
  { id: 4, nombre: "Luis Mendez",  nota: 45 },
  { id: 5, nombre: "Sofia Rios",   nota: 88 },
  { id: 6, nombre: "Pedro Soto",   nota: 62 },
];

/*Declaración de un estudiante solo
const EstudianteX = {
    id: 7, nombre: "Joan Salgado", nota: 95
}*/

//Referencias a DOM
    const seccionEstudiantes = document.getElementById("lista-estudiantes"); //con document.getElementById podemos hacer referencia a una section del HTML
    //El nombre que va dentro de los parentesís debe ser igual al nombre del Id que tiene el section
    const btnTodos = document.getElementById("btn-todos");
    const btnAprobados = document.getElementById("btn-aprobados");
    const btnReprobados = document.getElementById("btn-reprobados");
    const btnPromedio = document.getElementById("btn-promedio");
    const seccionPromedio = document.getElementById("resultado-promedio");
    //Referencias del formulario
    const inputNombre = document.getElementById("input-nombre");
    const inputNota = document.getElementById("input-nota");
    const btnAgregar = document.getElementById("btn-agregar");

//Funciones
const crearTarjeta = (unEstudiante) => {
    const estado = unEstudiante.nota > 60 ? "Aprobado" : "Reprobado";
    const clase = unEstudiante.nota > 60 ? "aprobado" : "reprobado";
    const tarjeta = `
        <div class="tarjeta ${clase}">
            <h2>${unEstudiante.nombre}</h2>
            <p>Nota: ${unEstudiante.nota}</p>
            <p>${estado}</p>
        </div>
    `;
    return tarjeta;
}

const renderizarLista = (estudianteApintar) => {
    const listaTarjetas = estudianteApintar.map( //La función map adentro de ello va una función de flecha
        (unEstudiante) => {
            const tarjeta = crearTarjeta(unEstudiante);
            return tarjeta;
        }
    );
    seccionEstudiantes.innerHTML = listaTarjetas.join("");
}

/*FUNCIÓN PARA TRONCAR EL RESULTADO DEL PROMEDIO*/
const toFixedTrunc = (num, decimales) => {
    //10 elevado al número de decimales que deseas conservar
    const factor = Math.pow(10, decimales);

    //Multiplica, corta los decimales restantes y vuelve a dividir
    const truncado = Math.trunc(num * factor) / factor;

    //Retorna el string con el formato fijo final sin redondear
    return truncado.toFixed(decimales);

}

//Eventos
btnTodos.addEventListener('click',
    () => {
        renderizarLista(estudiantes);
    }
);

btnAprobados.addEventListener('click',
    () => {
        const aprobados = estudiantes.filter(
            (unEstudianteX) => {
                return unEstudianteX.nota > 60;
            }
        );
        renderizarLista(aprobados);
    }
);

btnReprobados.addEventListener('click',
    () => {
        const reprobados = estudiantes.filter(
            (unEstudianteX) => {
                return unEstudianteX.nota < 61;
            }
        );
        renderizarLista(reprobados);
    }
);

btnPromedio.addEventListener('click', 
    () => {               //nom. de la lista original 
        const sumaNotas = estudiantes.reduce(
            (valorPersistente, estudiante) => {
                return valorPersistente + estudiante.nota;
            }, 
        0); //El reduce se utiliza cuando vamos hacer un contador
        const promedio = sumaNotas / estudiantes.length;
        /*console.log(toFixedTrunc(promedio,2));*/  
        seccionPromedio.innerHTML = "Promedio: " + toFixedTrunc(promedio,2); 
        seccionPromedio.style.display = "block"; 
    }
);

btnAgregar.addEventListener('click', () => {
        const nombre = inputNombre.value.trim();
        const nota = parseInt(inputNota.value.trim()); //parse Int es para transformar el string a un valor, en este caso en un valor entero

            //validación nom. //si deja la nota vacia       
        if (nombre === "" || isNaN(nota) || nota < 0 || nota > 100) { 
            alert("Por favor, ingresa un nombre válido y una nota entre 0 y 100");
            return; //No retorna nada, pero si entra al if bloquea o detiene la ejecución siguiente
        }

        const nuevoEstudiante = {
            id: estudiantes.length + 1,
            nombre: nombre, 
            nota: nota
        };

        estudiantes.push(nuevoEstudiante); //.push es para agregar un nuevo objeto a una lista de objetos ya existentes
        renderizarLista(estudiantes);

        inputNombre.value = "";
        inputNota.value = "";
});

//Llamadas a funciones
/*const tarjetaX = crearTarjeta(EstudianteX);
console.log(tarjetaX);*/

renderizarLista(estudiantes);