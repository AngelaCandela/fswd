Algoritmo ej_44
	Definir A, B, seleccion, suma, resta, producto Como Entero;
	Definir division Como Real;
	
	Escribir "Introduzca dos valores numéricos.";
	
	Leer A, B;
	
	Escribir "Seleccione el número de una de las siguientes opciones:";
	Escribir "";
	Escribir "1: Sumar";
	Escribir "2: Restar";
	Escribir "3: Multiplicar";
	Escribir "4: Dividir";
	Escribir "5: Salir del programa";
	
	Leer seleccion;
	
	Mientras seleccion <> 5 Hacer		
		Segun seleccion Hacer
			1:
				suma = A + B;
				Escribir "La suma de ", A, " y ", B, " es ", suma;
			2:
				resta = A - B;
				Escribir "La resta de ", A, " y ", B, " es ", resta;
			3:
				producto = A * B;
				Escribir "El producto de ", A, " y ", B, " es ", producto;
			4:	
				division = A / B;
				Escribir "La división de ", A, " y ", B, " es ", division;
		
			De Otro Modo:
				Escribir "La opción seleccionada no existe.";			
		Fin Segun
		
		Escribir "Seleccione el número de una de las siguientes opciones:";
		Escribir "";
		Escribir "1: Sumar";
		Escribir "2: Restar";
		Escribir "3: Multiplicar";
		Escribir "4: Dividir";
		Escribir "5: Salir del programa";
		Leer seleccion;	
	Fin Mientras			
FinAlgoritmo
