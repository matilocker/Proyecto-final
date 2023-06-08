import { navigation_bar, pieDePagina, elementodelObjeto } from "./utils.js";

const render = async () => {
    navigation_bar();
    pieDePagina();
    elementodelObjeto();
    await alimentarRopa();
}

window.onload = render;

// intronosotros

const intronosotros = document.getElementById('Introduccion');

const titulo = document.createElement('h1');
titulo.innerHTML = 'Nuestra Misión';


const parrafo = document.createElement('p');
parrafo.innerHTML = 'Te traeremos más alegría y comodidad a tu vida mediante el diseño de productos perfectos para ti.';
parrafo.style.textAlign = 'center';

intronosotros.appendChild(titulo);
intronosotros.appendChild(parrafo);

// tituloIntegrantes


const tituloIntegrantes = document.getElementById('tituloIntegrantes');

const integrantes = document.createElement('h2');
integrantes.innerHTML = 'Nuestra Misión';
integrantes.style.textAlign = 'center'; 

tituloIntegrantes.appendChild(integrantes);

// div primer integrante 

const datosIntegrantes = [

{
  
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgMkDHquJTBDZmOSo3d1O-5Mk0FHjz3jIXHw&usqp=CAU",
    titulo: 'Diana',
    descripcion: 'Mi nombre es Diana. Soy una diseñadora de multimedios exitosa que ha realizado múltiples trabajs de diseño web con multinacionales de renombre. En este momento dueña de su propio emprendimiento d eropa de moda circular y feliz de portar un poco a la diferencia en la transición energética.'

},

{
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgsw7GyGWCn0dGFoP3GGfwx78kKe9bHKB5dUj89BuL3tsUfyQ6n3wn3FebgMyyonv2VIU&usqp=CAU",
    titulo: 'Mateo',
    descripcion: 'Mi nombre es Mateo. Soy un artista performático y psicólogo de profesión. Mi mayor sueño fue poder realizar un emprendimiento de moda circular que me permita también ser mi propio jefe y poder disfrutar de mi tiempo realizando algo que me gusta y aporta al cambio climático.',

},

];

const divint = document.getElementById('divintegrantes');

datosIntegrantes.forEach(dato => {

    let imagen = document.createElement('img');
    imagen.src = dato.imagen;
    
    

    let parrafo = document.createElement('p');
    parrafo.innerHTML = dato.descripcion;


    const divcreados = document.createElement('div');
    divcreados.classList.add('contenedor-divs');
    divcreados.appendChild(imagen);
    divcreados.appendChild(parrafo);


    divint.appendChild(divcreados);
   

});