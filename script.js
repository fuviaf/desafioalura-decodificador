const inputTexto = document.querySelector(".texto");
const message = document.querySelector(".message");

var copiar = document.querySelector('.copiar');

function btnCodificar() {
    const textEncriptada = codificar(inputTexto.value);
    message.value = textEncriptada;
    message.style.backgroundImage = "none";
    copiar.style.display = 'block';
}

function codificar(textoCodificar) {
    let valorChave = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    textoCodificar = textoCodificar.toLowerCase();
    for (let i = 0; i < valorChave.length; i++) {
        if (textoCodificar.includes(valorChave[i][0])) {
            textoCodificar = textoCodificar.replaceAll(valorChave[i][0], valorChave[i][1]);
        }
    }
    return textoCodificar;
}

function btnDescodificar() {
    const textDesencriptado = Descodificar(inputTexto.value);
    message.value = textDesencriptado;
    message.style.backgroundImage = "none";
    copiar.style.display = 'block';

}

function Descodificar(textoDescodificado) {
    let valorChave = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    textoDescodificado = textoDescodificado.toLowerCase();
    for (let i = 0; i < valorChave.length; i++) {
        if (textoDescodificado.includes(valorChave[i][0])) {
            textoDescodificado = textoDescodificado.replaceAll(valorChave[i][1], valorChave[i][0]);
        }
    }
    return textoDescodificado;
}

function btnCopiar() {
    const textoCopiado = document.querySelector(".message");
    textoCopiado.select();
    navigator.clipboard.writeText(textoCopiado.value);
    textoCopiado.value = inputTexto.value;
    alert("Copiado!");
    inputTexto.value = textoCopiado.value;
    textoCopiado.value = "";
    
}

