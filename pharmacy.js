function openPharmacyModal() {
    document.getElementById('pharmacyModal').style.display = 'block';
}

function closePharmacyModal() {
    document.getElementById('pharmacyModal').style.display = 'none';
}

function submitPharmacyOrder(event) {
    event.preventDefault();

    const medicineName = document.getElementById('medicineName').value;
    const quantity = document.getElementById('quantity').value;

    // TODO: Implement logic to process the pharmacy order (e.g., send to server)
    alert(`Order placed for ${quantity} ${medicineName}(s).`);
}