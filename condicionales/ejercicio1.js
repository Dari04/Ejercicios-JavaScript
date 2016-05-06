var totalNotas=0;
for(var i = 1;i<=3;i++){
	var nota = prompt("Ingrese la nota" + i);
	totalNotas = totalNotas + parseInt(nota);
}
var promedio = totalNotas/3;
if(promedio > 5){
	alert("Estás aprobado :)\nTu nota promedio es " + promedio);
}else{
	alert("Estás reprobado :)\nTu nota promedio es " + promedio);
}