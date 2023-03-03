
const ul          = document.querySelector(".Ul");
const input       = document.querySelector("#inputItem");
const botonAg     = document.querySelector("#btnAg");
const empty       = document.querySelector(".empty");
const toDoListKey = "LlaveToDoList-";
let toDoList;
toDoList = updateToDo();

function updateToDo(){
     
    toDoList = { "tareas":[] };

    if(localStorage.key(0) != null || localStorage.key(1) != null ){    
    
        toDoList = JSON.parse(localStorage.getItem(toDoListKey));
        
    }
    return toDoList;
}

function agregar(){      

    botonAg.addEventListener("click", ()=>{
        
        const tarea = input.value;        
        
            if(tarea === "" || tarea === " "){ 

                alert("Escribe la tarea para agregar a la lista."); 

                return;
             }
             
             for(let i = 0; i < toDoList.tareas.length; i++){               

                if(toDoList.tareas[i].tarea == tarea){

                    alert(`Ya se ha agregado la tarea ${tarea}, agrega una distinta.`);
                    console.log("Ya se ha agregado la tarea: " + tarea);
                    return;
                }
            }

        let fecha = getDate(tarea);   

            sendDataToLocalStorage(fecha,tarea); 
            refillToDo(fecha,tarea);                     
        
    });
}

function refillToDo(fecha,tarea){
    
    const li = document.createElement("LI");
    const p  = document.createElement("P");
        
                    p.textContent = tarea;         
                    
                        li.appendChild(p);
                        li.appendChild(botonEliminar(fecha));              
                        ul.appendChild(li);

                            input.value = "";
                            empty.style.visibility = "hidden";

}

function botonEliminar(fecha){    
    //localStorage.clear();
    console.log(fecha);
    
    const btnEl = document.createElement("I");

        btnEl.setAttribute("class", "fa-solid fa-trash");

            btnEl.addEventListener("click", (e)=>{
                
                let objetoRecuperado = JSON.parse(localStorage.getItem(toDoListKey));                

                for(let i = 0; i < objetoRecuperado.tareas.length; i++){ 

                    if(objetoRecuperado.tareas[i].fecha == fecha){

                        toDoList.tareas.splice(i,1);
                        
                        localStorage.setItem(toDoListKey,JSON.stringify(toDoList));
                    }                  
                }              
                
                const item = e.target.parentElement;
                const items = document.querySelectorAll("#cajaLista LI");               
                            
                        ul.removeChild(item);
                        
                            if(items.length === 1){
                                
                                 empty.style.visibility = "visible"; 
                            }
            });
        return btnEl;
}

function getDate(){

    const Fecha    = new Date();
    const mes      = Fecha.getMonth();
    const dia      = Fecha.getDate();
    const hora     = Fecha.getHours();
    const minuto   = Fecha.getMinutes();
    const segundos = Fecha.getSeconds();
    
    const fecha  = `${dia}/${mes+1} ${hora}:${minuto}:${segundos} hrs`;

    return fecha;

}

function getValues(){
   
    if(localStorage.key(0) != null){

        let toDoListR = JSON.parse(localStorage.getItem(toDoListKey));        
        let fecha;
        let tarea;

        for(let i = 0; i < toDoListR.tareas.length; i++){

            fecha = toDoListR.tareas[i].fecha;
            tarea = toDoListR.tareas[i].tarea;

            refillToDo(fecha,tarea);

        }
    } else{
        console.log(`localStorage.key(0) es = a: ${localStorage.key(0)}`);
        console.log(`y toDoList es = a:`); 
        console.log(toDoList);      
    }
}

function sendDataToLocalStorage(fecha,tarea){

    const valores = {fecha:fecha, tarea:tarea};

    console.log(`P fecha: ${fecha}. P tarea: ${tarea}.`);

    toDoList.tareas.push(valores);

    localStorage.setItem(toDoListKey, JSON.stringify(toDoList));

}
 agregar();
 getValues(); 
