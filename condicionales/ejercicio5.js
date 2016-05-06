var cantidades = 3;
var valorInicial = 0;
for (var i =1;i <= cantidades;i++){
    var numero = prompt("Ingresa el número" + i);
    console.log("Valor inicial -> " + valorInicial);
    console.log("Número ingresado -> " + numero);
    if (numero>valorInicial){
        valorInicial = numero
    }
}
alert("El mayor de los números es: " + valorInicial);