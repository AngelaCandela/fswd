Algoritmo ej_41_sin_funcion
	Definir array, i, j, tamano, num_aleatorio Como Entero;
	Definir hay_otro_igual Como Logico;
	tamano = 20;
	Dimension array[20];
	
	
	// Bucle que irá rellenando el array
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer
		
		// Generará un aleatorio único
		Repetir
			num_aleatorio = Aleatorio(0,19);
			hay_otro_igual = Falso;
			
			// Comprueba si es único desde el principo (0)
			// hasta por donde iba (i)
			Para j= 0 Hasta i-1 Con Paso 1 Hacer
				Si i > 0 Y num_aleatorio == array[j] Entonces
					hay_otro_igual = Verdadero;
				FinSi
			Fin Para
			
		Mientras Que hay_otro_igual
		
		// Asigno el aleatorio generado
		array[i] = num_aleatorio;
		
	Fin Para
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer
		Escribir array[i], Sin Saltar;
		Si i < tamano-1 Entonces
			Escribir ", " Sin Saltar;
		SiNo
			Escribir ".";
		FinSi
	Fin Para
	
FinAlgoritmo
