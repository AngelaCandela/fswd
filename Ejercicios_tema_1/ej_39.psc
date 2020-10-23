Algoritmo ej_39
	Definir array_1, array_2, tamano, i Como Entero;
	tamano = 5;
	Dimension array_1[tamano];
	Dimension array_2[tamano];
	
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer
		array_1[i] = i+1;
		Escribir "La posición ", i, " del array_1 es ", array_1[i], ".";		
	Fin Para
	
	Escribir "";
	
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer
		array_2[i] = array_1[tamano-1-i];
		Escribir "La posición ", i, " del array_2 es ", array_2[i], ".";
	Fin Para
	
	
FinAlgoritmo
