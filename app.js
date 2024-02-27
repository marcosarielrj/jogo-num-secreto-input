let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function exibirTextoNaTela(tag, texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

function exibirMensagemInicial(){

    exibirTextoNaTela('h1', 'Jogo do Numero secreto');
    exibirTextoNaTela('p', 'Digite um numero de 1 a 10');
    
}

function verificarChute(){

    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let gramatica = tentativas > 1? "tentativas" : 'tentativa';
        let mensagemTentativas = `Vc descobriu com ${tentativas} ${gramatica}`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else {

        if(chute > numeroSecreto){

            exibirTextoNaTela('p', 'O num Secreto é menor');
        }else{

            exibirTextoNaTela('p', 'O num Secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {

    return parseInt(Math.random() * 10 + 1);
    
}
function limparCampo(){

    document.querySelector('input').value = "";
};

function reiniciarJogo() {
    
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}