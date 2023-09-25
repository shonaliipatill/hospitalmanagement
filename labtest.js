// scripts.js

// Simulate a database or server response with test details
const testDetails = [
    { patientName: "John Doe", testType: "Blood Test", status: "Completed", result: "Normal" },
    { patientName: "Alice Smith", testType: "Urine Analysis", status: "Pending", result: "" },
    // Add more test details as needed
];

// Function to display test details
function displayTestDetails() {
    const testDetailsSection = document.getElementById("testDetails");
    testDetailsSection.innerHTML = "<h2>Test Details</h2>";

    // Create a table to display test details
    const table = document.createElement("table");
    table.classList.add("test-table");

    // Create table headers
    const headers = ["Patient Name", "Test Type", "Status", "Result"];
    const headerRow = document.createElement("tr");
    headers.forEach((headerText) => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Populate the table with test details
    testDetails.forEach((test) => {
        const row = document.createElement("tr");
        const columns = Object.values(test);
        columns.forEach((columnText) => {
            const td = document.createElement("td");
            td.textContent = columnText;
            row.appendChild(td);
        });
        table.appendChild(row);
    });

    // Append the table to the section
    testDetailsSection.appendChild(table);
}

// Function to toggle the display of test results
function toggleTestResults() {
    const testResultsSection = document.getElementById("testResults");
    testResultsSection.style.display = testResultsSection.style.display === "none" ? "block" : "none";
}

// Event listener for form submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Simulate processing and display test details
        setTimeout(() => {
            displayTestDetails();
            toggleTestResults();
        }, 1000); // Simulate a 1-second delay
    });
});
