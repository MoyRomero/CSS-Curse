const btnConfirmar  = document.querySelector("#btnNum");

const divInputs     = document.querySelector("#inputMats");

const inptRep       = document.getElementById("numRep");

const inputs        = document.querySelectorAll(".datos");


btnConfirmar.addEventListener("click",function(reprobadas){
    let nombre = [];

    reprobadas.preventDefault();
       
            for(let valor of inputs) {

                if(valor.value == ""){
                    alert("Debes llenar los campos NOMBRES,  APELLIDOS y CANT DE REPROBADAS.");
                    return; 
                }

                nombre.push(valor.value);                 
            }

        if(inptRep.value <= 0){
            alert(`El valor de las materias reprobadas, debe ser mayor que 0.`);
        }
        
        else{
           
                reprobadas = inptRep.value;

                    btnConfirmar.style.display="none";
                    
                        console.log(`Numero de reprobadas es: ${reprobadas}`);

                            //nombre de la función con su parámetro.
                            crearInputs(reprobadas,nombre);
        }
    
    });

function crearInputs(numeroRep,nombre){ 

    const fragmento = document.createDocumentFragment();

    const indicacion = document.createElement("P");
    indicacion.innerHTML = `Por favor ${nombre[0]}, introduce el nombre de cada materia reprobada.`;    

    let contador    = 1;
        
    fragmento.appendChild(indicacion);

        for(let i = 0; i < numeroRep; i++){
                
                const inputMat  = document.createElement("INPUT");            

                    inputMat.setAttribute("type","text");
                    inputMat.setAttribute("id","Mats");
                    inputMat.setAttribute("placeholder",`NOMBRE MATERIA: ${contador}`);
                    contador++;        

                        fragmento.appendChild(inputMat);  

            }
                fragmento.appendChild(botonEnviar());                
                divInputs.appendChild(fragmento);

}

function botonEnviar(){

    const botonSbmt = document.createElement("BUTTON");
        botonSbmt.setAttribute("type","submit");
        botonSbmt.setAttribute("id","enviar");
        botonSbmt.textContent = "ENVIAR";      
           
    botonSbmt.addEventListener("click", function(e){

        //e.preventDefault();

        let nombreMaterias = [];
            
        const inputMat = document.querySelectorAll("#Mats");

        for(let valor of inputMat) {

            if(valor.value == ""){
                alert("Debes llenar los campos de MATERIAS antes de enviar.");
                e.preventDefault();
                return; 
            }
                        
            nombreMaterias.push(valor.value); 
            console.log(nombreMaterias)                
        }

        alert("Se envió el formulario.")
        console.log("HOLA JAJA");

    });

    return botonSbmt;
}