function encriptar() {
    var textoOriginal = document.getElementById("myInput").value.toLowerCase();
    var textoEncriptado = "";

    for (var i = 0; i < textoOriginal.length; i++) {
        switch (textoOriginal[i]) {
            case 'e':
                textoEncriptado += "enter";
                break;
            case 'i':
                textoEncriptado += "imes";
                break;
            case 'a':
                textoEncriptado += "ai";
                break;
            case 'o':
                textoEncriptado += "ober";
                break;
            case 'u':
                textoEncriptado += "ufat";
                break;
            default:
                textoEncriptado += textoOriginal[i];
        }
    }
    mostrarTextoEncriptado(textoEncriptado);
}

function desencriptar() {
    var textoEncriptado = document.getElementById("myInput").value.toLowerCase();
    var textoDesencriptado = "";

    for (var i = 0; i < textoEncriptado.length; i++) {
        if (textoEncriptado.substring(i, i+5) === 'enter') {
            textoDesencriptado += "e";
            i += 4;
        } else if (textoEncriptado.substring(i, i+4) === 'imes') {
            textoDesencriptado += "i";
            i += 3;
        } else if (textoEncriptado.substring(i, i+2) === 'ai') {
            textoDesencriptado += "a";
            i += 1;
        } else if (textoEncriptado.substring(i, i+4) === 'ober') {
            textoDesencriptado += "o";
            i += 3;
        } else if (textoEncriptado.substring(i, i+4) === 'ufat') {
            textoDesencriptado += "u";
            i += 3;
        } else {
            textoDesencriptado += textoEncriptado[i];
        }
    }
    mostrarTextoEncriptado(textoDesencriptado);
}

function mostrarTextoEncriptado(texto) {
    var messageContainer = document.getElementById("message-container");
    var textAlert = document.getElementById("text-alert");
    var muñeco = document.getElementById("muñeco");

    // Oculta la imagen
    muñeco.style.display = "none";

    // Muestra el texto encriptado o desencriptado y aplicamos estilos
    textAlert.innerHTML = "<h2>Texto Encriptado o Desencriptado:</h2><p>" + texto + "</p>";
    
    // Calcula la altura necesaria del contenedor textAlert
    var requiredHeight = textAlert.offsetHeight;

    // Verifica si la altura necesaria supera la altura del contenedor messageContainer
    if (requiredHeight > messageContainer.offsetHeight) {
        // Ajusta la altura del contenedor textAlert para que respete el espacio de messageContainer
        textAlert.style.height = messageContainer.offsetHeight + "px";
        // Habilita el desplazamiento vertical en textAlert
        textAlert.style.overflowY = "auto";
    } else {
        // Si no es necesario ajustar la altura, elimina cualquier altura establecida anteriormente
        textAlert.style.height = "auto";
        // Deshabilita el desplazamiento vertical en textAlert
        textAlert.style.overflowY = "hidden";
    }

    // Ajusta el estilo de white-space para que el texto se ajuste automáticamente
    textAlert.style.whiteSpace = "pre-wrap";
     
    // Muestra el contenedor de mensajes
    textAlert.style.display = "block";

    // Crea el botón de copiar al portapapeles
    var copyButton = document.createElement("button");
    copyButton.onclick = copiarAlPortapapeles;
    copyButton.textContent = "Copiar";
    textAlert.appendChild(copyButton);
    // Añade los estilos directamente al botón
    copyButton.style.boxSizing = "border-box";
    copyButton.style.padding = "1.125em"; // 18px
    copyButton.style.fontSize = "0.9375em"; // 15px
    copyButton.style.borderRadius = "1.5625em"; // 25px
    copyButton.style.backgroundColor = "#F3F5FC";
    copyButton.style.border = "0.0625em solid #0A3871"; // 1px solid #0A3871
    copyButton.style.width = "18.75em"; // 300px
    copyButton.style.cursor = "pointer";
    copyButton.style.display = "block";
    copyButton.style.margin = "0 auto";

    
}


window.addEventListener('resize', ajustarTextarea);

function ajustarTextarea() {
    var width = window.innerWidth;
    var textarea = document.getElementById('myInput');

    if (width >= 601 && width <= 1024) { // Si la pantalla es de tamaño tablet
        textarea.cols = 50; // Cambia el número de columnas
        textarea.rows = 20; // Cambia el número de filas
    } else {
        textarea.cols = 50; // Restablece el número de columnas
        textarea.rows = 19; // Restablece el número de filas
    }
}

function copiarAlPortapapeles() {
    /* Obtén el elemento text-alert */
    var copyText = document.getElementById("text-alert");

    /* Crea un nuevo textarea temporal */
    var tempTextArea = document.createElement("textarea");
    
    /* Obtén solo el texto encriptado o desencriptado */
    var encryptedOrDecryptedText = copyText.getElementsByTagName("p")[0].textContent;
    tempTextArea.value = encryptedOrDecryptedText;
    
    document.body.appendChild(tempTextArea);

    /* Selecciona el texto del textarea temporal */
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); /* Para dispositivos móviles */

    /* Copia el texto al portapapeles */
    document.execCommand("copy");

    /* Elimina el textarea temporal */
    document.body.removeChild(tempTextArea);

}


// Llama a la función una vez cuando se carga la página
ajustarTextarea();
