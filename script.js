const entradaTexto = document.querySelector(".entrada-texto");
const mensagem = document.querySelector(".mensagem");
const placeholder = document.querySelector(".placeholder");
const textoPlaceholder = document.querySelector(".texto-placeholder");

//entrada do texto
function botaoCriptografar() {
    const textoCriptografado = criptografar(entradaTexto.value);
    mensagem.value = textoCriptografado;
    placeholder.style.display = "none";
    textoPlaceholder.style.display = "none";
    entradaTexto.value = "";
}


//criptografar
function criptografar(stringCriptografada) {
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o","ober"],["u","ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringCriptografada.includes(matrizCodigo[i][0])){
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            
        }
    }

    return stringCriptografada;

}


//descriptografar
function botaoDescriptografar() {
    const textoDescriptografo = descriptografar(entradaTexto.value);
    mensagem.value = textoDescriptografo;
    entradaTexto.value = "";
    placeholder.style.display = "none";
    textoPlaceholder.style.display = "none";
}

//descriptografar
function descriptografar(stringDescriptografada) {
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o","ober"],["u","ufat"]];
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDescriptografada.includes(matrizCodigo[i][1])){
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }
    }

    return stringDescriptografada;

}
//implementar a funcao copiar
//function copiarTexto() {
    
  // Cria um elemento input temporário para copiar o texto
  //const input = document.createElement('input');
  //input.setAttribute('value', mensagem.textContent || mensagem.innerText);
  
  // Adiciona o elemento input ao DOM
  //document.body.appendChild(input);
  
  // Seleciona o texto no elemento input
  //input.select();
  //input.setSelectionRange(0, 99999); // Para dispositivos móveis
  
  // Copia o texto para a área de transferência
  //document.execCommand('copy');
  
  // Remove o elemento input do DOM
  //document.body.removeChild(input);
  
  // Exibe um alerta confirmando a cópia
  //alert('Texto copiado para a área de transferência!');
//}
