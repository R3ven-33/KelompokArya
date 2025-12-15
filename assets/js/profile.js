// Profile page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // The authentication check is now handled globally in script.js
    // Only initialize page-specific functionality here

    // Sample user data
    const userData = {
        firstName: "Ahmad",
        lastName: "Jaelani",
        email: "ahmad.jaelani@example.com",
        phone: "081234567890",
        address: "Jl. Raya Bogor No.123, Jakarta Timur",
        birthDate: "1995-05-15",
        gender: "male"
    };

    // Update profile info
    document.getElementById('profileName').textContent = `${userData.firstName} ${userData.lastName}`;
    document.getElementById('profileEmail').textContent = userData.email;

    // Pre-fill form with user data
    document.getElementById('fname').value = userData.firstName;
    document.getElementById('lname').value = userData.lastName;
    document.getElementById('email').value = userData.email;
    document.getElementById('phone').value = userData.phone;
    document.getElementById('address').value = userData.address;
    document.getElementById('birthDate').value = userData.birthDate;
    document.getElementById('gender').value = userData.gender;

    // Update form when submitted
    document.getElementById('profileForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            firstName: document.getElementById('fname').value,
            lastName: document.getElementById('lname').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            birthDate: document.getElementById('birthDate').value,
            gender: document.getElementById('gender').value
        };

        // In a real application, this would send the updated data to the server
        alert('Profil berhasil diperbarui!');

        // Update display
        document.getElementById('profileName').textContent = `${formData.firstName} ${formData.lastName}`;
        document.getElementById('profileEmail').textContent = formData.email;
    });
});