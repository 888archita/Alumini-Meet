// Get the form and message element
const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from submitting normally

    // Get values from the form
    const userType = document.getElementById('userType').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple check (in real app, this would connect to a server)
    if (userType && email && password) {
        message.textContent = `Welcome, ${userType}! Logging you in...`;
        message.style.color = 'green';

        // Optional: Reset form after 2 seconds (just for demo)
        setTimeout(() => {
            form.reset();
            message.textContent = '';
        }, 2000);
    } else {
        message.textContent = 'Please fill all fields.';
        message.style.color = 'red';
    }
});