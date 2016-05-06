var alumnos;
var pagoxalumnos;
alumnos = parseInt(prompt("Ingrese la  cantidad de alumnos"));
if (alumnos>100) {
    pagoxalumnos = alumnos * 65;
}else if(alumnos>=50){
    pagoxalumnos = alumnos * 70;
}else if(alumnos>30){
    pagoxalumnos = alumnos * 95;
}
else{
    pagoxalumnos = 4000;
}
alert("Los precios en total son : " + pagoxalumnos);