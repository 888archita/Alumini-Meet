// script.js
function showEditForm() {
    document.getElementById('edit-modal').style.display = 'block';
}

function hideEditForm() {
    document.getElementById('edit-modal').style.display = 'none';
}

function saveProfile() {
    // In a real application, this would send data to the server via AJAX or form submission.
    // For demo purposes, we'll just close the modal and alert success.
    alert('Profile updated successfully! (Demo)');
    hideEditForm();
    // Note: To make it secure, ensure server-side authentication and data validation.
    // Profile data is linked to the logged-in user's account via session or JWT in a real backend.
}

// Close modal if clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('edit-modal');
    if (event.target === modal) {
        hideEditForm();
    }
}