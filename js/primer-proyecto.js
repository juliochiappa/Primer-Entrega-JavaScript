// Pedir información del Paciente

let edadPaciente

let nombrePaciente

edadPaciente = parseInt(prompt("Ingrese su edad para poder continuar"));

while (edadPaciente < 18) {
    edadPaciente = parseInt(prompt("La edad minima necesaria para ingresar es 18 años"));
    edadPaciente = parseInt(prompt("Ingrese nuevamente su edad para poder continuar"));
}

nombrePaciente = prompt("Ingrese su nombre");

while (nombrePaciente == "") {
    nombrePaciente = prompt("Ingrese su nombre para continuar");
}

console.log(`Bienvenido ${nombrePaciente}`);

console.log(`Su edad es ${edadPaciente}`);

alert(`¡Nuestro Centro Médico le da la bienvenida " ${nombrePaciente} "!. Su edad es ${edadPaciente} años. Ahora por favor debe seleccionar el día del turno.`);

//Solicitar día y especialidad médica del turno

let diaTurno;

let especialidad; 

diaTurno = parseInt(prompt("Por favor seleccione el día del turno: \n1. Lunes \n2. Martes \n3. Miércoles \n4. Jueves \n5. Viernes"));

while (diaTurno < 1 || diaTurno > 5) {
    alert("Ha ingresado un valor incorrecto");
    diaTurno = parseInt(prompt("Debe ingresar un número en los valores consignados: \n1. Lunes \n2. Martes \n3. Miércoles \n4. Jueves \n5. Viernes"));
}

function turnoMedico(diaTurno) {
    alert(`El día del turno seleccionado es: ${diaTurno}`);
}

switch (diaTurno) {
    case 1:
        diaTurno = "Lunes";
        turnoMedico(diaTurno);
        break;
    case 2:
        diaTurno = "Martes";
        turnoMedico(diaTurno);
        break;
    case 3:
        diaTurno = "Miércoles";
        turnoMedico(diaTurno);
        break;
    case 4:
        diaTurno = "Jueves";
        turnoMedico(diaTurno);
        break;
    case 5:
        diaTurno = "Viernes";
        turnoMedico(diaTurno);
        break;
}

especialidad = parseInt(prompt("Por favor seleccione la especialidad médica: \n1. Médico Clínico \n2. Pediatría \n3. Ginecología \n4. Cardiología"));

while (especialidad < 1 || especialidad > 4) {
    alert("Ha ingresado un valor incorrecto");
    especialidad = parseInt(prompt("Debe ingresar un número en los valores consignados: \n1. Médico Clínico \n2. Pediatría \n3. Ginecología \n4. Cardiología"));
}
function especialidadMedica(especialidad) {
    alert(`La especialidad médica seleccionada es: ${especialidad}`);
}

switch (especialidad) {
    case 1:
        especialidad = "Médico Clínico";
        especialidadMedica(especialidad);
        break;
    case 2:
        especialidad = "Pediatría";
        especialidadMedica(especialidad);
        break;
    case 3:
        especialidad = "Ginecología";
        especialidadMedica(especialidad);
        break;
    case 4:
        especialidad = "Cardiología";
        especialidadMedica(especialidad);
        break;
}

console.log(`Su Turno es el día: ${diaTurno} en la especialidad ${especialidad}`);
alert(`Su Turno quedó agendado para el día: ${diaTurno} en la especialidad ${especialidad}`);