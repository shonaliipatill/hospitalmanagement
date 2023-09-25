function openRegistrationForm() {
    document.getElementById('patientRegistrationForm').style.display = 'block';
}

function registerPatient(event) {
    event.preventDefault();

    const patientName = document.getElementById('patientName').value;
    const contact = document.getElementById('contact').value;

    // TODO: Implement storing patient registration data (e.g., send to server)
    alert(`Patient ${patientName} registered successfully!`);
}

function openAppointmentForm() {
    document.getElementById('appointmentForm').style.display = 'block';
}

function scheduleAppointment(event) {
    event.preventDefault();

    const patientName = document.getElementById('patientName').value;
    const appointmentDate = document.getElementById('appointmentDate').value;

    // TODO: Implement scheduling appointment (e.g., send to server)
    alert(`Appointment scheduled successfully for ${patientName} on ${appointmentDate}`);
}