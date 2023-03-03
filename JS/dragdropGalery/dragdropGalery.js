const entrada = document.querySelector(".imgBG");

entrada.addEventListener("dragover", (e) => e.preventDefault());

entrada.addEventListener("drop", (e)=>{
    let n = e.dataTransfer.getData("imgBG");
    if( n == 3){

        entrada.style.background = `center / contain no-repeat url("imgBG${n}.gif")`;
    }
    else{

        entrada.style.background = `center / contain no-repeat url("imgBG${n}.png")`;
    }

});

for(let i = 1; i < document.querySelector(".imgsBG").children.length + 1; i++ ){
    console.log(`.imgsBG${i}`);    
    document.querySelector(`.imgsBG${i}`).addEventListener("dragstart", (e)=> enviarBG(i,e));
}
const enviarBG = (child,e) => e.dataTransfer.setData("imgBG",child);
    
    // touchmove
    // let ubicacion = e.targetTouches[0];
    // child.style.left  = ubicacion.PageX + 'px';
    // child.style.right = ubicacion.PageY + 'px';
    