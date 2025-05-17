// Register page JavaScript

// When the page loads, check if we have users in localStorage
document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([]));
    }
});

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    const retypePassword = document.getElementById('retypePassword').value;
    const agreeTerms = document.getElementById('agreeTerms');

    // Reset error messages and styling
    const fields = ['name', 'regEmail', 'regPassword', 'retypePassword'];
    fields.forEach(field => {
        document.getElementById(field).classList.remove('error');
        document.getElementById(field + 'Error').textContent = '';
    });
    document.getElementById('termsError').textContent = '';

    let isValid = true;

    // Name validation
    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required';
        document.getElementById('name').classList.add('error');
        isValid = false;
    }

    // Email validation
    if (!email) {
        document.getElementById('regEmailError').textContent = 'Email is required';
        document.getElementById('regEmail').classList.add('error');
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('regEmailError').textContent = 'Invalid email format';
        document.getElementById('regEmail').classList.add('error');
        isValid = false;
    }

    // Password validation
    if (!password) {
        document.getElementById('regPasswordError').textContent = 'Password is required';
        document.getElementById('regPassword').classList.add('error');
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById('regPasswordError').textContent = 'Password must be at least 8 characters';
        document.getElementById('regPassword').classList.add('error');
        isValid = false;
    } else if (!/[A-Z]/.test(password)) {
        document.getElementById('regPasswordError').textContent = 'Password must contain at least 1 uppercase letter';
        document.getElementById('regPassword').classList.add('error');
        isValid = false;
    } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        document.getElementById('regPasswordError').textContent = 'Password must contain at least 1 symbol';
        document.getElementById('regPassword').classList.add('error');
        isValid = false;
    }

    // Retype password validation
    if (!retypePassword) {
        document.getElementById('retypePasswordError').textContent = 'Please retype your password';
        document.getElementById('retypePassword').classList.add('error');
        isValid = false;
    } else if (retypePassword !== password) {
        document.getElementById('retypePasswordError').textContent = 'Passwords do not match';
        document.getElementById('retypePassword').classList.add('error');
        isValid = false;
    }

    // Terms agreement validation
    if (!agreeTerms.checked) {
        document.getElementById('termsError').textContent = 'Please agree to the terms and conditions';
        isValid = false;
    }

    // If inputs are valid, check for duplicate email
    if (isValid) {
        const users = JSON.parse(localStorage.getItem('users'));
        const emailExists = users.some(user => user.email === email);

        if (emailExists) {
            document.getElementById('regEmailError').textContent = 'Email already exists';
            document.getElementById('regEmail').classList.add('error');
            return;
        }

        // Save user
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = 'index.html';
    }
});
