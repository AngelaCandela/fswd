Algoritmo ej_24
	Definir alumno Como Caracter
	Definir práctica, problemas, teórica Como Real
	
	Leer alumno, práctica, problemas, teórica
	
	Mientras práctica<0 O práctica>10 O problemas<0 O problemas>10 O teórica<0 O teórica>10 Hacer
		Escribir "Error."
		Leer alumno, práctica, problemas, teórica		
	Fin Mientras
	
	Mientras alumno <> "" Hacer
		nota_final = práctica*10/100 + problemas*50/100 + teórica*40/100
		Escribir "La nota final es ", nota_final, "."
		Leer alumno
		Si alumno <> "" Entonces
			Leer práctica, problemas, teórica
		FinSi
	Fin Mientras
	
FinAlgoritmo
