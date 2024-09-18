function adcElementoLogar () {
    var Body = document.getElementsByTagName('body');
    var CriarDivLogar = document.createElement('div');
        CriarDivLogar.setAttribute('id','ConterLogin');
    Body[0].appendChild(CriarDivLogar);

    var DivLogar = document.getElementById('ConterLogin');
    var CriarH2 = document.createElement('h2');
        CriarTextoH2 = document.createTextNode('Logue em sua conta:');
    CriarH2.appendChild(CriarTextoH2);
    DivLogar.appendChild(CriarH2);

    var CriarFormulario = document.createElement('form');
        CriarFormulario.setAttribute('action','#');
        CriarFormulario.setAttribute('class','formulariologin');
        CriarFormulario.setAttribute('method','get');
    DivLogar.appendChild(CriarFormulario);

    var Form = document.getElementsByClassName('formulariologin');

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

    var CriarBotaoEnviar = document.createElement('button');
        CriarBotaoEnviar.setAttribute('type','button');
        CriarBotaoEnviar.setAttribute('class','btn btn-primary m-2');
    var CriarTextoDoBotaoEnviar = document.createTextNode('Entrar');
    CriarBotaoEnviar.appendChild(CriarTextoDoBotaoEnviar);
    Form[0].appendChild(CriarBotaoEnviar);

    var CriarBotaoFechar = document.createElement('button');
        CriarBotaoFechar.setAttribute('type','button');
        CriarBotaoFechar.setAttribute('class','btn btn-primary m-2');
        CriarBotaoFechar.setAttribute('onclick','rmvElementoLogar()');
    var CriarTextoDoBotaoFechar = document.createTextNode('Fechar');
    CriarBotaoFechar.appendChild(CriarTextoDoBotaoFechar);
    Form[0].appendChild(CriarBotaoFechar);

    var PegarElemento = document.getElementById('mudarelementologar');
        PegarElemento.removeAttribute('onclick','adcElementoLogar ()');
        PegarElemento.setAttribute('onclick','rmvElementoLogar ()');

    var PegarWrap = document.getElementById('Wrap');
        PegarWrap.setAttribute('style','opacity: 0.2;');
}

    function rmvElementoLogar (){
        var PegarDivLogin = document.getElementById('ConterLogin');
        PegarDivLogin.parentNode.removeChild(PegarDivLogin);

        var PegarElemento = document.getElementById('mudarelementologar');
        PegarElemento.removeAttribute('onclick','rmvElementoLogar ()');
        PegarElemento.setAttribute('onclick','adcElementoLogar ()');

        var PegarWrap = document.getElementById('Wrap');
        PegarWrap.removeAttribute('style','opacity: 0.2;');
    } 
