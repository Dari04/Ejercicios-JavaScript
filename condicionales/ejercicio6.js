var personas;
var presupuesto;
personas = parseInt(prompt("Ingrese la  cantidad de personas"));
if (personas<200) {
    presupuesto = personas * 95;
}else if (personas<=300) {
    presupuesto = personas * 85;
}else{
    presupuesto = personas * 75;
}
alert("La tarifa es de : " + presupuesto);