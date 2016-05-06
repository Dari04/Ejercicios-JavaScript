var numero;
var condicion = true;
do {
    numero = parseInt(prompt("Ingrese el número"));
    if (isNaN(numero)) alert("Ingresa un numero por favor");
    else condicion = false;
} while(condicion);

if (numero>0) {
    alert("El número es positivo papu");
}else if(numero==0){
    alert("El número es igual papu");
}else{
     alert("El número es negativo papu");
}
