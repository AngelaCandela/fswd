Funcion es_primo <- primo (num)
	Definir es_primo Como Logico;
	Definir i Como Entero;
	
	es_primo = Verdadero;	
	
	Para i = 2 Hasta num-1 Con Paso 1 Hacer	// No hace falta dividir num por 1 o por si mismo porque todos los n�meros pueden dividirse por 1 o por ellos mismos dando resto == 0.
		Si num mod i = 0 Entonces			// Con que haya un solo n�mero entre 2 y num-1 por el cual num pueda dividirse con resto == 0 entonces num no ser� primo.
			es_primo = Falso;			
		FinSi		
	Fin Para	
Fin Funcion

Algoritmo ej_51
	
	Definir num Como Entero;
	
	Escribir "Introduzca el n�mero.";
	Leer num;
	
	Si primo(num) = Verdadero Entonces
		Escribir "El n�mero es primo.";
	SiNo
		Escribir "El n�mero no es primo.";		
	FinSi		
FinAlgoritmo
