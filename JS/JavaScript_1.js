

const crearDiv =()=>{

for (let i=0;i<3;i++) {

let div = document.createElement("DIV");

div.setAttribute("class","informacionCaja");

const contenedor = document.querySelector(".contenedorHTML");

contenedor.appendChild(div);

	}
}


crearDiv();









