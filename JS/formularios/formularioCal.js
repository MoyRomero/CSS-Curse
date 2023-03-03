const select     = document.createElement("SELECT");
const option     = document.querySelector("#alumnos option");
const buttonC    = document.getElementById("btnConf");
const form       = document.querySelector(".formulario");
const contInfo   = document.querySelector(".printMats");
const formTabSel = document.getElementById("formTabSel");
let printedTable = false;
let tabla = null;

let grupo_1 = 
[
 {nombre:"PAULA",   edad:18, materia_1:["Química",9], materia_2:["TIC'S",9], materia_3:["Matemáticas",9],},
 {nombre:"ALONDRA", edad:18, materia_1:["Química",5], materia_2:["TIC'S",9], materia_3:["Matemáticas",8],},
 {nombre:"JOSÉ",    edad:19, materia_1:["Química",7], materia_2:["TIC'S",7], materia_3:["Matemáticas",7],},
 {nombre:"PANCHO",  edad:20, materia_1:["Química",8], materia_2:["TIC'S",8], materia_3:["Matemáticas",5],},
];

    function selectAlumnos(){

        let nombre    = null;
        const fragmento = document.createDocumentFragment();
        select.setAttribute("id","alumnos")
        fragmento.appendChild(select);

                    for (let i = -1; i<grupo_1.length; i++) {            

                        const option = document.createElement("OPTION");

                            select.appendChild(option);

                            if(i==-1){  
                                option.textContent="Selecciona Alumno";                               
                                option.style.display="none"
                                continue;                                
                            }

                            if(i>=0){
                                nombre = grupo_1[i].nombre;
                                option.textContent = `${nombre}`;
                            }                                 
                    }

                    
                    contInfo.appendChild(fragmento);

    }    

    buttonC.addEventListener("click", function getCalf(e){

        if(printedTable == false){
           
            selectAlumnos();
            tabla = printTable();              
            console.log(`el último valor de PrintedTable es: ${printedTable}`);
            console.log(`el valor de tabla es: ${tabla}`);                      
            printedTable = true;
        }

        e.preventDefault();
        
        let calificaciones  = null;
        let materias        = null;
        let nombreS = select.value;       

        for (let i = 0; i < grupo_1.length; i++) {            

            if(grupo_1[i].nombre == nombreS){               

                    materias       = [grupo_1[i].materia_1[0],grupo_1[i].materia_2[0],grupo_1[i].materia_3[0]];
                    calificaciones = [grupo_1[i].materia_1[1],grupo_1[i].materia_2[1],grupo_1[i].materia_3[1]];
                                              
                break;
            }                       
        }    

        let matsCalf = [materias,calificaciones];
        
        if(nombreS !== "Selecciona Alumno"){
            createLabelOptions(matsCalf, tabla);   

            buttonC.style.display="none";
        }
    });
   
    function createLabelOptions(matsCalf, tabla){          

        const fragmento = document.createDocumentFragment();

            for(let i = 0; i < 3; i++){
    
                const contenedor = document.createElement("DIV");
                const labelMat   = document.createElement("LABEL");
                const selectCal  = document.createElement("SELECT");
                const optCal     = document.createElement("OPTION");
                    
                    optCal.style.visibility="hidden"
                    
                        contenedor.setAttribute("class","cajaMatsCal");
                        selectCal.setAttribute("class",`selectCal${i}`);

                            fragmento.appendChild(contenedor);
                            contenedor.appendChild(labelMat);
                            contenedor.appendChild(selectCal);                        
                            
                                labelMat.textContent = `${matsCalf[0][i]}:`;
                    
                                    selectCal.appendChild(optCal);
                                    selectCal.appendChild(createOptions());
                                    optCal.textContent = `${matsCalf[1][i]}`;                  
    
                }
                
                form.appendChild(fragmento);     

                reasignarCalificacion(tabla);
    }

    function createOptions(){

        const fragOpt = document.createDocumentFragment();

            for(let a=0; a<=10; a++){
                
                const optCal = document.createElement("OPTION");

                        fragOpt.appendChild(optCal);
                        optCal.textContent = `${a}`;                        
                            
            }
                return fragOpt;
    }

    function reasignarCalificacion(tabla){

        const buttonRC = document.createElement("BUTTON");

            buttonRC.setAttribute("id","btnEnviar");
            buttonRC.textContent="MODIFICAR";           

                form.appendChild(buttonRC);

        buttonRC.addEventListener("click", (e)=>{    

            e.preventDefault();

            let nombreS = select.value;

            const selectCal0 = document.querySelector(".selectCal0"); 
            const selectCal1 = document.querySelector(".selectCal1"); 
            const selectCal2 = document.querySelector(".selectCal2"); 
            
            let calMod1 = parseInt(selectCal0.value);
            let calMod2 = parseInt(selectCal1.value);
            let calMod3 = parseInt(selectCal2.value); 

            for (let i = 0; i < grupo_1.length; i++) { 

                if(grupo_1[i].nombre == nombreS){                 

                    if(calMod1 != grupo_1[i].materia_1[1]){
                        grupo_1[i].materia_1.splice(1,1, calMod1);                    
                    }                    

                    if(calMod2 != grupo_1[i].materia_2[1]){
                        grupo_1[i].materia_2.splice(1,1, calMod2);                    
                    }                    

                    if(calMod3 != grupo_1[i].materia_3[1]){
                        grupo_1[i].materia_3.splice(1,1, calMod3);                    
                    }                                               
                   
                }                       
            }

            console.log(`reasignar tabla: ${tabla}`);
            eliminarTabla(tabla, printTable(), buttonRC);  

        });
    }

    function printTable(){

        const TABLE     = document.createElement("TABLE");
        const fragmento = document.createDocumentFragment();
        

            for(let i = 0; i < grupo_1.length; i++){

                const th = document.createElement("TH"); 
                const th2 = document.createElement("TH");           
                const tr  = document.createElement("TR");
                const td1 = document.createElement("TD");
                const td2 = document.createElement("TD");
                const td3 = document.createElement("TD");
                const td4 = document.createElement("TD");

                    th.innerHTML   ="NOBRE";
                    th2.innerHTML  ="MATERIA : PROMEDIO";
                    th2.setAttribute("colspan","3")
                    td1.innerHTML = grupo_1[i].nombre;
                    td2.innerHTML = grupo_1[i].materia_1.join(": ");
                    td3.innerHTML = grupo_1[i].materia_2.join(": ");
                    td4.innerHTML = grupo_1[i].materia_3.join(": "); 

                        if(i == 0) TABLE.appendChild(th);
                        if(i == 0) TABLE.appendChild(th2);

                            TABLE.appendChild(tr);
                            tr.appendChild(td1);
                            tr.appendChild(td2);
                            tr.appendChild(td3);
                            tr.appendChild(td4);                        
                
            }

                        fragmento.appendChild(TABLE);
                        contInfo.appendChild(fragmento);
            
        return TABLE;
    }

    function eliminarTabla(tabla_1,tabla_2,buttonRC){

        console.log(`tabla 1:${tabla_1} tabla 2:${tabla_2}`);
            
            contInfo.replaceChild(tabla_2,tabla_1);       
           
                alert("Se realizaron los cambios.");
            
                    buttonRC.style.display="none"
       }
   