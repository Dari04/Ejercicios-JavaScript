function calcularCostoHamburguesa (tipo) {
	var costo = null ;
	switch(tipo){
		case "sencillas":
		costo = ;
		break;
		case "dobles":
		costo =
		break;
		case "triples":
		costo = ;
		break;
	}

}

function calcular_costo_total(cantidad,tipoHamburguesa,tarjeta) {
  var costoHamburguesa = calcularCostoHamburguesa(tipoHamburguesa)
  if (tarjeta){
  	costoHamburguesa *= 1.05;
  }
  return cantidad * costoHamburguesa;
}

calcularCostoTotal(10,"sencillas");
calcularCostoTotal(20,"dobles");
calcularCostoTotal(2,"triples");




costo +  costo * 45%
cossto * (100% + 45%)