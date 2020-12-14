Algoritmo ej_31
	Definir num, fila, columna Como Entero;
	
	Leer num;
		
	Para fila = 1 Hasta num Con Paso 1 Hacer
		
		Para columna = 1 Hasta num Con Paso 1 Hacer
			Si columna < fila Entonces
				Escribir " " Sin Saltar;
			SiNo
				Escribir "*" Sin Saltar;
			FinSi
		Fin Para
		Escribir "";
				
	Fin Para
	
FinAlgoritmo
