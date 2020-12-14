Algoritmo ej_26
	Definir numero, cubo Como Entero
	Definir contador Como Entero
	Definir linea Como Caracter
	
	i = 1
	linea = "Introduce el número "	
	
	Para contador = 1	Hasta 10 Con Paso 1 Hacer
		Escribir linea, i, "º."
		Leer numero
		cubo = numero^3
		Escribir "El cubo de ", numero, " es ", cubo, "."
		i = i + 1
		
	Fin Para
	
	
FinAlgoritmo
