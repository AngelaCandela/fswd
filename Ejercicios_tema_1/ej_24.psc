Algoritmo ej_24
	Definir alumno Como Caracter
	Definir pr�ctica, problemas, te�rica Como Real
	
	Leer alumno, pr�ctica, problemas, te�rica
	
	Mientras pr�ctica<0 O pr�ctica>10 O problemas<0 O problemas>10 O te�rica<0 O te�rica>10 Hacer
		Escribir "Error."
		Leer alumno, pr�ctica, problemas, te�rica		
	Fin Mientras
	
	Mientras alumno <> "" Hacer
		nota_final = pr�ctica*10/100 + problemas*50/100 + te�rica*40/100
		Escribir "La nota final es ", nota_final, "."
		Leer alumno
		Si alumno <> "" Entonces
			Leer pr�ctica, problemas, te�rica
		FinSi
	Fin Mientras
	
FinAlgoritmo
