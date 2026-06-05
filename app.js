//Declaraciones de variables
const estudiantes = [
  { id: 1, nombre: "Ana Lopez",    nota: 90 },
  { id: 2, nombre: "Carlos Ruiz",  nota: 55 },
  { id: 3, nombre: "Maria Torres", nota: 78 },
  { id: 4, nombre: "Luis Mendez",  nota: 45 },
  { id: 5, nombre: "Sofia Rios",   nota: 88 },
  { id: 6, nombre: "Pedro Soto",   nota: 62 },
  { id: 7, nombre: "Joan Salgado", nota: 65 },
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
    const listaTarjetas = estudianteApintar.map( //La función map adentro de ello vauna función de flecha
        (unEstudiante) => {
            const tarjeta = crearTarjeta(unEstudiante);
            return tarjeta;
        }
    );
    seccionEstudiantes.innerHTML = listaTarjetas.join("");
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

/*btnPromedio.addEventListener('click', 
    () => {
        const promedio = estudiantes.filter(
            (un)
        );
    }
);*/

//Llamadas a funciones
/*const tarjetaX = crearTarjeta(EstudianteX);
console.log(tarjetaX);*/

renderizarLista(estudiantes);