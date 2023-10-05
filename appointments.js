let appointments = [];
// Guardar un valor en localStorage

export const addAppointments = (appointment) => {
  //localStorage.removeItem('miData');

  const cardContainer = document.querySelector(".citas-lista");
  appointments = getAppointments();

  appointments.push(appointment);
  // Obtener un valor de localStorage
  //  const miDataJson = localStorage.getItem('miData');
  //  const miData = JSON.parse(miDataJson);

  //  if (miData === null) {
  //    appointments = [appointment];
  //  } else {
  //    appointments = [...miData, appointment];
  //  }

  //  const appointmentsJSON = JSON.stringify(appointments);
  //  localStorage.setItem('miData', appointmentsJSON);

  //  console.log(miData);
  cardContainer.innerHTML = "";

for (let i = 0; i < appointments.length; i++) {
  const container = document.createElement("div");
  container.setAttribute("class", "card");

  const h3Nombre = document.createElement("h3");
  h3Nombre.textContent = appointments[i].name;

  const appointmentDate = new Date(appointments[i].date);

  const pDate = document.createElement("p");

  const formattedDate = `${appointmentDate.toLocaleDateString()} ${appointmentDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })}`;

  pDate.textContent = `Fecha: ${formattedDate}`;

  container.appendChild(h3Nombre);
  container.appendChild(pDate);
  cardContainer.appendChild(container);
}
};

export const getAppointments = () => {
  return appointments;
};
