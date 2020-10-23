Algoritmo ej_34
	Definir i, tamano Como Entero;
	Definir N, array Como Real;
	
	tamano = 10;
	i = 0;
	Dimension array[tamano];
	
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer		
		Leer N;
		array[i] = N;
	Fin Para
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer
		Escribir i, ": ", array[i];
	Fin Para	
	
FinAlgoritmo
