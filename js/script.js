
// const palabras = [];

const inputPalabra = document.querySelector(".inputPalabra")
const inputClave = document.querySelector(".inputClave")
const btnCopiar = document.querySelector(".copiar");
// btnCopiar.style.display = "none"

function btnEncriptar(){
    const textoEncriptado = encriptar(inputPalabra.value)
    inputClave.value = textoEncriptado;
    inputClave.style.backgroundImage ="none"
    inputPalabra.value=""
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"],["a","ai"],["o","ober"]   ,["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
return stringEncriptado
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputPalabra.value)
    inputClave.value = textoEncriptado
    inputPalabra.value=""
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
return stringDesencriptada
}


function copiar(){
    inputClave.select(inputClave.value)
    navigator.clipboard.writeText(inputClave.value)
    inputClave.value = ""
    alert("Texto copiado")
}







