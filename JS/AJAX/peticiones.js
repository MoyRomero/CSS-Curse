
const article      = document.querySelector("article");
const button       = document.createElement("BUTTON");
const div          = document.createElement("DIV");
const peticion     = new XMLHttpRequest;   
const link         = ["datosJSON.txt", "https://reqres.in/api/users", "alumnosGrupo.txt"];
const metodo       = ["GET", "POST"];
const headersDatos = JSON.stringify({
                        "NOMBRE" : "MOI",
                        "PSN ID" : "MoyRomero",
                            "EDAD"  : "27 yo",
                "Año nacimiento" : "1996",
                "Mes nacimiento" : "June",
                        "SIGNO"  : "GÉM",
                        "COLOR"  : "BLACK",
                        "ALTURA" : "1.75m"
                    });
let respuesta  = undefined; 


  
function peticionGET(){
    //peticion.addEventListener("readystatechange", ()=>{
    
setTimeout(() => {        

        peticion.addEventListener("load", ()=>{
            let estado = peticion.readyState;
            respuesta  = peticion.response;
            
            if (estado == 1){
                console.log(`Estado: ${estado} Solicitud se creó correctamente.`);
            }
            else if(estado == 2){
                console.log(`Estado: ${estado} Solicitud se envió correctamente.`);
            }
            else if(estado == 3){
                console.log(`Estado: ${estado} Procesando petición.`);
            }
            else if(estado == 4){
                console.log(`Estado: ${estado} Resultado listo.`);            
                console.log(`Los datos recibidos de la dirección ${link[0]} son los siguientes:`);
                console.log(respuesta);
            }        
        });

        peticion.open(metodo[0],link[0]);

        peticion.send();

        console.log("Peticion:GET -------------------");
}, 1000);

}

function peticionPOST(){
    //peticion.addEventListener("readystatechange", ()=>{

setTimeout(() => {

        peticion.addEventListener("load", ()=>{
            let estado = peticion.status;
            respuesta = peticion.response;

            if (estado == 200 || estado == 201){
                console.log(`Estado: ${estado} Solicitud se creó y se envió correctamente.`);
                console.log(JSON.parse(respuesta));
            }
            else{
                console.log(`Estado: ${estado}. Lo sentimos, no se ha encontrado el recurso.`);
            } 
        });

    peticion.open(metodo[1],link[1]);

    peticion.setRequestHeader("Content-type", "application/json;charset=UTF8");

        peticion.send(JSON.stringify({

                    "NOMBRE" : "MOISES",
                    "PSN ID" : "MoyRomero",
                    "EDAD"  : "27",
            "Año nacimiento" : "1995",
            "Mes nacimiento" : "Junio"   
                    
        }));
    console.log("Peticion:POST -------------------");
}, 2000);

}

function peticionFetchPost(){
    setTimeout(() => {           
    
        fetch(link[1],{
            method : metodo[1],
            body: headersDatos,
            headers: {"Content-type" : "application/json"}
        }).then(res=> res.json())
        .then(res=> console.log(res))

    console.log("Peticion:Fetch POST -------------");

    }, 4000);

}

function peticionAxios(){

    setTimeout(() => {           
    
        axios.post(link[0], headersDatos)
        .then(res=> console.log(res.data));

        console.log("Peticion: AXIOS post -------------");

    }, 5000);

}

const peticionCofla = async() =>{  

    try{
        let peticion = await axios(link[2]);

        console.log(peticion.data);

        let informacion = `
        INFORMACIÓN DEL GRUPO: <BR><BR>
        APROBADOS:${peticion.data.APROBADOS}<BR><BR>
        DESAPROBADOS:${peticion.data.DESAPROBADOS}`;

        div.innerHTML = informacion;

    } catch(e){
        div.innerHTML="La API falló."
    }

}

function crearInterfaz(){

            button.textContent = "MOSTRAR ALUMNOS";
            article.appendChild(div);
            div.appendChild(button);

}

// peticionGET();

// peticionPOST();

// peticionFetchPost();

// peticionAxios();

crearInterfaz()

button.addEventListener("click", peticionCofla);