Algoritmo ej_35
	
	Definir num, num_aleatorio Como Entero;
	
	num_aleatorio = Aleatorio(1,100);
	
	Escribir "Adivina el número";	
	Leer num;
	
	Mientras num <> num_aleatorio Hacer		
		
		Si num > num_aleatorio Entonces
			Escribir "El número a adivinar es menor que el número introducido. Vuelve a intentarlo.";
			Leer num;
		SiNo		
			Escribir "El número a adivinar es mayor que el número introducido.Vuelve a intentarlo.";
			Leer num;
		FinSi
	FinMientras		
		
	
	Escribir "Has adivinado!";
	
	
FinAlgoritmo
