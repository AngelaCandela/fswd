Algoritmo ej_35
	
	Definir num, num_aleatorio Como Entero;
	
	num_aleatorio = Aleatorio(1,100);
	
	Escribir "Adivina el n�mero";	
	Leer num;
	
	Mientras num <> num_aleatorio Hacer		
		
		Si num > num_aleatorio Entonces
			Escribir "El n�mero a adivinar es menor que el n�mero introducido. Vuelve a intentarlo.";
			Leer num;
		SiNo		
			Escribir "El n�mero a adivinar es mayor que el n�mero introducido.Vuelve a intentarlo.";
			Leer num;
		FinSi
	FinMientras		
		
	
	Escribir "Has adivinado!";
	
	
FinAlgoritmo
