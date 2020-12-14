Algoritmo ej_57
	Definir matriz, curso, alumno, n_cursos, n_alumnos, nota Como Entero;
	n_cursos = 3;
	n_alumnos = 5;
	Dimension matriz[n_cursos,n_alumnos];
	
	Para curso = 0 Hasta n_cursos-1 Con Paso 1 Hacer
		Para alumno = 0 Hasta n_alumnos-1 Con Paso 1 Hacer
			Escribir "Introduzca la nota del alumno ", alumno, " del curso ", curso, ".";
			Leer nota;
			matriz[curso,alumno] = nota;
			Escribir "La nota del alumno ", alumno, " del curso ", curso, " es: ", nota, ".";
		Fin Para
	Fin Para
	
	Para curso = 0 Hasta n_cursos-1 Con Paso 1 Hacer
		Escribir "Curso ", curso+1, ": " Sin Saltar;
		Para alumno = 0 Hasta n_alumnos-1 Con Paso 1 Hacer
			Escribir matriz[curso,alumno], "   " Sin Saltar;
		Fin Para
		Escribir  "";
	Fin Para
FinAlgoritmo
