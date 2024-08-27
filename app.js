function hacerCifrado(){
    let texto = document.getElementById("cifrado").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco"); 
    
    let textoCifrado = texto
        .replace(/a/gi, "ai")
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length !=0){
        document.getElementById("cifrado").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "/la-seguridad-cibernetica.png";
    }else{
        muñeco.src = "/muñeco-alura.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingrese el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}