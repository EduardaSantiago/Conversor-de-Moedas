function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    // para transformar esse valor em um número fracionado, caso contrário iria mostrar em texto.
    var valorEmDolar = parseFloat(valor);
    var valorEmReal = valorEmDolar * 5;
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ : " + valorEmReal;
    document.querySelector("#valorConvertido").innerHTML = valorConvertido;
  }
  
  function ConverterEuro() {
    var valorDoElementoEmEuro = document.getElementById("valorEmEuro");
    var valordoEuro = valorDoElementoEmEuro.value;
  
    var valorEmEuro = parseFloat(valordoEuro);
    var valorFinalEmReal = valorEmEuro * 5;
  
    var elementoEmEuroConvertido = document.getElementById("elementoConvertido");
    var elementoConvertido = "O valor em Euro é: " + valorFinalEmReal;
    document.querySelector(
      "#valorConvertidoEmEuro"
    ).innerHTML = elementoConvertido;
  
    console.log(valorEmEuro);
  }
  