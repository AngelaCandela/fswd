Algoritmo ej_59
	Definir array, paginas, filas, columnas, n_paginas, n_filas, n_columnas, contador Como Entero;
	n_paginas = 3;
	n_filas = 4;
	n_columnas = 5;
	Dimension array[n_paginas, n_filas,n_columnas];
	contador = 0;
	
	Para paginas = 0 Hasta n_paginas-1 Con Paso 1 Hacer
		Para filas = 0 Hasta n_filas-1 Con Paso 1 Hacer
			Para columnas = 0 Hasta n_columnas-1 Con Paso 1 Hacer
				contador = contador + 1;
				array[paginas,filas,columnas] = contador;
				Escribir array[paginas,filas,columnas], "   ", Sin Saltar;
			Fin Para
			Escribir "";
		Fin Para
		Escribir "";
	Fin Para
FinAlgoritmo
