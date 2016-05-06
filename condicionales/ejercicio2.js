var cantidad = prompt("Ingrese la cantidad de números a comparar","Aquí número papu");
var valorInicial = 0;
for (var i =1;i <= cantidad;i++){
    var numero = prompt("Ingresa el número" + i)
    console.log("Valor inicial -> " + valorInicial);
    console.log("Número ingresado -> " + numero);
    if (numero>valorInicial){
        valorInicial = numero
    }
}
alert("Número mayor" + valorInicial);