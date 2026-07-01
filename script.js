let proyectos = [];

const panorama = document.getElementById("panorama");
const sky = document.getElementById("sky");

window.addEventListener("load", cargarLista);

async function cargarLista(){

    const response = await fetch("./entregas/semestre-1-2026/lista.json");
    const data = await response.json();
    proyectos = data.proyectos;
    console.log(proyectos);
    cargarProyecto(0);

}

function cargarProyecto(indice){

    const proyecto = proyectos[indice];
    const sky = document.getElementById("sky");
    sky.setAttribute("src", proyecto.image);

}