// Patient Registration Form Handling
document.querySelector('#registration form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form input values
    const firstName = document.querySelector('#registration input[name="first_name"]').value;
    const lastName = document.querySelector('#registration input[name="last_name"]').value;
    const email = document.querySelector('#registration input[name="email"]').value;

    // Perform validation here (e.g., check required fields, validate email)

    // If validation is successful, you can send data to the server
    // Example: Send data using fetch API
    const formData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
    };

    fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        // Handle the response from the server (e.g., show success message)
    })
    .catch(error => {
        // Handle any errors that occur during the request
    });
});

// Lab Tests Module
// Add JavaScript code for handling lab tests module here

// Outpatient Module
// Add JavaScript code for handling outpatient module here

// Inpatient Module
// Add JavaScript code for handling inpatient module here

// Consultation Module
// Add JavaScript code for handling consultation module here

// Pharmacy Module
// Add JavaScript code for handling pharmacy module here
