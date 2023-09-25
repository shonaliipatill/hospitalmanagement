// scripts.js

// Sample data for patient and doctor information (replace with real data)
const patientInfo = {
    name: "John Doe",
    dob: "January 1, 1980",
    contact: "johndoe@example.com",
    // Add more patient details as needed
};

const doctorInfo = {
    name: "Dr. Smith",
    specialization: "Cardiologist",
    contact: "drsmith@example.com",
    // Add more doctor details as needed
};

// Function to display patient information
function displayPatientInfo() {
    const patientInfoSection = document.getElementById("patientInfo");
    // Update the HTML content to display patient details
    patientInfoSection.innerHTML = `
        <h2>Patient Information</h2>
        <p>Name: ${patientInfo.name}</p>
        <p>Date of Birth: ${patientInfo.dob}</p>
        <p>Contact: ${patientInfo.contact}</p>
        <!-- Add more patient details here -->
    `;
}

// Function to display doctor information
function displayDoctorInfo() {
    const doctorInfoSection = document.getElementById("doctorInfo");
    // Update the HTML content to display doctor details
    doctorInfoSection.innerHTML = `
        <h2>Doctor Information</h2>
        <p>Name: ${doctorInfo.name}</p>
        <p>Specialization: ${doctorInfo.specialization}</p>
        <p>Contact: ${doctorInfo.contact}</p>
        <!-- Add more doctor details here -->
    `;
}

// Function to toggle the display of the live chat section
function toggleLiveChat() {
    const liveChatSection = document.getElementById("liveChat");
    liveChatSection.style.display = liveChatSection.style.display === "none" ? "block" : "none";
}

// Event listener for displaying patient and doctor information
document.addEventListener("DOMContentLoaded", () => {
    displayPatientInfo();
    displayDoctorInfo();
});

// Event listener for the live chat toggle button
const chatToggleButton = document.getElementById("chatToggleButton");
if (chatToggleButton) {
    chatToggleButton.addEventListener("click", toggleLiveChat);
}
