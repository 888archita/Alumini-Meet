function showForm(type) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(tab => {
        if (tab.textContent.trim() === (type === 'login' ? 'Login' : 'Sign Up')) {
            tab.classList.add('active');
        }
    })
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.add('hidden')
    if (type === 'login') {
        document.getElementById('login-form').classList.remove('hidden');
    } else {
        document.getElementById('signup-form').classList.remove('hidden');
    }
}

function handleLogin(event) {
    event.preventDefault();
    alert('Login functionality - connect to your backend here!');
    // Add actual login logic (e.g., fetch/API call)
}

function handleSignup(event) {
    event.preventDefault();
    const role = document.getElementById('role').value;
    alert(`Sign Up as ${role.charAt(0).toUpperCase() + role.slice(1)} - connect to backend!`);
    // Add actual signup logic
}