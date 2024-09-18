function AparecerDescricaoJogos (c) {
    var NomeDaClassDoJogo = 'aparecerjogos' + c;
    var PegarJogo = document.getElementsByClassName(NomeDaClassDoJogo)[0];

    var CriarDivInformacaoJogo = document.createElement('div');
        CriarDivInformacaoJogo.setAttribute('class','informacaojogo');

    var CriarPDaInformacaoDoJogo = document.createElement('p');
    
    switch(NomeDaClassDoJogo){

    case 'aparecerjogos1':
    var CriarTextoDesseP = document.createTextNode('Eae aqui contem as informacoes do jogo1 aparencendo do lado dessa div'); 
    break;
    case 'aparecerjogos2':
    var CriarTextoDesseP = document.createTextNode('Eae aqui contem as informacoes do jogo2 aparencendo do lado dessa div'); 
    break;
    case 'aparecerjogos3':
    var CriarTextoDesseP = document.createTextNode('Eae aqui contem as informacoes do jogo3 aparencendo do lado dessa div'); 
    break;
    case 'aparecerjogos4':
    var CriarTextoDesseP = document.createTextNode('Eae aqui contem as informacoes do jogo4 aparencendo do lado dessa div'); 
    break;
    case 'aparecerjogos5':
    var CriarTextoDesseP = document.createTextNode('Eae aqui contem as informacoes do jogo5 aparencendo do lado dessa div'); 
    break;
    case 'aparecerjogos6':
    var CriarTextoDesseP = document.createTextNode('Eae aqui contem as informacoes do jogo6 aparencendo do lado dessa div'); 
    break;
    default: 
        alert('Contate o suporte');
    break;

}    
    
    CriarPDaInformacaoDoJogo.appendChild(CriarTextoDesseP);
    CriarDivInformacaoJogo.appendChild(CriarPDaInformacaoDoJogo);
    PegarJogo.appendChild(CriarDivInformacaoJogo);
}
function RemoverDescricaoJogos (){
    var Pegarinformacaojogo = document.getElementsByClassName('informacaojogo')[0];
    Pegarinformacaojogo.parentNode.removeChild(Pegarinformacaojogo);
}

/*
*/