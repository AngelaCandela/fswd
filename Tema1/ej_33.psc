Algoritmo ej_33	
	Definir tamano, N, contador Como Entero;	
	Definir menu Como Caracter;
	Definir precios, total Como Real;
	tamano = 4;
	Dimension menu[tamano];
	menu[0] = "bocadillos";
	menu[1] = "refrescos";
	menu[2] = "cervezas";
	menu[3] = "pan";
	
	Dimension precios[tamano];
	precios[0] = 1.5;
	precios[1] = 1.05;
	precios[2] = 0.75;
	precios[3] = 2;	
	
	total = 0;
	contador = 0;	
	
	Para contador = 0 Hasta tamano-1 Con Paso 1 Hacer
		Escribir "Introducir cantidad ", menu[contador], ":";
		Leer N;
		total = total + N*precios[contador];		
	Fin Para
	
	Escribir "El total es ", total, " Euros.";	
FinAlgoritmo
