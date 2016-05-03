function promedio(a,b,c){
	if(a>=1 && a<=10 && b>=1 && b<=10 && c>=1 && c<=10 )
		return (a+b+c)/3
	else 
		return "Números entre 1 y 10"
}

function grade(grade){
	if (grade>=6)
		console.log("Aprobaste con "+grade);
	else 
		console.log("Reprobaste con "+grade);
}

grade(promedio(10,7,6));