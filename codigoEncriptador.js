const inputTexto=document.querySelector(".input-texto");
const  mensaje=document.querySelector(".mensajeSalida");

function verificarTextoenMinuscula(textoIngresado){

    var menCorrecto=false;

    if(textoIngresado==inputTexto.value.toLowerCase()){

        menCorrecto=true;
    }
    return menCorrecto;
}


function btnEncriptar(){
if(verificarTextoenMinuscula(inputTexto.value)){
    const textoEncriptado=encriptar(inputTexto.value);
    mensaje.value=textoEncriptado;
    mensaje.style.backgroundImage="none";   
    inputTexto.value="";
}
else{
    alert("El mensaje debe ser ingresado en minuscula y sin nungun tipo de acento para poder ser encriptado");
    inputTexto.value="";
}

}

function btnDesencriptar(){
    const TextoEncriptado =desencriptar(inputTexto.value)
    mensaje.value = TextoEncriptado;
    inputTexto.value ="";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"],["a", "ai"],["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }

    return stringEncriptada;
}
      

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"],["a", "ai"],["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for( let i = 0; i <matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}    

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
}    