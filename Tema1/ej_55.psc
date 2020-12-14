Algoritmo ej_55
	Definir filas, columnas, matriz, n_filas, n_columnas Como Entero;	
	n_filas = 4;
	n_columnas = 5;
	Dimension  matriz[n_filas,n_columnas];
	
	Para filas = 0 Hasta n_filas-1 Con Paso 1 Hacer
		Para columnas = 0 Hasta n_columnas-1 Con Paso 1 Hacer
			matriz[filas,columnas] = Aleatorio(1,100);
			
			Escribir matriz[filas,columnas], "     " Sin Saltar;
		Fin Para
		Escribir "";
	Fin Para
FinAlgoritmo
