function adcElementoCadastrar () {
    var Body = document.getElementsByTagName('body');
    var CriarDivCadastro = document.createElement('div');
        CriarDivCadastro.setAttribute('id','ConterCadastro');
    Body[0].appendChild(CriarDivCadastro);

    var DivCadastro = document.getElementById('ConterCadastro');
    var CriarH2 = document.createElement('h2');
        CriarTextoH2 = document.createTextNode('Cadastre sua conta:');
    CriarH2.appendChild(CriarTextoH2);
    DivCadastro.appendChild(CriarH2);

    var CriarFormulario = document.createElement('form');
        CriarFormulario.setAttribute('action','#');
        CriarFormulario.setAttribute('class','formularioCadastro');
        CriarFormulario.setAttribute('method','get');
    DivCadastro.appendChild(CriarFormulario);

    var Form = document.getElementsByClassName('formularioCadastro');

    var CriarDivContemImputsDentroEmail = document.createElement('div');
        CriarDivContemImputsDentroEmail.setAttribute('class','form-floating mb-3');
    var CriarInputEmail = document.createElement('input');
        CriarInputEmail.setAttribute('type','email');
        CriarInputEmail.setAttribute('class','form-control');
        CriarInputEmail.setAttribute('id','floatingInput');
        CriarInputEmail.setAttribute('placeholder','name@example.com');
    var CriarLabelEmail = document.createElement('label');
        CriarLabelEmail.setAttribute('for','floatingInput');
    var CriarTextoLabelTextoEmail = document.createTextNode('Insira seu email');
        CriarLabelEmail.appendChild(CriarTextoLabelTextoEmail);
    CriarDivContemImputsDentroEmail.appendChild(CriarInputEmail);
    CriarDivContemImputsDentroEmail.appendChild(CriarLabelEmail);
    Form[0].appendChild(CriarDivContemImputsDentroEmail);

    var CriarDivContemImputsDentroSenha = document.createElement('div');
        CriarDivContemImputsDentroSenha.setAttribute('class','form-floating mb-3');
    var CriarInputSenha = document.createElement('input');
        CriarInputSenha.setAttribute('type','password');
        CriarInputSenha.setAttribute('class','form-control');
        CriarInputSenha.setAttribute('id','floatingPassword');
        CriarInputSenha.setAttribute('placeholder','Senha');
    var CriarLabelSenha = document.createElement('label');
        CriarLabelSenha.setAttribute('for','floatingPassword');
    var CriarTextoLabelTextoSenha = document.createTextNode('Insira sua senha');
        CriarLabelSenha.appendChild(CriarTextoLabelTextoSenha);
    CriarDivContemImputsDentroSenha.appendChild(CriarInputSenha);
    CriarDivContemImputsDentroSenha.appendChild(CriarLabelSenha);
    Form[0].appendChild(CriarDivContemImputsDentroSenha);

    var CriarDivContemImputsDentroSenha = document.createElement('div');
    CriarDivContemImputsDentroSenha.setAttribute('class','form-floating mb-3');
    var CriarInputSenha = document.createElement('input');
        CriarInputSenha.setAttribute('type','password');
        CriarInputSenha.setAttribute('class','form-control');
        CriarInputSenha.setAttribute('id','floatingPassword');
        CriarInputSenha.setAttribute('placeholder','Senha');
    var CriarLabelSenha = document.createElement('label');
        CriarLabelSenha.setAttribute('for','floatingPassword');
    var CriarTextoLabelTextoSenha = document.createTextNode('Confirme sua senha');
        CriarLabelSenha.appendChild(CriarTextoLabelTextoSenha);
    CriarDivContemImputsDentroSenha.appendChild(CriarInputSenha);
    CriarDivContemImputsDentroSenha.appendChild(CriarLabelSenha);
    Form[0].appendChild(CriarDivContemImputsDentroSenha);

    var CriarBotaoEnviar = document.createElement('button');
        CriarBotaoEnviar.setAttribute('type','button');
        CriarBotaoEnviar.setAttribute('class','btn btn-primary m-2');
    var CriarTextoDoBotaoEnviar = document.createTextNode('Cadastrar');
    CriarBotaoEnviar.appendChild(CriarTextoDoBotaoEnviar);
    Form[0].appendChild(CriarBotaoEnviar);

    var CriarBotaoFechar = document.createElement('button');
        CriarBotaoFechar.setAttribute('type','button');
        CriarBotaoFechar.setAttribute('class','btn btn-primary m-2');
        CriarBotaoFechar.setAttribute('onclick','rmvElementoCadastrar()');
    var CriarTextoDoBotaoFechar = document.createTextNode('Fechar');
    CriarBotaoFechar.appendChild(CriarTextoDoBotaoFechar);
    Form[0].appendChild(CriarBotaoFechar);

    var PegarElemento = document.getElementById('mudarelementocadastro');
        PegarElemento.removeAttribute('onclick','adcElementoCadastrar ()');
        PegarElemento.setAttribute('onclick','rmvElementoCadastrar ()');

    var PegarWrap = document.getElementById('Wrap');
        PegarWrap.setAttribute('style','opacity: 0.2;');
}

    function rmvElementoCadastrar (){
        var PegarDivCadastro = document.getElementById('ConterCadastro');
        PegarDivCadastro.parentNode.removeChild(PegarDivCadastro);

        var PegarElemento = document.getElementById('mudarelementocadastro');
        PegarElemento.removeAttribute('onclick','rmvElementoCadastrar ()');
        PegarElemento.setAttribute('onclick','adcElementoCadastrar ()');

        var PegarWrap = document.getElementById('Wrap');
        PegarWrap.removeAttribute('style','opacity: 0.2;');
    } 
