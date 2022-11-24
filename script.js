var valorBitcoin = 111176.11;
function Converter() {
  var vElemento = parseFloat(document.getElementById("valor").value);
  var valorEmReal = vElemento * valorBitcoin;
  console.log(valorEmReal);
  var numConverted = document.getElementById("valorConvertido");
  var printaNaTela = "O resultado em Real é R$ " + valorEmReal;
  numConverted.innerHTML = printaNaTela;
}