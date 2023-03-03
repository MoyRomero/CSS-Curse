const displayValorAnterior   = document.getElementById('valor-anterior');
const displayValorActual 	 = document.getElementById('valor-actual');
const spanNumeros 	 		 = document.querySelectorAll('.numero');
const spanOperadores 		 = document.querySelectorAll('.operador');


const display = new Display(displayValorAnterior, displayValorActual);

spanNumeros.forEach(boton => {
	boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));	
});


spanOperadores.forEach(boton => {
	boton.addEventListener('click', () => display.computar(boton.value));	
});


