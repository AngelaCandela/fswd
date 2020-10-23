Algoritmo ej_42
	Definir array, tamano, i, num, contador_positivos, suma_positivos, suma Como Entero;
	Definir promedio_positivos, promedio Como Real;
	
	Leer tamano;
	Dimension array[tamano];
	
	contador_positivos = 0;
	suma_positivos = 0;
	promedio_positivos = 0;	
	suma = 0;
	promedio = 0;	
	
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer
		num = Aleatorio(-10,10);
		array[i] = num;
		Escribir i, ": ", num;
		suma = suma + num;
		Si num > 0 Entonces
			contador_positivos = contador_positivos + 1;
			suma_positivos = suma_positivos + num;
		FinSi
	Fin Para
	
	promedio_positivos = suma_positivos/contador_positivos;
	promedio = suma/tamano;
	
	Escribir "a) Hay ", contador_positivos, " números positivos.";
	Escribir "b) El promedio de los números positivos es ", promedio_positivos, ".";
	Escribir "c) El promedio de todos los números del array es ", promedio, ".";
	
FinAlgoritmo
