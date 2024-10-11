class alumnos {
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

}

let edad1 = (Math.random()*100+1);
const persona1 = new alumnos('Enrique', edad1);

let edad2 = (Math.random()*100+1);
const persona2 = new alumnos('Luna', edad2);

let edad3 = (Math.random()*100+1);
const persona3 = new alumnos('Alicia', edad3);

let edad4 = (Math.random()*100+1);
const persona4 = new alumnos('Álvaro', edad4);

let edad5 = (Math.random()*100+1);
const persona5 = new alumnos('David', edad5);

let edad6 = (Math.random()*100+1);
const persona6 = new alumnos('Hugo', edad6);

let edad7 = (Math.random()*100+1);
const persona7 = new alumnos('Laura', edad7);

let edad8 = (Math.random()*100+1);
const persona8 = new alumnos('Moises', edad8);

let edad9 = (Math.random()*100+1);
const persona9 = new alumnos('Faura', edad9);

let edad10 = (Math.random()*100+1);
const persona10 = new alumnos('MoneyMakers', edad10);

const personas = [persona1,persona2,persona3,persona4,persona5,persona6,persona7,persona8,persona9,persona10];

let contador = 0;

let boton = document.getElementById('crearTarjeta');
boton.addEventListener('click', function() {
  crearTarjeta(personas[contador]);
  contador++;
});
let contenedor = document.getElementById('contenedor');

function crearTarjeta(personas) {
    console.log("Estoy creando una tarjeta");
    let tarjeta = document.createElement('div');

    tarjeta.classList.add('tarjeta');
    tarjeta.style.border = '1px solid #000';
    tarjeta.style.padding = '10px';
    tarjeta.style.margin = '10px';
    tarjeta.style.width = '200px';
  
    let titulo = document.createElement('h3');
    titulo.textContent = personas.nombre;
  
    let edad = document.createElement('p');
    edad.textContent = personas.edad;
  
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(edad);
  
    contenedor.appendChild(tarjeta);
  };
  if (contador < personas.length) {
    crearTarjeta(personas[contador]); 
    contador++;                    
  } else {
    alert('No hay más tarjetas que mostrar.');
  };

