const horas    = document.querySelector(".horas span");
const minutos  = document.querySelector(".minutos span");
const segundos = document.querySelector(".segundos span");

function getTime(){

    let tiempo   = new Date();
    let horas    = tiempo.getHours();
    let minutos  = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();

    console.log(horas,minutos,segundos);
    return [horas,minutos,segundos];

}

function sendTime(){

    setInterval(()=>{

        let tiempo = getTime();
        console.log(tiempo)
    
        horas.textContent = tiempo[0];
        minutos.textContent = tiempo[1];
        segundos.textContent = tiempo[2];

    },1000);

}

sendTime()