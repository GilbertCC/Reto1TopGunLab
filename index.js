import { addAppointments } from "./appointments.js";

(async () => {
  // Obtener el formulario por su ID
  const form = document.querySelector("#cita-form");

  // Escuchar el evento submit del formulario
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores de los campos de entrada
    const nombreInput = document.querySelector("#nombre");
    const fechaInput = document.querySelector("#fecha");

    // Acceder a los valores ingresados
    const nombreValor = nombreInput.value;
    const fechaValor = fechaInput.value;

    nombreInput.value = "";
    fechaInput.value = "";
    addAppointments({ name: nombreValor, date: fechaValor });
  });
})();
