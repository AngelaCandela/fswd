Algoritmo ej_36
	Definir array, tamano, i, suma Como Entero;
	
	Leer tamano;
	
	Dimension array[tamano];
	suma = 0;
	
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer
		array[i] = Aleatorio(0,9);
		suma = suma + array[i];
		Escribir "El valor de la posición ", i, " es: ", array[i];
	Fin Para
	
	Escribir "La suma de todos los valores es ", suma, ".";
FinAlgoritmo
