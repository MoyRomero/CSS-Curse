

$(".imgSmall").click(function(e) {
    var enlaceImagen = e.target.src;
    var lightbox = `<div class="lightbox">`+
                        `<div class=" imgContainer ">`+
                            `<img class="" src="` + enlaceImagen + `" alt="">`+
                         `<div class="btnCerrar btn btn-dark ">X</div>`+
                        `</div>`+
                    `</div>`;

    $("body").append(lightbox)
    $(".btnCerrar").click(function(){
    $(".lightbox").remove();
    
    })

})
