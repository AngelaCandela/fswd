Algoritmo ej_58
	Definir matriz, filas, columnas, tamano Como Entero;
	tamano = 3;
	Dimension matriz[tamano,tamano];
	Definir  es_simetrica Como Logico;
	es_simetrica = Verdadero;
	
	matriz[0,0] = 1;
	matriz[0,1] = 2;
	matriz[0,2] = 3;
	matriz[1,0] = 2;
	matriz[1,1] = 1;
	matriz[1,2] = 2;
	matriz[2,0] = 3;
	matriz[2,1] = 2;
	matriz[2,2] = 1;	
	
	Para filas = 0 Hasta tamano-1 Con Paso 1 Hacer
		Para columnas = 0 Hasta tamano-1 Con Paso 1 Hacer
			Escribir matriz[filas,columnas], " ", Sin Saltar;
			
			Si matriz[filas,columnas] <> matriz[columnas,filas] Entonces
				es_simetrica = Falso;
			FinSi
			
		Fin Para
		Escribir "";
	Fin Para
	
	Si es_simetrica Entonces
		Escribir "La matriz es simétrica.";
	SiNo
		Escribir "La matriz NO es simétrica.";
	FinSi
	
FinAlgoritmo
