const login = "../prueba.html"
function sorpresa(){
    const sorpresa = document.getElementById("sorpresa")
    const botonSorpresa = document.getElementById("boton-sorpresa")
    const footer = document.getElementById("footer")

    footer.style.bottom = "-80em"
    botonSorpresa.style.display = "none"
    sorpresa.style.display = "flex"
    sorpresa.style.flexDirection = "column"
    sorpresa.style.justifyContent = "center"
    sorpresa.style.alignContent = "center"
    sorpresa.style.alignItems = "center"
    sorpresa.style.height = "100%"
    sorpresa.style.zIndex = "1000"
    sorpresa.style.textAlign = "center"
    sorpresa.style.backgroundColor = "rgba(0, 0, 0, .8)"
    sorpresa.style.color = "white"
    sorpresa.style.boxShadow = "0 0 20px violet, 0 0 20px violet, 0 0 20px violet, 0 0 20px violet, 0 0 20px violet"
    sorpresa.style.fontSize = "2em"
    sorpresa.style.width = "60%"
    sorpresa.style.height = "100%"
    sorpresa.style.padding = "1em 1em"
    sorpresa.style.letterSpacing = ".2em"
}
function validar(){
    const user = document.getElementById("nombre").value;
    const constraseña = document.getElementById("contraseña").value;

    if (user == "patita" && constraseña == "teamo"){
        window.location.href = "https://natillaworlds.github.io/patita.es/pages/prueba.html"
    }
    else{
        alert("Contraseña o usuario no es válido")
    }
}
