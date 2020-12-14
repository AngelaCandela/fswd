Algoritmo ej_49
	Definir dulces, bebidas, conservas, tamano, num, i, max_dulces, mes_max_dulces, suma_bebidas, max_bebidas, mes_max_bebidas, min_bebidas, mes_min_bebidas Como Entero;
	Definir promedio_bebidas Como Real;
	tamano = 12;
	Dimension dulces[tamano];
	Dimension bebidas[tamano];
	Dimension conservas[tamano];
	
	Escribir "Coste de produccion de dulces por mes: ";
	
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer		
		dulces[i] = Aleatorio(200,500);
		bebidas[i] = Aleatorio(200,500);
		conservas[i] = Aleatorio(200,500);
		Escribir dulces[i], " ", bebidas[i], " ", conservas[i];
	FinPara
	
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer
		Si i = 0 O dulces[i] > max_dulces Entonces
			max_dulces = dulces[i];
			mes_max_dulces = i;
		FinSi
	Fin Para
	Escribir "El mes en el que se registró el mayor coste de producción de dulces es ", mes_max_dulces+1, " y el coste fue ", max_dulces, ".";
	
	suma_bebidas = 0;
	
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer
		suma_bebidas = suma_bebidas + bebidas[i];		
	Fin Para
	
	promedio_bebidas = suma_bebidas/tamano;
	Escribir "El promedio anual de los costes de producción de bebidas es ", promedio_bebidas, ".";
	
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer
		Si i = 0 O bebidas[i] > max_bebidas Entonces
			max_bebidas = bebidas[i];
			mes_max_bebidas = i;
		FinSi
		Si i = 0 O bebidas[i] < min_bebidas Entonces
			min_bebidas = bebidas[i];
			mes_min_bebidas = i;
		FinSi
	Fin Para
	Escribir "El mes en el que se registró el mayor coste de producción de bebidas es ", mes_max_bebidas+1, " y el coste fue ", max_bebidas, ".";	
	Escribir "El mes en el que se registró el menor coste de producción de bebidas es ", mes_min_bebidas+1, " y el coste fue ", min_bebidas, ".";
	
	Si dulces[11] == bebidas[11] Y dulces[11] == conservas[11] Entonces
		Escribir "Todos los departamentos tuvieron el mismo coste.";
	SiNo
		Si dulces[11] < bebidas[11] Y dulces[11] < conservas[11] Entonces
			Escribir "El departamento de dulces fue el que tuvo menor costes de producción en diciembre.";
		SiNo
			Si bebidas[11] < conservas[11] Entonces
				Escribir "El departamento de bebidas fue el que tuvo menor costes de producción en diciembre.";
			SiNo
				Escribir "El departamento de conservas fue el que tuvo menor costes de producción en diciembre.";							
			FinSi
		FinSi
	Fin Si
FinAlgoritmo
