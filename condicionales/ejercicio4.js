var cantidad=parseInt(prompt("¿cuantos trajes compraran?"));
for (var i = 1; i <= cantidad; i++) {
    var precio =parseFloat(prompt("Ingresa el precio del traje " + i));
    if (precio>=2500.00) {
        alert("obtienes un descuento del 15%"); 
        precio = precio*0.85;
        alert("Total a pagar es: "+precio);
        
    }else{
        alert("Solo obtienes un descuento de 8%")
        precio=precio*0.92;
        alert("Total a pagar es: "+precio);
    }
}
