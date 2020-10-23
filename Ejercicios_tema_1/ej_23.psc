Algoritmo ej_23
	Definir día,mes,año Como Entero
	Definir mes_correspondiente Como Caracter
	
	Escribir "Introduzca los tres números de la fecha (día, mes, año)."
	Leer día,mes,año
	
	Mientras día<1 O día>31 O mes<1 O mes>12 O año<1 Hacer
		Escribir 'Error. Por favor, introduzca una fecha válida.'
		Leer día, mes, año
	Fin Mientras
	
	Segun mes  Hacer
		1:
			mes_correspondiente = 'enero'
		2:
			mes_correspondiente = 'febrero'
		3:
			mes_correspondiente = 'marzo'
		4:
			mes_correspondiente = 'abril'
		5:
			mes_correspondiente = 'mayo'
		6:
			mes_correspondiente = 'junio'
		7:
			mes_correspondiente = 'julio'
		8:
			mes_correspondiente = 'agosto'
		9:
			mes_correspondiente = 'septiembre'
		10:
			mes_correspondiente = 'octubre'
		11:
			mes_correspondiente = 'noviembre'
		12:
			mes_correspondiente = 'diciembre'		
	FinSegun		
	Escribir 'La fecha es ',día,' de ',mes_correspondiente,' de ',año,'.'
FinAlgoritmo
