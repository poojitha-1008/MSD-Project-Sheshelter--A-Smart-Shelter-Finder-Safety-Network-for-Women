document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const usernameInput = document.getElementById('regUsername');
    const emailInput = document.getElementById('regEmail');
    const passwordInput = document.getElementById('regPassword');
    const confirmPasswordInput = document.getElementById('regConfirmPassword');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Initialize user database if not exists
    if (!localStorage.getItem('userDatabase')) {
        localStorage.setItem('userDatabase', JSON.stringify([]));
    }

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        clearErrors();

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        let isValid = true;

        // Validate inputs
        if (!username) {
            usernameError.textContent = 'Username is required';
            isValid = false;
        } else if (username.length < 3) {
            usernameError.textContent = 'Username must be at least 3 characters';
            isValid = false;
        }

        if (!email) {
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(email)) {
            emailError.textContent = 'Please enter a valid email';
            isValid = false;
        }

        if (!password) {
            passwordError.textContent = 'Password is required';
            isValid = false;
        } else if (password.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters';
            isValid = false;
        }

        if (password !== confirmPassword) {
            confirmPasswordError.textContent = 'Passwords do not match';
            isValid = false;
        }

        if (isValid) {
            const users = JSON.parse(localStorage.getItem('userDatabase'));
            
            // Check if email already exists
            if (users.some(user => user.email === email)) {
                emailError.textContent = 'This email is already registered';
                return;
            }

            // Check if username already exists
            if (users.some(user => user.username === username)) {
                usernameError.textContent = 'This username is already taken';
                return;
            }

            // Create new user
            const newUser = { username, email, password };
            users.push(newUser);
            localStorage.setItem('userDatabase', JSON.stringify(users));

            // Store current user session
            sessionStorage.setItem('currentUser', JSON.stringify(newUser));
            
            alert(`Registration successful! Welcome ${username}`);
            window.location.href = 'index.html';
        }
    });

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function clearErrors() {
        usernameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';
    }

    // Real-time password matching
    confirmPasswordInput.addEventListener('input', function() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.textContent = 'Passwords do not match';
        } else {
            confirmPasswordError.textContent = '';
        }
    });
});