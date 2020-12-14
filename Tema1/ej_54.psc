Funcion es_primo <- primo (num)
	Definir es_primo Como Logico;
	Definir i Como Entero;
	
	es_primo = Verdadero;	
	
	Para i = 2 Hasta num-1 Con Paso 1 Hacer	// No hace falta dividir num por 1 o por si mismo porque todos los números pueden dividirse por 1 o por ellos mismos dando resto == 0.
		Si num mod i = 0 Entonces			// Con que haya un solo número entre 2 y num-1 por el cual num pueda dividirse con resto == 0 entonces num no será primo.
			es_primo = Falso;			
		FinSi		
	Fin Para	
Fin Funcion



Algoritmo ej_54
	
	Definir num, contador, i Como Entero;
	
	Escribir  "Introducir el número.";
	Leer num;
	contador = 0;
	
	Para i = 2 Hasta num Con Paso 1 Hacer
		si primo(i) = Verdadero Entonces
			contador = contador + 1;
			Escribir "El número ", i, " es primo.";
		FinSi
	Fin Para
	
	Escribir "Hay ", contador, " números primos menores que ", num, ".";
	
FinAlgoritmo
