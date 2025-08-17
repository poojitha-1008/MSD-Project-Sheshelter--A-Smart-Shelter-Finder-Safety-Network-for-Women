document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('user');
    const passwordInput = document.getElementById('pass');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    // Initialize user database if not exists
    if (!localStorage.getItem('userDatabase')) {
        const defaultUsers = [
            { username: 'admin', email: 'admin@sheshelter.com', password: 'admin123' },
            { username: 'user1', email: 'user1@sheshelter.com', password: 'password1' }
        ];
        localStorage.setItem('userDatabase', JSON.stringify(defaultUsers));
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        clearErrors();

        const username = usernameInput.value.trim();
        const password = passwordInput.value;
        let isValid = true;

        // Validate inputs
        if (!username) {
            usernameError.textContent = 'Username or email is required';
            isValid = false;
        }

        if (!password) {
            passwordError.textContent = 'Password is required';
            isValid = false;
        }

        if (isValid) {
            const user = authenticateUser(username, password);
            if (user) {
                // Store current user session
                sessionStorage.setItem('currentUser', JSON.stringify(user));
                alert(`Welcome back, ${user.username}!`);
                window.location.href = 'index.html';
            } else {
                passwordError.textContent = 'Invalid username or password';
            }
        }
    });

    function authenticateUser(username, password) {
        const users = JSON.parse(localStorage.getItem('userDatabase'));
        return users.find(user => 
            (user.username === username || user.email === username) && 
            user.password === password
        );
    }

    function clearErrors() {
        usernameError.textContent = '';
        passwordError.textContent = '';
    }

    // Check for existing session
    if (sessionStorage.getItem('currentUser')) {
        const user = JSON.parse(sessionStorage.getItem('currentUser'));
        usernameInput.value = user.username;
    }
});