

function mostrarTrabajadores (arrayRecibido){
    let htmlContentToAppend = "";
    
    for(i = 0; i < arrayRecibido.length; i++){
        let persona = arrayRecibido[i];
        htmlContentToAppend += 
        `
        <h2>` +persona.nombre+`</h2>
        <p>"CI: "`+persona.ci+`</p>
        <br>
        <p>"Edad: "`+persona.edad+`</p>
        <br>
        <p>"Teléfono: "`+persona.telefono+`</p>
        <hr>
        <br>
        `
    }
    document.getElementById("lista-trabajadores").innerHTML = htmlContentToAppend;
}




document.addEventListener("DOMContentLoaded", function (e) {
getJSONData(LIST_URL).then(function(resultObj){
    if(resultObj.status = "ok"){
        mostrarTrabajadores(resultObj.data);
    }
})
});