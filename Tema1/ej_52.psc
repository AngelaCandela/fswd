Funcion indice <- encontrar(array, tamano, N)
	Definir indice Como Entero;
	indice = 0;
	
	Mientras array[indice] <> N Y indice < tamano Hacer
		indice = indice + 1;
	FinMientras	
FinFuncion


Algoritmo ej_52
	Definir array, tamano, i, N, indice Como Entero;
	tamano = 10;
	Dimension array[tamano];
	
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer
		array[i] = Aleatorio(1,15);
		Escribir array[i];
	Fin Para
	
	Escribir "Introducir el número a buscar.";
	Leer N;
	
	indice = encontrar(array, tamano, N);
	
	Si indice < tamano Entonces
		Escribir "El número ", N, " existe en el array en la posición ", indice, ".";
	SiNo
		Escribir "El número ", num, " no existe en el array.";
	FinSi	
FinAlgoritmo
