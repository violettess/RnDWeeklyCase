// Login page JavaScript

// When the page loads, check if we have users in localStorage
document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([]));
    }
});

// Submit form
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Reset error messages and styling
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    
    document.getElementById('email').classList.remove('error');
    document.getElementById('password').classList.remove('error');
    
    // Validate inputs
    let isValid = true;
    
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required';
        document.getElementById('email').classList.add('error');
        isValid = false;
    }
    
    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required';
        document.getElementById('password').classList.add('error');
        isValid = false;
    }
    
    // If inputs are valid, login
    if (isValid) {
        const users = JSON.parse(localStorage.getItem('users'));
        
        // Check if the user exists
        const user = users.find(user => user.email === email && user.password === password);
        
        if (user) {
            // Login successful
            loginForm.style.display = 'none';
            document.getElementById('loginSuccess').style.display = 'block';
        } else {
            // Login failed
            document.getElementById('passwordError').textContent = 'Invalid email or password';
            document.getElementById('password').classList.add('error');
        }
    }
});