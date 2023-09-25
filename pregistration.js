document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const patientName = document.getElementById('patient_name').value;
    const appointmentDate = document.getElementById('appointment_date').value;

    // TODO: Send patient information and appointment to the server for registration

    alert('Patient registered successfully!');
});