//var valorEmDolarTexto = prompt("Qual o valor em dolar que você quer converter?")
//var valorEmDolarNumero = parseFloat(valorEmDolarTexto)
//var valorEmReal = valorEmDolarNumero * 5.76
//var valorEmRealFixado = valorEmReal.toFixed(2)
function casaCambio(){
  
    var valorCotacao = document.getElementById('valorCotacao').value;
    var valor = document.getElementById('valor').value;
    
    valorCotacao = parseFloat(valorCotacao);
    valor = parseFloat(valor);
    
    total = valor * valorCotacao;
    total = total.toFixed(2);
    
    document.getElementById('resultado').innerHTML= total;
    document.getElementById('totalConsulta').style.display = "inline-block";
  }
  
  //document.getElementById('totalConsulta').style.display = "inline-block";
  
  //document.getElementById('calculaForms').addEventListener('submit', casaCambio);