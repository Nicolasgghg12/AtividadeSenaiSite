// () xx xxxxx-xxxx telefone acrescento
function mascaraTelefone(){
    var respostaTelefone = document.getElementById('telefone');
    if(respostaTelefone.value.length == 0){
        respostaTelefone.value += "(+"
    }else if(respostaTelefone.value.length == 4){
        respostaTelefone.value += ") "
    }else if(respostaTelefone.value.length == 8){
        respostaTelefone.value += " "
    }else if(respostaTelefone.value.length == 14){
        respostaTelefone.value += "-"
    }
};

// xxxxx-xxx cep acrescento
function mascaraCep(){
    var respostaCep = document.getElementById('localicacao');
    if(respostaCep.value.length == 5){
        respostaCep.value += "-";
    }
};

// apenas 0 a 9 telefone
var digitoTelefone = document.querySelector("#telefone");
digitoTelefone.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  }
});

// apenas 0 a 9 cep
var digitocep = document.querySelector("#localicacao");
digitocep.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  }
});
function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);
    var pattern = '[0-9]';
    if (char.match(pattern)) {
      return true;
  }
}
/*
*/