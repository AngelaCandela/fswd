Algoritmo ej_25
	Definir linea Como Caracter
	Definir lado Como Entero
	Definir columna, fila Como Entero
	
	linea = ""
	Leer lado
	
	Para fila = 1 Hasta lado Con Paso 1 Hacer
		Para columna = 1 Hasta lado Con Paso 1 Hacer	
			Si columna == 1 O columna == lado O fila == 1 O fila == lado Entonces
				linea = linea + "*"
			SiNo
				linea = linea + " "
			FinSi
			
		Fin Para
		
		Escribir linea
		linea = ""
	Fin Para
	
FinAlgoritmo
