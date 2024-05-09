var contador = 2;

setTimeout(temporizador,1000);

function temporizador() {
  if(contador > 0){
    setTimeout(temporizador,1000);
  } else {
    window.onbeforeunload = null;
    document.getElementById('temporest').style.visibility = 'hidden';
    var span = document.getElementById('promocao');
    span.innerHTML = "O Evento Começou !!!";
    confete();
  }
  var el = document.getElementById('temporest');
  el.innerHTML = contador;
  contador--;
}

window.onbeforeunload = function() {
  // chama função
  return "Chamar uma função antes do tempo";
}

function alteraMais(){
    var listacard = document.getElementById("divcard");
    var els = listacard.getElementsByTagName('p');
    var tamanho = els.length - 1;
    var pos = prompt('Informe a posição do card [0 a ' + tamanho + ']');
    els[pos].innerHTML = prompt('Informe o nome: ');
}